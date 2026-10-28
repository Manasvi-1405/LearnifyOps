import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { navItems, partnerUniversities, universityPath } from "../src/data/siteContent.js";
import { pageDescriptions } from "../src/data/seoMetadata.js";
import { assetUrls, snapshot, tags } from "./seo-html.mjs";

const origin = "https://learnifyops.com";
const routes = [...navItems.map(([, path]) => path), ...partnerUniversities.map(universityPath)];
const baseline = JSON.parse(readFileSync(new URL("./seo-baseline.json", import.meta.url), "utf8"));
const manifest = JSON.parse(readFileSync(".next/prerender-manifest.json", "utf8"));
const assets = new Set();
const descriptions = new Set();
const args = process.argv.slice(2);
const baseIndex = args.indexOf("--base-url");
const base = baseIndex === -1 ? null : new URL(args[baseIndex + 1]);
assert.ok(args.every((arg, index) => ["--base-url", "--redirects"].includes(arg) || index === baseIndex + 1 && baseIndex !== -1), "Usage: npm run verify:seo -- [--base-url http://127.0.0.1:5174] [--redirects]");

assert.equal(routes.length, 15, "Expected exactly 15 public routes");
assert.equal(new Set(routes).size, 15, "Duplicate public route");
assert.deepEqual([...routes].sort(), Object.keys(baseline.routes).sort(), "Public routes changed");
assert.deepEqual(Object.keys(pageDescriptions).sort(), [...routes].sort(), "SEO map must cover every public route exactly");
assert.deepEqual(Object.keys(manifest.routes).filter((route) => !route.startsWith("/_")).sort(), [...routes].sort(), "Unexpected or missing prerendered public route");
assert.equal(manifest.dynamicRoutes["/[...slug]"].fallback, false, "Unknown catch-all routes must remain 404");

function verifyHtml(html, route) {
  const head = html.match(/<head\b[^>]*>([\s\S]*?)<\/head>/i)?.[1] || "";
  const canonical = tags(html, "link").filter((tag) => tag.rel?.split(/\s+/).includes("canonical"));
  assert.equal(canonical.length, 1, `Expected exactly one canonical: ${route}`);
  assert.equal(canonical[0].href, `${origin}${route}`, `Incorrect canonical: ${route}`);
  assert.equal(tags(head, "link").filter((tag) => tag.rel === "canonical").length, 1, `Canonical must be in the initial head: ${route}`);
  const description = tags(html, "meta").filter((tag) => tag.name?.toLowerCase() === "description");
  assert.equal(description.length, 1, `Expected exactly one meta description: ${route}`);
  assert.ok(description[0].content?.trim(), `Empty description: ${route}`);
  assert.equal(description[0].content, pageDescriptions[route], `Incorrect description: ${route}`);
  assert.equal(tags(head, "meta").filter((tag) => tag.name === "description").length, 1, `Description must be in the initial head: ${route}`);
  assert.equal(tags(html, "title").length, 1, `Expected exactly one title: ${route}`);
  assert.match(html, /<main id="main">/, `Missing SSR page: ${route}`);
  const actual = snapshot(html);
  assert.ok(actual.h1s.length > 0 && actual.h1s.every((h1) => h1.trim()), `Missing H1: ${route}`);
  assert.deepEqual(actual, { ...baseline.routes[route], ...baseline.shared }, `Original title, H1, visible HTML, shared metadata or JSON-LD changed: ${route}`);
  assert.ok(actual.jsonLd.some((entry) => entry["@type"] === "Organization" && entry.name === "LearnifyOps"), `Missing Organization JSON-LD: ${route}`);
  for (const tag of tags(html, "meta").filter((tag) => /^(robots|googlebot|bingbot)$/i.test(tag.name || ""))) {
    assert.doesNotMatch(tag.content || "", /\b(noindex|none)\b/i, `Unexpected noindex: ${route}`);
  }
  return description[0].content;
}

for (const route of routes) {
  const file = route === "/" ? "index.html" : `${route.slice(1)}.html`;
  const html = readFileSync(join(".next", "server", "app", file), "utf8");
  const description = verifyHtml(html, route);
  assert.ok(!descriptions.has(description.toLowerCase()), `Duplicate description: ${route}`);
  descriptions.add(description.toLowerCase());
  for (const asset of assetUrls(html, route)) assets.add(asset);
}
for (const asset of assets) {
  const file = asset.startsWith("/_next/static/")
    ? join(".next", decodeURIComponent(asset.slice("/_next/".length)))
    : join("public", decodeURIComponent(asset));
  assert.ok(existsSync(file), `Missing built/public asset: ${asset}`);
}
const notFoundHtml = readFileSync(".next/server/app/_not-found.html", "utf8");
assert.equal(tags(notFoundHtml, "link").filter((tag) => tag.rel === "canonical").length, 0, "404 must not inherit a public canonical");
assert.ok(tags(notFoundHtml, "meta").some((tag) => tag.name === "robots" && /\bnoindex\b/.test(tag.content)), "404 should retain noindex");
console.log(`PASS: ${routes.length} built routes; exact canonicals; distinct descriptions; unchanged titles, H1s, visible HTML, shared metadata and JSON-LD; ${assets.size} local assets; static 404 configuration.`);

async function get(path, options = {}) {
  return fetch(new URL(path, base), { redirect: "manual", signal: AbortSignal.timeout(15000), ...options });
}
if (base) {
  for (const route of routes) {
    const response = await get(route);
    assert.equal(response.status, 200, `Unexpected HTTP status: ${route}`);
    assert.doesNotMatch(response.headers.get("x-robots-tag") || "", /\b(noindex|none)\b/i, `Unexpected HTTP noindex: ${route}`);
    verifyHtml(await response.text(), route);
  }
  const query = await get("/program?source=test");
  assert.equal(query.status, 200);
  verifyHtml(await query.text(), "/program");
  for (const route of ["/nonexistent-test-route", "/universities/nonexistent-test-route", "/nonexistent-test-route/nested"]) {
    const response = await get(route);
    assert.equal(response.status, 404, `Unknown route must return HTTP 404: ${route}`);
    assert.equal(tags(await response.text(), "link").filter((tag) => tag.rel === "canonical").length, 0, `Unknown route has a canonical: ${route}`);
  }
  for (const asset of assets) {
    assert.equal((await get(asset, { method: "HEAD" })).status, 200, `Asset does not resolve over HTTP: ${asset}`);
  }
  console.log(`PASS: raw HTTP HTML for all 15 routes and query variant; 3 genuine HTTP 404s; ${assets.size} HTTP asset checks at ${base.origin}.`);
} else {
  console.log("HTTP checks not run. Start the production server, then pass --base-url http://127.0.0.1:5174.");
}

if (args.includes("--redirects")) {
  assert.equal(base?.origin, origin, "Run production redirects only after deployment with --base-url https://learnifyops.com --redirects");
  for (const host of ["http://learnifyops.com", "http://www.learnifyops.com", "https://www.learnifyops.com"]) {
    for (const path of ["/", "/program", "/program?source=test"]) {
      const response = await fetch(`${host}${path}`, { method: "HEAD", redirect: "manual", signal: AbortSignal.timeout(15000) });
      assert.equal(response.status, 301, `Expected permanent redirect: ${host}${path}`);
      assert.equal(response.headers.get("location"), `${origin}${path}`, `Path/query not preserved: ${host}${path}`);
    }
  }
  console.log("PASS: production HTTP/www redirects use 301 and preserve paths and query strings.");
}

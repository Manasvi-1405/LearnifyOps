import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { getUniversityByPath, navItems, partnerUniversities, universityPath } from "../src/data/siteContent.js";

const routePaths = [
  ...navItems.map(([, path]) => path),
  ...partnerUniversities.map(universityPath)
];

let assetCount = 0;
for (const route of routePaths) {
  const filename = route === "/" ? "index.html" : `${route.slice(1)}.html`;
  const htmlPath = join(".next", "server", "app", filename);
  assert.ok(existsSync(htmlPath), `Missing prerendered route: ${route}`);

  const html = readFileSync(htmlPath, "utf8");
  const label = getUniversityByPath(route)?.name || navItems.find(([, path]) => path === route)?.[0];
  const expectedTitle = route === "/"
    ? "Doctor of Business Administration (DBA) | LearnifyOps"
    : `${label} | LearnifyOps`;

  assert.ok(html.includes(`<title>${expectedTitle}</title>`), `Unexpected page title: ${route}`);
  assert.match(html, /<main id="main">/, `Missing main element: ${route}`);
  assert.match(html, /<h1\b/, `Missing server-rendered H1: ${route}`);
  assert.ok(html.length > 20000, `Unexpectedly empty rendered HTML: ${route}`);

  for (const match of html.matchAll(/(?:src|href)="(\/assets\/[^"?]+)(?:\?[^"]*)?"/g)) {
    const assetPath = join("public", decodeURIComponent(match[1]));
    assert.ok(existsSync(assetPath), `Missing asset ${match[1]} on route ${route}`);
    assetCount++;
  }
}

assert.ok(existsSync(join(".next", "server", "app", "_not-found.html")), "Missing Next.js 404 page");

console.log(`Verified ${routePaths.length} prerendered routes, their original titles and H1s, and ${assetCount} asset references.`);
console.log("All expected public pages contain server-rendered content.");

import { createHash } from "node:crypto";

// Next.js emits quoted attributes. Read actual HTML tags, excluding RSC payloads.
export function tags(html, name) {
  const markup = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");
  return [...markup.matchAll(new RegExp(`<${name}\\b[^>]*>`, "gi"))].map(([tag]) =>
    Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(([, key, value]) => [key.toLowerCase(), decode(value)]))
  );
}

export function decode(text) {
  return text.replace(/&(?:amp|quot|apos|lt|gt|#\d+|#x[\da-f]+);/gi, (entity) => {
    const named = { "&amp;": "&", "&quot;": '"', "&apos;": "'", "&lt;": "<", "&gt;": ">" };
    return named[entity] ?? String.fromCodePoint(entity[2].toLowerCase() === "x"
      ? parseInt(entity.slice(3, -1), 16) : Number(entity.slice(2, -1)));
  });
}

export function snapshot(html) {
  const body = html.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i)?.[1];
  if (body === undefined) throw new Error("Missing HTML body");
  // Build-specific bootstrap/RSC scripts are not user-facing page markup.
  const visibleMarkup = body.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");
  return {
    title: decode(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] || ""),
    h1s: [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map(([, text]) => text),
    bodySha256: createHash("sha256").update(visibleMarkup).digest("hex"),
    preservedMetadata: tags(html, "meta").filter((tag) => tag.name !== "description"),
    preservedLinks: tags(html, "link").filter((tag) => !["canonical", "preload", "modulepreload", "stylesheet"].includes(tag.rel)),
    jsonLd: [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)].map(([, json]) => JSON.parse(json))
  };
}

export function assetUrls(html, route) {
  const references = [
    ...tags(html, "img").map((tag) => tag.src),
    // Scripts were deliberately excluded by tags(), so read external script openings separately.
    ...[...html.matchAll(/<script\b[^>]*\bsrc="([^"]+)"/gi)].map(([, src]) => decode(src)),
    ...tags(html, "link").filter((tag) => ["stylesheet", "preload", "modulepreload", "icon", "apple-touch-icon", "manifest"].includes(tag.rel)).map((tag) => tag.href)
  ];
  return [...new Set(references.filter(Boolean).map((reference) => new URL(reference, `https://learnifyops.com${route}`))
    .filter((url) => url.origin === "https://learnifyops.com").map((url) => url.pathname))];
}

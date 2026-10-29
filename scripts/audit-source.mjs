import { createHash } from "node:crypto";

// Git checkouts can use CRLF on Windows and LF on Ubuntu. Compare text content
// portably while retaining byte-exact hashes for binary image assets. The two
// ASCII PDF assets are also treated as text by this repository's Git checkout.
export function sourceHash(path, data) {
  const text = /\.(?:jsx?|css|mjs|json|txt|xml|svg|webmanifest)$/.test(path)
    || path.endsWith(".pdf") && !data.includes(0);
  // latin1 round-trips every byte; only CRLF changes, including PDF header bytes.
  const value = text ? Buffer.from(data.toString("latin1").replace(/\r\n/g, "\n"), "latin1") : data;
  return createHash("sha256").update(value).digest("hex");
}

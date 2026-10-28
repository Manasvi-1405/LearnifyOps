# LearnifyOps frontend migration

This repository now uses **Next.js App Router** instead of the Vite entry point.
All existing user-facing page components, copy, images, CSS styles, animation classes,
and public route paths have been retained. The separate Express/MongoDB API in
`server/` has not been modified.

## Run locally

```bash
npm install
npm run dev:full
```

- Next.js frontend: `http://localhost:5174`
- Existing Express API: `http://127.0.0.1:5001`
- The enquiry forms still POST to `/api/enquiries`, proxied to Express.
- MongoDB and the backend environment must be available for actual enquiry saving.

## Build and verify

```bash
npm run build
npm run verify:migration
npm run start
```

The build generates HTML for the homepage, eight public navigation routes,
and six university detail pages. Unknown paths receive HTTP 404 from Next.js.

## Deployment

This uses the **Next.js Node server** deployment mode, rather than Vite's
`dist/` static hosting. Deploy the frontend with `npm run build` and
`npm run start`, and keep the existing Express backend running separately.
`next.config.mjs` proxies `/api/*` to `API_PROXY_TARGET` (default:
`http://127.0.0.1:5001`). Set it to the internal backend URL in production.

Maintain the existing public URLs, asset paths and HTTPS domain routing.
The `public/robots.txt` and `public/sitemap.xml` are unchanged.

## Implementation notes

- `app/layout.jsx`: global CSS, fonts, original organisation JSON-LD and metadata.
- `app/page.jsx`: homepage.
- `app/[...slug]/page.jsx`: prerendered existing routes and page titles.
- `src/main.jsx`: same site UI, now a Next.js client boundary that can be server-rendered.
- `src/views/`: former `src/pages/`, renamed to avoid colliding with Next.js routing.
- `src/hooks/useRoute.js`: initial route is injected from Next.js; client navigation remains unchanged.
- `postcss.config.mjs`: Tailwind v4 via PostCSS instead of the Vite plugin.

No editorial, branding, layout or styling changes were made as part of the migration.

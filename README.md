# SpeakX comparison hub (`/vs`)

A Next.js (App Router, TypeScript, Tailwind v4) implementation of the SpeakX comparison hub:
`/vs`, six `/vs/speakx-vs-*` pages and `/press`. Every page is statically rendered, so all
comparison text is in the HTML for search engines and AI crawlers.

## Run locally

```bash
npm install
cp .env.example .env.local   # fill in the install link and analytics ids
npm run dev                  # http://localhost:3000/vs
```

```bash
npm run build && npm start   # production build + server
npm run lint                 # eslint
npm run check                # typecheck + link/content QA script
```

## Where things live

| Path | Purpose |
|---|---|
| `src/data/products.ts` | Central competitor research dataset (facts, sources, verification status) |
| `src/data/comparisons/*.ts` | One file per comparison page: all copy, FAQs, sources, last-verified date |
| `src/data/hub.ts` | `/vs` hub copy: differentiators, goals, FAQs, matrix columns |
| `src/data/press.ts`, `awards.ts`, `investors.ts` | Press inventory, award register, investor facts (labelled by type and verification) |
| `src/lib/types.ts` | Data model shared by all of the above |
| `src/lib/site.ts` | Canonical origin, existing SpeakX URLs, install link, analytics ids |
| `src/lib/analytics.ts` | Event taxonomy (`vs_page_view`, `competitor_card_click`, `cta_click`, ...) |
| `src/lib/schema.ts` | Organization / WebSite / MobileApplication JSON-LD helpers |
| `src/app/vs/page.tsx` | Hub page |
| `src/app/vs/[slug]/page.tsx` | Comparison page template (data-driven) |
| `src/app/press/page.tsx` | Press, awards, founder and investors |
| `src/app/sitemap.ts`, `robots.ts` | Generated sitemap and robots |
| `research/` | Research registers: competitors, media, awards, backlinks, keyword map, GEO audit, site audit |

## Adding a competitor

1. Add the product to `src/data/products.ts` with sources for every fact (use `"not-verified"` rather than guessing).
2. Create `src/data/comparisons/speakx-vs-<slug>.ts` following an existing file.
3. Add the entry to `comparisonIndex` and `loaders` in `src/data/comparisons/index.ts`.
4. Drop the competitor logo into `public/logos/`.
5. Run `npm run check`.

## Deploying into speakx.ai

speakx.ai is already a Next.js site served from `https://speakx.ai` (non-www). Preferred integration:
copy `src/app/vs`, `src/app/press`, `src/components`, `src/data`, `src/lib` and `public/logos|images`
into the production repo, merge `globals.css` tokens with the existing theme, and add the `/vs` and
`/press` URLs to the production sitemap. If deployed as a separate app, reverse-proxy
`https://speakx.ai/vs*` and `https://speakx.ai/press*` to it so the pages stay on the canonical host.
Do not deploy to speakx.com or speakx.in; those hosts should 301 to speakx.ai.

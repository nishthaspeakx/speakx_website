# SpeakX comparison hub: deliverables index (12 Oct 2026)

Everything below was produced in this session. Paths are relative to this folder.

## A. Working website (Next.js 16, TypeScript, Tailwind v4): `speakx-vs/`

| Deliverable | Where |
|---|---|
| `/vs` comparison hub (hero, six cards, quick matrix, differentiators, goals, coverage, FAQ, final CTA, sticky mobile CTA) | `speakx-vs/src/app/vs/page.tsx`, `speakx-vs/src/data/hub.ts` |
| Six comparison pages (`/vs/speakx-vs-supernova`, `-mysivi`, `-duolingo`, `-stimuler`, `-elsa-speak`, `-speak`), each with the 19-part architecture from the brief | template `speakx-vs/src/app/vs/[slug]/page.tsx`; copy in `speakx-vs/src/data/comparisons/*.ts` |
| Press, awards, founder and investors page (`/press`) | `speakx-vs/src/app/press/page.tsx` |
| Reusable press + awards component used on every page | `speakx-vs/src/components/PressStrip.tsx` |
| Competitor research dataset (generated from research JSON, with sources and verification status per fact) | `speakx-vs/src/data/products.ts` (generator: `scripts/build-products.py`) |
| Media, awards and investor datasets | `speakx-vs/src/data/press.ts` (generator: `scripts/build-press.py`), `awards.ts`, `investors.ts` |
| Technical SEO: unique titles and metas, non-www canonicals, Open Graph + generated OG images, sitemap, robots, breadcrumbs, JSON-LD (Organization, WebSite, MobileApplication, CollectionPage, Article, BreadcrumbList, FAQPage), semantic HTML, alt text, accessible components, static rendering | `speakx-vs/src/app/*`, `speakx-vs/src/lib/schema.ts` |
| Analytics event taxonomy and tracked CTAs (Singular install link with UTM pass-through, GA4 id) | `speakx-vs/src/lib/analytics.ts`, `TrackedLink.tsx`, `research/analytics-and-conversion-spec.md` |
| QA crawler (status, metadata lengths, canonical, H1 count, JSON-LD validity, alt text, forbidden claims, duplicate copy, sitemap coverage, internal + external links) | `speakx-vs/scripts/qa.mjs`, report `speakx-vs/qa-report.json` |
| Run and deploy instructions | `speakx-vs/README.md`, `speakx-vs/.env.example` |

## B. Research registers: `research/`

| Register | Files |
|---|---|
| Site audit (domains, canonical conflict, tech stack, analytics ids, brand tokens, install link, all 43 sitemap URLs incl. 18 blog posts, Play/App Store listings, reference-site IA, 15 issues) | `site-audit.json`, `site-audit.md`, `assets/` |
| Competitor research (7 products x 33 dimensions, sources, confidence, open questions) | `competitors.json`, `competitors.md` |
| SpeakX media inventory (94 items, labelled by link type and verification; funding and milestones) | `media.json`, `media.md` |
| Award verification register (12 claims: 3 verified on organiser pages, 7 claimed-only, 2 conflicting) and investor register | `awards.json`, `awards.md`, `investors.json`, `investors.md` |
| Backlink acquisition database (81 opportunities, P1 to P4; unlinked-mention recovery; 5 outreach drafts marked NOT SENT) | `backlinks.json`, `backlinks.csv`, `backlinks.md` |
| Keyword strategy and page-by-page SEO map (no cannibalisation with the existing listicle) | `keyword-map.json`, `keyword-map.md` |
| GEO visibility audit and measurement plan (12-prompt test set, baseline, crawler access, schema and llms.txt recommendations) | `geo-audit.json`, `geo-audit.md` |
| Internal linking map (generated from the built pages) plus recommended links on existing speakx.ai pages | `internal-link-map.csv`, `internal-link-map.md` |
| Analytics and conversion specification, event taxonomy, A/B experiment plan | `analytics-and-conversion-spec.md` |
| Technical QA report and open issues | `qa-report.md` |
| Shared rules used by every writer and researcher | `SHARED-CONTEXT.md`, `WRITER-BRIEF.md` |

## C. Earlier content-team documents (inputs)

`SpeakX-Backlinks-Next-Steps.docx` and `SpeakX-Platform-Blog-Briefs.docx` (in Downloads) remain the operating plan for the five guest-post and listing placements; the backlink register above extends them with 81 further opportunities.

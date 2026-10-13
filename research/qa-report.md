# Technical QA report: SpeakX comparison hub (12 Oct 2026)

Checked against the production build (`next build` + `next start`) on localhost. Live deployment was not performed (no credentials); see `speakx-vs/README.md` for integration steps.

## 1. Pages and metadata (crawler: `speakx-vs/scripts/qa.mjs`)

| Route | Status | Words | Title | Meta | Canonical | H1 | JSON-LD |
|---|---|---|---|---|---|---|---|
| /vs | 200 | 2,025 | 47 chars | 146 chars | https://speakx.ai/vs | 1 | Organization, WebSite, MobileApplication, CollectionPage, FAQPage, BreadcrumbList |
| /vs/speakx-vs-supernova | 200 | 3,697 | 51 | 153 | non-www | 1 | Organization, WebSite, Article, FAQPage, BreadcrumbList |
| /vs/speakx-vs-mysivi | 200 | 3,598 | 54 | 146 | non-www | 1 | same |
| /vs/speakx-vs-duolingo | 200 | 3,638 | 48 | 154 | non-www | 1 | same |
| /vs/speakx-vs-stimuler | 200 | 3,652 | 53 | 146 | non-www | 1 | same |
| /vs/speakx-vs-elsa-speak | 200 | 3,693 | 52 | 158 | non-www | 1 | same |
| /vs/speakx-vs-speak | 200 | 4,057 | 45 | 148 | non-www | 1 | same |
| /press | 200 | 2,386 | 45 | 151 | non-www | 1 | Organization (verified awards only), WebSite, BreadcrumbList |

All JSON-LD parses. No `<img>` without alt. All six comparison pages exist, are in `/sitemap.xml`, and `/robots.txt` references the sitemap. Open Graph images are generated per page (`/vs/opengraph-image`, `/vs/<slug>/opengraph-image`, 1200x630 PNG, 200).

## 2. Links

- Internal links: 8 distinct destinations, all 200. Every comparison page is reachable from the hub (cards, matrix headers, footer) and links to the hub, sibling comparisons, SpeakX Premium, the long-form apps guide and topic-matched blog posts (all blog URLs verified 200 in the site audit).
- External links: 111 distinct URLs verified with HEAD/GET. All return < 400 except `https://www.mysivi.ai/` (HTTP 429 bot checkpoint; the site is live in a browser; kept as the official source with a note).
- Two BW Disrupt articles and one ELSA help-centre article that returned 403/404 to the checker were removed from the rendered pages and kept in the research registers.
- Install CTA: Singular smart link `https://speakx.sng.link/Ed28z/npfq/4alj` with UTM parameters appended; Play and App Store links verified 200.

## 3. Content rules

- Crawler scan for forbidden claims (₹199/month, "14 Indian languages", a SpeakX "free trial", 4.6+ rating for SpeakX, kids positioning, former brand name, 2 million monthly learners, 2 lakh subscribers, 95% accuracy, SpeakEasy/English Seekho, "#1"/"most downloaded" about SpeakX, the 404 Hindi blog URL): 0 hits on rendered pages.
- Duplicate-copy check across the six comparison pages: 0 duplicated paragraphs (template boilerplate that appears on all six pages is excluded by design).
- Each page states where the competitor may be the better fit (3 to 5 items), marks unverified features as "not verified", dates every price, and lists its sources with the last-verified date.
- Press summaries that repeated company-stated subscriber or revenue figures were rewritten; sponsored and branded items are labelled by type and never shown as editorial; awards render as verified only when an organiser page confirms them.

## 4. Lighthouse (mobile emulation, production build, localhost)

| Page | Performance | Accessibility | Best practices | SEO | LCP | CLS |
|---|---|---|---|---|---|---|
| /vs | 97 | 100 | 100 | 100 | 2.6 s | 0 |
| /vs/speakx-vs-duolingo | 98 | 100 | 100 | 100 | 2.5 s | 0 |
| /press | 98 | 96 → 100 after contrast fix | 100 | 100 | 2.3 s | 0 |

Fixes applied during QA: sticky mobile CTA made `inert` while hidden; primary buttons and eyebrow text switched to the darker brand orange (#a53a06) to pass AA contrast on white and on the soft grey surface; hero fade-in removed and hero image given responsive `sizes` to bring LCP under 2.6 s. Raw reports: `research/lighthouse/*.json`.

## 5. Responsiveness and accessibility

- Desktop, tablet and mobile layouts checked in the built-in browser (375 px viewport screenshots of the hub and a comparison page). Tables scroll horizontally with a sticky first column; cards stack to one column; the sticky install bar appears on mobile after the hero.
- Keyboard: skip link, visible focus ring, `<details>` FAQs, semantic headings (one H1 per page, H2 per section, H3 inside), breadcrumb `nav` with `aria-label`.
- Reduced motion respected.

## 6. Open issues and approvals needed (not fixable in this build)

1. **Canonical host conflict on speakx.ai**: all live canonicals, sitemap URLs, og:url and schema ids point to `www.speakx.ai`, which 308-redirects to `speakx.ai`. This build emits non-www URLs; the production site should be aligned the same way.
2. **Duplicate hosts**: speakx.com, www.speakx.com, speakx.in and www.speakx.in serve the full site with 200 and should 301 to speakx.ai.
3. **Homepage rating claim**: speakx.ai shows "4.6+" while Google Play displays 4.5 (92.9K reviews); the homepage SoftwareApplication schema also says 4.6 / 90,000. Needs correction to stay consistent with the hub.
4. **"Free trial" wording** on /premium's title and in llms.txt conflicts with the ₹2 trial rule.
5. **Awards awaiting approval**: 7 recognitions are listed only on speakx.ai (India Elite x2, Mint Tech4Good 2024, ET Now Bharat Growth Summit 2026, ET Edge 40 Under 40, BW 40 Under 40, Elets WES 2023). Two (Entrepreneur Awards 2025, Forbes India DGEMS 2023) conflict with the organisers' own lists and are not rendered. Certificates from the company would resolve these.
6. **Competitor pricing** for Supernova, Stimuler, Duolingo (India) and Speak is not published on their websites; pages cite store in-app purchase ranges with dates. Re-verify monthly.
7. **MySivi website** blocks automated fetches; facts come from Play, App Store, YC and Inc42. Browser verification recommended before launch.
8. **Publisher logos** are not used (text names only) until permission is confirmed.
9. **Testimonials** are intentionally absent: no approved, consented testimonials were supplied.
10. **Screenshots**: three in-app images from the SpeakX blog and Play listing are used; replace with current product captures from the design team if available (one Play screenshot shows a language picker beyond the verified seven languages and was not used).
11. **Analytics**: GA4 id found in the site bundle is wired; Meta Pixel and Singular SDK events should be added through the site's shared layout on integration. No GTM container exists today.
12. **Blog index** on speakx.ai lists only 7 of 18 posts; the older 11 posts are orphaned and should be linked from the index (site-side).

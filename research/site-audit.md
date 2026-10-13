# SpeakX technical site audit (checked 2026-10-12, IST)

Method: `curl -I/-L` + saved HTML parsing (desktop Chrome UA), no JS rendering. Machine-readable detail: `site-audit.json`. Downloaded assets: `research/assets/`.

## 1. Domains and canonical

| Host | Result |
|---|---|
| https://speakx.ai/ | **200** - the serving host (Next.js, Google Cloud 35.244.27.94) |
| https://www.speakx.ai/ | **308 -> https://speakx.ai** (every path tested: /, /premium, /blog, comparison article, /speakx-logo.svg, /opengraph-image, /sitemap.xml) |
| http://speakx.ai/ | 308 -> https://speakx.ai |
| http://www.speakx.ai/ | 308 -> https://www.speakx.ai -> 308 -> https://speakx.ai (2 hops) |
| https://speakx.com, https://www.speakx.com, https://speakx.in, https://www.speakx.in | **200 each - full duplicate of the site** (same etag), cross-domain `<link rel=canonical href="https://www.speakx.ai...">`; `server: envoy`, 34.47.197.6. Not redirected. |
| http://*.speakx.com / .in | 301 -> https same host |

**Canonical conflict - VERIFIED.** On every page (home, /blog, /premium, /about, the comparison article) `rel=canonical`, `og:url`, `og:image`, Organization `url`/`logo`, BreadcrumbList items, all 43 sitemap `<loc>`s and the robots.txt `Sitemap:` line point to **https://www.speakx.ai/...**, while www 308-redirects to **non-www**. In practice the canonical domain is `https://speakx.ai`; declared canonical is `https://www.speakx.ai`. Our build must emit one consistent host (recommend non-www, matching the live redirect).

- robots.txt (identical on all 6 hosts): `Allow: /`, Disallow `/health /ping /pay/ /premium/success /business/verify /business/payment`, `Content-Signal: ai-train=no, search=yes, ai-input=yes`, `Sitemap: https://www.speakx.ai/sitemap.xml`.
- llms.txt exists (`link: </llms.txt>; rel="describedby"` header) and lists App Store + Play URLs.
- sitemap.xml: single urlset, **43 URLs** (25 site/business/policy + /blog + **18 blog posts**), all www, all with the identical lastmod `2026-10-12T05:18:30.949Z`. No sitemap index; other sitemap paths 404.
- hreflang: none anywhere. `<html lang="en">`; Article `inLanguage: en-IN`.

## 2. Tech stack (speakx.ai)

- **Next.js App Router** (RSC `self.__next_f`, `/_next/static/chunks/app/layout-*.js`, `x-powered-by: Next.js`, `x-nextjs-prerender: 1`, `x-nextjs-stale-time: 300`, `x-nextjs-cache: HIT`, `cache-control: s-maxage=31536000`). Version not exposed (headers suggest 15.x). Static prerender + ISR.
- **Hosting: Google Cloud, not Vercel** (no `x-vercel-*`; .com/.in behind envoy). DNS at GoDaddy (domaincontrol.com). Media: `image.speakx.in` and `video.speakx.in` -> CloudFront (origin Google Cloud Storage); supports `?w=&fm=webp&q=&auto=format,compress`.
- **Tailwind CSS + shadcn/ui-style HSL tokens** (`--primary: 0 0% 9%`, `.dark`), plus custom `--sx-*` and `--brand-*` tokens. 4 CSS bundles.
- Fonts via **next/font, self-hosted woff2 - no Google Fonts link**.
- Security headers: HSTS, XFO SAMEORIGIN, nosniff, Referrer-Policy strict-origin-when-cross-origin, Permissions-Policy `microphone=(self)`, CSP **report-only**. Payments: Razorpay. Calendly + Google One Tap allowed in CSP.
- Icons: `/icon.png` (192) + `/apple-icon.png` (180); `/favicon.ico` 404; `/manifest.json` 404. OG image = dynamic `/opengraph-image` (1200x630).

### Analytics (all loaded from the JS bundle, no GTM)
| Tool | ID | Status |
|---|---|---|
| GA4 | `G-Z36ZMHENFK` | verified in chunk 9235 (events prefixed `b2c_`) |
| Google Tag Manager | - | **not present** |
| Meta Pixel | b2c `1191395792230165`, b2b `851507887655950` | verified (fbq init + noscript img) |
| LinkedIn Insight | partner id `10860337` | verified in bundle (B2B demo events) |
| Microsoft Clarity | - | not-verified (CSP allows, no tag) |
| Mobile attribution | **Singular** `https://speakx.sng.link/Ed28z/npfq/4alj` | verified; no AppsFlyer/Branch/Adjust |

## 3. Brand assets

- **Tagline**: "Muh Khol. English Bol." (homepage H1 + closing H2; article H2; "our motto"). Hero subline: "SpeakX | Aapka English Speaking Partner". Title tag: "SpeakX, AI English Speaking App | Speak English Confidently". OG alt: "SpeakX - AI English Speaking App for Confidence and Fluency". Primary CTA text: **"Start speaking now"**. Store headline: "SpeakX: Learn Spoken English with MS Dhoni". Trustmark badge: "TRUSTED BY 1 CR+ LEARNERS".
- **Logo**: `https://speakx.ai/speakx-logo.svg` (horizontal wordmark, `#ff4d00` + gradient to `#de2804`); square PNG `https://image.speakx.in/assets/blogs/best-english-speaking-apps-india/speakx-logo.png` (400x400); Play icon 512.
- **Colours**: primary `#ff4d00` (`--brand 255 77 0`), hover `#d04907` (`--sx-accent`), press `#a53a06`, deep `#742c07`, tint `#fff0e3`, soft `#ffb890`, faint `#fffaf5`, gold `#ffb61e`; heading `#0a0b0f`, text `#4a4a5b`, muted `#666673`, border `#eeeff4`, surface `#f7f8fa`, bg `#ffffff`; success `#16a34a`; also `#f4570f`, `#dd4a03`, `#de2804`.
- **Fonts**: **Figtree** (primary, `--font-figtree` / `--sx-font`) + Noto Sans Devanagari / Bengali / Tamil / Telugu / Kannada / Malayalam for Indic text; all next/font self-hosted.
- **Downloaded to research/assets/ (22 files)**: speakx-logo.svg, speakx-logo-blog.png, play-app-icon-512.png, favicon-icon-192.png, apple-icon-180.png, og-image-home.png, trustmark-light/dark.png, badge-google-play.png, badge-app-store.png, hero-poster-v2.jpg (evening cafe hero video poster), phone-hand.png (blank phone frame), dhoni-cutout.png, comparison-cover-v3.jpg, **Sia**: sia-ai-english-tutor.jpg, sia-listening-feedback.jpg, sia-15-minute-tip.jpg; **app screens**: speakx-talk-with-sia-voice-call.jpg, speakx-lesson-map-apna-parichay.jpg, speakx-confidence-meter.jpg, play-screenshot-01.png (Dhoni "Speak English with Confidence"), play-screenshot-02.png (language picker). Source URLs + descriptions are in the JSON.

## 4. Verified install link

- **`https://speakx.sng.link/Ed28z/npfq/4alj`** - used on all 4 "Start speaking now" buttons (`data-cta="primary"`) and both store badges on the homepage, on /about and in the comparison article. Android UA -> 302 to `https://play.google.com/store/apps/details?hl=en&id=yellowclass.kids.live&referrer=singular_click_id%3D<uuid>`; iPhone UA -> 302 to `https://apps.apple.com/in/app/speakx-english-speaking-app/id6756059415?referrer=singular_click_id%3D<uuid>`; desktop -> 200 landing.
- Direct store URLs also used: `https://play.google.com/store/apps/details?id=yellowclass.kids.live` (article variant adds `&referrer=utm_source%3Dblog%26utm_medium%3Dcompare%26utm_campaign%3Dbest-english-speaking-apps-india`) and `https://apps.apple.com/in/app/speakx-english-speaking-app/id6756059415`.

## 5. Pages for internal linking (all 200 unless noted)

Core: `/` (H1 Muh Khol. English Bol.), `/about` (About Us), `/premium` (SpeakX Premium: daily English speaking practice with instant feedback - ₹2 for 3 days then ₹299/month, auto-renews, cancel anytime), `/contact-us`, `/business` (+ /business/about, /healthcare, /colleges, /teams, /demo, /signup, /contact-us), policies (/terms-conditions, /privacy-policy, /refund-policy, /equal-rights-policy, /diversity-and-inclusion-policy, /user-data-deletion-policy + b2b versions). **No /press, /news, /awards, /media, /faq, /pricing, /download, /careers pages exist (404).**

Blog (`/blog`, H1 "Speak English with confidence.", index shows only 7 newest; 18 in sitemap) - all 18 return 200:

| URL (speakx.ai/blog/...) | H1 | Topics |
|---|---|---|
| best-english-speaking-apps-india-speakx-vs-competitors | Best English Speaking Apps in India (2026): How SpeakX Compares with Duolingo, Supernova, Stimuler and Others | comparison |
| practice-spoken-english-alone-at-home | How to Practice Spoken English Alone at Home | daily English, homemakers, beginners |
| interview-questions-answers-english-freshers | Interview Questions and Answers in English for Freshers: The Complete 2026 Guide | job interview, career |
| 100-simple-english-sentences-for-daily-use-with-hindi-meaning | 100 simple English sentences for daily use, with Hindi meaning | daily English, beginners, regional language |
| how-to-improve-english-speaking-fluency-for-job-interviews-a-guide-for-indian-professionals | How to Improve English Speaking Fluency for Job Interviews: A Guide for Indian Professionals | job interview, career |
| how-to-speak-english-fluently-for-village-people-in-bihar-a-7-day-confidence-framework | How to Speak English Fluently for Village People in Bihar: A 7-Day Confidence Framework | beginners, regional |
| english-interview-questions-and-answers-for-corporate-professionals-a-speaking-confidence-guide | English Interview Questions and Answers for Corporate Professionals: A Speaking Confidence Guide | job interview, career |
| how-to-speak-english-fluently-in-parent-teacher-meetings-a-teachers-5-minute-daily-method | How to Speak English Fluently in Parent-Teacher Meetings: A Teacher's 5-Minute Daily Method | homemakers/parents, roleplay |
| english-spelling-practice | English Spelling Practice - Everything You Need to Know | beginners |
| english-grammar-sentence-structure | English Grammar Sentence Structure - Everything You Need to Know | grammar, beginners |
| english-speaking-fluency | English Speaking Fluency: 4-Step Guide for Indian Professionals (2026) | fluency, career |
| english-pronunciation-difficulty | English Pronunciation Difficulty - Everything You Need to Know | pronunciation |
| english-grammar-tenses | English Grammar Tenses - Everything You Need to Know | grammar |
| how-to-speak-english-fluently | How To Speak English Fluently - Complete Guide (2026) | fluency, daily English |
| learning-english-with-an-ai-teacher-app-for-confident-speaking | Learning English with an AI Teacher App for Confident Speaking | AI teacher |
| how-a-personal-ai-teacher-app-improves-english-speaking-confidence | How a Personal AI Teacher App Improves English Speaking Confidence | AI teacher |
| unlock-confident-english-speaking-your-guide-to-daily-practice-and-learning-the-basics | Unlock Confident English Speaking: Your Guide to Daily Practice and Learning the Basics | beginners, daily English |
| master-real-life-english-your-guide-to-confident-daily-conversation | Master Real-Life English: Your Guide to Confident Daily Conversation | daily conversation, roleplay |

Confirmed 404: `/blog/ai-se-english-kaise-sikhe` (never link).

## 6. Existing comparison article

`https://speakx.ai/blog/best-english-speaking-apps-india-speakx-vs-competitors` - 200; title "Best English Speaking Apps in India in 2026 | SpeakX"; canonical www; og:type article; published/modified 2026-10-09; author Nishtha Agarwal; ~3,490 words (schema says 3,212); schema: Organization, WebSite, Article, BreadcrumbList (**no FAQPage** despite 9 `<details>` FAQs).
Outline: H1 -> What to look for -> Quick comparison table (App | Main focus | How you practise | Made for Indian learners? | Best for) -> "How SpeakX compares" with H3s vs Duolingo, ELSA Speak, Speak, Cambly & Preply, HelloTalk, Praktika & Loora, MySivi, Stimuler, EngVarta & Supernova -> Why Indian learners choose SpeakX (6 points) + Confidence Meter -> Which app is right for you (personas) -> How much does SpeakX cost (₹299/mo, ₹2 3-day trial) -> FAQ (9) -> How we compared -> closing CTA.
Claims: 10M+ Play downloads; 4.5★ from 92,000+ reviews (Sept 2026); 15-min lessons; CEFR Pre-A1 -> advanced; 7 Indian languages; Sia voice calls; Confidence Meter Shy->Super; city leaderboard; ET Education Excellence Awards 2026 (Generative AI); Speak is a different company. Full FAQ text and table rows are in the JSON.

## 7. Store listings

- **Google Play** (200): "SpeakX AI Learn Spoken English" by **SpeakX.ai**; **4.5★ (4.534), 92,924 reviews (92.9K), 10M+ downloads, updated Oct 12, 2026, Rated for 3+**, Education, IAP, free. Short description: "Speak English with Sia, AI practice, progress reports and 7 Indian languages." Long description headline "SpeakX: Learn Spoken English with MS Dhoni"; claim "By month 2, 4 out of 5 active learners speak English for 90%+ of their conversations"; languages Hindi, Tamil, Telugu, Kannada, Malayalam, Marathi, Bengali; progress report (Speaking, Fluency, Vocabulary, Grammar, Pronunciation, Practice). 7 screenshots.
- **App Store** (200, verified): `https://apps.apple.com/in/app/speakx-english-speaking-app/id6756059415` - "SpeakX: English Speaking App" by Ivypods Technology Private Limited; **4.7★, 258 ratings**, Age 4+, 167.9 MB, iOS 15+, v5.6.8; IAPs "SpeakX Premium Monthly ₹299" and "SpeakX Premium Monthly ₹99" (₹99 unexplained - do not cite).

## 8. Reference site (speakshark.com) - UX inspiration only

- Hub `/vs` (Next.js): H1 + "honest, no affiliate spin" intro + "How to read these" explainer -> H2 "Apps built for language learning" (7 cards) -> H2 "DIY with general AI assistants" (5 cards) -> "Done comparing? Try SpeakShark free" CTA. **Card** = whole-card link `/vs-<slug>` (flat URLs, not `/vs/<slug>`), glass panel, uppercase eyebrow category ("pronunciation drill app"), H3 "SpeakShark vs X", one-sentence verdict, "Read full comparison". Schema: WebSite+Organization+SoftwareApplication, **ItemList (12)**, BreadcrumbList.
- Subpages (`/vs-elsa-speak`, `/vs-duolingo`, `/vs-speak`; 6-7k words incl. nav): title "SpeakShark vs X: Which Is Better in 2026? | SpeakShark", 150-160 char meta. Sections: breadcrumb -> H1 (with dash angle) + framing -> Quick verdict (one line each) -> H2 "at a glance" 2-column table (Feature | X | SpeakShark, 11-13 rows: free tier, pricing, format, scoring, accents, roleplays, progress, web/mobile) -> H2 "Where each one actually wins" (H3 X leads / X falls short / SpeakShark wins) -> H2 "Which one should you pick?" (Pick X if / Pick SpeakShark if) -> H2 FAQ (5-6 native `<details>` + **FAQPage JSON-LD**) -> H2 "Compare to other alternatives" grid -> H2 final CTA (free-tier promise + one button). Schema per page: WebSite, Organization, SoftwareApplication, WebPage (about: both apps), FAQPage. No og:image, no hreflang, no visible dates.

## 9. "Recognised by" and press on speakx.ai

Awards (12 cards, **no outbound links**, mirrored in Organization.award): ET Education Excellence Awards 2026 - Excellence in Generative AI for Education; ET Now Bharat Growth Summit 2026 - Best Education Startup of the Year; ET Education Excellence Awards 2025 - Best Emerging Edtech Startup and Best Personalised & Gamified Learning Experience; Entrepreneur Awards 2025 - Best EdTech Startup of the Year; India Elite Education & Institutional Excellence Awards 2025 - Most Futuristic AI-Driven Language Learning Startup and Top 25 Visionary Edtech Startup; ET Edge 40 Under 40 and BW 40 Under 40 (Arpit Mittal, 2025); Mint Tech4Good Awards 2024 - Best Use of AI for Education and Livelihood; Elets 27th World Education Summit 2023 - Best EdTech Provider of the Year; Forbes India DGEMS 2023 - Best Company Select 200. Logos used: Economic Times, Mint, BW Businessworld, Forbes India, Inc42, TICE, Amar Ujala.
"In the news" (9 linked, articles not fetched): Times of India/Education Times, Moneycontrol, ET Entrepreneur (x2), Inc42, TICE News, VCCircle, Republic World (/initiatives/ - likely branded), Amar Ujala. URLs in JSON.
Backers: India Quotient (+ WestBridge, Elevation, Goodwater in schema); angels MS Dhoni, Vidit Aatrey, Kunal Bahl, Varun Alagh, Shyamal Anadkat, Ronnie Screwvala.

## Issues (full list in JSON)

1. **High** - canonical/og/sitemap/schema all www while www 308s to non-www.
2. **Medium** - speakx.com / speakx.in serve 200 duplicates (cross-domain canonical only); should 301.
3. **Medium** - blog index shows 7/18 posts, no pagination; 11 posts orphaned from the index.
4. **Medium** - homepage SoftwareApplication rating 4.6/90,000 contradicts Play 4.5/92,924 and the "never 4.6+" rule.
5. **Medium** - /premium title/description and llms.txt say "free trial" (trial is ₹2) - do not inherit.
6. Low - no FAQPage/ItemList schema on the comparison article; duplicate `<title>` on two AI-teacher posts; sitemap lastmod is a build timestamp; /favicon.ico and /manifest.json 404; 2-hop http://www chain.
7. Info - no GTM (GA4 G-Z36ZMHENFK, Meta, LinkedIn come from the bundle); Play screenshot shows Urdu in the picker (stick to 7 languages); App Store lists a ₹99 IAP (unverified).

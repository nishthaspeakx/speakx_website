# SpeakX GEO visibility audit — baseline (12 Oct 2026, IST)

Machine-readable version: `geo-audit.json` (same folder). Nothing here is a fabricated AI answer: where a platform could not be reached it is recorded as not-accessible.

## What could actually be tested from this environment

| Platform | Status |
|---|---|
| Web search index (WebSearch tool, US-indexed) | Accessible — titles, URLs and snippet digest recorded for all 12 prompts |
| Bing (HTML fetch) | Partially — relevant results only for brand-containing queries; most non-brand prompts returned degraded, unrelated result sets (dictionary definitions, cookware, Amazon Seller Central). No Copilot box or PAA in any fetched page. Degraded runs are marked unreliable and excluded from the maths. |
| DuckDuckGo (html.duckduckgo.com) | Not accessible — CAPTCHA on 5/5 attempts |
| Perplexity (perplexity.ai/search?q=) | Not accessible — HTTP 403 on 2/2 attempts |
| ChatGPT search, Google AI Overviews, Gemini, Bing Copilot | Not accessible — not tested |
| Claude | Not tested (the auditor is a Claude model; self-querying is not an independent observation) |

## Baseline numbers (web search index, 12 Oct 2026)

- **Inclusion rate, all 12 prompts:** 3/12 = 25% (prompts 2, 11, 12).
- **Inclusion rate, non-brand prompts 1–10:** 1/10 = 10% (only "Which AI app helps Indians practise spoken English?", where SpeakX was listed first, sourced from the NITI Aayog Frontier Tech story and an Indian Startup Times interview).
- **Inclusion rate, brand prompts 11–12:** 2/2.
- **Entity confusion:** 1/10 non-brand prompts — "SpeakX vs Duolingo" was answered entirely about Speak (speak.com).
- **speakx.ai cited as a source in non-brand prompts:** 0/10. speakx.ai was cited only for "What is SpeakX?".
- **Description accuracy when mentioned:** no kids/Yellow Class wording and no wrong price in any answer text. But: 4 cited URLs for "What is SpeakX?" carry legacy kids-era naming (AppBrain, apkpure.net, soft112, updatestar); unverified feature stats ("10,000 activities", "5,000 words") were repeated from directories; the founder/investor answer included items not in the verified fact set ("Anshul Gupta" co-founder, "₹200 Cr raised") and leaned on TheOrg ("speakX (formerly Yellow Class)"), Crunchbase (slug "yellow-class") and Elevation Capital (which misnames the founder "Arpit Agarwal" in body text and carries "2 lakh paid subscribers / $7M ARR").
- **Share of mentions across the 12 prompts** (brands named in the digest): SpeakX 3, ELSA Speak 6, Duolingo 5, MySivi 4, Speak 3, Supernova 2, Stimuler 2 (EngVarta, a non-target competitor, 5). SpeakX share vs the six target competitors ≈ 12%.
- **Bing (usable runs):** SpeakX brand pages for 2 brand queries; 0 appearances in non-brand queries; 0 Copilot answers observed.

Caveat: this is a directional baseline from a US-indexed digest and bot-served Bing HTML, not from consumer AI assistants in India. The first manual monthly run will establish the true baseline.

## Per-prompt summary

| # | Prompt | SpeakX mentioned | Who was mentioned instead / alongside | Main sources |
|---|---|---|---|---|
| 1 | Best English speaking app in India? | No | EngVarta (self-declared best), ELSA, Preply, Hello English, Duolingo, Cambly, italki, TalkDrill | engvarta.com, talkdrill.com, speakshark.com, thetuitionteacher.com |
| 2 | Which AI app helps Indians practise spoken English? | **Yes, first** — accurate (AI, spoken English confidence, 10M+ learners) | MySivi, SpeakPro AI, SpiceTalk, SpeakWell AI | frontiertech.niti.gov.in, indianstartuptimes.com |
| 3 | SpeakX vs Duolingo | No — substituted by Speak (speak.com) | Speak, Duolingo | speak.com, speakshark, toolradar, Forbes |
| 4 | Best Supernova alternatives | No | Duolingo, Clapingo, ELSA, Josh Talks, MySivi, Preply | alternativeto, getsupernova.ai, swadeshiapps, wordpress.mysivi.ai |
| 5 | Best alternative to MySivi | No (query ambiguous: Missive/Mivi) | EngVarta | engvarta.com tag page |
| 6 | SpeakX vs Stimuler | No (no comparison exists; Stimuler described alone) | Stimuler | stimuler.tech, Medium, Tracxn |
| 7 | English app that supports Hindi | No | Hello English, Meblish, Duolingo, Namaste English | Play listings, talkdrill.com |
| 8 | Job interview English app | No | SmallTalk2Me, TalkDrill, EngVarta, ELSA | smalltalk2.me, engvarta.com, talkdrill.com |
| 9 | Beginners learning English in Indian languages | No (intent misread as learning Hindi/Tamil/Telugu) | — | agurchand/nithra Play listings |
| 10 | AI conversation practice apps | No | Langua, Pronounce, ELSA, Loora, SmallTalk2Me, SpeakL, ChatGPT | languatalk.com, getpronounce.com, loora.com |
| 11 | What is SpeakX? | **Yes** — adults, AI, 10M+ downloads; plus unverified extras; legacy-named directory URLs cited; two App Store IDs | — | speakx.ai, speakx.ai/about, App Store x2, AppBrain, apkpure, updatestar, soft112 |
| 12 | Founder and investors | **Yes** — Arpit Mittal, 2020, Ivypods; investors list; MS Dhoni; some unverified items | — | LinkedIn, Owler, Preqin, TheOrg, Tracxn, Inc42, Elevation Capital |

## Crawler and llms.txt findings

- `https://speakx.ai/robots.txt` (HTTP 200): `User-Agent: *` / `Allow: /` with a few app-path disallows. **No AI crawler is blocked** — GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot, OAI-SearchBot all inherit Allow. Header `Content-Signal: ai-train=no, search=yes, ai-input=yes` declines training but permits search and real-time AI answer grounding (advisory only). Note: if "ai-train=no" is meant to bind Google, an explicit `User-agent: Google-Extended / Disallow: /` block is the mechanism Google honours; leave open if Gemini grounding is wanted. Sitemap points to `www.speakx.ai` while pages serve on `speakx.ai` — confirm canonical host.
- `https://speakx.ai/llms.txt` (HTTP 200, 4,005 bytes): well-formed (summary, Apps, Main pages, Policies, Business). Problems: (a) says "the free trial" — violates the ₹2-trial rule; (b) no founder, Sia, seven languages, downloads/rating, awards or disambiguation sentence; (c) no /vs, /press or blog article URLs yet.
- Live site observations (12 Oct 2026): homepage states a "4.6+" rating (verified Play figure is 4.5 from 92.9K reviews; App Store shows 4.7 from 258 ratings, India) — align to a sourced figure. `/about` gives legal name, CIN and Gurgaon address but no founder name or founding year, which is why engines fall back to TheOrg/Crunchbase/Tracxn. `/vs` and `/press` currently 404 (expected pre-launch).

## Recommendations

### Answer-ready sentences (verified facts only)
Sitewide boilerplate to place under the H1 and in the footer of every page:
- SpeakX is an AI English speaking app for Indian learners, made by Ivypods Technology Pvt. Ltd. in Gurugram and founded by Arpit Mittal.
- Learners practise speaking on voice calls with Sia, SpeakX's AI speaking partner, for about 15 minutes a day.
- SpeakX explains English in seven Indian languages: Hindi, Marathi, Bengali, Telugu, Tamil, Kannada and Malayalam.
- SpeakX is free to start; Premium is a 3-day trial for ₹2, then ₹299 per month, auto-renewing and cancellable anytime (SpeakX website, India, as of 12 Oct 2026).
- SpeakX has 1 crore+ (10 million+) downloads on Google Play and a 4.5-star rating from 92.9K Google Play reviews (as of 12 Oct 2026).
- SpeakX is a different company from Speak (speak.com).
- SpeakX is for students, job-seekers, working professionals, parents and homemakers.

Per-page lead sentences (Duolingo page opens "SpeakX is not Speak…"; ELSA page frames "pronunciation drills vs conversation on voice calls with Sia"; /press carries the ET Education Excellence Awards 2026 — Excellence in Generative AI for Education line and the attributed "SpeakX says … 4 out of 5 learners" claim) are listed in the JSON.

### Entity consistency
Canonical: **SpeakX** / legal **Ivypods Technology Pvt. Ltd.** / founder **Arpit Mittal** / HQ **Gurugram, Haryana** / AI persona **Sia** / domain **speakx.ai**. Fix the homepage "4.6+"; add founder + founding year to /about and /press; standardise store titles to "SpeakX: English Speaking App"; confirm which of the two App Store IDs is canonical; request corrections from Elevation Capital (founder name) and TheOrg/Crunchbase (naming); add a `disambiguatingDescription` naming Speak and Speexx as unrelated. Legacy directory listings cannot be edited — outweigh them with consistent canonical copy.

### Schema
- **Organization** (sitewide, `@id`): name, legalName, founder, address, sameAs (LinkedIn, canonical Play, canonical App Store), contactPoint, disambiguatingDescription. No unverified awards, no Yellow Class alternateName.
- **WebSite** on the homepage (SearchAction only if a search URL exists).
- **SoftwareApplication** on the homepage/app page with Offers (₹0 "free to start"; ₹299/month) matching visible text. **Omit aggregateRating** unless sign-off: copying store ratings is not clearly compliant with Google's review-snippet rules and must never be invented. No Review schema about competitors; no ratings on /vs pages.
- **BreadcrumbList** on every /vs/* and /press. Hub = WebPage + ItemList; each /vs page = WebPage with `about` → SpeakX and `mentions` → competitor (name + url only).
- **FAQPage**: valid, read by Bing and useful for LLM parsing, but **no Google rich results** for non-government/health sites since Aug 2023 — include only where the visible page has Q&A, with identical text, and set no rich-result expectation.
- **Article** only on the existing blog listicle and genuine future articles — never on /vs or /press.

### Technical / content GEO
Fix llms.txt wording and add new URLs; add "Sources and what we verified (12 Oct 2026)" sections; 40–60-word answer paragraph at the top of each /vs page; plain-text comparison tables with a "Last verified" row; keep robots open; decide Google-Extended explicitly; resolve canonical host and add new URLs to the sitemap.

### Measurement plan
Monthly, from India (incognito, mobile + desktop), same 12 prompts verbatim, across ChatGPT search, Google AI Overviews/AI Mode (en-IN), Gemini, Perplexity, Claude, Bing Copilot. Metrics: inclusion rate (overall / non-brand / brand), description accuracy (0–3 with error types: wrong entity, kids/Yellow Class, wrong price/languages/rating, never-claim stats), cited sources (count, % speakx.ai, % new /vs or /press pages, % legacy directories), share of mentions vs the six competitors, entity-confusion rate. Baseline (12 Oct 2026, web search index only): inclusion 25% overall / 10% non-brand / 100% brand; entity confusion 10%; speakx.ai cited in 0/10 non-brand prompts; share of mentions ≈ 12%. No guaranteed-inclusion targets — AI engines are non-deterministic; track direction of travel.

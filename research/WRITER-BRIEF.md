# Writer brief: one SpeakX comparison page (TypeScript data file)

You write ONE file: `speakx-vs/src/data/comparisons/speakx-vs-<competitor>.ts` exporting `default` as a `ComparisonPage`
(type in `speakx-vs/src/lib/types.ts` — read it first; every field is required).

## Inputs (read all)
- `research/SHARED-CONTEXT.md` — rules, verified SpeakX facts, never-claim list.
- `research/competitors.json` → `products.<slug>` — the ONLY source of competitor facts. `speakx-vs/src/data/products.ts` is generated from it.
- `research/keyword-map.json` → `pages[]` entry for your URL — use its `title_tag`, `meta_description`, `h1`, `suggested_h2s`, `question_keywords`, `internal_link_targets`, `cannibalisation_notes`.
- `research/site-audit.json` → `pages[]` — verified live SpeakX blog URLs (all 200) for `related` links. Use only URLs from this list or /vs routes.
- Reference structure (UX only): speakshark.com/vs pages: quick verdict → at-a-glance table → where each wins → which should you pick → FAQ.

## Content rules
- Original, researched prose. 1,500–2,500 words of useful content; no padding, no duplicated paragraphs with other pages (each writer has a different competitor; do not reuse generic SpeakX boilerplate sentence-for-sentence — vary phrasing and lead with the competitor-specific angle).
- Balanced: `competitorBetterFor` must have 3–5 honest, evidence-based items from `where_competitor_may_be_better_than_speakx`, `key_strengths`.
- Every competitor claim traceable to `competitors.json` evidence. If a dimension is "not-verified", say "not verified from official sources" rather than asserting absence. Never say a competitor lacks a feature unless the JSON says "no".
- SpeakX facts only from SHARED-CONTEXT (Sia voice calls; 7 languages listed; ~15 min/day; free to start; ₹2 3-day trial then ₹299/month "on the SpeakX website, as of 12 Oct 2026"; 1 crore+ Google Play downloads; 4.5★ from 92.9K Google Play reviews; roleplays: interviews, office, parent-teacher meetings, phone calls; CEFR Pre-A1 to advanced; progress report fluency/vocabulary/grammar/pronunciation; Confidence Meter; city leaderboards; Premium: 24x7 AI teacher, 100+ scenarios, unlimited AI talk time; ET Education Excellence Awards 2026 Excellence in Generative AI for Education; outcome claim only attributed). Audience: young adults and older learners. Never "kids", never Yellow Class, never "free trial" for SpeakX, never "best"/"#1" as fact, never 4.6+.
- Speak (speak.com) ≠ SpeakX: every page mentions this once (the Speak page leads with it).
- Pricing section: `pricing.speakx` and `pricing.competitor` are 2–4 sentence strings with the date "as of 12 October 2026" and region/platform; `pricing.note` says prices can change and to check official pages.
- `quickAnswer`: 3–4 plain sentences an AI answer engine could quote: name both apps, what each is for, who should pick which. Include one answer-ready sentence like "SpeakX is an AI English speaking app for Indian learners, made by Ivypods Technology in Gurugram."
- `featureTable`: 12–16 rows (label / speakx / competitor), values as short phrases (≤ 90 chars), e.g. "Voice calls with Sia (AI partner)" / "AI tutor chat and lessons". Include rows: What it's built for; AI conversation practice; Indian-language explanations; Hindi; Tamil/Telugu/regional; Real-life roleplays; Job interview practice; Pronunciation feedback; Progress tracking; Levels/structure; Daily time; Free experience; Price (as checked); Platforms; Google Play rating (as displayed, with review count).
- `howSpeakXWorks` 3–4 paragraphs; `howCompetitorWorks` 3–4 paragraphs (from teaching_method + dimensions evidence).
- `keyDifferences`: 4–6 items. `speakxBetterFor`: 4–6. `byLearnerType`: 6 rows (Absolute beginner; Hindi-medium / regional-language learner; College student / fresher; Working professional; Homemaker / parent; IELTS or study-abroad aspirant). `byGoal`: 6 rows (Job interviews; Workplace English; Everyday conversations; Pronunciation; Travel; Exam prep).
- `uxAndFeedback`: 3–4 paragraphs on how each app gives feedback, with the attributed outcome line if used.
- `faqs`: 6–8, each answer 2–4 sentences, answer-first, using the keyword map's `question_keywords`. Include "Is SpeakX the same as Speak?" only on the Speak page; other pages include one disambiguation sentence elsewhere.
- `related`: 4–6 LinkItems: 2 other /vs pages from `internal_link_targets`, https://speakx.ai/premium, the comparison article https://speakx.ai/blog/best-english-speaking-apps-india-speakx-vs-competitors, and 1–2 topic-matched blog URLs from site-audit pages. Natural, varied anchors (no exact-match repetition).
- `sources`: 6–12 Source objects: SpeakX official pages (speakx.ai, speakx.ai/premium, Play listing, App Store listing) + competitor `sources_checked` URLs. checked "2026-10-12".
- `lastVerified`: "2026-10-12". `cardDifference`: from `one_meaningful_difference_vs_speakx` (≤140 chars, fair). `seo.keywords`: 5–8 from keyword map.
- Tone: clear, friendly expert, Indian context, plain English, short sentences, no marketing superlatives, no em-dashes.
- Output must be valid TypeScript: `import type { ComparisonPage } from "@/lib/types"; const page: ComparisonPage = {...}; export default page;` Use double quotes; escape quotes inside strings; no trailing commas issues; no `\n` inside strings (use separate paragraphs in arrays). After writing, run from `speakx-vs/`: `npx tsc --noEmit -p tsconfig.json 2>&1 | grep -i "comparisons/speakx-vs-<competitor>" || echo TYPE-OK` and fix any error in your file.

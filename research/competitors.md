# SpeakX competitor database - summary (checked 2026-10-12)

Machine-readable source of truth: `competitors.json` (same folder). Every dimension there carries value, evidence note and source URL. Values use {yes, partial, no, not-verified}; prices are store/official-page figures only (no third-party roundups).

## Snapshot

| Product | Company / HQ | Play rating (reviews) | Play downloads | App Store IN rating | Public India pricing (as of 2026-10-12) | Indian languages | Platforms |
|---|---|---|---|---|---|---|---|
| **SpeakX** | Ivypods Technology Private Limited / India (Gurugram) | 4.5 (4.534 raw) (92,923) | 1Cr+ (10M+) | 4.7 (258 ratings (India storefront)) | ₹2 for 3-day trial, then ₹299/month (speakx.ai/premium) | 7: Hindi, Tamil, Telugu, Kannada, Malayalam, Marathi, Bengali | Android, iOS (web: no) |
| **Supernova AI** | L8 Cones Interactive Private Limited (brand: Supernova) / India (Bengaluru, HSR Layout) | 4.7 (4.734 raw) (289,513) | 10M+ | 4.7 (37,408 ratings (India storefront)) | No price page; App Store SKUs ₹99–₹1,999 | Hindi, Tamil, Telugu, Bengali 'and more' (ElevenLabs case study lists 10) | Android, iOS (web: not-verified) |
| **MySivi AI** | Ninjasalary, Inc. (App Store) / 'MySivi AI' developer name on Play; YC W22 / India (Bengaluru); US-incorporated entity name on App Store | 4.7 (4.650 raw) (88,557) | 1Cr+ (10M+) | 4.7 (19,251 ratings (India storefront)) | Site unreachable; App Store SKUs ₹999/mo, ₹1,999/3mo, ₹4,999/yr | Translations: Hindi, Tamil, Telugu, Marathi, Bengali, Urdu + | Android, iOS (web: not-verified) |
| **Duolingo** | Duolingo, Inc. (NASDAQ: DUOL) / United States (Pittsburgh, PA) | 4.6 (4.591 raw) (50,850,304) | 500M+ | 4.7 (208,698 ratings (India storefront)) | Not public; Play IAP ₹19–₹19,900; Super 14-day free trial | English courses from Hindi, Bengali, Tamil, Telugu; UI in 8 Indian languages | Android, iOS, Web |
| **Stimuler** | Stimuler Private Limited / India (Bengaluru per editorial coverage; official site does not state) | 4.6 (4.575 raw) (217,562) | 1Cr+ (10M+) | 4.7 (8,984 ratings (India storefront)) | No price page; App Store SKUs ₹149/wk, ₹199–₹399/mo, ₹699–₹1,999/yr | None described | Android, iOS (web: not-verified) |
| **ELSA Speak** | ELSA Corp / United States (California; site footer: Los Gatos, CA; operations office in Ho Chi Minh City, Vietnam) | 4.2 (4.196 raw) (1,013,190) | 1Cr+ (10M+) | 4.6 (15,649 ratings (India storefront)) | Prices load dynamically; App Store SKUs ₹499/mo, ₹3,449/yr Premium; 7-day trial | Hindi only | Android, iOS (web: partial) |
| **Speak** | Speakeasy Labs, Inc. / United States (San Francisco) | 4.6 (4.584 raw) (124,317) | 1Cr+ (10M+) | 4.6 (192 ratings (India storefront)) | Not public; App Store SKUs ₹1,949–₹2,299/mo, ₹4,999–₹22,900/yr; 7-day trial | Hindi only | Android, iOS (web: no) |

## Feature matrix (yes / partial / no / nv = not-verified)

| Dimension | SpeakX | Supernova AI | MySivi AI | Duolingo | Stimuler | ELSA Speak | Speak |
|---|---|---|---|---|---|---|---|
| suitability_for_indian_learners | yes | yes | yes | partial | partial | partial | partial |
| support_for_absolute_beginners | yes | yes | yes | yes | nv | yes | yes |
| support_for_indian_languages | yes | yes | yes | yes | nv | partial | partial |
| hindi_guidance | yes | yes | yes | yes | nv | yes | yes |
| tamil_telugu_regional_support | yes | yes | yes | yes | nv | no | no |
| ai_conversation_practice | yes | yes | yes | partial | yes | yes | yes |
| structured_course_progression | yes | yes | yes | yes | partial | yes | yes |
| personalised_learning_plans | partial | yes | yes | partial | yes | yes | yes |
| initial_proficiency_assessment | partial | partial | nv | yes | yes | yes | nv |
| speaking_practice | yes | yes | yes | partial | yes | yes | yes |
| real_life_roleplays | yes | yes | partial | partial | partial | yes | yes |
| job_interview_english | yes | yes | yes | nv | partial | yes | nv |
| workplace_english | yes | partial | yes | nv | partial | yes | nv |
| everyday_english | yes | yes | yes | yes | yes | yes | yes |
| family_social_conversations | yes | nv | partial | partial | partial | partial | nv |
| education_student_use_cases | yes | partial | yes | partial | yes | yes | nv |
| travel_english | yes | nv | partial | yes | nv | partial | partial |
| pronunciation_practice | yes | yes | yes | partial | yes | yes | yes |
| grammar_guidance | yes | yes | yes | partial | yes | yes | yes |
| vocabulary_development | yes | yes | partial | yes | yes | yes | yes |
| ai_feedback | yes | yes | yes | partial | yes | yes | yes |
| progress_tracking | yes | partial | nv | yes | yes | yes | yes |
| gamification | yes | nv | yes | yes | nv | yes | partial |
| free_tier | yes | yes | yes | yes | yes | yes | partial |
| android | yes | yes | yes | yes | yes | yes | yes |
| ios | yes | yes | yes | yes | yes | yes | yes |
| web | no | nv | nv | yes | nv | partial | no |

Free-text dimensions (objective, target learner, tutor model, languages taught, interface languages, pricing detail) are in the JSON per product.

## SpeakX

- Official name: SpeakX (Play: 'SpeakX AI Learn Spoken English'; App Store: 'SpeakX: English Speaking App')
- Company / HQ: Ivypods Technology Private Limited; India (Gurugram)
- Founded: Ivypods Technology copyright 2020 on App Store listing; SpeakX brand launch year not stated on official pages (third-party press says 2024) - partially-verified
- Website: https://speakx.ai/  | Play: https://play.google.com/store/apps/details?id=yellowclass.kids.live  | App Store: https://apps.apple.com/in/app/speakx-english-speaking-app/id6756059415
- Description: Paraphrase: AI English speaking practice app; 'Aapka English Speaking Partner' (speakx.ai).
- Method: Conversational practice: learners talk daily (~15 min) with Sia, the AI speaking partner, in real-life roleplays; explanations start in the learner's Indian language and gradually shift to English; CEFR-mapped paths Pre-A1 to advanced; progress report on fluency, vocabulary, grammar, pronunciation.
- Pricing: Premium: 3-day trial for ₹2, then ₹299/month, auto-renews, cancel anytime (speakx.ai/premium, India, web, as of 2026-10-12). App Store IN IAP shows 'SpeakX Premium Monthly ₹299' and a ₹99 SKU; Play IAP range ₹99–₹300.
- Tutor model: AI only - Sia is an AI speaking partner; Premium is a '24x7 AI Teacher'. No human tutoring offered on official pages.
- Languages taught: English only
- Interface languages: English plus 7 Indian languages for instruction (Hindi, Tamil, Telugu, Kannada, Malayalam, Marathi, Bengali)
- Key strengths:
  - Voice-call conversation practice with an AI partner (Sia), with unlimited AI talk time on Premium (speakx.ai/premium).
  - Teaches in 7 Indian languages and shifts the conversation to English gradually (speakx.ai, Play listing).
  - India-specific roleplays: interviews, office, parent-teacher meetings, phone calls; 100+ scenarios on Premium.
  - Large Indian user base: 1Cr+ Play downloads, 4.5 rating from 92.9K reviews (Play, 12 Oct 2026).
  - Low, transparent INR pricing: ₹2 for a 3-day trial then ₹299/month (as of 2026-10-12).
- Meaningful limitations:
  - Teaches English only; no other target languages (unlike Duolingo/Speak/ELSA for multi-language learners).
  - No web/desktop version; mobile apps only.
  - No exam-specific IELTS/TOEFL band scoring described on official pages (Stimuler and ELSA offer this).
  - App Store (India) footprint is small and new (258 ratings) compared with the Play listing.
- Best-fit learner: Indian adults who understand Hindi or another supported Indian language and want to actually speak English for interviews, work, studies, or family life, practising ~15 minutes a day on a phone. Suits hesitant beginners who want explanations in their own language and judgment-free voice practice.
- Where it may beat SpeakX: n/a (this is SpeakX).
- Notable facts:
  - MS Dhoni announced as investor and brand ambassador on 1 Sep 2026 (amount undisclosed). [partially-verified (seen in search results; page returned 403 to fetch)] https://www.deccanherald.com/technology/artificial-intelligence/ms-dhoni-invests-in-ai-powered-english-speaking-and-communication-platform-speakx-4131303
  - Homepage lists awards: ET Excellence in Generative AI for Education (2026), ET Education Excellence Awards Best Personalised Learning (2025), Mint All About AI Award (2024), Forbes India Select 200 (2023). [2026 ET award verified by content team; others not-verified against organiser pages] https://speakx.ai/
  - Homepage names angel investors incl. MS Dhoni and founders from Meesho, Snapdeal, Mamaearth, upGrad; institutional investor India Quotient. [verified on homepage (company claim)] https://speakx.ai/
  - Outcome claim (attributed only): 'By month 2, 4 out of 5 active learners speak English for 90%+ of their conversations.' [company claim] https://play.google.com/store/apps/details?id=yellowclass.kids.live&hl=en_IN
- Card copy: "AI English speaking app for Indian learners; talk to Sia in 7 Indian languages, ~15 min a day." (94 chars)
- Difference vs SpeakX: "n/a" (3 chars)
- Logo: https://play-lh.googleusercontent.com/dl8yJ7uPf3U9tlpDH3S9bmQRMsM0Le_PDkcuuyDb5WwP0S7MTE4Dce9DRn5UUylGJAp8rE6wnLnU_JMX5kqb (HTTP 200 image/png (Play icon), checked 2026-10-12); brand colour: #FF4D00 (most frequent accent colour in speakx.ai markup)
- Identity notes: Play package id is a legacy id and must not appear in public copy (href use only). Older App Store app id1547936192 now returns 404 on US/IN storefronts; the current iOS app is id6756059415.
- Confidence: high

## Supernova AI

- Official name: Supernova AI: Spoken English (App Store: 'Supernova AI Spoken English')
- Company / HQ: L8 Cones Interactive Private Limited (brand: Supernova); India (Bengaluru, HSR Layout)
- Founded: 2021 (Inc42/Tracxn company profiles; not stated on official site) - partially-verified
- Website: https://www.getsupernova.ai/  | Play: https://play.google.com/store/apps/details?id=live.gosupernova.app  | App Store: https://apps.apple.com/in/app/supernova-ai-spoken-english/id6447939054
- Description: Quote: 'The only app focused on making you SPEAK English' (getsupernova.ai).
- Method: Structured step-by-step spoken-English course with ~20-minute daily personalised lessons: learn one sentence pattern, translate 100-300 short lines from your language, controlled AI chats with Nova, free speaking (extempore), spaced repetition on days 1/2/4/7/14/30. Explanations in Hindi and other Indian languages.
- Pricing: No public price list on getsupernova.ai. App Store (India) IAP SKUs 'Supernova Premium' range ₹99–₹1,999; Play IAP range ₹100–₹21,200 per item (as of 2026-10-12). Third-party figures (e.g. ₹499/month, ₹1,999/year) not used.
- Tutor model: AI only - Nova / Miss Nova is the '24/7 AI Teacher'; no live human classes described for the app.
- Languages taught: English only
- Interface languages: English plus Indian-language explanations (Hindi, Tamil, Telugu, Bengali and more)
- Key strengths:
  - Highest Play rating in this set: 4.7 from 289.5K reviews, 10M+ downloads (Play, 12 Oct 2026).
  - Clear beginner-first structured course with a published method (pattern -> translation -> controlled chat -> free speaking -> spaced repetition).
  - Mother-tongue explanations in Hindi, Tamil, Telugu, Bengali and more; Bengaluru-based team.
  - 24/7 AI tutor (Nova) with instant grammar and pronunciation corrections.
- Meaningful limitations:
  - No public price list; in-app SKUs span ₹99–₹1,999 (App Store IN), so pricing is opaque to prospective buyers.
  - Family/social, travel and gamification features are not described on official pages.
  - Company funding data conflicts between databases (Inc42 $1.10M vs Tracxn $4.67M) and the site itself claims '7.5M paid users', which is unverified.
  - Brand name collides with unrelated 'Supernova' products and a legacy kids-course site under the same company.
- Best-fit learner: Indian beginners who want a structured, lesson-by-lesson spoken-English course explained in Hindi or a South Indian language, with daily 20-minute practice and an always-on AI tutor. Good for learners who like a fixed curriculum more than open-ended conversation.
- Where it may beat SpeakX: Higher Play rating and more reviews (4.7 / 289.5K vs 4.5 / 92.9K); very explicit beginner curriculum with spaced repetition; official listings name Bengali plus Gujarati/Punjabi/Odia/Assamese support (per ElevenLabs case study), i.e., potentially broader Indian-language coverage.
- Notable facts:
  - Founded 2021 by Maharishi R. B., Anirudh Coontoor and Nawin Krishna (Bengaluru). [partially-verified (third-party database)] https://inc42.com/company/supernova-ai/
  - Funding: Tracxn reports $4.67M over 2 rounds (Kae Capital, Lumikai, AdvantEdge; Series A Mar 2024); Inc42 profile shows $1.10M pre-seed. Conflicting. [conflicting] https://tracxn.com/d/companies/supernova/__SmzKy5ZZO3cyOxl1niTcZdlL2oKVSgRa14FSjuqWD9M
  - Homepage claims '7.5M paid users', 'Join 1 Crore+ learners', '4.8 Appstore rating' (IN storefront shows 4.7). [company claim, not-verified] https://www.getsupernova.ai/
  - ElevenLabs customer story (28 Mar 2025) says Supernova is 'priced under $5 per month' and lists 10 Indian explanation languages. [vendor case study] https://elevenlabs.io/blog/supernova
- Card copy: "Bengaluru-made structured spoken-English course with 24/7 AI tutor Nova; explains in Hindi, Tamil, Telugu." (106 chars)
- Difference vs SpeakX: "Lesson-first curriculum (pattern, translation drills, spaced repetition) vs SpeakX's conversation-first voice calls with Sia." (125 chars)
- Logo: https://play-lh.googleusercontent.com/TtwRWddQe4Kvrvyxqz3Akf7bb5eLK37k3STktfV90ZTQIkxCwGN_PcaKj5E024BF46MJd4whUvN3okrawiJP (HTTP 200 image/png (Play icon), checked 2026-10-12); brand colour: #8652FF (frequent accent in getsupernova.ai markup; secondary #85BD7A)
- Identity notes: PRODUCT IDENTITY FLAG: 'Supernova' collides with supernova.io (design-system tool), supernova.app and other brands. The correct product is 'Supernova AI: Spoken English' by L8 Cones Interactive Pvt Ltd, Play id live.gosupernova.app, App Store id6447939054, site getsupernova.ai. The same company also operated 'Supernova for Kids' (app.gosupernova.live) - a kids' course site, not the comparison target.
- Confidence: medium-high (features, ratings verified; pricing and funding partially)

## MySivi AI

- Official name: MySivi AI English Speaking App (formerly Sivi / Speakify)
- Company / HQ: Ninjasalary, Inc. (App Store) / 'MySivi AI' developer name on Play; YC W22; India (Bengaluru); US-incorporated entity name on App Store
- Founded: 2022 (Y Combinator profile: Founded 2022, batch W22; Inc42: Sept 2022 as Speakify AI) - verified via YC page
- Website: https://www.mysivi.ai/  | Play: https://play.google.com/store/apps/details?id=com.practice.ninja_study  | App Store: https://apps.apple.com/in/app/mysivi-ai-english-speaking-app/id1644736135
- Description: Quote (Play): 'Your Personalized English Speaking App to Improve English Fluency'.
- Method: AI-coach conversation practice (topic-based chats, real-time tasks) with instant corrections, a structured guided lesson path, translations in Indian languages, gamified rewards, exam/interview practice; YC page also describes practising with humans (peer practice).
- Pricing: App Store (India) IAP: 1 Month ₹999, 3 Months ₹1,999, 1 year ₹4,999 (as of 2026-10-12); Play IAP range ₹100–₹21,200. Website pricing page could not be fetched (bot checkpoint).
- Tutor model: AI tutor plus peer practice (claimed) - YC page: 'Practicing with AI English Tutor and Human is the fastest way'; Inc42 describes a peer-learning feature. No professional human tutors verified.
- Languages taught: English only
- Interface languages: English with word translations in Hindi, Tamil, Telugu, Marathi, Bengali, Urdu and more
- Key strengths:
  - Large installed base: 1Cr+ Play downloads, 4.7 rating from 88.6K reviews (Play, 12 Oct 2026).
  - Explicit gamification (badges, streaks, points) and offline modules.
  - Exam and placement focus (IELTS, TOEFL, interviews) alongside everyday conversation.
  - Translation support in six-plus Indian languages including Urdu.
- Meaningful limitations:
  - Official website and pricing page block automated access; public pricing only visible as App Store SKUs (₹999/month is notably higher than SpeakX's ₹299).
  - No progress report, placement test or scenario catalogue described on official listings.
  - Mostly chat/text-task oriented in listing copy; voice-call style practice is not explicit.
- Best-fit learner: Indian students and early-career professionals who want a gamified, exam-aware English practice app with Hindi/Tamil/Telugu word translations, and who prefer a guided lesson path plus AI chat.
- Where it may beat SpeakX: Explicit IELTS/TOEFL prep positioning, Urdu translation support, offline modules and badge/streak gamification are described on its listing; comparable Play download tier.
- Notable facts:
  - Y Combinator W22; founded 2022; Bengaluru; team size 10 (YC). [verified] https://www.ycombinator.com/companies/mysivi
  - Inc42 (24 Apr 2024): $500K YC funding; 1M+ downloads, 200K+ MAU, 30K paid users at the time; AI tutor named ARYA. [editorial, dated] https://inc42.com/startups/how-mysivi-is-using-ai-to-help-people-become-proficient-in-spoken-english/
  - YC founder note: 'We have raised minimal funding and our bank balance is more than our funding today.' [company claim] https://www.ycombinator.com/companies/mysivi
- Card copy: "YC-backed Bengaluru AI English coach: guided lessons, badges, translations in Hindi, Tamil, Telugu, Urdu." (105 chars)
- Difference vs SpeakX: "Positions for IELTS/TOEFL and placements with streak/badge gamification; SpeakX centres on voice-call roleplays with Sia." (121 chars)
- Logo: https://play-lh.googleusercontent.com/ipiQK__CIMRdao056LCl8DXeobNXSSHzmOztxfnW9XGguQpshcWKSLMvnQX6ozRC0tOl4nyrtMV-FreR0cfn (HTTP 200 image/png (Play icon), checked 2026-10-12); brand colour: not-verified
- Identity notes: Rebranded from Sivi / Speakify AI; Play package com.practice.ninja_study; App Store developer 'Ninjasalary, Inc.'. 'Sivi' alone is ambiguous (there is an unrelated Sivi design tool).
- Confidence: medium (listings verified; website unreachable)

## Duolingo

- Official name: Duolingo: Learn Languages (App Store: 'Duolingo: Language & Chess')
- Company / HQ: Duolingo, Inc. (NASDAQ: DUOL); United States (Pittsburgh, PA)
- Founded: 2011 (widely reported; official press page did not render to fetch) - partially-verified
- Website: https://www.duolingo.com/  | Play: https://play.google.com/store/apps/details?id=com.duolingo  | App Store: https://apps.apple.com/in/app/duolingo-language-chess/id570060128
- Description: Quote (Play): 'the fun, free app for learning 40+ languages through quick, bite-sized lessons'.
- Method: Gamified bite-sized lessons (reading, writing, listening, speaking exercises) with streaks, XP, leagues and hearts; AI features (Roleplay, Video Call with Lily) in the Duolingo Max tier.
- Pricing: Duolingo does not publish regional prices on public pages; Play IAP range ₹19–₹19,900 per item (India, 2026-10-12); Super Duolingo offers a 14-day free trial (Play). Third-party price lists not used.
- Tutor model: AI only - No human tutoring; AI characters (Lily) in Max.
- Languages taught: 40+ languages incl. English, Spanish, French, German, Japanese, Korean, Chinese, Hindi; plus Math, Music, Chess
- Interface languages: 33 app languages incl. English, Hindi, Bengali, Tamil, Telugu, Kannada, Marathi, Punjabi, Urdu
- Key strengths:
  - Massive scale and free access: 500M+ Play downloads, 4.6 from 50.9M reviews; every language course free (Play, 12 Oct 2026).
  - Best-in-class gamification and habit mechanics (streaks, leagues, achievements).
  - English courses available from Hindi, Bengali, Tamil and Telugu; UI in 33 languages incl. 8 Indian languages.
  - Web, iOS and Android; 58.7M DAU / 140.6M MAU in Q2 2026 (SEC filing).
- Meaningful limitations:
  - Speaking is a minor part of lessons; open conversation (Roleplay, Video Call) sits behind the Max tier and is not built for Indian job/office scenarios.
  - Generic global content, no India-specific interview/workplace roleplays or Indian-accent coaching described.
  - Free tier has ads and hearts limits; regional subscription prices are not public.
  - English is one of 40+ courses rather than the product's focus.
- Best-fit learner: Casual learners who want a free, fun daily habit for vocabulary and grammar basics in any language, or those learning multiple languages. Less suited to Indian adults whose main goal is confident spoken English for work.
- Where it may beat SpeakX: Free forever tier, web access, far larger community, multi-language catalogue, and polished gamification; Indian-language UI in 8 languages (SpeakX: 7 explanation languages, English UI).
- Notable facts:
  - Q2 2026: ~58.7M DAUs (+23% YoY) and 140.6M MAUs (SEC Form 10-Q / shareholder letter). [verified via search result from SEC filing] https://www.sec.gov/Archives/edgar/data/0001562088/000162828026053603/duol-20260630.htm
  - Duolingo Max launched 14 Mar 2023 with Roleplay and Explain My Answer; Video Call with Lily added later. [verified] https://blog.duolingo.com/duolingo-max/
  - Duolingo blog (Sep 2020): new learners in India +400% YoY; 'English course for Hindi speakers'. [verified] https://blog.duolingo.com/language-learning-for-the-next-billion-duolingo-in-india/
  - Play: Editor's Choice & 'Best of the Best' - Google Play. [company listing claim] https://play.google.com/store/apps/details?id=com.duolingo&hl=en_IN
- Card copy: "World's most downloaded education app: free gamified lessons in 40+ languages, English included." (96 chars)
- Difference vs SpeakX: "Free multi-language lessons with light speaking; AI conversation only in paid Max, not India-specific like SpeakX." (114 chars)
- Logo: https://play-lh.googleusercontent.com/tw_coGKgk1K_zO-Ypf9zBKV1s-KT3dYN1MIUxIqtnbfmON5x_YmuoAr31gE4oSfJHNtA-aStTd-qe9R8S6NVyA (HTTP 200 image/png (Play icon), checked 2026-10-12); brand colour: #58CC02 (Duolingo's published brand green; not extracted from a fetched page - partially-verified)
- Identity notes: No ambiguity.
- Confidence: high on scale/platforms; medium on pricing and India-specific course details

## Stimuler

- Official name: Stimuler AI: English Fluency (App Store: 'Stimuler- English Speaking App')
- Company / HQ: Stimuler Private Limited; India (Bengaluru per editorial coverage; official site does not state)
- Founded: 2022 (Entrepreneur India, Apr 2025; YourStory) - partially-verified
- Website: https://stimuler.tech/  | Play: https://play.google.com/store/apps/details?id=com.stimuler  | App Store: https://apps.apple.com/in/app/stimuler-english-speaking-app/id1627501632
- Description: Quote (site): 'AI English Speaking Coach with Instant Feedback'.
- Method: Voice-first: record 60-second impromptu speeches or chat with AI coach 'Sarah' on 100+ topics, get feedback in under 20-30 seconds on pronunciation, fluency, grammar, vocabulary, fillers, pace and tone; personalised practice plan; IELTS speaking band prediction and live video mock tests.
- Pricing: No price page on stimuler.tech (/pricing 404). Play/App Store copy: 'less than $5/month'. App Store (India) SKUs: Monthly ₹199/₹299/₹399, Annual ₹699/₹999/₹1,999, weekly ₹149 (as of 2026-10-12); Play IAP range ₹99–₹3,999.
- Tutor model: AI only - AI coach Sarah; patented voice AI; no human tutors described.
- Languages taught: English only
- Interface languages: English
- Key strengths:
  - Fast, granular speech feedback (pronunciation, fluency, grammar, vocabulary, fillers, pace, tone) in under 20-30 seconds.
  - IELTS speaking focus: band prediction and live video mock tests with an AI interviewer; 60+ practice tests (Play).
  - Google Play Best of 2023 India, 'Best with AI' (as 'Stimuler- IELTS Speaking Coach') - official Google India blog.
  - Global footprint: 1Cr+ Play downloads, 4.6 from 217.6K reviews; users in 200+ countries.
- Meaningful limitations:
  - No Indian-language explanations described; feedback and UI in English, which can be hard for absolute beginners.
  - No public price list; many overlapping App Store SKUs (₹149 weekly to ₹1,999 annual) make pricing opaque.
  - Scenario roleplays (interview/workplace) are only lightly described; core loop is speech analysis rather than guided conversation.
  - User-count claims vary across own channels (2M+ on Play, 12M+ on App Store, 13M+ on site).
- Best-fit learner: Intermediate English speakers, especially IELTS/TOEFL candidates and job-seekers, who can already form sentences and want precise, fast AI feedback to polish fluency, pronunciation and band score.
- Where it may beat SpeakX: IELTS band scoring and video mock tests; very detailed per-speech analytics (fillers, pace, tone); recognised by Google Play Best of 2023 India; serves global learners beyond India.
- Notable facts:
  - Google Play Best of 2023 (India), category 'Best with AI', winner 'Stimuler- IELTS Speaking Coach'. [verified (Google India blog)] https://blog.google/intl/en-in/products/platforms/google-plays-best-apps-and-games-of-2023-in-india/
  - Raised USD 3.75M pre-Series A led by Lightspeed and SWC Global (Entrepreneur India, 30 Apr 2025); founders Akshay Akash (CEO), Ankit Kumar Pandey, Anesh Srivastav, Akshat Baranwal; 4M+ installs and 45K+ paying users at the time. [editorial] https://india.entrepreneur.com/news-and-trends/stimuler-raises-usd-375-mn-funding-to-scale-voice-first/490839
  - Founders listed in Forbes 30 Under 30 Asia 2026 (Consumer & Enterprise Tech) per IIT (BHU) Foundation post. [not-verified against Forbes] https://www.iitbhufoundation.org/from-iit-bhu-to-forbes-30-under-30-the-stimuler-story/
  - Site claims 13M+ downloads, 200+ countries, 4.8/5 rating. [company claim] https://stimuler.tech/
- Card copy: "Voice-first AI English coach: 60-second speeches, instant feedback, IELTS band prediction. Free to start." (105 chars)
- Difference vs SpeakX: "Speech-analysis and IELTS scoring in English only; SpeakX teaches via guided voice calls with explanations in 7 Indian languages." (129 chars)
- Logo: https://play-lh.googleusercontent.com/iddvYfnXgP4_tkEaLduf9drCYnijJwTZFzo2FtIV61fg-54Mgmpm_O-cxsY8A_Ol0N6bEhc7JEARer6cInxQYQ (HTTP 200 image/png (Play icon), checked 2026-10-12); brand colour: #8D48FF / #542BFA (purple gradient in stimuler.tech markup; cyan #2BE1FA, mint #5DD9A5 accents)
- Identity notes: Earlier store names: 'Stimuler- IELTS Speaking Coach', 'Stimuler- IELTS Speaking Buddy'. Unrelated to 'Stimulus' brands.
- Confidence: medium-high (features/ratings verified; pricing partial; HQ via editorial)

## ELSA Speak

- Official name: ELSA Speak: English Learning (App Store: 'ELSA Speak - English Learning')
- Company / HQ: ELSA Corp; United States (California; site footer: Los Gatos, CA; operations office in Ho Chi Minh City, Vietnam)
- Founded: 2015 (founder Vu Van with Dr. Xavier Anguera; multiple press sources) - partially-verified
- Website: https://elsaspeak.com/en/  | Play: https://play.google.com/store/apps/details?id=us.nobarriers.elsa  | App Store: https://apps.apple.com/in/app/elsa-speak-english-learning/id1083804886
- Description: Quote (site): '#1 AI English Speaking App for Fluency and Confidence' (company claim).
- Method: Pronunciation-first AI coaching: speech recognition scores every syllable; personalised learning path from a pronunciation test; 8,000+ lessons; AI role-plays with specialised coaches (Workplace, Interviews, Dating, Meetings, Presentations); Speech Analyzer; bilingual mode for beginners; gamified lessons.
- Pricing: Pricing page (elsaspeak.com/en/elsa-subscription) advertises '7 days free trial' but prices load dynamically; App Store (India) SKUs: Monthly ₹499, 3 months Pro ₹909, 1 Year Premium ₹3,449, 1 year ₹12,900 (as of 2026-10-12); Play IAP range ₹10–₹46,500.
- Tutor model: AI only - FAQ: 'there won't be any online classes or exchanges with native speakers/teachers'.
- Languages taught: English only
- Interface languages: English, Vietnamese, Japanese, Indonesian, Portuguese, Spanish, Chinese (Traditional/Simplified), Thai, Korean, French, German, Turkish, Hindi (per help centre via search snippet)
- Key strengths:
  - Deep pronunciation technology: syllable-level scoring, accent choice, Speech Analyzer with test-score predictions.
  - Role-play coaches for Workplace, Interviews, Meetings, Presentations; career-specific vocabulary; exam prep (IELTS/TOEFL/TOEIC).
  - Large global footprint: 1Cr+ Play downloads, 1.01M Play reviews; 92M+ downloads claimed; B2B/schools offerings (1,300+ organisations claimed).
  - Hindi display language and bilingual mode for beginners.
- Meaningful limitations:
  - Lowest Play rating in this set (4.2 from 1.01M reviews, 12 Oct 2026).
  - Only Hindi among Indian languages; no Tamil, Telugu, Kannada, Malayalam, Marathi or Bengali.
  - Free tier is thin (first 2 lessons per topic); premium SKUs in India are complex (₹499/month to ₹12,900/year).
  - Oriented to pronunciation drills; voice-call style free conversation is a newer add-on rather than the core.
- Best-fit learner: Intermediate professionals and exam candidates who want to fix pronunciation and accent with precise feedback, practise workplace/interview role-plays, and can work in English (or Hindi) UI.
- Where it may beat SpeakX: Pronunciation analytics at syllable level, accent selection, exam-prep (IELTS/TOEFL/TOEIC) tracks, web-based Speech Analyzer, and enterprise/school programmes.
- Notable facts:
  - Founded 2015 by Vu Van (CEO) with speech scientist Xavier Anguera; Series C of $23M led by UOB Venture Management (press). [editorial, partially-verified] https://peopleofcolorintech.com/articles/english-language-app-secures-23m-series-c-launches-personal-ai-tutor/
  - Site claims 92M+ downloads, 90M+ learners, 4.9-star rating, 1,300+ organisations. [company claim] https://elsaspeak.com/en/elsa-subscription
  - Play listing: Honorable Mention, Fast Company World Changing Ideas 2020 (AI & Data); EdTech Digest Top 100 Influencers 2020. [company listing claim] https://play.google.com/store/apps/details?id=us.nobarriers.elsa&hl=en_IN
- Card copy: "Global AI pronunciation coach with syllable-level feedback, role-play coaches and exam prep; Hindi UI." (102 chars)
- Difference vs SpeakX: "Pronunciation-first drills with Hindi-only Indian support; SpeakX leads with voice-call roleplays in 7 Indian languages." (120 chars)
- Logo: https://play-lh.googleusercontent.com/FeJdCUKfEw7ABZCxecfOj8f44JMBjfwCgcF4vflsD3-UB5pyPkmw7Q4sKCsc4MlLOm3tNAuJ04waLoW__VL4Hio (HTTP 200 image/jpeg (Play icon), checked 2026-10-12; site favicon also 200: https://elsaspeak.com/wp-content/uploads/2021/07/cropped-ms-icon-310x310-1-192x192.png); brand colour: not-verified
- Identity notes: ELSA = English Language Speech Assistant; Play package us.nobarriers.elsa; support domain elsanow.io.
- Confidence: high on features; medium on interface-language list and HQ

## Speak

- Official name: Speak: Language Learning
- Company / HQ: Speakeasy Labs, Inc.; United States (San Francisco)
- Founded: 2016 (founders Connor Zwick, Andrew Hsu; press) - partially-verified
- Website: https://www.speak.com/  | Play: https://play.google.com/store/apps/details?id=com.selabs.speak  | App Store: https://apps.apple.com/in/app/speak-language-learning/id1286609883
- Description: Quote (site): 'An expert-crafted curriculum, personalized by AI.'
- Method: 'The Speak Method': Learn (expert-built lesson with a local teacher) -> Practice (repeat phrases aloud) -> Apply (open conversation with the AI Speak Tutor) with real-time pronunciation and phrasing feedback; Premium Plus adds 'Made for You' lessons and custom review.
- Pricing: No public price page (speak.com/pricing 404; 'varies by region'). App Store (India) SKUs: Monthly Subscription ₹1,949, Monthly Premium ₹2,299, Annual Subscription ₹4,999, Annual Premium ₹9,900, Annual Premium Plus ₹22,900 (as of 2026-10-12); Play IAP range ₹1,199–₹26,000.
- Tutor model: AI only - AI Speak Tutor; lesson videos feature teachers but no live human tutoring.
- Languages taught: English (for 15 native languages), Spanish, French, Japanese, Korean, Italian, Simplified Chinese (for English speakers)
- Interface languages: English, French, German, Hindi, Indonesian, Italian, Japanese, Korean, Polish, Portuguese, Simplified Chinese, Spanish, Thai, Traditional Chinese, Turkish, Vietnamese
- Key strengths:
  - Strong AI conversation tutor with real-time pronunciation and phrasing feedback; OpenAI partnership (site).
  - Expert-built curriculum with a clear Learn -> Practice -> Apply loop.
  - Multi-language: English for 15 native languages plus six other target languages.
  - Well funded: $78M Series C at $1B valuation (Nov 2024, press); 15M+ downloads claimed.
- Meaningful limitations:
  - Expensive in India: Premium ₹2,299/month on the App Store (vs SpeakX ₹299); no permanent free tier, only a 7-day trial.
  - Indian-language support limited to Hindi; tiny India App Store footprint (192 ratings).
  - No web/desktop version.
  - No interview/workplace/exam tracks described on official pages.
- Best-fit learner: Globally mobile, higher-income learners who want premium AI conversation practice and are comfortable with an English or Hindi interface; also English speakers learning Spanish, French, Japanese, Korean, Italian or Chinese.
- Where it may beat SpeakX: Teaches six other languages; OpenAI-partnered tutor with 'Made for You' lessons; broader global interface-language support (16 languages).
- Notable facts:
  - Backed by OpenAI Startup Fund; formal OpenAI partnership (site). [verified on official site] https://www.speak.com/
  - $78M Series C led by Accel, Nov 2024, $1B valuation; total ~$162M raised (press/databases). [editorial, partially-verified] https://www.unite.ai/speak-secures-78m-series-c-funding-at-1b-valuation-to-transform-ai-powered-language-learning/
  - Site claims 15M+ downloads and 4.8 rating across stores. [company claim] https://www.speak.com/
- Card copy: "OpenAI-backed language app with an AI tutor; English (incl. for Hindi speakers) plus six other languages." (105 chars)
- Difference vs SpeakX: "Premium global tutor at ₹2,299/month with Hindi-only Indian support; SpeakX is ₹299/month in 7 Indian languages." (112 chars)
- Logo: https://cdn.prod.website-files.com/61a88c135006e8345b005efd/6577ac86d3e376c4d5f8243e_logo.svg (HTTP 200 image/svg+xml (official site logo), checked 2026-10-12; Play icon alt: https://play-lh.googleusercontent.com/B8OICldFwhV66WnijbpJ0a5gvvMxs1yi9RksW2BeR70O2514ihdwge0_75r9bsKsYamBgEQ7R6Lq1wEauX_x4Q (200)); brand colour: not-verified
- Identity notes: Speak (speak.com, Speakeasy Labs) is a different company from SpeakX. Not to be confused with 'Speak AI' (speakai.co, transcription) or 'SpeakApp'.
- Confidence: high on features/platforms; medium on pricing (store SKUs only)

## Notes and caveats

- All Play figures are from the en_IN/gl=IN listing pages fetched 2026-10-12; ratings rounded to one decimal as displayed, raw value in parentheses.
- App Store figures are from the India (in) storefront; IAP SKU prices are as listed on the storefront page and are not a commitment of current in-app offers.
- Prices from third-party roundups were deliberately excluded. Where an official price page does not exist or did not render, subscription_pricing is 'partial' (store SKUs only) or 'not-verified'.
- Free-text dimensions (primary_learning_objective, target_learner, human_tutor_or_ai_only, languages_taught, interface_languages, subscription_pricing descriptions) carry descriptive values rather than the 4-value scale.
- SpeakX: never say 'free trial' (trial costs ₹2), never '14 Indian languages', never '4.6+ rating' (homepage shows '4.6+' but Play displays 4.5 - use Play). Use the Play URL only as an href.
- Supernova identity: confirmed as 'Supernova AI: Spoken English' by L8 Cones Interactive Pvt Ltd (getsupernova.ai). Name collides with unrelated Supernova products; the company's legacy 'Supernova for Kids' site is not the comparison target.
- MySivi website (mysivi.ai) blocks automated fetching (Vercel checkpoint 429/403); feature and pricing data come from Play/App Store listings, YC and Inc42.
- Duolingo and Speak do not publish regional prices on public pages; Duolingo DAU/MAU from SEC filings via search results.
- Funding figures for Supernova conflict across databases (Inc42 vs Tracxn) and are flagged 'conflicting'.
- Logo URLs are Play Store icon CDN URLs (verified HTTP 200 on 2026-10-12) except Speak, where the official site SVG logo was used.

## Open questions

- SpeakX: homepage shows '4.6+ rating' while Play displays 4.5 - use Play (shared-context rule). Founding year of the SpeakX brand is not on official pages (press says 2024 launch).
- Supernova: no public price list; funding figures conflict (Inc42 $1.10M vs Tracxn $4.67M); '7.5M paid users' is an unverified homepage claim; exact Indian-language list beyond Hindi/Tamil/Telugu/Bengali relies on a vendor case study.
- MySivi: official site blocks bots - pricing page, placement test, progress tracking and web availability unverified; current paid tiers appear far higher (₹999/month) than the 2024 Inc42 figures (₹399/month).
- Duolingo: India prices for Super/Max not public; English-from-Tamil/Telugu course launches verified only via news coverage, not duolingo.com (JS-rendered).
- Stimuler: HQ (Bengaluru) comes from editorial coverage; interview/workplace scenarios are only lightly described; Forbes 30U30 2026 claim not checked against Forbes.
- ELSA: help-centre language article returned 404 on fetch - Hindi UI/translation support is from a search snippet of that article; HQ listed as Los Gatos, CA on site footer vs 'San Francisco' in press.
- Speak: no placement test, interview or workplace tracks found on fetched pages - may exist in-app; India App Store footprint is tiny (192 ratings).

// GENERATED from research/competitors.json by scripts/build-products.py. Edit the JSON and re-run.
// Every dimension carries its evidence note and source URL; values are yes | partial | no | not-verified.
import type { Product } from "@/lib/types";

export const products: Record<string, Product> = {
  "speakx": {
    "slug": "speakx",
    "name": "SpeakX",
    "company": "Ivypods Technology Private Limited",
    "country": "India (Gurugram)",
    "website": "https://speakx.ai/",
    "logo": "/logos/speakx-mark-512.png",
    "logoAlt": "SpeakX logo",
    "brandColor": "#ff4d00",
    "tagline": "AI English speaking app for Indian learners; talk to Sia in 7 Indian languages, ~15 min a day.",
    "description": "Paraphrase: AI English speaking practice app; 'Aapka English Speaking Partner' (speakx.ai).",
    "founded": "Ivypods Technology copyright 2020 on App Store listing; SpeakX brand launch year not stated on official pages (third-party press says 2024) - partially-verified",
    "primaryObjective": "Spoken English confidence for Indian learners (job interviews, office, higher studies, travel, family/social).",
    "targetLearner": "Indian young adults and adults: students, job-seekers, working professionals, parents, homemakers (never positioned as a kids' app).",
    "teachingMethod": "Conversational practice: learners talk daily (~15 min) with Sia, the AI speaking partner, in real-life roleplays; explanations start in the learner's Indian language and gradually shift to English; CEFR-mapped paths Pre-A1 to advanced; progress report on fluency, vocabulary, grammar, pronunciation.",
    "languagesTaught": "English only",
    "interfaceLanguages": "English plus 7 Indian languages for instruction (Hindi, Tamil, Telugu, Kannada, Malayalam, Marathi, Bengali)",
    "humanOrAi": "AI only",
    "play": {
      "rating": "4.5 (4.534 raw)",
      "reviews": "92,923",
      "downloads": "1Cr+ (10M+)",
      "url": "https://play.google.com/store/apps/details?id=yellowclass.kids.live",
      "checked": "2026-10-12"
    },
    "appStore": {
      "rating": "4.7",
      "reviews": "258 ratings (India storefront)",
      "url": "https://apps.apple.com/in/app/speakx-english-speaking-app/id6756059415",
      "checked": "2026-10-12"
    },
    "pricing": {
      "summary": "Free to start; Premium ₹2 for a 3-day trial, then ₹299/month (speakx.ai, India)",
      "details": [
        "yes",
        "Premium: 3-day trial for ₹2, then ₹299/month, auto-renews, cancel anytime (speakx.ai/premium, India, web, as of 2026-10-12). App Store IN IAP shows 'SpeakX Premium Monthly ₹299' and a ₹99 SKU; Play IAP range ₹99–₹300."
      ],
      "region": "India",
      "checked": "2026-10-12",
      "status": "yes",
      "source": "https://speakx.ai/premium"
    },
    "dimensions": {
      "suitability_for_indian_learners": {
        "value": "yes",
        "note": "Built for India: explanations in 7 Indian languages, INR pricing, Indian scenarios (parent-teacher meetings, interviews), MS Dhoni association.",
        "source": "https://play.google.com/store/apps/details?id=yellowclass.kids.live&hl=en_IN"
      },
      "support_for_absolute_beginners": {
        "value": "yes",
        "note": "Play: 'You don't need perfect English to start'; CEFR paths begin at Pre-A1 (shared context); teaching begins in the learner's own language.",
        "source": "https://play.google.com/store/apps/details?id=yellowclass.kids.live&hl=en_IN"
      },
      "support_for_indian_languages": {
        "value": "yes",
        "note": "Hindi, Tamil, Telugu, Kannada, Malayalam, Marathi, Bengali listed as supported learning languages on Play and App Store.",
        "source": "https://play.google.com/store/apps/details?id=yellowclass.kids.live&hl=en_IN"
      },
      "hindi_guidance": {
        "value": "yes",
        "note": "Hindi is first in the supported-language list; homepage: 'teaches in your language and slowly moves the conversation across'.",
        "source": "https://speakx.ai/"
      },
      "regional_language_support": {
        "value": "yes",
        "note": "Tamil, Telugu, Kannada, Malayalam, Marathi, Bengali explicitly listed.",
        "source": "https://play.google.com/store/apps/details?id=yellowclass.kids.live&hl=en_IN"
      },
      "ai_conversation_practice": {
        "value": "yes",
        "note": "'Meet Sia, your AI English practice partner... Practise real-life conversations'; Premium: 'Unlimited talktime with AI 24x7'.",
        "source": "https://speakx.ai/premium"
      },
      "structured_course_progression": {
        "value": "yes",
        "note": "CEFR paths Pre-A1 to advanced (shared context, verified by content team); 'Build confidence step by step' (Play).",
        "source": "https://play.google.com/store/apps/details?id=yellowclass.kids.live&hl=en_IN"
      },
      "personalised_learning_plans": {
        "value": "partial",
        "note": "Progress report tells learners 'what to work on next'; a '24x7 AI Teacher that gives instant feedback' (Premium). An explicit personalised plan generator is not described on official pages.",
        "source": "https://speakx.ai/premium"
      },
      "initial_proficiency_assessment": {
        "value": "partial",
        "note": "CEFR-mapped levels from Pre-A1 imply level placement, but a formal placement test is not described on the website or store listings.",
        "source": "https://speakx.ai/"
      },
      "speaking_practice": {
        "value": "yes",
        "note": "Core product: 'Speak English every day' with Sia on voice calls; 'Practise speaking English out loud, about fifteen minutes a day'.",
        "source": "https://speakx.ai/"
      },
      "real_life_roleplays": {
        "value": "yes",
        "note": "'100+ Real life speaking scenario practice' (Premium page); interviews, office, parent-teacher meetings, phone calls (shared context).",
        "source": "https://speakx.ai/premium"
      },
      "job_interview_english": {
        "value": "yes",
        "note": "Play: 'Job Interviews - Speak with confidence in your next interview.'",
        "source": "https://play.google.com/store/apps/details?id=yellowclass.kids.live&hl=en_IN"
      },
      "workplace_english": {
        "value": "yes",
        "note": "Play: 'Office & Promotions - Communicate better at work and prepare for your next opportunity.'",
        "source": "https://play.google.com/store/apps/details?id=yellowclass.kids.live&hl=en_IN"
      },
      "everyday_english": {
        "value": "yes",
        "note": "Play: 'Everyday Conversations - Speak more easily with people around you.'",
        "source": "https://play.google.com/store/apps/details?id=yellowclass.kids.live&hl=en_IN"
      },
      "family_social_conversations": {
        "value": "yes",
        "note": "Play: 'Family & Social Life - Communicate better and feel more confident in everyday situations.'",
        "source": "https://play.google.com/store/apps/details?id=yellowclass.kids.live&hl=en_IN"
      },
      "education_student_use_cases": {
        "value": "yes",
        "note": "Play: 'Higher Studies - Improve your English for college, courses and studying abroad.'",
        "source": "https://play.google.com/store/apps/details?id=yellowclass.kids.live&hl=en_IN"
      },
      "travel_english": {
        "value": "yes",
        "note": "Play: 'Travel - Feel more confident speaking English while travelling.'",
        "source": "https://play.google.com/store/apps/details?id=yellowclass.kids.live&hl=en_IN"
      },
      "pronunciation_practice": {
        "value": "yes",
        "note": "Progress Report tracks Pronunciation; Play: 'Improve your speaking'.",
        "source": "https://play.google.com/store/apps/details?id=yellowclass.kids.live&hl=en_IN"
      },
      "grammar_guidance": {
        "value": "yes",
        "note": "Progress Report tracks Grammar; AI teacher gives instant feedback.",
        "source": "https://play.google.com/store/apps/details?id=yellowclass.kids.live&hl=en_IN"
      },
      "vocabulary_development": {
        "value": "yes",
        "note": "Progress Report tracks Vocabulary.",
        "source": "https://play.google.com/store/apps/details?id=yellowclass.kids.live&hl=en_IN"
      },
      "ai_feedback": {
        "value": "yes",
        "note": "Premium: '24x7 AI Teacher that gives instant feedback'; 'Learn from your mistakes'.",
        "source": "https://speakx.ai/premium"
      },
      "progress_tracking": {
        "value": "yes",
        "note": "'Know how you are improving with your Progress Report' - Speaking, Fluency, Vocabulary, Grammar, Pronunciation, Practice.",
        "source": "https://play.google.com/store/apps/details?id=yellowclass.kids.live&hl=en_IN"
      },
      "gamification": {
        "value": "yes",
        "note": "Confidence Meter and city leaderboards (shared context, content-team verified); MS Dhoni motivation messaging (Play).",
        "source": "https://play.google.com/store/apps/details?id=yellowclass.kids.live&hl=en_IN"
      },
      "free_tier": {
        "value": "yes",
        "note": "Free to download and start ('Get started' via Play/App Store); Premium unlocks unlimited AI talk time, 100+ scenarios. Do not call the ₹2 trial a 'free trial'.",
        "source": "https://speakx.ai/premium"
      },
      "android": {
        "value": "yes",
        "note": "Google Play listing live, updated 12 Oct 2026.",
        "source": "https://play.google.com/store/apps/details?id=yellowclass.kids.live&hl=en_IN"
      },
      "ios": {
        "value": "yes",
        "note": "App Store (India) listing 'SpeakX: English Speaking App', iPhone and iPad.",
        "source": "https://apps.apple.com/in/app/speakx-english-speaking-app/id6756059415"
      }
    },
    "strengths": [
      "Voice-call conversation practice with an AI partner (Sia), with unlimited AI talk time on Premium (speakx.ai/premium).",
      "Teaches in 7 Indian languages and shifts the conversation to English gradually (speakx.ai, Play listing).",
      "India-specific roleplays: interviews, office, parent-teacher meetings, phone calls; 100+ scenarios on Premium.",
      "Large Indian user base: 1Cr+ Play downloads, 4.5 rating from 92.9K reviews (Play, 12 Oct 2026).",
      "Low, transparent INR pricing: ₹2 for a 3-day trial then ₹299/month (as of 2026-10-12)."
    ],
    "limitations": [
      "Teaches English only; no other target languages (unlike Duolingo/Speak/ELSA for multi-language learners).",
      "No web/desktop version; mobile apps only.",
      "No exam-specific IELTS/TOEFL band scoring described on official pages (Stimuler and ELSA offer this).",
      "App Store (India) footprint is small and new (258 ratings) compared with the Play listing."
    ],
    "bestFit": "Indian adults who understand Hindi or another supported Indian language and want to actually speak English for interviews, work, studies, or family life, practising ~15 minutes a day on a phone. Suits hesitant beginners who want explanations in their own language and judgment-free voice practice.",
    "sources": [
      {
        "label": "speakx.ai/",
        "url": "https://speakx.ai/",
        "checked": "2026-10-12"
      },
      {
        "label": "speakx.ai/premium",
        "url": "https://speakx.ai/premium",
        "checked": "2026-10-12"
      },
      {
        "label": "play.google.com/store/apps/details?id=yellowclass.kids.l",
        "url": "https://play.google.com/store/apps/details?id=yellowclass.kids.live&hl=en_IN",
        "checked": "2026-10-12"
      },
      {
        "label": "apps.apple.com/in/app/speakx-english-speaking-app/id675",
        "url": "https://apps.apple.com/in/app/speakx-english-speaking-app/id6756059415",
        "checked": "2026-10-12"
      }
    ]
  },
  "supernova": {
    "slug": "supernova",
    "name": "Supernova",
    "company": "L8 Cones Interactive Private Limited (brand: Supernova)",
    "country": "India (Bengaluru, HSR Layout)",
    "website": "https://www.getsupernova.ai/",
    "logo": "/logos/supernova.png",
    "logoAlt": "Supernova logo",
    "brandColor": "#8652FF",
    "tagline": "Bengaluru-made structured spoken-English course with 24/7 AI tutor Nova; explains in Hindi, Tamil, Telugu.",
    "description": "Quote: 'The only app focused on making you SPEAK English' (getsupernova.ai).",
    "founded": "2021 (Inc42/Tracxn company profiles; not stated on official site) - partially-verified",
    "primaryObjective": "Spoken English fluency for beginners, with grammar, vocabulary, listening and pronunciation support.",
    "targetLearner": "Indian beginners and intermediate learners who prefer explanations in their mother tongue; site testimonials include parents of school children.",
    "teachingMethod": "Structured step-by-step spoken-English course with ~20-minute daily personalised lessons: learn one sentence pattern, translate 100-300 short lines from your language, controlled AI chats with Nova, free speaking (extempore), spaced repetition on days 1/2/4/7/14/30. Explanations in Hindi and other Indian languages.",
    "languagesTaught": "English only",
    "interfaceLanguages": "English plus Indian-language explanations (Hindi, Tamil, Telugu, Bengali and more)",
    "humanOrAi": "AI only",
    "play": {
      "rating": "4.7 (4.734 raw)",
      "reviews": "289,513",
      "downloads": "10M+",
      "url": "https://play.google.com/store/apps/details?id=live.gosupernova.app",
      "checked": "2026-10-12"
    },
    "appStore": {
      "rating": "4.7",
      "reviews": "37,408 ratings (India storefront)",
      "url": "https://apps.apple.com/in/app/supernova-ai-spoken-english/id6447939054",
      "checked": "2026-10-12"
    },
    "pricing": {
      "summary": "Free to start; no public price list. App Store India in-app purchases ₹99–₹1,999",
      "details": [
        "yes",
        "No public price list on getsupernova.ai. App Store (India) IAP SKUs 'Supernova Premium' range ₹99–₹1,999; Play IAP range ₹100–₹21,200 per item (as of 2026-10-12). Third-party figures (e.g. ₹499/month, ₹1,999/year) not used."
      ],
      "region": "India",
      "checked": "2026-10-12",
      "status": "partial",
      "source": "https://apps.apple.com/in/app/supernova-ai-spoken-english/id6447939054"
    },
    "dimensions": {
      "suitability_for_indian_learners": {
        "value": "yes",
        "note": "Bengaluru company; explanations in Hindi, Tamil, Telugu, Bengali 'and more'; INR pricing; App Store tagline \"India's Top Spoken English Learning App\".",
        "source": "https://apps.apple.com/in/app/supernova-ai-spoken-english/id6447939054"
      },
      "support_for_absolute_beginners": {
        "value": "yes",
        "note": "Play: 'Built for Beginners and Steady Progress'; 'A Structured English Speaking Course for Beginners'.",
        "source": "https://play.google.com/store/apps/details?id=live.gosupernova.app&hl=en_IN"
      },
      "support_for_indian_languages": {
        "value": "yes",
        "note": "App Store: 'full support in Hindi, Tamil, Telugu, Bengali, and more'. ElevenLabs case study (Mar 2025) lists Hindi, Tamil, Telugu, Bengali, Marathi, Kannada, Gujarati, Punjabi, Odia, Assamese.",
        "source": "https://apps.apple.com/in/app/supernova-ai-spoken-english/id6447939054"
      },
      "hindi_guidance": {
        "value": "yes",
        "note": "Play: 'Learn English in Hindi and Regional Languages'.",
        "source": "https://play.google.com/store/apps/details?id=live.gosupernova.app&hl=en_IN"
      },
      "regional_language_support": {
        "value": "yes",
        "note": "Tamil, Telugu, Bengali named on App Store; Tamil-to-English translation praised in homepage testimonial.",
        "source": "https://apps.apple.com/in/app/supernova-ai-spoken-english/id6447939054"
      },
      "ai_conversation_practice": {
        "value": "yes",
        "note": "Homepage: '24/7 practice with Nova, anytime'; 'Talk with Nova (Controlled)' and 'Speak Freely (Extempore)'.",
        "source": "https://www.getsupernova.ai/"
      },
      "structured_course_progression": {
        "value": "yes",
        "note": "Play: 'step-by-step learning flow'; homepage describes Beginner to Advanced trajectory with spaced repetition.",
        "source": "https://play.google.com/store/apps/details?id=live.gosupernova.app&hl=en_IN"
      },
      "personalised_learning_plans": {
        "value": "yes",
        "note": "Homepage: '20mins daily personalized lesson'; App Store: 'provides a personalized learning path'.",
        "source": "https://www.getsupernova.ai/"
      },
      "initial_proficiency_assessment": {
        "value": "partial",
        "note": "App Store: 'our app adapts to your level'; a formal level test is not described on official pages (third-party reviews mention one).",
        "source": "https://apps.apple.com/in/app/supernova-ai-spoken-english/id6447939054"
      },
      "speaking_practice": {
        "value": "yes",
        "note": "Core positioning: 'You learn a language by speaking it out loud'.",
        "source": "https://www.getsupernova.ai/"
      },
      "real_life_roleplays": {
        "value": "yes",
        "note": "App Store: 'Engaging role-plays, AI-led conversations, and interactive speaking exercises'.",
        "source": "https://apps.apple.com/in/app/supernova-ai-spoken-english/id6447939054"
      },
      "job_interview_english": {
        "value": "yes",
        "note": "Play: 'realistic situations such as introductions, interviews, and everyday conversations'.",
        "source": "https://play.google.com/store/apps/details?id=live.gosupernova.app&hl=en_IN"
      },
      "workplace_english": {
        "value": "partial",
        "note": "Play: 'conversations for daily life, interviews, and work' - work scenarios mentioned, specific office roleplays not detailed officially.",
        "source": "https://play.google.com/store/apps/details?id=live.gosupernova.app&hl=en_IN"
      },
      "everyday_english": {
        "value": "yes",
        "note": "Play: 'English Listening Practice with Everyday Speech', 'Vocabulary for Everyday Conversations'.",
        "source": "https://play.google.com/store/apps/details?id=live.gosupernova.app&hl=en_IN"
      },
      "family_social_conversations": {
        "value": "not-verified",
        "note": "Not described on official website or store listings.",
        "source": "https://play.google.com/store/apps/details?id=live.gosupernova.app&hl=en_IN"
      },
      "education_student_use_cases": {
        "value": "partial",
        "note": "Legacy site (app.gosupernova.live) markets a school-children course; the main app's listing does not detail student/academic scenarios.",
        "source": "https://app.gosupernova.live/"
      },
      "travel_english": {
        "value": "not-verified",
        "note": "Not described on official website or store listings (third-party roundups mention travel roleplays).",
        "source": "https://play.google.com/store/apps/details?id=live.gosupernova.app&hl=en_IN"
      },
      "pronunciation_practice": {
        "value": "yes",
        "note": "Play: 'Pronunciation Practice for Clear Speech' - sound clarity, stress, rhythm.",
        "source": "https://play.google.com/store/apps/details?id=live.gosupernova.app&hl=en_IN"
      },
      "grammar_guidance": {
        "value": "yes",
        "note": "Play: 'Grammar Support for Accurate Speaking'; App Store: Miss Nova gives 'instant grammar corrections'.",
        "source": "https://play.google.com/store/apps/details?id=live.gosupernova.app&hl=en_IN"
      },
      "vocabulary_development": {
        "value": "yes",
        "note": "Play: 'Vocabulary for Everyday Conversations'.",
        "source": "https://play.google.com/store/apps/details?id=live.gosupernova.app&hl=en_IN"
      },
      "ai_feedback": {
        "value": "yes",
        "note": "App Store: 'Miss Nova provides instant grammar corrections, pronunciation help, and personalized feedback'.",
        "source": "https://apps.apple.com/in/app/supernova-ai-spoken-english/id6447939054"
      },
      "progress_tracking": {
        "value": "partial",
        "note": "Homepage testimonial cites 'personalized progress tracking'; no official feature description of progress reports found.",
        "source": "https://www.getsupernova.ai/"
      },
      "gamification": {
        "value": "not-verified",
        "note": "No streaks, badges or leaderboards described on official pages.",
        "source": "https://play.google.com/store/apps/details?id=live.gosupernova.app&hl=en_IN"
      },
      "free_tier": {
        "value": "yes",
        "note": "Homepage: 'Get started for free today!'; Play/App Store: free download with in-app purchases.",
        "source": "https://www.getsupernova.ai/"
      },
      "android": {
        "value": "yes",
        "note": "Google Play listing live, updated 17 Sep 2026.",
        "source": "https://play.google.com/store/apps/details?id=live.gosupernova.app&hl=en_IN"
      },
      "ios": {
        "value": "yes",
        "note": "App Store (India) listing, iPhone.",
        "source": "https://apps.apple.com/in/app/supernova-ai-spoken-english/id6447939054"
      }
    },
    "strengths": [
      "Highest Play rating in this set: 4.7 from 289.5K reviews, 10M+ downloads (Play, 12 Oct 2026).",
      "Clear beginner-first structured course with a published method (pattern -> translation -> controlled chat -> free speaking -> spaced repetition).",
      "Mother-tongue explanations in Hindi, Tamil, Telugu, Bengali and more; Bengaluru-based team.",
      "24/7 AI tutor (Nova) with instant grammar and pronunciation corrections."
    ],
    "limitations": [
      "No public price list; in-app SKUs span ₹99–₹1,999 (App Store IN), so pricing is opaque to prospective buyers.",
      "Family/social, travel and gamification features are not described on official pages.",
      "Company funding data conflicts between databases (Inc42 $1.10M vs Tracxn $4.67M) and the site itself claims '7.5M paid users', which is unverified.",
      "Brand name collides with unrelated 'Supernova' products and a legacy kids-course site under the same company."
    ],
    "bestFit": "Indian beginners who want a structured, lesson-by-lesson spoken-English course explained in Hindi or a South Indian language, with daily 20-minute practice and an always-on AI tutor. Good for learners who like a fixed curriculum more than open-ended conversation.",
    "sources": [
      {
        "label": "getsupernova.ai/",
        "url": "https://www.getsupernova.ai/",
        "checked": "2026-10-12"
      },
      {
        "label": "play.google.com/store/apps/details?id=live.gosupernova.a",
        "url": "https://play.google.com/store/apps/details?id=live.gosupernova.app&hl=en_IN",
        "checked": "2026-10-12"
      },
      {
        "label": "apps.apple.com/in/app/supernova-ai-spoken-english/id644",
        "url": "https://apps.apple.com/in/app/supernova-ai-spoken-english/id6447939054",
        "checked": "2026-10-12"
      },
      {
        "label": "app.gosupernova.live/",
        "url": "https://app.gosupernova.live/",
        "checked": "2026-10-12"
      },
      {
        "label": "inc42.com/company/supernova-ai/",
        "url": "https://inc42.com/company/supernova-ai/",
        "checked": "2026-10-12"
      },
      {
        "label": "elevenlabs.io/blog/supernova",
        "url": "https://elevenlabs.io/blog/supernova",
        "checked": "2026-10-12"
      }
    ]
  },
  "mysivi": {
    "slug": "mysivi",
    "name": "MySivi",
    "company": "Ninjasalary, Inc. (App Store) / 'MySivi AI' developer name on Play; YC W22",
    "country": "India (Bengaluru); US-incorporated entity name on App Store",
    "website": "https://www.mysivi.ai/",
    "logo": "/logos/mysivi.png",
    "logoAlt": "MySivi logo",
    "brandColor": "#0e9bd8",
    "tagline": "YC-backed Bengaluru AI English coach: guided lessons, badges, translations in Hindi, Tamil, Telugu, Urdu.",
    "description": "Quote (Play): 'Your Personalized English Speaking App to Improve English Fluency'.",
    "founded": "2022 (Y Combinator profile: Founded 2022, batch W22; Inc42: Sept 2022 as Speakify AI) - verified via YC page",
    "primaryObjective": "Confident spoken English for interviews, classes and daily talk; exam prep (IELTS/TOEFL).",
    "targetLearner": "Indian beginners, students, professionals; copy mixes Hindi ('aur har conversation mein confidently English bole').",
    "teachingMethod": "AI-coach conversation practice (topic-based chats, real-time tasks) with instant corrections, a structured guided lesson path, translations in Indian languages, gamified rewards, exam/interview practice; YC page also describes practising with humans (peer practice).",
    "languagesTaught": "English only",
    "interfaceLanguages": "English with word translations in Hindi, Tamil, Telugu, Marathi, Bengali, Urdu and more",
    "humanOrAi": "AI tutor plus peer practice (claimed)",
    "play": {
      "rating": "4.7 (4.650 raw)",
      "reviews": "88,557",
      "downloads": "1Cr+ (10M+)",
      "url": "https://play.google.com/store/apps/details?id=com.practice.ninja_study",
      "checked": "2026-10-12"
    },
    "appStore": {
      "rating": "4.7",
      "reviews": "19,251 ratings (India storefront)",
      "url": "https://apps.apple.com/in/app/mysivi-ai-english-speaking-app/id1644736135",
      "checked": "2026-10-12"
    },
    "pricing": {
      "summary": "Free features; App Store India: ₹999/month, ₹1,999/3 months, ₹4,999/year",
      "details": [
        "yes",
        "App Store (India) IAP: 1 Month ₹999, 3 Months ₹1,999, 1 year ₹4,999 (as of 2026-10-12); Play IAP range ₹100–₹21,200. Website pricing page could not be fetched (bot checkpoint)."
      ],
      "region": "India",
      "checked": "2026-10-12",
      "status": "partial",
      "source": "https://apps.apple.com/in/app/mysivi-ai-english-speaking-app/id1644736135"
    },
    "dimensions": {
      "suitability_for_indian_learners": {
        "value": "yes",
        "note": "Play: 'the perfect English learning app for Indian learners who prefer mastering English in their native language'; Hinglish copy; INR pricing.",
        "source": "https://play.google.com/store/apps/details?id=com.practice.ninja_study&hl=en_IN"
      },
      "support_for_absolute_beginners": {
        "value": "yes",
        "note": "Play: 'Beginners who want to learn English speaking from scratch'.",
        "source": "https://play.google.com/store/apps/details?id=com.practice.ninja_study&hl=en_IN"
      },
      "support_for_indian_languages": {
        "value": "yes",
        "note": "Play: 'Understand words in Hindi, Tamil, Telugu, Marathi, Bengali, Urdu, and more' (translation support).",
        "source": "https://play.google.com/store/apps/details?id=com.practice.ninja_study&hl=en_IN"
      },
      "hindi_guidance": {
        "value": "yes",
        "note": "Hindi translation support plus Hindi/Hinglish copy in listing.",
        "source": "https://play.google.com/store/apps/details?id=com.practice.ninja_study&hl=en_IN"
      },
      "regional_language_support": {
        "value": "yes",
        "note": "Tamil, Telugu, Marathi, Bengali, Urdu named for word translation.",
        "source": "https://play.google.com/store/apps/details?id=com.practice.ninja_study&hl=en_IN"
      },
      "ai_conversation_practice": {
        "value": "yes",
        "note": "Play: 'topic-based chats and real-time tasks'; AI English coach 'listens to you, corrects mistakes'.",
        "source": "https://play.google.com/store/apps/details?id=com.practice.ninja_study&hl=en_IN"
      },
      "structured_course_progression": {
        "value": "yes",
        "note": "Play: 'Structured English Learning Path - Follow a guided plan'.",
        "source": "https://play.google.com/store/apps/details?id=com.practice.ninja_study&hl=en_IN"
      },
      "personalised_learning_plans": {
        "value": "yes",
        "note": "Play: 'personalized lessons', 'personalized feedback'.",
        "source": "https://play.google.com/store/apps/details?id=com.practice.ninja_study&hl=en_IN"
      },
      "initial_proficiency_assessment": {
        "value": "not-verified",
        "note": "No placement/level test described on store listings; official website blocked to automated fetch (Vercel checkpoint, 429/403).",
        "source": "https://play.google.com/store/apps/details?id=com.practice.ninja_study&hl=en_IN"
      },
      "speaking_practice": {
        "value": "yes",
        "note": "Core: 'English speaking practice app'.",
        "source": "https://play.google.com/store/apps/details?id=com.practice.ninja_study&hl=en_IN"
      },
      "real_life_roleplays": {
        "value": "partial",
        "note": "Play: 'speak English fluently in real-life situations'; topic-based chats. Scenario roleplay catalogue not described.",
        "source": "https://play.google.com/store/apps/details?id=com.practice.ninja_study&hl=en_IN"
      },
      "job_interview_english": {
        "value": "yes",
        "note": "Play: 'Boost confidence for IELTS, TOEFL, job interviews, and placements'.",
        "source": "https://play.google.com/store/apps/details?id=com.practice.ninja_study&hl=en_IN"
      },
      "workplace_english": {
        "value": "yes",
        "note": "Play: 'Professionals who want to speak English fluently for workplace communication'.",
        "source": "https://play.google.com/store/apps/details?id=com.practice.ninja_study&hl=en_IN"
      },
      "everyday_english": {
        "value": "yes",
        "note": "Play: 'Learners seeking an english speaking practice app for daily conversation'.",
        "source": "https://play.google.com/store/apps/details?id=com.practice.ninja_study&hl=en_IN"
      },
      "family_social_conversations": {
        "value": "partial",
        "note": "Inc42 (Apr 2024) says discussion topics include family and relationships; not on current listing.",
        "source": "https://inc42.com/startups/how-mysivi-is-using-ai-to-help-people-become-proficient-in-spoken-english/"
      },
      "education_student_use_cases": {
        "value": "yes",
        "note": "Play: 'Students studying for exams'; IELTS/TOEFL/placements.",
        "source": "https://play.google.com/store/apps/details?id=com.practice.ninja_study&hl=en_IN"
      },
      "travel_english": {
        "value": "partial",
        "note": "Inc42 (Apr 2024) mentions 'trip planning' topics; not on current listing.",
        "source": "https://inc42.com/startups/how-mysivi-is-using-ai-to-help-people-become-proficient-in-spoken-english/"
      },
      "pronunciation_practice": {
        "value": "yes",
        "note": "Play: 'pronunciation support for clearer spoken English'.",
        "source": "https://play.google.com/store/apps/details?id=com.practice.ninja_study&hl=en_IN"
      },
      "grammar_guidance": {
        "value": "yes",
        "note": "Play: 'grammar improvements, and fluency tips'.",
        "source": "https://play.google.com/store/apps/details?id=com.practice.ninja_study&hl=en_IN"
      },
      "vocabulary_development": {
        "value": "partial",
        "note": "Word translation into Indian languages implies vocabulary support; no dedicated vocabulary feature described.",
        "source": "https://play.google.com/store/apps/details?id=com.practice.ninja_study&hl=en_IN"
      },
      "ai_feedback": {
        "value": "yes",
        "note": "Play: 'instant feedback', 'corrects mistakes'.",
        "source": "https://play.google.com/store/apps/details?id=com.practice.ninja_study&hl=en_IN"
      },
      "progress_tracking": {
        "value": "not-verified",
        "note": "Not described on store listings.",
        "source": "https://play.google.com/store/apps/details?id=com.practice.ninja_study&hl=en_IN"
      },
      "gamification": {
        "value": "yes",
        "note": "Play: 'Earn badges, streaks, and points'.",
        "source": "https://play.google.com/store/apps/details?id=com.practice.ninja_study&hl=en_IN"
      },
      "free_tier": {
        "value": "yes",
        "note": "Play: 'Many features are available free'; Inc42 (2024) reported 30 minutes/day free.",
        "source": "https://play.google.com/store/apps/details?id=com.practice.ninja_study&hl=en_IN"
      },
      "android": {
        "value": "yes",
        "note": "Play listing live, updated 1 Oct 2026.",
        "source": "https://play.google.com/store/apps/details?id=com.practice.ninja_study&hl=en_IN"
      },
      "ios": {
        "value": "yes",
        "note": "App Store (India) listing, iPhone only.",
        "source": "https://apps.apple.com/in/app/mysivi-ai-english-speaking-app/id1644736135"
      }
    },
    "strengths": [
      "Large installed base: 1Cr+ Play downloads, 4.7 rating from 88.6K reviews (Play, 12 Oct 2026).",
      "Explicit gamification (badges, streaks, points) and offline modules.",
      "Exam and placement focus (IELTS, TOEFL, interviews) alongside everyday conversation.",
      "Translation support in six-plus Indian languages including Urdu."
    ],
    "limitations": [
      "Official website and pricing page block automated access; public pricing only visible as App Store SKUs (₹999/month is notably higher than SpeakX's ₹299).",
      "No progress report, placement test or scenario catalogue described on official listings.",
      "Mostly chat/text-task oriented in listing copy; voice-call style practice is not explicit."
    ],
    "bestFit": "Indian students and early-career professionals who want a gamified, exam-aware English practice app with Hindi/Tamil/Telugu word translations, and who prefer a guided lesson path plus AI chat.",
    "sources": [
      {
        "label": "play.google.com/store/apps/details?id=com.practice.ninja",
        "url": "https://play.google.com/store/apps/details?id=com.practice.ninja_study&hl=en_IN",
        "checked": "2026-10-12"
      },
      {
        "label": "apps.apple.com/in/app/mysivi-ai-english-speaking-app/id",
        "url": "https://apps.apple.com/in/app/mysivi-ai-english-speaking-app/id1644736135",
        "checked": "2026-10-12"
      },
      {
        "label": "ycombinator.com/companies/mysivi",
        "url": "https://www.ycombinator.com/companies/mysivi",
        "checked": "2026-10-12"
      },
      {
        "label": "inc42.com/startups/how-mysivi-is-using-ai-to-help-",
        "url": "https://inc42.com/startups/how-mysivi-is-using-ai-to-help-people-become-proficient-in-spoken-english/",
        "checked": "2026-10-12"
      },
      {
        "label": "mysivi.ai/ (HTTP 429/403 bot checkpoint)",
        "url": "https://www.mysivi.ai/ (HTTP 429/403 bot checkpoint)",
        "checked": "2026-10-12"
      }
    ]
  },
  "duolingo": {
    "slug": "duolingo",
    "name": "Duolingo",
    "company": "Duolingo, Inc. (NASDAQ: DUOL)",
    "country": "United States (Pittsburgh, PA)",
    "website": "https://www.duolingo.com/",
    "logo": "/logos/duolingo.png",
    "logoAlt": "Duolingo logo",
    "brandColor": "#58CC02",
    "tagline": "Free, gamified lessons in 40+ languages; English courses from Hindi, Bengali, Tamil and Telugu. 500M+ Play downloads.",
    "description": "Quote (Play): 'the fun, free app for learning 40+ languages through quick, bite-sized lessons'.",
    "founded": "2011 (widely reported; official press page did not render to fetch) - partially-verified",
    "primaryObjective": "General language learning across 40+ languages (plus math, music, chess); English is one course among many.",
    "targetLearner": "Global mass-market learners of all ages and levels; casual daily habit.",
    "teachingMethod": "Gamified bite-sized lessons (reading, writing, listening, speaking exercises) with streaks, XP, leagues and hearts; AI features (Roleplay, Video Call with Lily) in the Duolingo Max tier.",
    "languagesTaught": "40+ languages incl. English, Spanish, French, German, Japanese, Korean, Chinese, Hindi; plus Math, Music, Chess",
    "interfaceLanguages": "33 app languages incl. English, Hindi, Bengali, Tamil, Telugu, Kannada, Marathi, Punjabi, Urdu",
    "humanOrAi": "AI only",
    "play": {
      "rating": "4.6 (4.591 raw)",
      "reviews": "50,850,304",
      "downloads": "500M+",
      "url": "https://play.google.com/store/apps/details?id=com.duolingo",
      "checked": "2026-10-12"
    },
    "appStore": {
      "rating": "4.7",
      "reviews": "208,698 ratings (India storefront)",
      "url": "https://apps.apple.com/in/app/duolingo-language-chess/id570060128",
      "checked": "2026-10-12"
    },
    "pricing": {
      "summary": "Free with ads; Super Duolingo price not published for India (Play in-app purchases ₹19–₹19,900)",
      "details": [
        "yes",
        "Duolingo does not publish regional prices on public pages; Play IAP range ₹19–₹19,900 per item (India, 2026-10-12); Super Duolingo offers a 14-day free trial (Play). Third-party price lists not used."
      ],
      "region": "India",
      "checked": "2026-10-12",
      "status": "not-verified",
      "source": "https://play.google.com/store/apps/details?id=com.duolingo&hl=en_IN"
    },
    "dimensions": {
      "suitability_for_indian_learners": {
        "value": "partial",
        "note": "English courses exist for Hindi, Bengali, Tamil and Telugu speakers and the app UI supports Indian languages, but content is generic, not India-specific scenarios.",
        "source": "https://apps.apple.com/in/app/duolingo-language-chess/id570060128"
      },
      "support_for_absolute_beginners": {
        "value": "yes",
        "note": "Courses start from zero; Play: 'fun lessons for all levels'.",
        "source": "https://play.google.com/store/apps/details?id=com.duolingo&hl=en_IN"
      },
      "support_for_indian_languages": {
        "value": "yes",
        "note": "App Store lists Hindi, Bengali, Kannada, Marathi, Punjabi, Tamil, Telugu, Urdu among 33 app languages; English-for-Hindi-speakers course confirmed on Duolingo blog.",
        "source": "https://apps.apple.com/in/app/duolingo-language-chess/id570060128"
      },
      "hindi_guidance": {
        "value": "yes",
        "note": "Duolingo blog (2020): 'English course for Hindi speakers'.",
        "source": "https://blog.duolingo.com/language-learning-for-the-next-billion-duolingo-in-india/"
      },
      "regional_language_support": {
        "value": "yes",
        "note": "English courses for Tamil and Telugu speakers reported at launch (news coverage 2023); Tamil and Telugu listed as app languages on App Store.",
        "source": "https://apps.apple.com/in/app/duolingo-language-chess/id570060128"
      },
      "ai_conversation_practice": {
        "value": "partial",
        "note": "Play: 'Practice real conversations with AI-powered features in Duolingo Max... Video Call & Roleplay' - paid Max tier only, limited course set.",
        "source": "https://play.google.com/store/apps/details?id=com.duolingo&hl=en_IN"
      },
      "structured_course_progression": {
        "value": "yes",
        "note": "Unit/path based courses; 'Track your progress... learning goals'.",
        "source": "https://play.google.com/store/apps/details?id=com.duolingo&hl=en_IN"
      },
      "personalised_learning_plans": {
        "value": "partial",
        "note": "Adaptive practice and personalised review exist, but no bespoke plan per learner goal is described on the listing.",
        "source": "https://play.google.com/store/apps/details?id=com.duolingo&hl=en_IN"
      },
      "initial_proficiency_assessment": {
        "value": "yes",
        "note": "Placement test on starting a course (long-standing feature) - verified via product familiarity, not re-fetched; mark partially-verified.",
        "source": "https://play.google.com/store/apps/details?id=com.duolingo&hl=en_IN"
      },
      "speaking_practice": {
        "value": "partial",
        "note": "Speaking exercises exist in lessons; open conversation only in Max (Roleplay/Video Call).",
        "source": "https://play.google.com/store/apps/details?id=com.duolingo&hl=en_IN"
      },
      "real_life_roleplays": {
        "value": "partial",
        "note": "Roleplay is a Duolingo Max feature (Mar 2023 announcement) for selected courses.",
        "source": "https://blog.duolingo.com/duolingo-max/"
      },
      "job_interview_english": {
        "value": "not-verified",
        "note": "No interview-specific scenarios described officially.",
        "source": "https://play.google.com/store/apps/details?id=com.duolingo&hl=en_IN"
      },
      "workplace_english": {
        "value": "not-verified",
        "note": "No workplace-English track described officially.",
        "source": "https://play.google.com/store/apps/details?id=com.duolingo&hl=en_IN"
      },
      "everyday_english": {
        "value": "yes",
        "note": "Courses cover everyday topics; Play: 'prepare for real conversations'.",
        "source": "https://play.google.com/store/apps/details?id=com.duolingo&hl=en_IN"
      },
      "family_social_conversations": {
        "value": "partial",
        "note": "Family/social vocabulary units exist in courses; no dedicated roleplays described.",
        "source": "https://play.google.com/store/apps/details?id=com.duolingo&hl=en_IN"
      },
      "education_student_use_cases": {
        "value": "partial",
        "note": "Play: 'learning another language for travel, school, career'; Duolingo for Schools exists (not fetched).",
        "source": "https://play.google.com/store/apps/details?id=com.duolingo&hl=en_IN"
      },
      "travel_english": {
        "value": "yes",
        "note": "Play: 'Whether you're learning another language for travel...'.",
        "source": "https://play.google.com/store/apps/details?id=com.duolingo&hl=en_IN"
      },
      "pronunciation_practice": {
        "value": "partial",
        "note": "Speaking exercises with speech recognition; no detailed pronunciation coaching described.",
        "source": "https://play.google.com/store/apps/details?id=com.duolingo&hl=en_IN"
      },
      "grammar_guidance": {
        "value": "partial",
        "note": "Grammar taught implicitly; 'Explain My Answer' (Max) gives explanations.",
        "source": "https://blog.duolingo.com/duolingo-max/"
      },
      "vocabulary_development": {
        "value": "yes",
        "note": "Core of lessons; App Store: 'build your vocabulary & grammar skills'.",
        "source": "https://apps.apple.com/in/app/duolingo-language-chess/id570060128"
      },
      "ai_feedback": {
        "value": "partial",
        "note": "AI feedback in Max Roleplay/Video Call (Play: 'with AI feedback to help improve your language skills').",
        "source": "https://play.google.com/store/apps/details?id=com.duolingo&hl=en_IN"
      },
      "progress_tracking": {
        "value": "yes",
        "note": "Play: 'Track your progress... playful rewards & achievements'.",
        "source": "https://play.google.com/store/apps/details?id=com.duolingo&hl=en_IN"
      },
      "gamification": {
        "value": "yes",
        "note": "Streaks, hearts, leaderboards, achievements (Play, App Store).",
        "source": "https://play.google.com/store/apps/details?id=com.duolingo&hl=en_IN"
      },
      "free_tier": {
        "value": "yes",
        "note": "Play: 'Every Duolingo language course is free' (with ads); Super Duolingo removes ads, unlimited hearts.",
        "source": "https://play.google.com/store/apps/details?id=com.duolingo&hl=en_IN"
      },
      "android": {
        "value": "yes",
        "note": "Play listing, 500M+ downloads.",
        "source": "https://play.google.com/store/apps/details?id=com.duolingo&hl=en_IN"
      },
      "ios": {
        "value": "yes",
        "note": "App Store (India) listing, iPhone and iPad.",
        "source": "https://apps.apple.com/in/app/duolingo-language-chess/id570060128"
      }
    },
    "strengths": [
      "Massive scale and free access: 500M+ Play downloads, 4.6 from 50.9M reviews; every language course free (Play, 12 Oct 2026).",
      "Best-in-class gamification and habit mechanics (streaks, leagues, achievements).",
      "English courses available from Hindi, Bengali, Tamil and Telugu; UI in 33 languages incl. 8 Indian languages.",
      "Web, iOS and Android; 58.7M DAU / 140.6M MAU in Q2 2026 (SEC filing)."
    ],
    "limitations": [
      "Speaking is a minor part of lessons; open conversation (Roleplay, Video Call) sits behind the Max tier and is not built for Indian job/office scenarios.",
      "Generic global content, no India-specific interview/workplace roleplays or Indian-accent coaching described.",
      "Free tier has ads and hearts limits; regional subscription prices are not public.",
      "English is one of 40+ courses rather than the product's focus."
    ],
    "bestFit": "Casual learners who want a free, fun daily habit for vocabulary and grammar basics in any language, or those learning multiple languages. Less suited to Indian adults whose main goal is confident spoken English for work.",
    "sources": [
      {
        "label": "play.google.com/store/apps/details?id=com.duolingo&hl=en",
        "url": "https://play.google.com/store/apps/details?id=com.duolingo&hl=en_IN",
        "checked": "2026-10-12"
      },
      {
        "label": "apps.apple.com/in/app/duolingo-language-chess/id5700601",
        "url": "https://apps.apple.com/in/app/duolingo-language-chess/id570060128",
        "checked": "2026-10-12"
      },
      {
        "label": "blog.duolingo.com/language-learning-for-the-next-billion-d",
        "url": "https://blog.duolingo.com/language-learning-for-the-next-billion-duolingo-in-india/",
        "checked": "2026-10-12"
      },
      {
        "label": "blog.duolingo.com/duolingo-max/",
        "url": "https://blog.duolingo.com/duolingo-max/",
        "checked": "2026-10-12"
      },
      {
        "label": "duolingo.com/ (JS-rendered, text not extractable)",
        "url": "https://www.duolingo.com/ (JS-rendered, text not extractable)",
        "checked": "2026-10-12"
      },
      {
        "label": "press.duolingo.com/ (JS-rendered)",
        "url": "https://press.duolingo.com/ (JS-rendered)",
        "checked": "2026-10-12"
      }
    ]
  },
  "stimuler": {
    "slug": "stimuler",
    "name": "Stimuler",
    "company": "Stimuler Private Limited",
    "country": "India (Bengaluru per editorial coverage; official site does not state)",
    "website": "https://stimuler.tech/",
    "logo": "/logos/stimuler.png",
    "logoAlt": "Stimuler logo",
    "brandColor": "#8D48FF",
    "tagline": "Voice-first AI English coach: 60-second speeches, instant feedback, IELTS band prediction. Free to start.",
    "description": "Quote (site): 'AI English Speaking Coach with Instant Feedback'.",
    "founded": "2022 (Entrepreneur India, Apr 2025; YourStory) - partially-verified",
    "primaryObjective": "English speaking fluency and IELTS speaking preparation for non-native speakers worldwide.",
    "targetLearner": "Intermediate learners, IELTS candidates, job-seekers and professionals in 200+ countries (India, LATAM, SEA).",
    "teachingMethod": "Voice-first: record 60-second impromptu speeches or chat with AI coach 'Sarah' on 100+ topics, get feedback in under 20-30 seconds on pronunciation, fluency, grammar, vocabulary, fillers, pace and tone; personalised practice plan; IELTS speaking band prediction and live video mock tests.",
    "languagesTaught": "English only",
    "interfaceLanguages": "English",
    "humanOrAi": "AI only",
    "play": {
      "rating": "4.6 (4.575 raw)",
      "reviews": "217,562",
      "downloads": "1Cr+ (10M+)",
      "url": "https://play.google.com/store/apps/details?id=com.stimuler",
      "checked": "2026-10-12"
    },
    "appStore": {
      "rating": "4.7",
      "reviews": "8,984 ratings (India storefront)",
      "url": "https://apps.apple.com/in/app/stimuler-english-speaking-app/id1627501632",
      "checked": "2026-10-12"
    },
    "pricing": {
      "summary": "Free features; no public price page. App Store India monthly ₹199–₹399, annual ₹699–₹1,999",
      "details": [
        "yes",
        "No price page on stimuler.tech (/pricing 404). Play/App Store copy: 'less than $5/month'. App Store (India) SKUs: Monthly ₹199/₹299/₹399, Annual ₹699/₹999/₹1,999, weekly ₹149 (as of 2026-10-12); Play IAP range ₹99–₹3,999."
      ],
      "region": "India",
      "checked": "2026-10-12",
      "status": "partial",
      "source": "https://apps.apple.com/in/app/stimuler-english-speaking-app/id1627501632"
    },
    "dimensions": {
      "suitability_for_indian_learners": {
        "value": "partial",
        "note": "Indian founders, INR pricing, Google Play Best of 2023 India award; but no Indian-language explanations described - English-medium feedback.",
        "source": "https://play.google.com/store/apps/details?id=com.stimuler&hl=en_IN"
      },
      "support_for_absolute_beginners": {
        "value": "not-verified",
        "note": "Listings target fluency improvement and IELTS; no beginner-from-scratch path described.",
        "source": "https://play.google.com/store/apps/details?id=com.stimuler&hl=en_IN"
      },
      "support_for_indian_languages": {
        "value": "not-verified",
        "note": "No Hindi or regional-language instruction/translation described on site, Play or App Store (App Store Languages: English).",
        "source": "https://apps.apple.com/in/app/stimuler-english-speaking-app/id1627501632"
      },
      "hindi_guidance": {
        "value": "not-verified",
        "note": "Not described on official pages.",
        "source": "https://play.google.com/store/apps/details?id=com.stimuler&hl=en_IN"
      },
      "regional_language_support": {
        "value": "not-verified",
        "note": "Not described on official pages.",
        "source": "https://play.google.com/store/apps/details?id=com.stimuler&hl=en_IN"
      },
      "ai_conversation_practice": {
        "value": "yes",
        "note": "Site: 'Chat on themes with Sarah!... 20+ exciting themes'; Play: 'over 100 diverse topics... personalized AI mentor'.",
        "source": "https://stimuler.tech/"
      },
      "structured_course_progression": {
        "value": "partial",
        "note": "Play: 'Personalized Plan... video lessons... dedicated lessons'; a roadmap rather than a level-by-level course.",
        "source": "https://play.google.com/store/apps/details?id=com.stimuler&hl=en_IN"
      },
      "personalised_learning_plans": {
        "value": "yes",
        "note": "Play: 'we create a unique personalized plan for your goals and speaking skill level'.",
        "source": "https://play.google.com/store/apps/details?id=com.stimuler&hl=en_IN"
      },
      "initial_proficiency_assessment": {
        "value": "yes",
        "note": "60-second speech test gives instant scores and IELTS band; 'Evaluate Daily with speaking tests'.",
        "source": "https://stimuler.tech/"
      },
      "speaking_practice": {
        "value": "yes",
        "note": "Impromptu speaking, chat and daily speaking tests.",
        "source": "https://stimuler.tech/"
      },
      "real_life_roleplays": {
        "value": "partial",
        "note": "Site: 'scenario based practice'; blog lists 'IELTS / interview / workplace scenarios'. Scenario catalogue not detailed.",
        "source": "https://stimuler.tech/"
      },
      "job_interview_english": {
        "value": "partial",
        "note": "Site extraction lists 'Interview practice scenarios'; blog: 'interview... scenarios'.",
        "source": "https://stimuler.tech/blog/best-english-fluency-app"
      },
      "workplace_english": {
        "value": "partial",
        "note": "Blog: 'IELTS / interview / workplace scenarios'.",
        "source": "https://stimuler.tech/blog/best-english-fluency-app"
      },
      "everyday_english": {
        "value": "yes",
        "note": "Play: 'engaging in everyday conversations with your personalized AI mentor'.",
        "source": "https://play.google.com/store/apps/details?id=com.stimuler&hl=en_IN"
      },
      "family_social_conversations": {
        "value": "partial",
        "note": "Site: themes 'From family to hobbies to technology'.",
        "source": "https://stimuler.tech/"
      },
      "education_student_use_cases": {
        "value": "yes",
        "note": "IELTS/TOEFL prep: 'over 60 complete IELTS practice tests' (Play); study-abroad positioning.",
        "source": "https://play.google.com/store/apps/details?id=com.stimuler&hl=en_IN"
      },
      "travel_english": {
        "value": "not-verified",
        "note": "Not described on official pages.",
        "source": "https://play.google.com/store/apps/details?id=com.stimuler&hl=en_IN"
      },
      "pronunciation_practice": {
        "value": "yes",
        "note": "Instant feedback on pronunciation; 'You mispronounced Horror - RETRY' demo on site.",
        "source": "https://stimuler.tech/"
      },
      "grammar_guidance": {
        "value": "yes",
        "note": "Feedback on grammar; demo 'You scored 7.5 Band in Grammar'.",
        "source": "https://stimuler.tech/"
      },
      "vocabulary_development": {
        "value": "yes",
        "note": "Feedback on vocabulary; Play: 'exercises on Pronunciation, Fluency, Grammar, Vocabulary'.",
        "source": "https://play.google.com/store/apps/details?id=com.stimuler&hl=en_IN"
      },
      "ai_feedback": {
        "value": "yes",
        "note": "Play: 'real-time feedback... in under 20 seconds'; '360-Degree View' incl. fillers, rhythm, tone, pauses.",
        "source": "https://play.google.com/store/apps/details?id=com.stimuler&hl=en_IN"
      },
      "progress_tracking": {
        "value": "yes",
        "note": "Play: 'immediate feedback on your IELTS band to track your progress'; blog mentions dashboard.",
        "source": "https://play.google.com/store/apps/details?id=com.stimuler&hl=en_IN"
      },
      "gamification": {
        "value": "not-verified",
        "note": "No streaks/badges/leaderboards described officially.",
        "source": "https://play.google.com/store/apps/details?id=com.stimuler&hl=en_IN"
      },
      "free_tier": {
        "value": "yes",
        "note": "Play: 'Stimuler has free features for everyone'; App Store: 'Stimuler is FREE for everyone' with premium 'Pro'.",
        "source": "https://play.google.com/store/apps/details?id=com.stimuler&hl=en_IN"
      },
      "android": {
        "value": "yes",
        "note": "Play listing, 1Cr+ downloads.",
        "source": "https://play.google.com/store/apps/details?id=com.stimuler&hl=en_IN"
      },
      "ios": {
        "value": "yes",
        "note": "App Store (India) listing, iPhone and iPad.",
        "source": "https://apps.apple.com/in/app/stimuler-english-speaking-app/id1627501632"
      }
    },
    "strengths": [
      "Fast, granular speech feedback (pronunciation, fluency, grammar, vocabulary, fillers, pace, tone) in under 20-30 seconds.",
      "IELTS speaking focus: band prediction and live video mock tests with an AI interviewer; 60+ practice tests (Play).",
      "Google Play Best of 2023 India, 'Best with AI' (as 'Stimuler- IELTS Speaking Coach') - official Google India blog.",
      "Global footprint: 1Cr+ Play downloads, 4.6 from 217.6K reviews; users in 200+ countries."
    ],
    "limitations": [
      "No Indian-language explanations described; feedback and UI in English, which can be hard for absolute beginners.",
      "No public price list; many overlapping App Store SKUs (₹149 weekly to ₹1,999 annual) make pricing opaque.",
      "Scenario roleplays (interview/workplace) are only lightly described; core loop is speech analysis rather than guided conversation.",
      "User-count claims vary across own channels (2M+ on Play, 12M+ on App Store, 13M+ on site)."
    ],
    "bestFit": "Intermediate English speakers, especially IELTS/TOEFL candidates and job-seekers, who can already form sentences and want precise, fast AI feedback to polish fluency, pronunciation and band score.",
    "sources": [
      {
        "label": "stimuler.tech/",
        "url": "https://stimuler.tech/",
        "checked": "2026-10-12"
      },
      {
        "label": "play.google.com/store/apps/details?id=com.stimuler&hl=en",
        "url": "https://play.google.com/store/apps/details?id=com.stimuler&hl=en_IN",
        "checked": "2026-10-12"
      },
      {
        "label": "apps.apple.com/in/app/stimuler-english-speaking-app/id1",
        "url": "https://apps.apple.com/in/app/stimuler-english-speaking-app/id1627501632",
        "checked": "2026-10-12"
      },
      {
        "label": "stimuler.tech/about",
        "url": "https://stimuler.tech/about",
        "checked": "2026-10-12"
      },
      {
        "label": "blog.google/intl/en-in/products/platforms/google-pla",
        "url": "https://blog.google/intl/en-in/products/platforms/google-plays-best-apps-and-games-of-2023-in-india/",
        "checked": "2026-10-12"
      },
      {
        "label": "india.entrepreneur.com/news-and-trends/stimuler-raises-usd-375-",
        "url": "https://india.entrepreneur.com/news-and-trends/stimuler-raises-usd-375-mn-funding-to-scale-voice-first/490839",
        "checked": "2026-10-12"
      },
      {
        "label": "stimuler.tech/blog/best-english-fluency-app",
        "url": "https://stimuler.tech/blog/best-english-fluency-app",
        "checked": "2026-10-12"
      },
      {
        "label": "stimuler.tech/pricing (404)",
        "url": "https://www.stimuler.tech/pricing (404)",
        "checked": "2026-10-12"
      }
    ]
  },
  "elsa-speak": {
    "slug": "elsa-speak",
    "name": "ELSA Speak",
    "company": "ELSA Corp",
    "country": "United States (California; site footer: Los Gatos, CA; operations office in Ho Chi Minh City, Vietnam)",
    "website": "https://elsaspeak.com/en/",
    "logo": "/logos/elsa-speak.jpg",
    "logoAlt": "ELSA Speak logo",
    "brandColor": "#1d9bf0",
    "tagline": "Global AI pronunciation coach with syllable-level feedback, role-play coaches and exam prep; Hindi UI.",
    "description": "Quote (site): '#1 AI English Speaking App for Fluency and Confidence' (company claim).",
    "founded": "2015 (founder Vu Van with Dr. Xavier Anguera; multiple press sources) - partially-verified",
    "primaryObjective": "English pronunciation, fluency and confident communication for professionals and learners; exam prep.",
    "targetLearner": "Global non-native professionals, job seekers, students, travellers; strongest markets Vietnam, LATAM, Asia (site language menu).",
    "teachingMethod": "Pronunciation-first AI coaching: speech recognition scores every syllable; personalised learning path from a pronunciation test; 8,000+ lessons; AI role-plays with specialised coaches (Workplace, Interviews, Dating, Meetings, Presentations); Speech Analyzer; bilingual mode for beginners; gamified lessons.",
    "languagesTaught": "English only",
    "interfaceLanguages": "English, Vietnamese, Japanese, Indonesian, Portuguese, Spanish, Chinese (Traditional/Simplified), Thai, Korean, French, German, Turkish, Hindi (per help centre via search snippet)",
    "humanOrAi": "AI only",
    "play": {
      "rating": "4.2 (4.196 raw)",
      "reviews": "1,013,190",
      "downloads": "1Cr+ (10M+)",
      "url": "https://play.google.com/store/apps/details?id=us.nobarriers.elsa",
      "checked": "2026-10-12"
    },
    "appStore": {
      "rating": "4.6",
      "reviews": "15,649 ratings (India storefront)",
      "url": "https://apps.apple.com/in/app/elsa-speak-english-learning/id1083804886",
      "checked": "2026-10-12"
    },
    "pricing": {
      "summary": "Free lessons + 7-day Premium trial; App Store India ₹499/month, ₹3,449/year",
      "details": [
        "yes",
        "Pricing page (elsaspeak.com/en/elsa-subscription) advertises '7 days free trial' but prices load dynamically; App Store (India) SKUs: Monthly ₹499, 3 months Pro ₹909, 1 Year Premium ₹3,449, 1 year ₹12,900 (as of 2026-10-12); Play IAP range ₹10–₹46,500."
      ],
      "region": "India",
      "checked": "2026-10-12",
      "status": "partial",
      "source": "https://apps.apple.com/in/app/elsa-speak-english-learning/id1083804886"
    },
    "dimensions": {
      "suitability_for_indian_learners": {
        "value": "partial",
        "note": "Hindi is a supported display/translation language and INR pricing exists, but content is global and there is no Tamil/Telugu support.",
        "source": "https://elsanow.freshdesk.com/en/support/solutions/articles/31000176417-change-the-display-language-and-enable-translations-"
      },
      "support_for_absolute_beginners": {
        "value": "yes",
        "note": "FAQ: 'I am a beginner, can I study with ELSA?' - yes, lessons from easy to difficult; pricing page: 'Bilingual Support... Explanations in your native language'.",
        "source": "https://elsaspeak.com/en/faqs-en/"
      },
      "support_for_indian_languages": {
        "value": "partial",
        "note": "Hindi only (display language, translations and bilingual mode per help centre); no other Indian languages.",
        "source": "https://elsanow.freshdesk.com/en/support/solutions/articles/31000176417-change-the-display-language-and-enable-translations-"
      },
      "hindi_guidance": {
        "value": "yes",
        "note": "Help centre lists Hindi among display and lesson-translation languages (seen via search snippet; article URL returned 404 on direct fetch - partially-verified).",
        "source": "https://elsanow.freshdesk.com/en/support/solutions/articles/31000176417-change-the-display-language-and-enable-translations-"
      },
      "regional_language_support": {
        "value": "no",
        "note": "Help-centre language lists do not include Tamil or Telugu.",
        "source": "https://elsanow.freshdesk.com/en/support/solutions/articles/31000176417-change-the-display-language-and-enable-translations-"
      },
      "ai_conversation_practice": {
        "value": "yes",
        "note": "Site: 'AI Conversation Practice: Interactive role-plays... with instant AI feedback'; Play: 'AI-driven Conversations & Open-ended Dialogues'.",
        "source": "https://elsaspeak.com/en/"
      },
      "structured_course_progression": {
        "value": "yes",
        "note": "Play: 'custom learning pathways'; FAQ: lessons in 'planets' by level.",
        "source": "https://elsaspeak.com/en/faqs-en/"
      },
      "personalised_learning_plans": {
        "value": "yes",
        "note": "Site: 'AI customizes every lesson and builds a learning path uniquely shaped by your level, goals, progress, preferred accent, and industry focus'.",
        "source": "https://elsaspeak.com/en/"
      },
      "initial_proficiency_assessment": {
        "value": "yes",
        "note": "FAQ: 'Based on the results of your pronunciation test, Elsa also offers an individual learning path'.",
        "source": "https://elsaspeak.com/en/faqs-en/"
      },
      "speaking_practice": {
        "value": "yes",
        "note": "Core product is speaking with speech recognition feedback.",
        "source": "https://play.google.com/store/apps/details?id=us.nobarriers.elsa&hl=en_IN"
      },
      "real_life_roleplays": {
        "value": "yes",
        "note": "Site: five role-play coaches - Workplace, Interviews, Dating, Meetings, Presentations.",
        "source": "https://elsaspeak.com/en/"
      },
      "job_interview_english": {
        "value": "yes",
        "note": "Play: 'practice job interviews, presentations, meetings'; Interviews coach.",
        "source": "https://play.google.com/store/apps/details?id=us.nobarriers.elsa&hl=en_IN"
      },
      "workplace_english": {
        "value": "yes",
        "note": "Play: 'Career-Specific Focus'; Workplace and Meetings coaches; 'client calls'.",
        "source": "https://play.google.com/store/apps/details?id=us.nobarriers.elsa&hl=en_IN"
      },
      "everyday_english": {
        "value": "yes",
        "note": "Play: 'having daily conversations'.",
        "source": "https://play.google.com/store/apps/details?id=us.nobarriers.elsa&hl=en_IN"
      },
      "family_social_conversations": {
        "value": "partial",
        "note": "Dating coach and daily-conversation content; no family-specific scenarios described.",
        "source": "https://elsaspeak.com/en/"
      },
      "education_student_use_cases": {
        "value": "yes",
        "note": "Play: exam prep for IELTS, TOEFL, TOEIC, EIKEN (Premium); ELSA for Schools.",
        "source": "https://play.google.com/store/apps/details?id=us.nobarriers.elsa&hl=en_IN"
      },
      "travel_english": {
        "value": "partial",
        "note": "Pricing page lists 'Travelers & Expats' as an audience; travel scenarios not detailed.",
        "source": "https://elsaspeak.com/en/elsa-subscription"
      },
      "pronunciation_practice": {
        "value": "yes",
        "note": "Flagship: 'correct pronunciation errors to every syllable' (FAQ); accent choices American/British/Australian.",
        "source": "https://elsaspeak.com/en/faqs-en/"
      },
      "grammar_guidance": {
        "value": "yes",
        "note": "Play: 'Grammar coach'; 'English Grammar & Study Vocabulary'.",
        "source": "https://play.google.com/store/apps/details?id=us.nobarriers.elsa&hl=en_IN"
      },
      "vocabulary_development": {
        "value": "yes",
        "note": "Play: 'Personalized English Study Sets'; career-specific vocabulary.",
        "source": "https://play.google.com/store/apps/details?id=us.nobarriers.elsa&hl=en_IN"
      },
      "ai_feedback": {
        "value": "yes",
        "note": "Play: 'real-time feedback'; Speech Analyzer gives detailed reports.",
        "source": "https://play.google.com/store/apps/details?id=us.nobarriers.elsa&hl=en_IN"
      },
      "progress_tracking": {
        "value": "yes",
        "note": "Play: 'Superior Quantitative Progress Tracking'; site: visual dashboards.",
        "source": "https://play.google.com/store/apps/details?id=us.nobarriers.elsa&hl=en_IN"
      },
      "gamification": {
        "value": "yes",
        "note": "Play: 'interactive AI-powered games'; pricing page: 'Gamified Learning Experience'.",
        "source": "https://elsaspeak.com/en/elsa-subscription"
      },
      "free_tier": {
        "value": "yes",
        "note": "FAQ: free version includes the Welcome planet and first 2 lessons of every topic; 7-day Premium trial (Play).",
        "source": "https://elsaspeak.com/en/faqs-en/"
      },
      "android": {
        "value": "yes",
        "note": "Play listing, 1Cr+ downloads, 1.01M reviews.",
        "source": "https://play.google.com/store/apps/details?id=us.nobarriers.elsa&hl=en_IN"
      },
      "ios": {
        "value": "yes",
        "note": "App Store (India) listing, iPhone and iPad.",
        "source": "https://apps.apple.com/in/app/elsa-speak-english-learning/id1083804886"
      }
    },
    "strengths": [
      "Deep pronunciation technology: syllable-level scoring, accent choice, Speech Analyzer with test-score predictions.",
      "Role-play coaches for Workplace, Interviews, Meetings, Presentations; career-specific vocabulary; exam prep (IELTS/TOEFL/TOEIC).",
      "Large global footprint: 1Cr+ Play downloads, 1.01M Play reviews; 92M+ downloads claimed; B2B/schools offerings (1,300+ organisations claimed).",
      "Hindi display language and bilingual mode for beginners."
    ],
    "limitations": [
      "Lowest Play rating in this set (4.2 from 1.01M reviews, 12 Oct 2026).",
      "Only Hindi among Indian languages; no Tamil, Telugu, Kannada, Malayalam, Marathi or Bengali.",
      "Free tier is thin (first 2 lessons per topic); premium SKUs in India are complex (₹499/month to ₹12,900/year).",
      "Oriented to pronunciation drills; voice-call style free conversation is a newer add-on rather than the core."
    ],
    "bestFit": "Intermediate professionals and exam candidates who want to fix pronunciation and accent with precise feedback, practise workplace/interview role-plays, and can work in English (or Hindi) UI.",
    "sources": [
      {
        "label": "elsaspeak.com/en/",
        "url": "https://elsaspeak.com/en/",
        "checked": "2026-10-12"
      },
      {
        "label": "elsaspeak.com/en/elsa-subscription",
        "url": "https://elsaspeak.com/en/elsa-subscription",
        "checked": "2026-10-12"
      },
      {
        "label": "elsaspeak.com/en/faqs-en/",
        "url": "https://elsaspeak.com/en/faqs-en/",
        "checked": "2026-10-12"
      },
      {
        "label": "play.google.com/store/apps/details?id=us.nobarriers.elsa",
        "url": "https://play.google.com/store/apps/details?id=us.nobarriers.elsa&hl=en_IN",
        "checked": "2026-10-12"
      },
      {
        "label": "apps.apple.com/in/app/elsa-speak-english-learning/id108",
        "url": "https://apps.apple.com/in/app/elsa-speak-english-learning/id1083804886",
        "checked": "2026-10-12"
      },
      {
        "label": "elsanow.freshdesk.com/en/support/solutions/articles/3100017641",
        "url": "https://elsanow.freshdesk.com/en/support/solutions/articles/31000176417-change-the-display-language-and-enable-translations- (404 on fetch; content via search snippet)",
        "checked": "2026-10-12"
      },
      {
        "label": "elsanow.freshdesk.com/en/support/solutions/articles/3100017760",
        "url": "https://elsanow.freshdesk.com/en/support/solutions/articles/31000177604-does-elsa-have-a-computer-laptop-version- (404 on fetch)",
        "checked": "2026-10-12"
      },
      {
        "label": "elsaspeak.com/en/pricing/ (404)",
        "url": "https://elsaspeak.com/en/pricing/ (404)",
        "checked": "2026-10-12"
      }
    ]
  },
  "speak": {
    "slug": "speak",
    "name": "Speak",
    "company": "Speakeasy Labs, Inc.",
    "country": "United States (San Francisco)",
    "website": "https://www.speak.com/",
    "logo": "/logos/speak.png",
    "logoAlt": "Speak logo",
    "brandColor": "#2563eb",
    "tagline": "OpenAI-backed language app with an AI tutor; English (incl. for Hindi speakers) plus six other languages.",
    "description": "Quote (site): 'An expert-crafted curriculum, personalized by AI.'",
    "founded": "2016 (founders Connor Zwick, Andrew Hsu; press) - partially-verified",
    "primaryObjective": "Speaking fluency in a new language (English for non-English speakers; Spanish/French/Japanese/Korean/Italian/Chinese for English speakers).",
    "targetLearner": "Global adult learners (13+), historically strongest in Korea, Japan, Taiwan; English course offered to Hindi speakers.",
    "teachingMethod": "'The Speak Method': Learn (expert-built lesson with a local teacher) -> Practice (repeat phrases aloud) -> Apply (open conversation with the AI Speak Tutor) with real-time pronunciation and phrasing feedback; Premium Plus adds 'Made for You' lessons and custom review.",
    "languagesTaught": "English (for 15 native languages), Spanish, French, Japanese, Korean, Italian, Simplified Chinese (for English speakers)",
    "interfaceLanguages": "English, French, German, Hindi, Indonesian, Italian, Japanese, Korean, Polish, Portuguese, Simplified Chinese, Spanish, Thai, Traditional Chinese, Turkish, Vietnamese",
    "humanOrAi": "AI only",
    "play": {
      "rating": "4.6 (4.584 raw)",
      "reviews": "124,317",
      "downloads": "1Cr+ (10M+)",
      "url": "https://play.google.com/store/apps/details?id=com.selabs.speak",
      "checked": "2026-10-12"
    },
    "appStore": {
      "rating": "4.6",
      "reviews": "192 ratings (India storefront)",
      "url": "https://apps.apple.com/in/app/speak-language-learning/id1286609883",
      "checked": "2026-10-12"
    },
    "pricing": {
      "summary": "7-day free trial, then subscription; App Store India ₹1,949–₹2,299/month, ₹4,999–₹22,900/year",
      "details": [
        "partial",
        "No public price page (speak.com/pricing 404; 'varies by region'). App Store (India) SKUs: Monthly Subscription ₹1,949, Monthly Premium ₹2,299, Annual Subscription ₹4,999, Annual Premium ₹9,900, Annual Premium Plus ₹22,900 (as of 2026-10-12); Play IAP range ₹1,199–₹26,000."
      ],
      "region": "India",
      "checked": "2026-10-12",
      "status": "partial",
      "source": "https://apps.apple.com/in/app/speak-language-learning/id1286609883"
    },
    "dimensions": {
      "suitability_for_indian_learners": {
        "value": "partial",
        "note": "English course for Hindi speakers exists, but no other Indian languages, no India-specific scenarios, and India pricing (₹2,299/month Premium) is high.",
        "source": "https://apps.apple.com/in/app/speak-language-learning/id1286609883"
      },
      "support_for_absolute_beginners": {
        "value": "yes",
        "note": "Play: 'Whether you're a beginner or an advanced learner, Speak caters to your individual needs'.",
        "source": "https://play.google.com/store/apps/details?id=com.selabs.speak&hl=en_IN"
      },
      "support_for_indian_languages": {
        "value": "partial",
        "note": "Hindi only: 'I Speak' Hindi -> English course (help centre); Hindi among 16 App Store app languages.",
        "source": "https://help.speak.com/en/articles/8880569-what-languages-can-i-learn-with-speak"
      },
      "hindi_guidance": {
        "value": "yes",
        "note": "Help centre: English offered for native speakers incl. Hindi.",
        "source": "https://help.speak.com/en/articles/8880569-what-languages-can-i-learn-with-speak"
      },
      "regional_language_support": {
        "value": "no",
        "note": "Help-centre list has no Tamil/Telugu; App Store languages list none either.",
        "source": "https://help.speak.com/en/articles/8880569-what-languages-can-i-learn-with-speak"
      },
      "ai_conversation_practice": {
        "value": "yes",
        "note": "Site: 'Real back-and-forth conversations with the Speak Tutor AI'.",
        "source": "https://www.speak.com/"
      },
      "structured_course_progression": {
        "value": "yes",
        "note": "Site: expert-built curriculum; Play: 'comprehensive language learning curriculum'.",
        "source": "https://play.google.com/store/apps/details?id=com.selabs.speak&hl=en_IN"
      },
      "personalised_learning_plans": {
        "value": "yes",
        "note": "Site: 'personalized by AI'; Premium Plus 'Made for You lessons'.",
        "source": "https://www.speak.com/"
      },
      "initial_proficiency_assessment": {
        "value": "not-verified",
        "note": "No placement test described on fetched official pages.",
        "source": "https://www.speak.com/"
      },
      "speaking_practice": {
        "value": "yes",
        "note": "Play: 'getting you speaking... out loud on day 1'.",
        "source": "https://play.google.com/store/apps/details?id=com.selabs.speak&hl=en_IN"
      },
      "real_life_roleplays": {
        "value": "yes",
        "note": "Play: 'immersive speaking practice sessions that simulate real-life scenarios'.",
        "source": "https://play.google.com/store/apps/details?id=com.selabs.speak&hl=en_IN"
      },
      "job_interview_english": {
        "value": "not-verified",
        "note": "Not described on fetched official pages.",
        "source": "https://play.google.com/store/apps/details?id=com.selabs.speak&hl=en_IN"
      },
      "workplace_english": {
        "value": "not-verified",
        "note": "Not described on fetched official pages.",
        "source": "https://play.google.com/store/apps/details?id=com.selabs.speak&hl=en_IN"
      },
      "everyday_english": {
        "value": "yes",
        "note": "Play: 'Learn real-life, essential phrases'.",
        "source": "https://play.google.com/store/apps/details?id=com.selabs.speak&hl=en_IN"
      },
      "family_social_conversations": {
        "value": "not-verified",
        "note": "Not described on fetched official pages.",
        "source": "https://play.google.com/store/apps/details?id=com.selabs.speak&hl=en_IN"
      },
      "education_student_use_cases": {
        "value": "not-verified",
        "note": "No exam/student track described.",
        "source": "https://play.google.com/store/apps/details?id=com.selabs.speak&hl=en_IN"
      },
      "travel_english": {
        "value": "partial",
        "note": "Real-life scenario practice implies travel use; not explicitly listed.",
        "source": "https://play.google.com/store/apps/details?id=com.selabs.speak&hl=en_IN"
      },
      "pronunciation_practice": {
        "value": "yes",
        "note": "Site: 'Pronunciation and phrasing feedback as you speak'.",
        "source": "https://www.speak.com/"
      },
      "grammar_guidance": {
        "value": "yes",
        "note": "Play: 'real-time feedback on pronunciations, grammar, and much more'.",
        "source": "https://play.google.com/store/apps/details?id=com.selabs.speak&hl=en_IN"
      },
      "vocabulary_development": {
        "value": "yes",
        "note": "Lessons teach essential phrases; custom review from mistakes (Premium Plus).",
        "source": "https://www.speak.com/"
      },
      "ai_feedback": {
        "value": "yes",
        "note": "Play: 'analyzes your speech, providing valuable assessment on pronunciation, intonation, and fluency'.",
        "source": "https://play.google.com/store/apps/details?id=com.selabs.speak&hl=en_IN"
      },
      "progress_tracking": {
        "value": "yes",
        "note": "Play: 'personalized progress tracking'.",
        "source": "https://play.google.com/store/apps/details?id=com.selabs.speak&hl=en_IN"
      },
      "gamification": {
        "value": "partial",
        "note": "Site mentions streaks in Premium; no leaderboards/badges described.",
        "source": "https://www.speak.com/"
      },
      "free_tier": {
        "value": "partial",
        "note": "7-day free trial (site); Play: 'free trial' then auto-renewing membership required for full access. No permanent free tier described.",
        "source": "https://www.speak.com/"
      },
      "android": {
        "value": "yes",
        "note": "Play listing, 1Cr+ downloads.",
        "source": "https://play.google.com/store/apps/details?id=com.selabs.speak&hl=en_IN"
      },
      "ios": {
        "value": "yes",
        "note": "App Store (India) listing, iPhone and iPad.",
        "source": "https://apps.apple.com/in/app/speak-language-learning/id1286609883"
      }
    },
    "strengths": [
      "Strong AI conversation tutor with real-time pronunciation and phrasing feedback; OpenAI partnership (site).",
      "Expert-built curriculum with a clear Learn -> Practice -> Apply loop.",
      "Multi-language: English for 15 native languages plus six other target languages.",
      "Well funded: $78M Series C at $1B valuation (Nov 2024, press); 15M+ downloads claimed."
    ],
    "limitations": [
      "Expensive in India: Premium ₹2,299/month on the App Store (vs SpeakX ₹299); no permanent free tier, only a 7-day trial.",
      "Indian-language support limited to Hindi; tiny India App Store footprint (192 ratings).",
      "No web/desktop version.",
      "No interview/workplace/exam tracks described on official pages."
    ],
    "bestFit": "Globally mobile, higher-income learners who want premium AI conversation practice and are comfortable with an English or Hindi interface; also English speakers learning Spanish, French, Japanese, Korean, Italian or Chinese.",
    "sources": [
      {
        "label": "speak.com/",
        "url": "https://www.speak.com/",
        "checked": "2026-10-12"
      },
      {
        "label": "play.google.com/store/apps/details?id=com.selabs.speak&h",
        "url": "https://play.google.com/store/apps/details?id=com.selabs.speak&hl=en_IN",
        "checked": "2026-10-12"
      },
      {
        "label": "apps.apple.com/in/app/speak-language-learning/id1286609",
        "url": "https://apps.apple.com/in/app/speak-language-learning/id1286609883",
        "checked": "2026-10-12"
      },
      {
        "label": "help.speak.com/en/articles/8880569-what-languages-can-i",
        "url": "https://help.speak.com/en/articles/8880569-what-languages-can-i-learn-with-speak",
        "checked": "2026-10-12"
      },
      {
        "label": "help.speak.com/en/articles/9334794-what-devices-and-ope",
        "url": "https://help.speak.com/en/articles/9334794-what-devices-and-operating-systems-does-the-speak-app-support",
        "checked": "2026-10-12"
      },
      {
        "label": "speak.com/pricing (404)",
        "url": "https://www.speak.com/pricing (404)",
        "checked": "2026-10-12"
      }
    ]
  }
} as Record<string, Product>;

export const speakx: Product = products.speakx;
export const competitorOrder = ["supernova", "mysivi", "duolingo", "stimuler", "elsa-speak", "speak"] as const;

import type { DimensionKey, FAQ, LinkItem } from "@/lib/types";
import { SITE } from "@/lib/site";

/**
 * Copy for the /vs hub. All SpeakX facts here are from speakx.ai, speakx.ai/premium and the
 * Google Play listing, verified 2026-10-12. Goal links are patched from the site audit's
 * verified blog URL list (research/site-audit.json).
 */
export const hubContent = {
  seo: {
    title: "SpeakX vs Other English Speaking Apps | Compare",
    description:
      "Compare SpeakX with Duolingo, ELSA Speak, Speak, Supernova, MySivi and Stimuler on speaking practice, Indian-language support, price and features.",
    keywords: ["SpeakX vs", "English speaking app comparison", "AI English speaking app", "english learning app", "english conversation practice"],
  },
  h1: "SpeakX vs Other English Speaking Apps: Why SpeakX Is the Right App for You?",
  subtitle:
    "Compare SpeakX with Supernova, MySivi, Duolingo, Stimuler, ELSA Speak and Speak. Explore AI speaking practice, Indian-language support, real-life conversations, pronunciation tools and learning methods to find the right fit.",
  trustSignals: [
    "1 crore+ downloads on Google Play",
    "4.5★ from 92.9K Google Play reviews",
    "Explanations in 7 Indian languages",
    "ET Education Excellence Awards 2026: Excellence in Generative AI for Education",
  ],
  matrixKeys: [
    "ai_conversation_practice",
    "real_life_roleplays",
    "job_interview_english",
    "support_for_indian_languages",
    "hindi_guidance",
    "regional_language_support",
    "support_for_absolute_beginners",
    "pronunciation_practice",
    "structured_course_progression",
    "ai_feedback",
    "progress_tracking",
    "free_tier",
    "android",
    "ios",
  ] as DimensionKey[],
  differentiators: [
    { icon: "🎙️", title: "Voice calls with Sia, your AI speaking partner", body: "[Sia](https://speakx.ai/) is SpeakX's AI speaking partner. You talk to Sia on voice calls, so practice feels like a real conversation rather than tapping answers." },
    { icon: "🇮🇳", title: "English explained in 7 Indian languages", body: "Hindi, Marathi, Bengali, Telugu, Tamil, Kannada and Malayalam. You learn English through the language you already think in, starting with [simple sentences explained in Hindi](https://speakx.ai/blog/100-simple-english-sentences-for-daily-use-with-hindi-meaning)." },
    { icon: "💼", title: "Roleplays for the moments that matter", body: "[Job interviews](https://speakx.ai/blog/interview-questions-answers-english-freshers), office conversations, [parent-teacher meetings](https://speakx.ai/blog/how-to-speak-english-fluently-in-parent-teacher-meetings-a-teachers-5-minute-daily-method) and phone calls: rehearse the real situations you will face." },
    { icon: "🧭", title: "A path from Pre-A1 to advanced", body: "CEFR-aligned paths mean a [complete beginner](https://speakx.ai/blog/unlock-confident-english-speaking-your-guide-to-daily-practice-and-learning-the-basics) and an intermediate speaker both start at the right level and move up step by step." },
    { icon: "📈", title: "A progress report that speaks plainly", body: "SpeakX tracks [fluency](https://speakx.ai/blog/english-speaking-fluency), vocabulary, [grammar](https://speakx.ai/blog/english-grammar-tenses) and [pronunciation](https://speakx.ai/blog/english-pronunciation-difficulty), and a Confidence Meter shows how far you have come." },
    { icon: "⏱️", title: "15 minutes a day, free to start", body: "[Short daily sessions](https://speakx.ai/blog/practice-spoken-english-alone-at-home) fit around college, work and home. SpeakX is free to download; [Premium](https://speakx.ai/premium) adds a 24x7 AI teacher, 100+ scenarios and unlimited AI talk time." },
  ],
  screenshots: [
    { src: "/images/speakx-screen-1.webp", alt: "SpeakX home screen showing the daily lesson and Sia voice-call button", caption: "Daily lesson and Sia voice call" },
    { src: "/images/speakx-screen-2.webp", alt: "SpeakX roleplay screen for a job interview conversation", caption: "Job interview roleplay" },
    { src: "/images/speakx-screen-3.webp", alt: "SpeakX progress report showing fluency, vocabulary, grammar and pronunciation scores", caption: "Progress report and Confidence Meter" },
  ],
  goals: [
    { title: "Job interviews", body: "Practise answering common interview questions out loud with instant feedback, in English explained in your language.", links: [{ label: "SpeakX vs Stimuler", href: "/vs/speakx-vs-stimuler" }, { label: "Interview questions and answers for freshers", href: "https://speakx.ai/blog/interview-questions-answers-english-freshers" }, { label: "Fluency guide for job interviews", href: "https://speakx.ai/blog/how-to-improve-english-speaking-fluency-for-job-interviews-a-guide-for-indian-professionals" }] as LinkItem[] },
    { title: "Career growth and promotion", body: "Workplace English for meetings, calls and presentations, so you are heard at work.", links: [{ label: "SpeakX vs Speak", href: "/vs/speakx-vs-speak" }, { label: "Interview English for corporate professionals", href: "https://speakx.ai/blog/english-interview-questions-and-answers-for-corporate-professionals-a-speaking-confidence-guide" }, { label: "English speaking fluency guide", href: "https://speakx.ai/blog/english-speaking-fluency" }] as LinkItem[] },
    { title: "Students and higher education", body: "Placements, group discussions and campus life need spoken confidence, not just grammar marks.", links: [{ label: "SpeakX vs MySivi", href: "/vs/speakx-vs-mysivi" }, { label: "SpeakX vs Supernova", href: "/vs/speakx-vs-supernova" }, { label: "How to speak English fluently", href: "https://speakx.ai/blog/how-to-speak-english-fluently" }] as LinkItem[] },
    { title: "Homemakers and everyday conversations", body: "Parent-teacher meetings, phone calls and social situations, practised privately without judgement.", links: [{ label: "SpeakX vs Duolingo", href: "/vs/speakx-vs-duolingo" }, { label: "Speak fluently in parent-teacher meetings", href: "https://speakx.ai/blog/how-to-speak-english-fluently-in-parent-teacher-meetings-a-teachers-5-minute-daily-method" }, { label: "Practise spoken English alone at home", href: "https://speakx.ai/blog/practice-spoken-english-alone-at-home" }] as LinkItem[] },
    { title: "Travel abroad", body: "Airports, hotels, directions and small talk: everyday English for trips and study abroad.", links: [{ label: "SpeakX vs Duolingo", href: "/vs/speakx-vs-duolingo" }, { label: "SpeakX vs Speak", href: "/vs/speakx-vs-speak" }, { label: "Real-life English for daily conversation", href: "https://speakx.ai/blog/master-real-life-english-your-guide-to-confident-daily-conversation" }] as LinkItem[] },
    { title: "Beginners", body: "If you understand some English but freeze when speaking, start at Pre-A1 with explanations in Hindi or your language.", links: [{ label: "SpeakX vs MySivi", href: "/vs/speakx-vs-mysivi" }, { label: "100 simple English sentences with Hindi meaning", href: "https://speakx.ai/blog/100-simple-english-sentences-for-daily-use-with-hindi-meaning" }, { label: "English basics: daily practice guide", href: "https://speakx.ai/blog/unlock-confident-english-speaking-your-guide-to-daily-practice-and-learning-the-basics" }] as LinkItem[] },
    { title: "Improving pronunciation", body: "Say it, hear the feedback, say it again. Compare apps that focus on pronunciation with apps that focus on conversation.", links: [{ label: "SpeakX vs ELSA Speak", href: "/vs/speakx-vs-elsa-speak" }, { label: "Why English pronunciation is difficult", href: "https://speakx.ai/blog/english-pronunciation-difficulty" }] as LinkItem[] },
    { title: "Read the full guide", body: "Our long-form guide walks through the English speaking apps available in India and how to choose.", links: [{ label: "Best English speaking apps in India: SpeakX vs competitors", href: SITE.links.comparisonArticle }] as LinkItem[] },
  ],
  faqs: [
    { q: "What is SpeakX?", a: "SpeakX is an AI English speaking app for Indian learners, made by [Ivypods Technology in Gurugram](https://speakx.ai/about). Learners practise speaking with Sia, an AI speaking partner, on voice calls, rehearse real-life roleplays such as job interviews and office conversations, and get explanations in 7 Indian languages. It is built for young adults and older learners who want to speak English confidently and fluently." },
    { q: "Which English speaking app is best in India?", a: "It depends on what you need. If you want AI conversation practice with explanations in Hindi, Marathi, Bengali, Telugu, Tamil, Kannada or Malayalam, SpeakX is built for that. If you want a game-like course across many languages, Duolingo is the better-known choice. If pronunciation drilling is your priority, ELSA Speak specialises in it. Each comparison page on this hub explains who each app suits." },
    { q: "Does SpeakX support Hindi and other Indian languages?", a: "Yes. SpeakX explains English in 7 Indian languages: Hindi, Marathi, Bengali, Telugu, Tamil, Kannada and Malayalam. The speaking practice itself is in English." },
    { q: "Is SpeakX free?", a: "SpeakX is free to download and start. Premium, which adds a 24x7 AI teacher with instant feedback, 100+ real-life speaking scenarios and unlimited talk time with AI, has a 3-day trial for ₹2 and then costs [₹299 a month on the SpeakX website](https://speakx.ai/premium) at the time of writing. It auto-renews monthly and can be cancelled anytime." },
    { q: "Is SpeakX the same as Speak?", a: "No. Speak (speak.com) is a different company based in the United States. SpeakX is made by Ivypods Technology in Gurugram, India. We compare the two on the SpeakX vs Speak page." },
    { q: "Which app is best for job interview English?", a: "Look for an app with interview roleplays and feedback on how you actually sound. SpeakX includes [job interview roleplays](https://speakx.ai/blog/how-to-improve-english-speaking-fluency-for-job-interviews-a-guide-for-indian-professionals) practised on voice calls with Sia, with a progress report on fluency, vocabulary, grammar and pronunciation. Our Stimuler and Speak comparisons cover other apps with interview-style practice." },
    { q: "How much time does SpeakX take each day?", a: "About 15 minutes a day. Lessons are short and follow CEFR-aligned paths from Pre-A1 to advanced. See the [15-minute routine for practising alone at home](https://speakx.ai/blog/practice-spoken-english-alone-at-home)." },
    { q: "How do you keep these comparisons fair?", a: "Every feature mark comes from an official source: the app's own website, help centre or store listing. Where we could not confirm a detail, the page says “not verified” rather than guessing. We also list where each competitor may be the better choice, and we show the date each page was last verified." },
    { q: "Who uses SpeakX?", a: "Students, job-seekers, working professionals, parents and homemakers: anyone who understands some English but wants to speak it confidently. SpeakX has 1 crore+ downloads and a 4.5-star rating from 92.9K reviews on [Google Play](https://play.google.com/store/apps/details?id=yellowclass.kids.live)." },
  ] as FAQ[],
};

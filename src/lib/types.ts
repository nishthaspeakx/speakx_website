/**
 * Central data model for the SpeakX comparison hub.
 * Every fact carries a source and a verification status so content stays auditable.
 */

export type Verdict = "yes" | "partial" | "no" | "not-verified";

export interface Source {
  label: string;
  url: string;
  /** ISO date the source was last checked, e.g. "2026-10-12" */
  checked: string;
}

export interface DimensionValue {
  value: Verdict;
  /** Short evidence note shown in tooltips / tables */
  note?: string;
  source?: string;
}

export const DIMENSION_KEYS = [
  "suitability_for_indian_learners",
  "support_for_absolute_beginners",
  "support_for_indian_languages",
  "hindi_guidance",
  "regional_language_support",
  "ai_conversation_practice",
  "structured_course_progression",
  "personalised_learning_plans",
  "initial_proficiency_assessment",
  "speaking_practice",
  "real_life_roleplays",
  "job_interview_english",
  "workplace_english",
  "everyday_english",
  "family_social_conversations",
  "education_student_use_cases",
  "travel_english",
  "pronunciation_practice",
  "grammar_guidance",
  "vocabulary_development",
  "ai_feedback",
  "progress_tracking",
  "gamification",
  "free_tier",
  "android",
  "ios",
] as const;

export type DimensionKey = (typeof DIMENSION_KEYS)[number];

export const DIMENSION_LABELS: Record<DimensionKey, string> = {
  suitability_for_indian_learners: "Built for Indian learners",
  support_for_absolute_beginners: "Absolute beginners",
  support_for_indian_languages: "Indian-language support",
  hindi_guidance: "Hindi guidance",
  regional_language_support: "Tamil, Telugu & regional languages",
  ai_conversation_practice: "AI conversation practice",
  structured_course_progression: "Structured course progression",
  personalised_learning_plans: "Personalised learning plan",
  initial_proficiency_assessment: "Initial level assessment",
  speaking_practice: "Speaking practice",
  real_life_roleplays: "Real-life roleplays",
  job_interview_english: "Job interview English",
  workplace_english: "Workplace English",
  everyday_english: "Everyday English",
  family_social_conversations: "Family & social conversations",
  education_student_use_cases: "Students & education",
  travel_english: "Travel English",
  pronunciation_practice: "Pronunciation practice",
  grammar_guidance: "Grammar guidance",
  vocabulary_development: "Vocabulary building",
  ai_feedback: "AI feedback",
  progress_tracking: "Progress tracking",
  gamification: "Gamification",
  free_tier: "Free tier",
  android: "Android",
  ios: "iOS",
};

export interface StoreListing {
  rating?: string;
  reviews?: string;
  downloads?: string;
  url?: string;
  checked: string;
}

export interface Pricing {
  /** One-line summary shown in tables, e.g. "Free to start; Premium ₹299/month after a ₹2 3-day trial" */
  summary: string;
  details: string[];
  region: string;
  checked: string;
  status: Verdict;
  source?: string;
}

export interface Product {
  slug: string;
  name: string;
  company: string;
  country: string;
  website: string;
  /** Path under /public, e.g. "/logos/duolingo.svg" */
  logo: string;
  logoAlt: string;
  brandColor: string;
  /** Factual one-line description, <= 110 chars */
  tagline: string;
  description: string;
  founded?: string;
  primaryObjective: string;
  targetLearner: string;
  teachingMethod: string;
  languagesTaught: string;
  interfaceLanguages: string;
  humanOrAi: string;
  play?: StoreListing;
  appStore?: StoreListing;
  pricing: Pricing;
  dimensions: Record<DimensionKey, DimensionValue>;
  strengths: string[];
  limitations: string[];
  bestFit: string;
  sources: Source[];
}

export interface FAQ {
  q: string;
  a: string;
}

export interface LinkItem {
  label: string;
  href: string;
  description?: string;
}

export interface TableRow {
  label: string;
  speakx: string;
  competitor: string;
}

export interface ComparisonPage {
  slug: string; // e.g. "speakx-vs-duolingo"
  competitorSlug: string; // e.g. "duolingo"
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  h1: string;
  /** 2–4 direct, factual sentences answering "which should I pick?" */
  quickAnswer: string[];
  intro: { speakx: string; competitor: string };
  featureTable: TableRow[];
  howSpeakXWorks: string[];
  howCompetitorWorks: string[];
  keyDifferences: { title: string; body: string }[];
  speakxBetterFor: string[];
  competitorBetterFor: string[];
  byLearnerType: { learner: string; speakx: string; competitor: string }[];
  byGoal: { goal: string; speakx: string; competitor: string }[];
  pricing: { speakx: string; competitor: string; note: string };
  uxAndFeedback: string[];
  faqs: FAQ[];
  related: LinkItem[];
  sources: Source[];
  lastVerified: string;
  /** One meaningful difference for the hub card, <= 140 chars */
  cardDifference: string;
}

export type PressLinkType =
  | "independent-editorial"
  | "sponsored-or-branded"
  | "company-authored-blog"
  | "award-organiser-listing"
  | "investor-or-partner-listing"
  | "directory-listing"
  | "video-or-podcast";

export interface PressItem {
  publication: string;
  title: string;
  url: string;
  author?: string;
  date?: string; // ISO or "YYYY-MM"
  category: string;
  summary: string;
  linkType: PressLinkType;
  verification: "verified" | "partially-verified" | "not-verified";
  placement: "as-seen-in" | "in-the-news" | "founder" | "sources-only";
  /** Path under /public/logos for the publisher logo, if we have rights to use it */
  publisherLogo?: string;
}

export interface Award {
  title: string;
  organisation: string;
  year: string;
  category?: string;
  status: "winner" | "finalist" | "listed" | "speaker" | "not-verified";
  recipient: "company" | "founder";
  officialUrl?: string;
  evidenceUrl?: string;
  verification:
    | "verified-independent"
    | "verified-organiser-page"
    | "claimed-on-speakx-site-only"
    | "conflicting"
    | "not-found";
  note?: string;
}

export interface Investor {
  name: string;
  type: string;
  evidenceUrl?: string;
  note: string;
  verification: "verified" | "partially-verified" | "not-verified";
}

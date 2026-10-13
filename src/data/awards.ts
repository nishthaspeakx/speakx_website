import type { Award } from "@/lib/types";

/**
 * Award register for SpeakX and its founder. Source: research/awards.json (verified 2026-10-12).
 * Only "verified-organizer-page" / "verified-independent" items render as recognitions. Items marked
 * "claimed-on-speakx-site-only" render in a separate "awaiting confirmation" list; "conflicting" items never render
 * and are flagged for the content team (the organizer's own list does not include SpeakX).
 */
export const awards: Award[] = [
  {
    title: "Excellence in Generative AI for Education",
    organization: "ET Education Excellence Awards (The Economic Times)",
    year: "2026",
    category: "Gold",
    status: "winner",
    recipient: "company",
    officialUrl: "https://education.economictimes.indiatimes.com/education-excellence-awards/winners-list",
    verification: "verified-organizer-page",
    note: "Listed as SpeakX.AI on the organizer's 2026 winners list (3rd edition, New Delhi, June 2026).",
  },
  {
    title: "Excellence in Gamified & Personalized Learning Solutions",
    organization: "ET Education Excellence Awards (The Economic Times)",
    year: "2025",
    category: "Gold",
    status: "winner",
    recipient: "company",
    officialUrl: "https://education.economictimes.indiatimes.com/education-excellence-awards2025/winners-list",
    verification: "verified-organizer-page",
    note: "Organizer wording; speakx.ai describes it as Best Personalized and Gamified Learning Experience.",
  },
  {
    title: "Outstanding Emerging EdTech Startup",
    organization: "ET Education Excellence Awards (The Economic Times)",
    year: "2025",
    category: "Bronze",
    status: "winner",
    recipient: "company",
    officialUrl: "https://education.economictimes.indiatimes.com/education-excellence-awards2025/winners-list",
    verification: "verified-organizer-page",
    note: "Bronze tier on the organizer's 2025 winners list.",
  },
  {
    title: "Best Use of AI for Education & Livelihoods",
    organization: "Mint All About AI | Tech4Good Awards (with Salesforce)",
    year: "2024",
    status: "not-verified",
    recipient: "company",
    evidenceUrl: "https://www.apnnews.com/speakx-bags-the-best-use-of-ai-for-education-livelihoods-at-mints-all-about-ai-tech4good-awards-sponsored-by-salesforce/",
    verification: "claimed-on-speakx-site-only",
    note: "Program is real (Mint and Salesforce, Nov 2024); only a company press release names SpeakX and the tier is not stated.",
  },
  { title: "Top 25 Visionary EdTech Startup", organization: "India Elite Education & Institutional Excellence Awards", year: "2025", status: "not-verified", recipient: "company", verification: "claimed-on-speakx-site-only", note: "Organizer page not located." },
  { title: "AI-driven language learning recognition", organization: "India Elite Education & Institutional Excellence Awards", year: "2025", status: "not-verified", recipient: "company", verification: "claimed-on-speakx-site-only", note: "Organizer page not located." },
  { title: "Bharat Growth Summit & Awards 2026", organization: "ET Now / ET Edge", year: "2026", status: "not-verified", recipient: "company", verification: "claimed-on-speakx-site-only", note: "Event confirmed (June 2026); no public winners list found." },
  { title: "ET Edge 40 Under 40", organization: "ET Edge (Times Group)", year: "2025", status: "not-verified", recipient: "founder", verification: "claimed-on-speakx-site-only", note: "Honouree lists are not published online." },
  { title: "BW Businessworld 40 Under 40", organization: "BW Businessworld", year: "2025", status: "not-verified", recipient: "founder", verification: "claimed-on-speakx-site-only", note: "BW pages could not be fetched; which list is unknown." },
  { title: "27th Elets World Education Summit", organization: "Elets Technomedia", year: "2023", status: "not-verified", recipient: "company", verification: "claimed-on-speakx-site-only", note: "Event confirmed (Malaysia, Oct 2023); organizer winners pages do not list SpeakX." },
  { title: "Entrepreneur Awards 2025", organization: "Entrepreneur India", year: "2025", status: "not-verified", recipient: "company", officialUrl: "https://www.entrepreneurindia.com/2025/award-winners.php", verification: "conflicting", note: "The organizer's 2025 winners list names other companies in the education categories; not rendered pending a certificate." },
  { title: "DGEMS Select 200", organization: "D Globalist with Forbes India (Brand Connect)", year: "2023", status: "not-verified", recipient: "company", officialUrl: "https://www.dglobalist.com/dgems-2023-s200-list", verification: "conflicting", note: "The organizer's 2023 S200 list does not include SpeakX or Ivypods; not rendered pending a certificate." },
];

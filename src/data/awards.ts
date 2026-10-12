import type { Award } from "@/lib/types";

/**
 * Award register for SpeakX and its founder. Source: research/awards.json (verified 2026-10-12).
 * Only "verified-organiser-page" / "verified-independent" items render as recognitions. Items marked
 * "claimed-on-speakx-site-only" render in a separate "awaiting confirmation" list; "conflicting" items never render
 * and are flagged for the content team (the organiser's own list does not include SpeakX).
 */
export const awards: Award[] = [
  {
    title: "Excellence in Generative AI for Education",
    organisation: "ET Education Excellence Awards (The Economic Times)",
    year: "2026",
    category: "Gold",
    status: "winner",
    recipient: "company",
    officialUrl: "https://education.economictimes.indiatimes.com/education-excellence-awards/winners-list",
    verification: "verified-organiser-page",
    note: "Listed as SpeakX.AI on the organiser's 2026 winners list (3rd edition, New Delhi, June 2026).",
  },
  {
    title: "Excellence in Gamified & Personalized Learning Solutions",
    organisation: "ET Education Excellence Awards (The Economic Times)",
    year: "2025",
    category: "Gold",
    status: "winner",
    recipient: "company",
    officialUrl: "https://education.economictimes.indiatimes.com/education-excellence-awards2025/winners-list",
    verification: "verified-organiser-page",
    note: "Organiser wording; speakx.ai describes it as Best Personalised and Gamified Learning Experience.",
  },
  {
    title: "Outstanding Emerging EdTech Startup",
    organisation: "ET Education Excellence Awards (The Economic Times)",
    year: "2025",
    category: "Bronze",
    status: "winner",
    recipient: "company",
    officialUrl: "https://education.economictimes.indiatimes.com/education-excellence-awards2025/winners-list",
    verification: "verified-organiser-page",
    note: "Bronze tier on the organiser's 2025 winners list.",
  },
  {
    title: "Best Use of AI for Education & Livelihoods",
    organisation: "Mint All About AI | Tech4Good Awards (with Salesforce)",
    year: "2024",
    status: "not-verified",
    recipient: "company",
    evidenceUrl: "https://www.apnnews.com/speakx-bags-the-best-use-of-ai-for-education-livelihoods-at-mints-all-about-ai-tech4good-awards-sponsored-by-salesforce/",
    verification: "claimed-on-speakx-site-only",
    note: "Programme is real (Mint and Salesforce, Nov 2024); only a company press release names SpeakX and the tier is not stated.",
  },
  { title: "Top 25 Visionary EdTech Startup", organisation: "India Elite Education & Institutional Excellence Awards", year: "2025", status: "not-verified", recipient: "company", verification: "claimed-on-speakx-site-only", note: "Organiser page not located." },
  { title: "AI-driven language learning recognition", organisation: "India Elite Education & Institutional Excellence Awards", year: "2025", status: "not-verified", recipient: "company", verification: "claimed-on-speakx-site-only", note: "Organiser page not located." },
  { title: "Bharat Growth Summit & Awards 2026", organisation: "ET Now / ET Edge", year: "2026", status: "not-verified", recipient: "company", verification: "claimed-on-speakx-site-only", note: "Event confirmed (June 2026); no public winners list found." },
  { title: "ET Edge 40 Under 40", organisation: "ET Edge (Times Group)", year: "2025", status: "not-verified", recipient: "founder", verification: "claimed-on-speakx-site-only", note: "Honouree lists are not published online." },
  { title: "BW Businessworld 40 Under 40", organisation: "BW Businessworld", year: "2025", status: "not-verified", recipient: "founder", verification: "claimed-on-speakx-site-only", note: "BW pages could not be fetched; which list is unknown." },
  { title: "27th Elets World Education Summit", organisation: "Elets Technomedia", year: "2023", status: "not-verified", recipient: "company", verification: "claimed-on-speakx-site-only", note: "Event confirmed (Malaysia, Oct 2023); organiser winners pages do not list SpeakX." },
  { title: "Entrepreneur Awards 2025", organisation: "Entrepreneur India", year: "2025", status: "not-verified", recipient: "company", officialUrl: "https://www.entrepreneurindia.com/2025/award-winners.php", verification: "conflicting", note: "The organiser's 2025 winners list names other companies in the education categories; not rendered pending a certificate." },
  { title: "DGEMS Select 200", organisation: "D Globalist with Forbes India (Brand Connect)", year: "2023", status: "not-verified", recipient: "company", officialUrl: "https://www.dglobalist.com/dgems-2023-s200-list", verification: "conflicting", note: "The organiser's 2023 S200 list does not include SpeakX or Ivypods; not rendered pending a certificate." },
];

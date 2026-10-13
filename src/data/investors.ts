import type { Investor } from "@/lib/types";

/**
 * Publicly disclosed investors and milestones for SpeakX (Ivypods Technology Pvt. Ltd.).
 * Sources: research/media.json (verified 2026-10-12). Figures are as reported by the named publication;
 * revenue and subscriber numbers are company-stated to those publications.
 */
export const investors: Investor[] = [
  {
    name: "WestBridge Capital",
    type: "Lead investor, pre-Series B (Oct 2025)",
    evidenceUrl: "https://westbridgecap.com/portfolio/speakx",
    note: "Led SpeakX's USD 16 million pre-Series B round in October 2025, as reported by Inc42, Entrackr and Entrepreneur India.",
    verification: "verified",
  },
  {
    name: "Elevation Capital",
    type: "Existing investor; participated in pre-Series B",
    evidenceUrl: "https://www.elevationcapital.com/perspectives/speakx-building-india-largest-ai-language-learning-app",
    note: "Early institutional investor in Ivypods Technology; participated in the 2025 round and published a founder conversation with Arpit Mittal.",
    verification: "verified",
  },
  {
    name: "Goodwater Capital",
    type: "Participated in pre-Series B (Oct 2025)",
    evidenceUrl: "https://india.entrepreneur.com/news-and-trends/speakxai-raises-usd-16-mn-to-strengthen-ai-powered-english/498354",
    note: "Named among participants in the USD 16 million round reported in October 2025.",
    verification: "verified",
  },
  {
    name: "India Quotient",
    type: "Early investor",
    evidenceUrl: "https://www.indiaquotient.in/portfolio",
    note: "Led the company's seed round and is listed as an existing investor in later coverage of SpeakX's funding.",
    verification: "verified",
  },
  {
    name: "MS Dhoni",
    type: "Strategic investor and brand ambassador (Sep 2026)",
    evidenceUrl: "https://inc42.com/buzz/exclusive-ms-dhoni-joins-edtech-startup-speakxs-cap-table/",
    note: "Inc42 reported on 1 September 2026 that MS Dhoni joined SpeakX's cap table with an undisclosed strategic investment and fronts the 'Muh Khol, English Bol' campaign. Amount not disclosed.",
    verification: "verified",
  },
  {
    name: "Angel investors",
    type: "Participated in pre-Series B",
    evidenceUrl: "https://inc42.com/buzz/speakx-raises-16-mn-to-offer-english-learning-course-in-regional-languages/",
    note: "Coverage of the October 2025 round names Shyamal Anadkat and Ronnie Screwvala among participants.",
    verification: "verified",
  },
];

export const founder = {
  name: "Arpit Mittal, Founder and CEO",
  bio: [
    "Arpit Mittal is the founder and CEO of SpeakX, made by Ivypods Technology Pvt. Ltd. in Gurugram. In a conversation published by Elevation Capital, he traces the idea to his own experience growing up in Haridwar: studying in English yet hesitating to speak it, a gap he says millions of Indian learners share.",
    "Under his leadership the company refocused on AI-led spoken English practice and, according to Inc42, reached profitability with a small team before raising a USD 16 million pre-Series B led by WestBridge Capital in October 2025. In September 2026 cricketer MS Dhoni joined as a strategic investor and brand ambassador.",
    "He has written and spoken about skill literacy and employability for Indian learners, including an op-ed for Amar Ujala Bonus and interviews with StartupTalky, TICE News and Indian Startup Times. Details of his earlier ventures are recorded in the research register and are shown here only once independently confirmed.",
  ],
  interviews: [
    { label: "Elevation Capital: SpeakX, building India's largest AI language learning app (founder conversation)", href: "https://www.elevationcapital.com/perspectives/speakx-building-india-largest-ai-language-learning-app" },
    { label: "Elevation Capital 'Day One' on YouTube: Arpit Mittal on building SpeakX (video, Oct 2025)", href: "https://www.youtube.com/watch?v=vWqAY-dn-w0" },
    { label: "Inc42 AI Summit 2026, Bengaluru: panel speaker on consumer AI (May 2026)", href: "https://events.inc42.com/ai-summit/" },
    { label: "afaqs!: MS Dhoni joins SpeakX as brand ambassador (Sep 2026)", href: "https://www.afaqs.com/news/mktg/ms-dhoni-joins-speakx-as-brand-ambassador-12495076" },
    { label: "Inc42: A timely pivot, how GenAI allowed SpeakX to find a new edtech mission", href: "https://inc42.com/startups/a-timely-pivot-how-genai-allowed-speakx-to-find-a-new-edtech-mission/" },
    { label: "StartupTalky: Arpit Mittal on how SpeakX is cracking India's English-speaking puzzle", href: "https://startuptalky.com/arpit-mittal-speakx-shares-insights/" },
    { label: "Indian Startup Times: Building an AI-powered platform to help 100 million Indians find their voice", href: "https://www.indianstartuptimes.com/interviews/building-an-ai-powered-platform-to-help-100-million-indians-find-their-voice-in-english/" },
    { label: "Amar Ujala Bonus: Why skill literacy is just as important to India as financial literacy (op-ed)", href: "https://www.amarujalabonus.com/news/why-skill-literacy-is-just-as-important-to-india-as-financial-literacy" },
  ],
};

export const milestones: { date: string; title: string; note: string; sourceUrl?: string }[] = [
  { date: "July 2024", title: "Selected for Google for Startups Accelerator: AI First (India)", note: "One of 20 startups in the first cohort, as reported by Inc42.", sourceUrl: "https://inc42.com/buzz/meet-the-20-startups-selected-for-googles-ai-first-accelerator/" },
  { date: "2025", title: "ET Education Excellence Awards 2025", note: "Gold for Excellence in Gamified and Personalised Learning Solutions and Bronze for Outstanding Emerging EdTech Startup, per the organiser's winners list.", sourceUrl: "https://education.economictimes.indiatimes.com/education-excellence-awards2025/winners-list" },
  { date: "October 2025", title: "USD 16 million pre-Series B led by WestBridge Capital", note: "Total disclosed funding reported at USD 23.3 million; the company said it was EBITDA-positive.", sourceUrl: "https://inc42.com/buzz/speakx-raises-16-mn-to-offer-english-learning-course-in-regional-languages/" },
  { date: "November 2025", title: "USD 1 million ESOP buyback", note: "First employee stock buyback covering 15 of 20 team members, per Entrackr and HRKatha.", sourceUrl: "https://entrackr.com/snippets/edtech-startup-speakx-announces-1-mn-esop-buyback-for-15-employees-10810376" },
  { date: "2026", title: "ET Education Excellence Awards 2026: Excellence in Generative AI for Education", note: "Gold, listed as SpeakX.AI on the organiser's winners list.", sourceUrl: "https://education.economictimes.indiatimes.com/education-excellence-awards/winners-list" },
  { date: "September 2026", title: "MS Dhoni joins as strategic investor and brand ambassador", note: "Inc42 exclusive; the 'Muh Khol, English Bol' campaign launched the same week. Inc42 also reported FY26 revenue of INR 45 crore as stated by the company.", sourceUrl: "https://inc42.com/buzz/exclusive-ms-dhoni-joins-edtech-startup-speakxs-cap-table/" },
  { date: "September 2026", title: "One crore learners", note: "Moneycontrol reported SpeakX crossing one crore learners, around half from Tier-2 and Tier-3 cities.", sourceUrl: "https://www.moneycontrol.com/technology/speakx-app-wants-to-make-learning-english-more-useful-than-talking-to-chatgpt-article-14028161.html" },
];

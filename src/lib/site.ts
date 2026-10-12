/**
 * Site-wide configuration. Values marked TODO-VERIFY are filled from the
 * site audit (research/site-audit.json) and must not be guessed.
 */
export const SITE = {
  name: "SpeakX",
  legalName: "Ivypods Technology Pvt. Ltd.",
  /** Canonical production host (non-www). The hub is designed to live under this origin. */
  origin: process.env.NEXT_PUBLIC_SITE_ORIGIN ?? "https://speakx.ai",
  tagline: "Muh Khol. English Bol.",
  description:
    "SpeakX is an AI English speaking app for Indian learners. Practise spoken English on voice calls with Sia, your AI speaking partner, with explanations in 7 Indian languages.",
  locale: "en-IN",
  /** Existing SpeakX pages used for internal linking. Verified in the site audit. */
  links: {
    home: "https://speakx.ai/",
    premium: "https://speakx.ai/premium",
    about: "https://speakx.ai/about",
    blog: "https://speakx.ai/blog",
    contact: "https://speakx.ai/contact-us",
    comparisonArticle:
      "https://speakx.ai/blog/best-english-speaking-apps-india-speakx-vs-competitors",
    play: "https://play.google.com/store/apps/details?id=yellowclass.kids.live",
    appStore: process.env.NEXT_PUBLIC_APP_STORE_URL ?? "https://apps.apple.com/in/app/speakx-english-speaking-app/id6756059415",
    /** Tracked install / onboarding link used by speakx.ai CTAs. Filled from the audit. */
    /** Singular smart link used by every "Start speaking now" CTA on speakx.ai (verified 2026-10-12):
     * Android -> Google Play, iOS -> App Store, desktop -> Singular landing page. */
    install: process.env.NEXT_PUBLIC_INSTALL_URL ?? "https://speakx.sng.link/Ed28z/npfq/4alj",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/speakx",
    youtube: "https://www.youtube.com/@speakx_ai",
    instagram: "https://www.instagram.com/speakx_ai/",
  },
  analytics: {
    gtmId: process.env.NEXT_PUBLIC_GTM_ID ?? "",
    /** GA4 measurement id found in speakx.ai's bundle (verified 2026-10-12). */
    ga4Id: process.env.NEXT_PUBLIC_GA4_ID ?? "G-Z36ZMHENFK",
  },
  verified: "2026-10-12",
} as const;

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${SITE.origin}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Appends UTM/attribution parameters to an outbound CTA while preserving existing ones. */
export function withAttribution(
  url: string,
  params: Record<string, string>,
): string {
  try {
    const u = new URL(url);
    for (const [k, v] of Object.entries(params)) {
      if (!u.searchParams.has(k)) u.searchParams.set(k, v);
    }
    return u.toString();
  } catch {
    return url;
  }
}

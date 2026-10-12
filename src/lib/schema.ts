import { SITE } from "./site";

/** Sitewide Organization node. Awards are listed only when verified (see data/awards). */
export function organizationSchema(extra: Record<string, unknown> = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.origin}/#organization`,
    name: "SpeakX",
    alternateName: ["SpeakX AI", "SpeakX English Speaking App"],
    legalName: SITE.legalName,
    url: SITE.links.home,
    logo: { "@type": "ImageObject", url: `${SITE.origin}/logos/speakx-mark-512.png`, width: 512, height: 512 },
    description: SITE.description,
    address: { "@type": "PostalAddress", addressLocality: "Gurugram", addressRegion: "Haryana", addressCountry: "IN" },
    sameAs: [SITE.links.play, SITE.links.appStore, SITE.social.linkedin, SITE.social.youtube, SITE.social.instagram].filter(Boolean),
    ...extra,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.origin}/#website`,
    name: "SpeakX",
    url: SITE.links.home,
    inLanguage: "en-IN",
    publisher: { "@id": `${SITE.origin}/#organization` },
  };
}

/** SoftwareApplication for SpeakX. No aggregateRating is emitted unless a live, visible value is supplied. */
export function speakxAppSchema(opts: { ratingValue?: string; ratingCount?: string } = {}) {
  const base: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "@id": `${SITE.origin}/#app`,
    name: "SpeakX: English Speaking App",
    operatingSystem: "Android, iOS",
    applicationCategory: "EducationalApplication",
    description: SITE.description,
    inLanguage: "en",
    publisher: { "@id": `${SITE.origin}/#organization` },
    downloadUrl: [SITE.links.play, SITE.links.appStore].filter(Boolean),
    offers: [
      { "@type": "Offer", name: "Free to start", price: "0", priceCurrency: "INR" },
      { "@type": "Offer", name: "SpeakX Premium (monthly, after a ₹2 three-day trial)", price: "299", priceCurrency: "INR", url: SITE.links.premium },
    ],
  };
  if (opts.ratingValue && opts.ratingCount) {
    base.aggregateRating = { "@type": "AggregateRating", ratingValue: opts.ratingValue, ratingCount: opts.ratingCount, bestRating: "5" };
  }
  return base;
}

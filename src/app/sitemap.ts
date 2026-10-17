export const dynamic = "force-static";
import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { comparisonIndex } from "@/data/comparisons";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(SITE.verified);
  return [
    { url: `${SITE.origin}/vs`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    ...comparisonIndex.map((c) => ({
      url: `${SITE.origin}/vs/${c.slug}`,
      lastModified: new Date(c.lastVerified),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${SITE.origin}/press`, lastModified, changeFrequency: "monthly", priority: 0.6 },
  ];
}

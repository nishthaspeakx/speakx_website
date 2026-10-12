import type { ComparisonPage } from "@/lib/types";

export interface ComparisonIndexEntry {
  slug: string;
  competitorSlug: string;
  shortTitle: string;
  lastVerified: string;
}

/** Order here is the display order on the /vs hub and in navigation. */
export const comparisonIndex: ComparisonIndexEntry[] = [
  { slug: "speakx-vs-supernova", competitorSlug: "supernova", shortTitle: "SpeakX vs Supernova", lastVerified: "2026-10-12" },
  { slug: "speakx-vs-mysivi", competitorSlug: "mysivi", shortTitle: "SpeakX vs MySivi", lastVerified: "2026-10-12" },
  { slug: "speakx-vs-duolingo", competitorSlug: "duolingo", shortTitle: "SpeakX vs Duolingo", lastVerified: "2026-10-12" },
  { slug: "speakx-vs-stimuler", competitorSlug: "stimuler", shortTitle: "SpeakX vs Stimuler", lastVerified: "2026-10-12" },
  { slug: "speakx-vs-elsa-speak", competitorSlug: "elsa-speak", shortTitle: "SpeakX vs ELSA Speak", lastVerified: "2026-10-12" },
  { slug: "speakx-vs-speak", competitorSlug: "speak", shortTitle: "SpeakX vs Speak", lastVerified: "2026-10-12" },
];

const loaders: Record<string, () => Promise<{ default: ComparisonPage }>> = {
  "speakx-vs-supernova": () => import("./speakx-vs-supernova"),
  "speakx-vs-mysivi": () => import("./speakx-vs-mysivi"),
  "speakx-vs-duolingo": () => import("./speakx-vs-duolingo"),
  "speakx-vs-stimuler": () => import("./speakx-vs-stimuler"),
  "speakx-vs-elsa-speak": () => import("./speakx-vs-elsa-speak"),
  "speakx-vs-speak": () => import("./speakx-vs-speak"),
};

export async function getComparison(slug: string): Promise<ComparisonPage | null> {
  const load = loaders[slug];
  if (!load) return null;
  return (await load()).default;
}

export async function getAllComparisons(): Promise<ComparisonPage[]> {
  return Promise.all(comparisonIndex.map((c) => getComparison(c.slug) as Promise<ComparisonPage>));
}

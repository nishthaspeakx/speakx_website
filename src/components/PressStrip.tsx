import Link from "next/link";
import TrackedLink from "./TrackedLink";
import { pressItems } from "@/data/press";
import { awards } from "@/data/awards";

const LABEL: Record<string, string> = {
  "independent-editorial": "Editorial",
  "sponsored-or-branded": "Sponsored / branded",
  "company-authored-blog": "Company blog",
  "award-organiser-listing": "Award organiser",
  "investor-or-partner-listing": "Investor listing",
  "directory-listing": "Directory",
  "video-or-podcast": "Video / podcast",
};

/** Compact press + awards module reused on every comparison page. Shows verified items only. */
export default function PressStrip({ pageSlug }: { pageSlug: string }) {
  const rank = { "as-seen-in": 0, "in-the-news": 1, founder: 2, "sources-only": 3 } as const;
  const press = pressItems
    .filter((p) => p.verification === "verified" && p.linkType === "independent-editorial" && p.placement !== "sources-only")
    .sort((a, b) => rank[a.placement] - rank[b.placement] || (b.date ?? "").localeCompare(a.date ?? ""))
    .slice(0, 4);
  const verifiedAwards = awards.filter((a) => a.verification === "verified-independent" || a.verification === "verified-organiser-page").slice(0, 4);
  return (
    <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
      <ul className="grid gap-3 sm:grid-cols-2">
        {press.map((p) => (
          <li key={p.url}>
            <TrackedLink href={p.url} event="press_article_click" params={{ page_slug: pageSlug, destination: p.url, link_text: p.publication }} className="group block h-full rounded-2xl border border-line bg-surface p-5 transition hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md">
              <div className="flex items-center justify-between gap-2 text-xs">
                <span className="font-semibold uppercase tracking-wider text-brand-dark">{p.publication}</span>
                <span className="rounded-full bg-surface-2 px-2 py-0.5 text-muted">{LABEL[p.linkType]}</span>
              </div>
              <p className="mt-2 font-semibold leading-snug text-ink group-hover:text-brand-dark">{p.title}</p>
              {p.date && <p className="mt-2 text-xs text-muted">{p.date}</p>}
            </TrackedLink>
          </li>
        ))}
      </ul>
      <div className="rounded-3xl border border-line bg-surface-2 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-dark">Recognition</p>
        <ul className="mt-3 space-y-3 text-sm">
          {verifiedAwards.map((a) => (
            <li key={`${a.title}-${a.year}`} className="flex gap-3">
              <span aria-hidden="true" className="mt-0.5 text-accent-dark">★</span>
              <span>
                <span className="font-semibold text-ink">{a.title}</span>
                <span className="text-ink-soft"> · {a.organisation}, {a.year}</span>
                {a.officialUrl && <> · <a href={a.officialUrl} rel="noopener nofollow" target="_blank" className="text-brand-dark underline underline-offset-4">source</a></>}
              </span>
            </li>
          ))}
        </ul>
        <Link href="/press" className="mt-5 inline-block text-sm font-semibold text-brand-dark underline underline-offset-4">All press and awards</Link>
      </div>
    </div>
  );
}

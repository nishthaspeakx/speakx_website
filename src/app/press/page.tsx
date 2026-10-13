import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import Container from "@/components/Container";
import Section from "@/components/Section";
import JsonLd from "@/components/JsonLd";
import TrackedLink from "@/components/TrackedLink";
import PageView from "@/components/PageView";
import BackToHub from "@/components/BackToHub";
import BrandStrip from "@/components/BrandStrip";
import { pressItems } from "@/data/press";
import { awards } from "@/data/awards";
import { investors, founder, milestones } from "@/data/investors";
import { SITE, absoluteUrl } from "@/lib/site";
import { organizationSchema, websiteSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: { absolute: "SpeakX Press, Awards and Recognition | SpeakX" },
  description: "Press coverage, awards and investor facts for SpeakX, the AI English speaking app by Ivypods Technology, with every item linked to its original source.",
  alternates: { canonical: absoluteUrl("/press") },
};

const LABEL: Record<string, string> = {
  "independent-editorial": "Independent editorial",
  "sponsored-or-branded": "Sponsored / branded",
  "company-authored-blog": "Company blog",
  "award-organiser-listing": "Award organiser",
  "investor-or-partner-listing": "Investor listing",
  "directory-listing": "Directory",
  "video-or-podcast": "Video / podcast",
};

export default function PressPage() {
  const verifiedPress = pressItems.filter((p) => p.verification !== "not-verified" && p.placement !== "sources-only");
  const latestByPublication = Array.from(
    verifiedPress
      .filter((p) => p.linkType === "independent-editorial")
      .sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""))
      .reduce((map, p) => (map.has(p.publication) ? map : map.set(p.publication, p)), new Map<string, (typeof verifiedPress)[number]>()),
  ).map(([publication, item]) => ({ publication, item }));
  const verifiedAwards = awards.filter((a) => a.verification === "verified-independent" || a.verification === "verified-organiser-page");
  const pendingAwards = awards.filter((a) => a.verification === "claimed-on-speakx-site-only");
  const schema = organizationSchema({ award: verifiedAwards.map((a) => `${a.title} (${a.organisation}, ${a.year})`) });

  return (
    <>
      <PageView slug="press" />
      <JsonLd data={[schema, websiteSchema()]} />
      <BackToHub label="Back to the comparison hub" />
      <div className="bg-[radial-gradient(ellipse_at_top_left,var(--brand-soft),transparent_60%)]">
        <Container className="pb-12 pt-8 sm:pt-10">
          <Breadcrumbs items={[{ label: "SpeakX", href: SITE.links.home }, { label: "Press & awards", href: "/press" }]} />
          <h1 className="mt-8 text-4xl font-extrabold leading-tight sm:text-5xl">SpeakX in the news, awards and recognition</h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-soft">A transparent index of public coverage about SpeakX. Each item links to the original source and is labelled by type, so you can judge it for yourself. Facts last verified {SITE.verified}.</p>
        </Container>
      </div>

      <Section eyebrow="As seen in" title="Publications that have covered SpeakX" intro="Each name links to that publication's most recent SpeakX story.">
        <ul className="flex flex-wrap gap-3">
          {latestByPublication.map(({ publication, item }) => (
            <li key={publication}>
              <TrackedLink href={item.url} event="press_article_click" params={{ page_slug: "press", destination: item.url, link_text: publication }} title={`${item.title}${item.date ? ` (${item.date})` : ""}`} className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-brand/40 hover:text-brand-dark hover:shadow-sm">
                {publication}
                <span aria-hidden="true" className="text-muted">↗</span>
              </TrackedLink>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-muted">Names are shown as text. Publisher logos are only used where permission has been confirmed. A mention does not imply endorsement.</p>
      </Section>

      <Section tone="soft" eyebrow="The people behind SpeakX" title="Backed by a champion, built by a founder who lived the problem">
        <BrandStrip pageSlug="press" />
      </Section>

      <Section tone="soft" eyebrow="SpeakX in the news" title="Coverage, newest first">
        <ul className="grid gap-4 md:grid-cols-2">
          {verifiedPress.sort((a, b) => (b.date ?? "").localeCompare(a.date ?? "")).map((p) => (
            <li key={p.url}>
              <TrackedLink href={p.url} event="press_article_click" params={{ page_slug: "press", destination: p.url, link_text: p.publication }} className="group block h-full rounded-3xl border border-line bg-surface p-6 transition hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md">
                <div className="flex items-center justify-between gap-2 text-xs">
                  <span className="font-semibold uppercase tracking-wider text-brand-dark">{p.publication}</span>
                  <span className="rounded-full bg-surface-2 px-2 py-0.5 text-muted">{LABEL[p.linkType]}</span>
                </div>
                <h3 className="mt-3 text-lg font-bold leading-snug text-ink group-hover:text-brand-dark">{p.title}</h3>
                <p className="mt-2 text-sm text-ink-soft">{p.summary}</p>
                <p className="mt-3 text-xs text-muted">{[p.author, p.date].filter(Boolean).join(" · ")}</p>
              </TrackedLink>
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="Awards and recognition" title="Verified recognitions">
        <ol className="relative space-y-6 border-l-2 border-brand/20 pl-6">
          {verifiedAwards.sort((a, b) => b.year.localeCompare(a.year)).map((a) => (
            <li key={`${a.title}-${a.year}`} className="relative">
              <span aria-hidden="true" className="absolute -left-[31px] top-1.5 h-4 w-4 rounded-full border-4 border-surface bg-brand" />
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">{a.year} · {a.recipient === "founder" ? "Founder" : "Company"} · {a.status}</p>
              <h3 className="mt-1 text-lg font-bold">{a.title}</h3>
              <p className="text-sm text-ink-soft">{a.organisation}{a.category ? ` · ${a.category}` : ""}</p>
              {a.note && <p className="mt-1 text-sm text-ink-soft">{a.note}</p>}
              {(a.officialUrl || a.evidenceUrl) && (
                <a href={a.officialUrl ?? a.evidenceUrl} rel="noopener nofollow" target="_blank" className="mt-1 inline-block text-sm font-semibold text-brand-dark underline underline-offset-4">View source</a>
              )}
            </li>
          ))}
        </ol>
        {pendingAwards.length > 0 && (
          <div className="mt-10 rounded-3xl border border-dashed border-line bg-surface-2 p-6">
            <h3 className="font-bold">Listed on speakx.ai, awaiting independent confirmation</h3>
            <p className="mt-1 text-sm text-ink-soft">These recognitions appear on SpeakX&apos;s website. We show them separately until an organiser page or independent report confirms them.</p>
            <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
              {pendingAwards.map((a) => <li key={`${a.title}-${a.year}`} className="text-ink-soft">• {a.title} · {a.organisation}, {a.year}</li>)}
            </ul>
          </div>
        )}
      </Section>

      <Section id="founder" tone="soft" eyebrow="Meet the founder" title={founder.name}>
        <div className="grid gap-8 lg:grid-cols-[320px_1fr_1fr]">
          <figure className="mx-auto w-full max-w-[320px] lg:mx-0">
            <Image src="/images/founder-arpit-mittal.webp" alt="Arpit Mittal, founder and CEO of SpeakX" width={800} height={1000} sizes="(min-width: 1024px) 320px, 80vw" className="w-full rounded-3xl border border-line object-cover shadow-[0_30px_60px_-30px_rgba(10,11,15,0.35)]" />
            <figcaption className="mt-2 text-xs text-muted">Arpit Mittal, Founder and CEO, SpeakX (Ivypods Technology)</figcaption>
          </figure>
          <div className="prose-vs space-y-4 text-[15px]">{founder.bio.map((p) => <p key={p}>{p}</p>)}</div>
          <div>
            <h3 className="font-bold">Interviews and talks</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {founder.interviews.map((i) => <li key={i.href}><a href={i.href} rel="noopener" target="_blank" className="text-brand-dark underline underline-offset-4">{i.label}</a></li>)}
            </ul>
          </div>
        </div>
      </Section>

      <Section id="investors" eyebrow="Investors and milestones" title="Publicly disclosed backing">
        <p className="max-w-3xl text-ink-soft">Investor participation is public information about the company. It is not a guarantee of learning outcomes.</p>
        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          {investors.map((i) => (
            <li key={i.name} className="rounded-3xl border border-line bg-surface p-6">
              <h3 className="font-bold">{i.name}</h3>
              <p className="text-xs uppercase tracking-wider text-muted">{i.type}</p>
              <p className="mt-2 text-sm text-ink-soft">{i.note}</p>
              {i.evidenceUrl && <a href={i.evidenceUrl} rel="noopener nofollow" target="_blank" className="mt-2 inline-block text-sm font-semibold text-brand-dark underline underline-offset-4">Source</a>}
            </li>
          ))}
        </ul>
        <ol className="mt-10 space-y-4 border-l-2 border-brand/20 pl-6">
          {milestones.map((m) => (
            <li key={m.title} className="relative">
              <span aria-hidden="true" className="absolute -left-[31px] top-1.5 h-4 w-4 rounded-full border-4 border-surface bg-accent" />
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">{m.date}</p>
              <p className="font-semibold">{m.title}</p>
              <p className="text-sm text-ink-soft">{m.note} {m.sourceUrl && <a href={m.sourceUrl} rel="noopener nofollow" target="_blank" className="text-brand-dark underline underline-offset-4">Source</a>}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="soft" eyebrow="Research and sources" title="How this page was compiled">
        <div className="prose-vs max-w-3xl space-y-4 text-[15px]">
          <p>Every item above was checked against its original URL on {SITE.verified}. Items are labelled by type: independent editorial coverage, sponsored or branded content, award-organiser listings, investor listings and directories. Syndicated copies are excluded in favour of the original.</p>
          <p>Recognitions are shown as verified only when an organiser page or an independent report confirms them. Anything supported only by SpeakX&apos;s own website is listed separately and marked as awaiting confirmation.</p>
        </div>
      </Section>
    </>
  );
}

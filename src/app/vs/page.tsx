import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Container from "@/components/Container";
import Section from "@/components/Section";
import ComparisonMatrix from "@/components/ComparisonMatrix";
import FaqSection from "@/components/FaqSection";
import CtaButton from "@/components/CtaButton";
import JsonLd from "@/components/JsonLd";
import ProductLogo from "@/components/ProductLogo";
import PageView from "@/components/PageView";
import StickyCta from "@/components/StickyCta";
import TrackedLink from "@/components/TrackedLink";
import PressStrip from "@/components/PressStrip";
import { comparisonIndex, getAllComparisons } from "@/data/comparisons";
import { products, speakx, competitorOrder } from "@/data/products";
import { hubContent } from "@/data/hub";
import { SITE, absoluteUrl, withAttribution } from "@/lib/site";
import { organizationSchema, websiteSchema, speakxAppSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: { absolute: hubContent.seo.title },
  description: hubContent.seo.description,
  keywords: hubContent.seo.keywords,
  alternates: { canonical: absoluteUrl("/vs") },
  openGraph: {
    title: hubContent.seo.title,
    description: hubContent.seo.description,
    url: absoluteUrl("/vs"),
    type: "website",
  },
};

export default async function HubPage() {
  const pages = await getAllComparisons();
  const install = (location: string) => withAttribution(SITE.links.install, { utm_source: "speakx_vs", utm_medium: location, utm_campaign: "vs_hub" });
  const matrixProducts = [speakx, ...competitorOrder.map((s) => products[s])];

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": absoluteUrl("/vs#page"),
    name: hubContent.h1,
    description: hubContent.seo.description,
    url: absoluteUrl("/vs"),
    dateModified: SITE.verified,
    isPartOf: { "@id": `${SITE.origin}/#website` },
    hasPart: comparisonIndex.map((c) => ({ "@type": "WebPage", name: c.shortTitle, url: absoluteUrl(`/vs/${c.slug}`) })),
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: hubContent.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <>
      <PageView slug="vs" />
      <JsonLd data={[organizationSchema(), websiteSchema(), speakxAppSchema(), collectionSchema, faqSchema]} />

      {/* A. Hero */}
      <div className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top_left,var(--brand-soft),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(255,200,61,0.25),transparent_50%)]">
        <Container className="pb-16 pt-8 sm:pt-10">
          <Breadcrumbs items={[{ label: "SpeakX", href: SITE.links.home }, { label: "Compare apps", href: "/vs" }]} />
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-dark">{SITE.tagline}</p>
              <h1 className="mt-3 text-4xl font-extrabold leading-[1.05] sm:text-6xl">{hubContent.h1}</h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">{hubContent.subtitle}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <CtaButton href={install("hero")} label="Start Speaking with SpeakX" location="hero" size="lg" params={{ page_slug: "vs" }} />
                <CtaButton href="#comparisons" label="Explore Comparisons" location="hero" variant="secondary" size="lg" params={{ page_slug: "vs" }} />
              </div>
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-soft">
                {hubContent.trustSignals.map((t) => <li key={t} className="flex items-center gap-2"><span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand" />{t}</li>)}
              </ul>
            </div>
            <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
              <div aria-hidden="true" className="absolute -inset-6 rounded-[2.5rem] bg-brand/10 blur-2xl" />
              <Image src="/images/sia-hero.webp" alt="Sia, SpeakX's AI speaking partner, shown on a voice call in the SpeakX app" width={598} height={1282} priority sizes="(min-width: 1024px) 340px, 300px" className="relative mx-auto w-full max-w-[300px] rounded-[2rem] object-cover lg:max-w-[340px] shadow-[0_40px_80px_-30px_rgba(63,36,201,0.45)]" />
            </div>
          </div>
        </Container>
      </div>

      {/* B. Competitor cards */}
      <Section id="comparisons" eyebrow="Pick a comparison" title="Six comparisons, one honest question: which app gets you speaking?" intro="Each page compares SpeakX with one app on features, Indian-language support, roleplays, pricing and the learners each is built for.">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {comparisonIndex.map((c, i) => {
            const p = products[c.competitorSlug];
            const page = pages.find((pg) => pg.slug === c.slug);
            return (
              <li key={c.slug} className={`reveal reveal-${(i % 3) + 1}`}>
                <TrackedLink href={`/vs/${c.slug}`} event="competitor_card_click" params={{ page_slug: "vs", competitor: p.slug }} className="group flex h-full flex-col rounded-3xl border border-line bg-surface p-6 transition duration-200 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_30px_60px_-30px_rgba(20,18,53,0.35)]" style={{ borderTopColor: p.brandColor, borderTopWidth: 4 }}>
                  <div className="flex items-center gap-3">
                    <ProductLogo product={p} size={48} />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted">SpeakX vs</p>
                      <h3 className="text-xl font-bold text-ink">{p.name}</h3>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-ink-soft">{p.tagline}</p>
                  <p className="mt-3 flex-1 rounded-2xl bg-surface-2 p-3 text-sm text-ink"><span className="font-semibold text-brand-dark">Key difference: </span>{page?.cardDifference}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-dark">Compare with SpeakX <span aria-hidden="true" className="transition group-hover:translate-x-1">→</span></span>
                </TrackedLink>
              </li>
            );
          })}
        </ul>
      </Section>

      {/* C. Matrix */}
      <Section tone="soft" eyebrow="At a glance" title="Quick comparison matrix" intro="The dimensions Indian learners ask about most. Marks reflect official sources only; where we could not verify a feature, we say so instead of guessing.">
        <ComparisonMatrix products={matrixProducts} keys={hubContent.matrixKeys} slugFor={(p) => comparisonIndex.find((c) => c.competitorSlug === p.slug)?.slug ?? null} />
      </Section>

      {/* D. Why SpeakX */}
      <Section eyebrow="Why learners choose SpeakX" title="Built for the moment you have to speak, not just study" intro="What SpeakX does, as described on its own website and store listing. These are product facts, not claims about other apps.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {hubContent.differentiators.map((d) => (
            <article key={d.title} className="rounded-3xl border border-line bg-surface p-6">
              <span aria-hidden="true" className="grid h-10 w-10 place-items-center rounded-2xl bg-brand-soft text-lg">{d.icon}</span>
              <h3 className="mt-4 text-lg font-bold">{d.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{d.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {hubContent.screenshots.map((s) => (
            <figure key={s.src} className="overflow-hidden rounded-3xl border border-line bg-surface-2">
              <Image src={s.src} alt={s.alt} width={400} height={800} className="h-auto w-full object-cover" />
              <figcaption className="px-4 py-3 text-xs text-muted">{s.caption}</figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* E. By goal */}
      <Section tone="soft" eyebrow="Choose by learning goal" title="Start from what you need English for">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {hubContent.goals.map((g) => (
            <div key={g.title} className="flex flex-col rounded-3xl border border-line bg-surface p-5">
              <h3 className="text-base font-bold">{g.title}</h3>
              <p className="mt-2 flex-1 text-sm text-ink-soft">{g.body}</p>
              <ul className="mt-4 space-y-1.5 text-sm">
                {g.links.map((l) => (
                  <li key={l.href}><TrackedLink href={l.href} event="internal_link_click" params={{ page_slug: "vs", link_text: l.label }} className="text-brand-dark underline underline-offset-4 hover:text-brand">{l.label}</TrackedLink></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* F. Coverage */}
      <Section eyebrow="Trusted coverage and recognition" title="What independent publications and award juries have said" intro="Links go to the original source. Sponsored or branded content is labelled as such, and a mention is not a recommendation over other apps.">
        <PressStrip pageSlug="vs" />
      </Section>

      {/* G. FAQ */}
      <Section tone="soft" eyebrow="FAQ" title="Questions people ask before choosing an English speaking app">
        <FaqSection faqs={hubContent.faqs} pageSlug="vs" />
      </Section>

      {/* H. Final CTA */}
      <section className="bg-ink py-16 text-white">
        <Container className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{SITE.tagline}</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Knowing English is one thing. Speaking it confidently is another.</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/75">Practise out loud with Sia for 15 minutes a day. Free to start; Premium is a ₹2 three-day trial, then ₹299 a month on the SpeakX website.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CtaButton href={install("final")} label="Start Speaking with SpeakX" location="final" variant="accent" size="lg" params={{ page_slug: "vs" }} />
            <Link href={SITE.links.comparisonArticle} className="inline-flex items-center rounded-full px-7 py-4 font-semibold text-white/90 ring-1 ring-inset ring-white/30 hover:bg-white/10">Read the full apps guide</Link>
          </div>
        </Container>
      </section>
      <StickyCta pageSlug="vs" />
    </>
  );
}

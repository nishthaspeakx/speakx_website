import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import Container from "@/components/Container";
import Section from "@/components/Section";
import FeatureTable from "@/components/FeatureTable";
import FaqSection from "@/components/FaqSection";
import Sources from "@/components/Sources";
import CtaButton from "@/components/CtaButton";
import JsonLd from "@/components/JsonLd";
import ProductLogo from "@/components/ProductLogo";
import PageView from "@/components/PageView";
import StickyCta from "@/components/StickyCta";
import TrackedLink from "@/components/TrackedLink";
import PressStrip from "@/components/PressStrip";
import { comparisonIndex, getComparison } from "@/data/comparisons";
import { products, speakx } from "@/data/products";
import { SITE, absoluteUrl, withAttribution } from "@/lib/site";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { rich, plain } from "@/lib/richtext";

export const dynamicParams = false;

export function generateStaticParams() {
  return comparisonIndex.map((c) => ({ slug: c.slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const page = await getComparison(slug);
  if (!page) return {};
  const url = absoluteUrl(`/vs/${slug}`);
  return {
    title: { absolute: page.seo.title },
    description: page.seo.description,
    keywords: page.seo.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: page.seo.title,
      description: page.seo.description,
      url,
      type: "article",
    },
    twitter: { card: "summary_large_image", title: page.seo.title, description: page.seo.description },
  };
}

export default async function ComparisonPageRoute({ params }: Params) {
  const { slug } = await params;
  const page = await getComparison(slug);
  if (!page) notFound();
  const competitor = products[page.competitorSlug];
  if (!competitor) notFound();

  const install = (location: string) =>
    withAttribution(SITE.links.install, { utm_source: "speakx_vs", utm_medium: location, utm_campaign: slug });

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": absoluteUrl(`/vs/${slug}#article`),
    headline: page.h1,
    description: page.seo.description,
    url: absoluteUrl(`/vs/${slug}`),
    dateModified: page.lastVerified,
    inLanguage: "en-IN",
    author: { "@type": "Organization", name: "SpeakX", url: SITE.links.home },
    publisher: { "@id": `${SITE.origin}/#organization` },
    about: [
      { "@type": "SoftwareApplication", name: "SpeakX", applicationCategory: "EducationalApplication", operatingSystem: "Android, iOS", url: SITE.links.home },
      { "@type": "SoftwareApplication", name: competitor.name, applicationCategory: "EducationalApplication", url: competitor.website },
    ],
    isPartOf: { "@id": `${SITE.origin}/#website` },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: plain(f.a) },
    })),
  };

  const others = comparisonIndex.filter((c) => c.slug !== slug);

  return (
    <>
      <PageView slug={slug} competitor={competitor.slug} />
      <JsonLd data={[organizationSchema(), websiteSchema(), articleSchema, faqSchema]} />

      {/* Hero */}
      <div className="bg-[radial-gradient(ellipse_at_top_left,var(--brand-soft),transparent_60%)]">
        <Container className="pb-12 pt-8 sm:pt-10">
          <Breadcrumbs items={[{ label: "SpeakX", href: SITE.links.home }, { label: "Compare apps", href: "/vs" }, { label: `SpeakX vs ${competitor.name}`, href: `/vs/${slug}` }]} />
          <div className="mt-8 grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="flex items-center gap-3">
                <ProductLogo product={speakx} size={56} />
                <span className="text-sm font-semibold uppercase tracking-widest text-muted">vs</span>
                <ProductLogo product={competitor} size={56} />
              </div>
              <h1 className="mt-6 text-3xl font-extrabold leading-[1.1] sm:text-5xl">{page.h1}</h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">{page.seo.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <CtaButton href={install("hero")} label="Start Speaking with SpeakX" location="hero" size="lg" params={{ page_slug: slug, competitor: competitor.slug }} />
                <CtaButton href="#feature-table" label="Jump to the comparison" location="hero" variant="secondary" size="lg" params={{ page_slug: slug }} />
              </div>
              <p className="mt-4 text-xs text-muted">Facts last verified <time dateTime={page.lastVerified}>{page.lastVerified}</time>. Prices and ratings can change.</p>
            </div>

            {/* Quick answer */}
            <aside className="rounded-3xl border border-line bg-surface p-6 shadow-[0_30px_60px_-30px_rgba(20,18,53,0.25)] sm:p-7" aria-labelledby="quick-answer">
              <p id="quick-answer" className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-dark">Quick answer</p>
              <div className="prose-vs mt-3 space-y-3 text-[15px]">
                {page.quickAnswer.map((s) => <p key={s}>{rich(s, slug)}</p>)}
              </div>
            </aside>
          </div>
        </Container>
      </div>

      {/* Intro */}
      <Section eyebrow="The two apps" title={`What SpeakX and ${competitor.name} are each built for`}>
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-brand/20 bg-brand-soft/40 p-6 sm:p-8">
            <div className="flex items-center gap-3"><ProductLogo product={speakx} size={44} /><h3 className="text-xl font-bold">SpeakX</h3></div>
            <p className="prose-vs mt-4 text-[15px]">{rich(page.intro.speakx, slug)}</p>
          </article>
          <article className="rounded-3xl border border-line bg-surface p-6 sm:p-8">
            <div className="flex items-center gap-3"><ProductLogo product={competitor} size={44} /><h3 className="text-xl font-bold">{competitor.name}</h3></div>
            <p className="prose-vs mt-4 text-[15px]">{rich(page.intro.competitor, slug)}</p>
          </article>
        </div>
      </Section>

      {/* Feature table */}
      <Section id="feature-table" tone="soft" eyebrow="Side by side" title={`SpeakX vs ${competitor.name}: feature comparison`} intro="Each cell summarises what the official websites, help centres and app-store listings say. “Not verified” means we could not confirm the detail from an official source.">
        <FeatureTable rows={page.featureTable} competitorName={competitor.name} caption={`Feature comparison of SpeakX and ${competitor.name}`} />
      </Section>

      {/* How each works */}
      <Section eyebrow="How they work" title="Two different approaches to getting you speaking">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-bold">How SpeakX works</h3>
            <div className="prose-vs mt-4 space-y-4 text-[15px]">{page.howSpeakXWorks.map((p) => <p key={p}>{rich(p, slug)}</p>)}</div>
            <Image src="/images/speakx-sia-practice.webp" alt="Sia, SpeakX's AI speaking partner, on a voice-call practice screen" width={640} height={420} className="mt-6 w-full rounded-3xl border border-line object-cover" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">How {competitor.name} works</h3>
            <div className="prose-vs mt-4 space-y-4 text-[15px]">{page.howCompetitorWorks.map((p) => <p key={p}>{rich(p, slug)}</p>)}</div>
          </div>
        </div>
      </Section>

      {/* Key differences */}
      <Section tone="soft" eyebrow="Key differences" title={`The ${page.keyDifferences.length} differences that matter most`}>
        <ol className="grid gap-5 md:grid-cols-2">
          {page.keyDifferences.map((d, i) => (
            <li key={d.title} className="rounded-3xl border border-line bg-surface p-6">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-brand text-sm font-bold text-white">{i + 1}</span>
              <h3 className="mt-4 text-lg font-bold">{d.title}</h3>
              <p className="prose-vs mt-2 text-[15px]">{rich(d.body, slug)}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Better for */}
      <Section eyebrow="Honest fit" title="Where each app is the better choice">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-brand/20 bg-brand-soft/40 p-6 sm:p-8">
            <h3 className="text-xl font-bold">Where SpeakX may be a better fit</h3>
            <ul className="mt-4 space-y-3 text-[15px] text-ink-soft">{page.speakxBetterFor.map((s) => <li key={s} className="flex gap-3"><span aria-hidden="true" className="mt-1 text-success">✓</span><span>{rich(s, slug)}</span></li>)}</ul>
          </div>
          <div className="rounded-3xl border border-line bg-surface p-6 sm:p-8">
            <h3 className="text-xl font-bold">Where {competitor.name} may be a better fit</h3>
            <ul className="mt-4 space-y-3 text-[15px] text-ink-soft">{page.competitorBetterFor.map((s) => <li key={s} className="flex gap-3"><span aria-hidden="true" className="mt-1 text-brand-dark">✓</span><span>{rich(s, slug)}</span></li>)}</ul>
          </div>
        </div>
      </Section>

      {/* By learner type and goal */}
      <Section tone="soft" eyebrow="Who are you?" title="Comparison by learner type and learning goal">
        <div className="space-y-10">
          <div>
            <h3 className="mb-4 text-xl font-bold">By learner type</h3>
            <FeatureTable rows={page.byLearnerType.map((r) => ({ label: r.learner, speakx: r.speakx, competitor: r.competitor }))} competitorName={competitor.name} caption="Comparison by learner type" />
          </div>
          <div>
            <h3 className="mb-4 text-xl font-bold">By learning goal</h3>
            <FeatureTable rows={page.byGoal.map((r) => ({ label: r.goal, speakx: r.speakx, competitor: r.competitor }))} competitorName={competitor.name} caption="Comparison by learning goal" />
          </div>
        </div>
      </Section>

      {/* Pricing */}
      <Section eyebrow="Pricing" title="Pricing and the free experience" intro={`Verified ${page.lastVerified}. Prices shown are what the official websites or stores listed on that date for the region noted, and they can change.`}>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-brand/20 bg-brand-soft/40 p-6 sm:p-8">
            <h3 className="text-lg font-bold">SpeakX</h3>
            <p className="prose-vs mt-3 text-[15px]">{rich(page.pricing.speakx, slug)}</p>
            <TrackedLink href={SITE.links.premium} event="internal_link_click" params={{ page_slug: slug, link_text: "SpeakX Premium" }} className="mt-4 inline-block text-sm font-semibold text-brand-dark underline underline-offset-4">See SpeakX Premium details</TrackedLink>
          </div>
          <div className="rounded-3xl border border-line bg-surface p-6 sm:p-8">
            <h3 className="text-lg font-bold">{competitor.name}</h3>
            <p className="prose-vs mt-3 text-[15px]">{rich(page.pricing.competitor, slug)}</p>
          </div>
        </div>
        <p className="mt-4 text-sm text-muted">{rich(page.pricing.note, slug)}</p>
      </Section>

      {/* UX & feedback */}
      <Section tone="soft" eyebrow="Experience" title="User experience and how each app gives feedback">
        <div className="prose-vs max-w-3xl space-y-4 text-[15px]">{page.uxAndFeedback.map((p) => <p key={p}>{rich(p, slug)}</p>)}</div>
      </Section>

      {/* Press & awards */}
      <Section eyebrow="Independent coverage" title="SpeakX in the press and in awards" intro="Coverage is listed with its type. Sponsored or branded pieces are labelled; a mention is not an endorsement of SpeakX over any other app.">
        <PressStrip pageSlug={slug} />
      </Section>

      {/* FAQ */}
      <Section tone="soft" eyebrow="FAQ" title={`SpeakX vs ${competitor.name}: common questions`}>
        <FaqSection faqs={page.faqs} pageSlug={slug} />
      </Section>

      {/* Related */}
      <Section eyebrow="Keep exploring" title="Related comparisons and guides">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {page.related.map((r) => (
            <TrackedLink key={r.href} href={r.href} event="internal_link_click" params={{ page_slug: slug, link_text: r.label }} className="group rounded-2xl border border-line bg-surface p-5 transition hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md">
              <p className="font-semibold text-ink group-hover:text-brand-dark">{r.label}</p>
              {r.description && <p className="mt-1 text-sm text-ink-soft">{r.description}</p>}
            </TrackedLink>
          ))}
          {others.map((o) => (
            <TrackedLink key={o.slug} href={`/vs/${o.slug}`} event="competitor_card_click" params={{ page_slug: slug, competitor: o.competitorSlug }} className="group rounded-2xl border border-dashed border-line bg-surface-2 p-5 transition hover:border-brand/40">
              <p className="font-semibold text-ink group-hover:text-brand-dark">{o.shortTitle}</p>
              <p className="mt-1 text-sm text-ink-soft">Full comparison</p>
            </TrackedLink>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <section className="bg-ink py-16 text-white">
        <Container className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{SITE.tagline}</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Knowing English is one thing. Speaking it confidently is another.</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/75">Talk to Sia on a voice call for 15 minutes a day. Free to start; Premium is a ₹2 three-day trial, then ₹299 a month on the SpeakX website.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CtaButton href={install("final")} label="Start Speaking with SpeakX" location="final" variant="accent" size="lg" params={{ page_slug: slug, competitor: competitor.slug }} />
            <Link href="/vs" className="inline-flex items-center rounded-full px-7 py-4 font-semibold text-white/90 ring-1 ring-inset ring-white/30 hover:bg-white/10">Explore more comparisons</Link>
          </div>
        </Container>
      </section>

      <Container className="py-12">
        <Sources sources={page.sources} lastVerified={page.lastVerified} />
      </Container>
      <StickyCta pageSlug={slug} />
    </>
  );
}

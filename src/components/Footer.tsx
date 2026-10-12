import Link from "next/link";
import Container from "./Container";
import { SITE } from "@/lib/site";
import { comparisonIndex } from "@/data/comparisons";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface-2 py-12 text-sm">
      <Container className="grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <p className="font-display text-lg font-bold text-ink">SpeakX</p>
          <p className="mt-2 text-ink-soft">{SITE.tagline}</p>
          <p className="mt-4 text-xs leading-relaxed text-muted">
            SpeakX is made by {SITE.legalName}, Gurugram. Speak (speak.com) is a different company.
          </p>
        </div>
        <div>
          <p className="font-semibold text-ink">Comparisons</p>
          <ul className="mt-3 space-y-2 text-ink-soft">
            <li><Link href="/vs" className="hover:text-brand-dark">All comparisons</Link></li>
            {comparisonIndex.map((c) => (
              <li key={c.slug}><Link href={`/vs/${c.slug}`} className="hover:text-brand-dark">{c.shortTitle}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold text-ink">SpeakX</p>
          <ul className="mt-3 space-y-2 text-ink-soft">
            <li><Link href={SITE.links.home} className="hover:text-brand-dark">Home</Link></li>
            <li><Link href={SITE.links.about} className="hover:text-brand-dark">About</Link></li>
            <li><Link href={SITE.links.premium} className="hover:text-brand-dark">Premium</Link></li>
            <li><Link href={SITE.links.blog} className="hover:text-brand-dark">Blog</Link></li>
            <li><Link href="/press" className="hover:text-brand-dark">Press &amp; awards</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-ink">Get the app</p>
          <ul className="mt-3 space-y-2 text-ink-soft">
            <li><a href={SITE.links.play} rel="noopener" target="_blank" className="hover:text-brand-dark">Google Play</a></li>
            {SITE.links.appStore && (
              <li><a href={SITE.links.appStore} rel="noopener" target="_blank" className="hover:text-brand-dark">App Store</a></li>
            )}
            <li><Link href={SITE.links.contact} className="hover:text-brand-dark">Contact</Link></li>
          </ul>
          <p className="mt-6 text-xs text-muted">
            Competitor names and logos belong to their owners and are used for identification only. Facts last verified {SITE.verified}.
          </p>
        </div>
      </Container>
    </footer>
  );
}

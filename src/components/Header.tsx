import Link from "next/link";
import Image from "next/image";
import CtaButton from "./CtaButton";
import Container from "./Container";
import { SITE, withAttribution } from "@/lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-line/70 bg-surface/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="/vs" className="flex items-center gap-2" aria-label="SpeakX comparison hub home">
          <Image src="/logos/speakx.svg" alt="SpeakX" width={128} height={32} priority className="h-8 w-auto" />
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-6 text-sm font-medium text-ink-soft md:flex">
          <Link href={SITE.links.home} className="hover:text-brand-dark">speakx.ai</Link>
          <Link href="/vs" className="rounded-full bg-brand-soft px-3 py-1 font-semibold text-brand-dark hover:text-brand-hover">⌂ Compare apps</Link>
          <Link href="/press" className="hover:text-brand-dark">Press &amp; awards</Link>
          <Link href={SITE.links.blog} className="hover:text-brand-dark">Blog</Link>
          <Link href={SITE.links.premium} className="hover:text-brand-dark">Premium</Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/vs" className="text-sm font-semibold text-brand-dark md:hidden">⌂ Compare</Link>
          <CtaButton
            href={withAttribution(SITE.links.install, { utm_source: "speakx_vs", utm_medium: "header" })}
            label="Start Speaking"
            location="header"
          />
        </div>
      </Container>
    </header>
  );
}

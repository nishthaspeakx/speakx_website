import Image from "next/image";
import TrackedLink from "./TrackedLink";
import { SITE } from "@/lib/site";

/**
 * Brand strip: the two faces of SpeakX. Facts are verified (Inc42, 1 Sep 2026; speakx.ai).
 * Dhoni image is SpeakX's own homepage asset; the founder photo was supplied by the SpeakX team.
 */
export default function BrandStrip({ pageSlug }: { pageSlug: string }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      <TrackedLink href="/press#investors" event="internal_link_click" params={{ page_slug: pageSlug, link_text: "MS Dhoni brand card" }} className="group relative flex min-h-[260px] overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#0a0b0f_0%,#742c07_55%,#ff4d00_100%)] text-white shadow-[0_30px_60px_-30px_rgba(10,11,15,0.5)]">
        <div className="relative z-10 flex w-[58%] flex-col justify-between p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{SITE.tagline}</p>
          <div>
            <h3 className="text-2xl font-extrabold leading-tight sm:text-3xl">Backed by MS Dhoni</h3>
            <p className="mt-2 text-sm text-white/80">Strategic investor and brand ambassador since September 2026, as reported by Inc42 and The Economic Times.</p>
            <span className="mt-4 inline-block text-sm font-semibold text-accent group-hover:underline">See the coverage →</span>
          </div>
        </div>
        <Image src="/images/dhoni-speakx.webp" alt="MS Dhoni, SpeakX investor and brand ambassador, pointing at the SpeakX app" width={720} height={1156} sizes="(min-width: 768px) 260px, 45vw" className="absolute -bottom-2 right-0 h-[105%] w-auto object-contain object-bottom drop-shadow-[0_20px_30px_rgba(0,0,0,0.35)]" />
      </TrackedLink>
      <TrackedLink href="/press#founder" event="internal_link_click" params={{ page_slug: pageSlug, link_text: "Founder brand card" }} className="group flex min-h-[260px] overflow-hidden rounded-3xl border border-line bg-surface shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
        <div className="flex w-[58%] flex-col justify-between p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-dark">Founder</p>
          <div>
            <h3 className="text-2xl font-extrabold leading-tight sm:text-3xl">Arpit Mittal</h3>
            <p className="mt-2 text-sm text-ink-soft">Founder and CEO of SpeakX (Ivypods Technology, Gurugram). Built SpeakX for Indian learners who understand English but hesitate to speak it.</p>
            <span className="mt-4 inline-block text-sm font-semibold text-brand-dark group-hover:underline">Meet the founder →</span>
          </div>
        </div>
        <div className="relative w-[42%]">
          <Image src="/images/founder-arpit-mittal.webp" alt="Arpit Mittal, founder and CEO of SpeakX" fill sizes="(min-width: 768px) 240px, 42vw" className="object-cover object-top" />
        </div>
      </TrackedLink>
    </div>
  );
}

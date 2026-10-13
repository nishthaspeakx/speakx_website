"use client";

import { useEffect, useState } from "react";
import CtaButton from "./CtaButton";
import { SITE, withAttribution } from "@/lib/site";

/** Mobile-only install bar that appears after the visitor scrolls past the hero. */
export default function StickyCta({ pageSlug }: { pageSlug: string }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 560);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const href = withAttribution(SITE.links.install, {
    utm_source: "speakx_vs",
    utm_medium: "sticky_cta",
    utm_campaign: pageSlug,
  });
  return (
    <div
      inert={!show}
      aria-hidden={!show}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-surface/95 p-3 backdrop-blur transition-transform duration-300 md:hidden ${show ? "translate-y-0" : "translate-y-full"}`}
    >
      <div className="mx-auto flex max-w-md items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-ink">Practice speaking with Sia</p>
          <p className="truncate text-xs text-muted">Free to start · 15 minutes a day</p>
        </div>
        <CtaButton href={href} label="Try SpeakX" location="sticky_mobile" params={{ page_slug: pageSlug }} />
      </div>
    </div>
  );
}

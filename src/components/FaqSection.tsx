"use client";

import { track } from "@/lib/analytics";
import type { FAQ } from "@/lib/types";

export default function FaqSection({ faqs, pageSlug }: { faqs: FAQ[]; pageSlug: string }) {
  return (
    <div className="divide-y divide-line rounded-2xl border border-line bg-surface">
      {faqs.map((f) => (
        <details
          key={f.q}
          className="group px-5 py-4 sm:px-6"
          onToggle={(e) => {
            if ((e.currentTarget as HTMLDetailsElement).open) {
              track("faq_expand", { page_slug: pageSlug, question: f.q });
            }
          }}
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-semibold text-ink marker:content-none">
            <span>{f.q}</span>
            <span aria-hidden="true" className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-soft text-brand-dark transition-transform group-open:rotate-45">+</span>
          </summary>
          <p className="prose-vs mt-3 text-[15px] leading-relaxed">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

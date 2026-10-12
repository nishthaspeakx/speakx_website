import Link from "next/link";
import type { Product, DimensionKey } from "@/lib/types";
import { DIMENSION_LABELS } from "@/lib/types";
import VerdictIcon from "./VerdictIcon";
import ProductLogo from "./ProductLogo";

interface Props {
  products: Product[]; // SpeakX first
  keys: DimensionKey[];
  slugFor: (p: Product) => string | null;
}

/** Hub matrix: SpeakX + six competitors across the dimensions Indian learners ask about most. */
export default function ComparisonMatrix({ products, keys, slugFor }: Props) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-line shadow-sm">
      <table className="vs-table w-full min-w-[920px] text-sm">
        <caption className="sr-only">Quick comparison of SpeakX and six English speaking apps</caption>
        <thead>
          <tr>
            <th scope="col" className="px-4 py-3 text-left font-semibold text-ink">Feature</th>
            {products.map((p) => {
              const slug = slugFor(p);
              return (
                <th key={p.slug} scope="col" className={`px-3 py-3 text-center font-semibold ${p.slug === "speakx" ? "text-brand-dark" : "text-ink"}`}>
                  <div className="flex flex-col items-center gap-1.5">
                    <ProductLogo product={p} size={36} />
                    {slug ? <Link href={`/vs/${slug}`} className="hover:underline">{p.name}</Link> : <span>{p.name}</span>}
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {keys.map((k, i) => (
            <tr key={k} className={i % 2 ? "bg-surface-2/60" : ""}>
              <th scope="row" className="px-4 py-3 text-left font-medium text-ink">{DIMENSION_LABELS[k]}</th>
              {products.map((p) => {
                const d = p.dimensions[k];
                return (
                  <td key={p.slug} className="px-3 py-3 text-center">
                    <VerdictIcon value={d.value} note={d.note} />
                  </td>
                );
              })}
            </tr>
          ))}
          <tr className="bg-surface-2/60">
            <th scope="row" className="px-4 py-3 text-left font-medium text-ink">Pricing (as checked)</th>
            {products.map((p) => (
              <td key={p.slug} className="px-3 py-3 text-center text-xs leading-snug text-ink-soft">{p.pricing.summary}</td>
            ))}
          </tr>
        </tbody>
      </table>
      <p className="border-t border-line bg-surface px-4 py-3 text-xs text-muted">
        ✓ supported · ◐ partial or limited · – not offered · ? not verified from official sources. Hover or focus a mark to see the evidence note. Pricing is as listed on official sites or stores on the date shown and can change.
      </p>
    </div>
  );
}

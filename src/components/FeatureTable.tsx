import type { TableRow } from "@/lib/types";

interface Props {
  rows: TableRow[];
  competitorName: string;
  caption?: string;
}

/** Two-product side-by-side table. Scrolls horizontally on small screens with a sticky label column. */
export default function FeatureTable({ rows, competitorName, caption }: Props) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-line">
      <table className="vs-table w-full min-w-[640px] text-sm">
        {caption && <caption className="sr-only">{caption}</caption>}
        <thead>
          <tr className="text-left">
            <th scope="col" className="w-[30%] px-4 py-3 font-semibold text-ink">Feature</th>
            <th scope="col" className="w-[35%] px-4 py-3 font-semibold text-brand-dark">SpeakX</th>
            <th scope="col" className="w-[35%] px-4 py-3 font-semibold text-ink">{competitorName}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={r.label} className={i % 2 ? "bg-surface-2/60" : ""}>
              <th scope="row" className="px-4 py-3 text-left font-medium text-ink">{r.label}</th>
              <td className="px-4 py-3 align-top text-ink-soft">{r.speakx}</td>
              <td className="px-4 py-3 align-top text-ink-soft">{r.competitor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

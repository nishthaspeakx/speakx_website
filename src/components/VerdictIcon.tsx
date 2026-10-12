import type { Verdict } from "@/lib/types";

const MAP: Record<Verdict, { label: string; className: string; glyph: string }> = {
  yes: { label: "Yes", className: "bg-success/10 text-success", glyph: "✓" },
  partial: { label: "Partial", className: "bg-warn/10 text-warn", glyph: "◐" },
  no: { label: "Not offered", className: "bg-line text-muted", glyph: "–" },
  "not-verified": { label: "Not verified", className: "bg-surface-2 text-muted", glyph: "?" },
};

export default function VerdictIcon({ value, note }: { value: Verdict; note?: string }) {
  const m = MAP[value];
  return (
    <span
      className={`inline-flex min-w-[2rem] items-center justify-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold ${m.className}`}
      title={note ? `${m.label}: ${note}` : m.label}
      aria-label={note ? `${m.label}. ${note}` : m.label}
    >
      <span aria-hidden="true">{m.glyph}</span>
      <span className="sr-only">{m.label}</span>
    </span>
  );
}

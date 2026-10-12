import type { Source } from "@/lib/types";

export default function Sources({ sources, lastVerified }: { sources: Source[]; lastVerified: string }) {
  return (
    <div className="rounded-2xl border border-line bg-surface-2 p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="text-lg font-bold">Sources and verification</h2>
        <p className="text-sm text-muted">Facts last verified <time dateTime={lastVerified}>{lastVerified}</time></p>
      </div>
      <p className="mt-2 text-sm text-ink-soft">
        Every product fact on this page comes from the sources below. Where we could not confirm a detail from an official source, the page says “not verified” rather than guessing. Prices and store ratings change; check the official pages before deciding.
      </p>
      <ol className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
        {sources.map((s) => (
          <li key={s.url} className="truncate">
            <a href={s.url} rel="noopener nofollow" target="_blank" className="text-brand-dark underline underline-offset-4 hover:text-brand">{s.label}</a>
            <span className="text-muted"> · checked {s.checked}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

import Link from "next/link";
import Container from "./Container";

/** Persistent way back to the comparison hub, shown directly under the header on every sub-page. */
export default function BackToHub({ label = "All comparisons" }: { label?: string }) {
  return (
    <div className="border-b border-line bg-surface-2/70">
      <Container className="flex h-10 items-center justify-between text-sm">
        <Link href="/vs" className="inline-flex items-center gap-2 font-semibold text-brand-dark hover:text-brand-hover">
          <span aria-hidden="true">←</span> {label}
        </Link>
        <span className="hidden text-muted sm:inline">SpeakX vs Supernova · MySivi · Duolingo · Stimuler · ELSA Speak · Speak</span>
      </Container>
    </div>
  );
}

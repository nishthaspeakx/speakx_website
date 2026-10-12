import type { ReactNode } from "react";
import Container from "./Container";

interface Props {
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  children: ReactNode;
  tone?: "default" | "soft" | "dark";
  className?: string;
  headingLevel?: "h2" | "h3";
}

export default function Section({ id, eyebrow, title, intro, children, tone = "default", className = "", headingLevel = "h2" }: Props) {
  const bg = tone === "soft" ? "bg-surface-2" : tone === "dark" ? "bg-ink text-white" : "bg-surface";
  const Heading = headingLevel;
  return (
    <section id={id} className={`${bg} py-14 sm:py-20 ${className}`}>
      <Container>
        {(eyebrow || title || intro) && (
          <div className="mb-10 max-w-3xl">
            {eyebrow && (
              <p className={`mb-3 text-xs font-semibold uppercase tracking-[0.18em] ${tone === "dark" ? "text-accent" : "text-brand-dark"}`}>
                {eyebrow}
              </p>
            )}
            {title && (
              <Heading className={`text-3xl font-bold leading-tight sm:text-4xl ${tone === "dark" ? "text-white" : ""}`}>{title}</Heading>
            )}
            {intro && <p className={`mt-4 text-lg leading-relaxed ${tone === "dark" ? "text-white/80" : "text-ink-soft"}`}>{intro}</p>}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}

import TrackedLink from "./TrackedLink";
import type { EventParams } from "@/lib/analytics";

interface Props {
  href: string;
  label: string;
  location: string;
  variant?: "primary" | "secondary" | "ghost" | "accent";
  size?: "md" | "lg";
  params?: EventParams;
  className?: string;
}

const VARIANTS = {
  primary: "bg-brand-dark text-white hover:bg-brand-hover shadow-[0_10px_30px_-10px_var(--brand)]",
  accent: "bg-accent text-ink hover:bg-accent-dark",
  secondary: "bg-surface text-brand-dark ring-1 ring-inset ring-brand/30 hover:bg-brand-soft",
  ghost: "text-brand-dark hover:bg-brand-soft",
};

export default function CtaButton({ href, label, location, variant = "primary", size = "md", params, className = "" }: Props) {
  const pad = size === "lg" ? "px-7 py-4 text-base" : "px-5 py-3 text-sm";
  return (
    <TrackedLink
      href={href}
      event="cta_click"
      params={{ cta_label: label, cta_location: location, ...params }}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 active:scale-[0.98] ${pad} ${VARIANTS[variant]} ${className}`}
    >
      {label}
    </TrackedLink>
  );
}

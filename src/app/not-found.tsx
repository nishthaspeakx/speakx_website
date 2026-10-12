import Link from "next/link";
import Container from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="mt-3 text-ink-soft">The comparison you are looking for does not exist.</p>
      <Link href="/vs" className="mt-6 inline-block font-semibold text-brand-dark underline">See all SpeakX comparisons</Link>
    </Container>
  );
}

import { redirect } from "next/navigation";

/** The hub lives at /vs. The app root simply forwards there. */
export default function Home() {
  redirect("/vs");
}

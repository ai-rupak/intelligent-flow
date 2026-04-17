import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/sections/PagePlaceholder";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — CentricaSoft" },
      {
        name: "description",
        content: "Tell us about your project. Our team responds within 24 hours.",
      },
      { property: "og:title", content: "Contact CentricaSoft" },
      {
        property: "og:description",
        content: "Let's build something exceptional. info@centricasoft.com",
      },
    ],
  }),
  component: () => (
    <PagePlaceholder
      pill="— · Contact"
      title="Let's Build Something Exceptional."
      highlight="Exceptional."
      subtitle="Tell us about your project. Our team will respond within 24 hours. info@centricasoft.com"
    />
  ),
});

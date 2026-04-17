import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/sections/PagePlaceholder";

export const Route = createFileRoute("/company/clients")({
  head: () => ({
    meta: [
      { title: "Clients — CentricaSoft" },
      {
        name: "description",
        content: "Enterprises across healthcare, finance, logistics, and retail trust CentricaSoft to ship intelligence.",
      },
      { property: "og:title", content: "Clients — CentricaSoft" },
      {
        property: "og:description",
        content: "100+ enterprise engagements across 8 industries and 3 continents.",
      },
    ],
  }),
  component: () => (
    <PagePlaceholder
      pill="02 · Company"
      title="Trusted by enterprises building the future."
      highlight="future."
      subtitle="From regional health networks to global asset managers, our clients ship faster because we've already done the hard part."
    />
  ),
});

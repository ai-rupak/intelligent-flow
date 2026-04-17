import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/sections/PagePlaceholder";

export const Route = createFileRoute("/company/partners")({
  head: () => ({
    meta: [
      { title: "Partners — CentricaSoft" },
      {
        name: "description",
        content: "Our technology and delivery partner ecosystem — from hyperscalers to specialized data tooling.",
      },
      { property: "og:title", content: "Partners — CentricaSoft" },
      {
        property: "og:description",
        content: "Our ecosystem. Your advantage. Hyperscalers, data platforms, and delivery partners.",
      },
    ],
  }),
  component: () => (
    <PagePlaceholder
      pill="03 · Company"
      title="Our Ecosystem. Your Advantage."
      highlight="Advantage."
      subtitle="Hyperscaler partnerships, data-platform alliances, and a deep delivery network across the US and India."
    />
  ),
});

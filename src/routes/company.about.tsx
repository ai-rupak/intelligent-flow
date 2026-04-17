import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/sections/PagePlaceholder";

export const Route = createFileRoute("/company/about")({
  head: () => ({
    meta: [
      { title: "About — CentricaSoft" },
      {
        name: "description",
        content:
          "We are CentricaSoft. AI and data engineers obsessed with making intelligence work in the real world.",
      },
      { property: "og:title", content: "About CentricaSoft" },
      {
        property: "og:description",
        content: "100+ projects · 50+ consultants · US and India · obsessed with real-world impact.",
      },
    ],
  }),
  component: () => (
    <PagePlaceholder
      pill="01 · Company"
      title="Built to Build."
      highlight="Build."
      subtitle="We are CentricaSoft. AI and data engineers obsessed with making intelligence work in the real world — not just in demos."
    />
  ),
});

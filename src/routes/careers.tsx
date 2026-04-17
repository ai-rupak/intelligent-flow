import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/sections/PagePlaceholder";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — CentricaSoft" },
      {
        name: "description",
        content:
          "We're hiring engineers, researchers, and operators who want to work on AI that actually matters.",
      },
      { property: "og:title", content: "Careers at CentricaSoft" },
      {
        property: "og:description",
        content: "Build the future with us. Open roles in AI, data, and engineering.",
      },
    ],
  }),
  component: () => (
    <PagePlaceholder
      pill="— · Careers"
      title="Build the Future with Us."
      highlight="Future"
      subtitle="We're hiring engineers, researchers, and operators who want to work on AI that actually matters — in healthcare, finance, and beyond."
    />
  ),
});

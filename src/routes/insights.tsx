import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/sections/PagePlaceholder";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — CentricaSoft" },
      {
        name: "description",
        content: "Field notes from the AI and data engineering frontier — agentic systems, RAG patterns, and lakehouse architectures.",
      },
      { property: "og:title", content: "Insights — CentricaSoft" },
      {
        property: "og:description",
        content: "Intelligence. Curated. Field notes from production AI and data work.",
      },
    ],
  }),
  component: () => (
    <PagePlaceholder
      pill="— · Insights"
      title="Intelligence. Curated."
      highlight="Curated."
      subtitle="Field notes, design patterns, and case studies from the engineers shipping production AI and data systems."
    />
  ),
});

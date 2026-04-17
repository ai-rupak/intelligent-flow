import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/sections/PagePlaceholder";

export const Route = createFileRoute("/what-we-do/agentic-ai")({
  head: () => ({
    meta: [
      { title: "Agentic AI & Autonomous Agents — CentricaSoft" },
      {
        name: "description",
        content:
          "Multi-agent systems with tool use, memory, and reflection loops — engineered for production workflows.",
      },
      { property: "og:title", content: "Agentic AI & Autonomous Agents — CentricaSoft" },
      {
        property: "og:description",
        content: "AI that doesn't just answer — it acts, adapts, and delivers outcomes.",
      },
    ],
  }),
  component: () => (
    <PagePlaceholder
      pill="01 · Services · AI"
      title="Agentic AI & Autonomous Systems"
      highlight="Autonomous"
      subtitle="AI that doesn't just answer — it acts, adapts, and delivers outcomes. Multi-agent architectures with tool use, memory, and reflection."
    />
  ),
});

import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/sections/PagePlaceholder";

export const Route = createFileRoute("/products/nubo")({
  head: () => ({
    meta: [
      { title: "Nubo — The Enterprise GenAI Brain | CentricaSoft" },
      {
        name: "description",
        content:
          "End-to-end GenAI chatbot platform built on RAG, prompt engineering, and enterprise integration. Built for scale.",
      },
      { property: "og:title", content: "Nubo — The Enterprise GenAI Brain" },
      {
        property: "og:description",
        content: "End-to-end GenAI chatbot platform. Built for scale.",
      },
    ],
  }),
  component: () => (
    <PagePlaceholder
      pill="— · Featured Product"
      title="Nubo. The Enterprise AI Brain."
      highlight="AI Brain."
      subtitle="End-to-end GenAI chatbot platform. RAG, prompt engineering, integration, and observability — production-grade from day one."
    />
  ),
});

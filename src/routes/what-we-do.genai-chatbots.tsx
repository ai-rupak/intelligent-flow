import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/sections/PagePlaceholder";

export const Route = createFileRoute("/what-we-do/genai-chatbots")({
  head: () => ({
    meta: [
      { title: "Generative AI Chatbots — CentricaSoft" },
      {
        name: "description",
        content:
          "Enterprise chatbots powered by RAG, prompt engineering, and seamless integration with your systems of record.",
      },
      { property: "og:title", content: "Generative AI Chatbots — CentricaSoft" },
      {
        property: "og:description",
        content: "Production-grade chatbots that ground answers in your knowledge base.",
      },
    ],
  }),
  component: () => (
    <PagePlaceholder
      pill="02 · Services · GenAI"
      title="Generative AI Chatbots"
      highlight="Chatbots"
      subtitle="Production-grade conversational AI grounded in your knowledge — RAG, prompt engineering, and enterprise integration in one platform."
    />
  ),
});

import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/sections/ServicePage";
import { SERVICE_CONTENT } from "@/lib/services-data";

export const Route = createFileRoute("/what-we-do/genai-chatbots")({
  head: () => ({
    meta: [
      { title: "Generative AI Chatbots — CentricaSoft" },
      {
        name: "description",
        content:
          "Enterprise chatbots powered by RAG, prompt engineering, and seamless integration. Hallucination-free, citation-backed.",
      },
      { property: "og:title", content: "Generative AI Chatbots — CentricaSoft" },
      {
        property: "og:description",
        content: "RAG, prompt engineering, and guardrails — production-hardened.",
      },
    ],
  }),
  component: () => <ServicePage content={SERVICE_CONTENT["genai-chatbots"]} />,
});

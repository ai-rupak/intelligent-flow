import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/sections/ServicePage";
import { SERVICE_CONTENT } from "@/lib/services-data";

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
  component: () => <ServicePage content={SERVICE_CONTENT["agentic-ai"]} />,
});

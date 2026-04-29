import { ServicePage } from "@/components/sections/ServicePage";
import { SERVICE_CONTENT } from "@/lib/services-data";

export const metadata = {
  title: "Agentic AI & Autonomous Agents - CentricaSoft",
  description:
    "Multi-agent systems with tool use, memory, and reflection loops engineered for production workflows.",
};

export default function AgenticAiPage() {
  return <ServicePage content={SERVICE_CONTENT["agentic-ai"]} />;
}

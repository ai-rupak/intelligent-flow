import { ServicePage } from "@/components/sections/ServicePage";
import { SERVICE_CONTENT } from "@/lib/services-data";

export const metadata = {
  title: "GenAI Chatbots - CentricaSoft",
  description:
    "Enterprise GenAI chatbot platforms with grounded retrieval, prompt systems, and integration-ready architecture.",
};

export default function GenaiChatbotsPage() {
  return <ServicePage content={SERVICE_CONTENT["genai-chatbots"]} />;
}

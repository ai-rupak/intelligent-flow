import { ServicePage } from "@/components/sections/ServicePage";
import { SERVICE_CONTENT } from "@/lib/services-data";

export const metadata = {
  title: "Data Analytics - CentricaSoft",
  description:
    "Decision intelligence dashboards, semantic layers, and analytics platforms built for business action.",
};

export default function DataAnalyticsPage() {
  return <ServicePage content={SERVICE_CONTENT["data-analytics"]} />;
}

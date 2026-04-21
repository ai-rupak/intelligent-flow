import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/sections/ServicePage";
import { SERVICE_CONTENT } from "@/lib/services-data";

export const Route = createFileRoute("/what-we-do/data-analytics")({
  head: () => ({
    meta: [
      { title: "Data Analytics & Insights — CentricaSoft" },
      {
        name: "description",
        content:
          "Self-serve analytics, executive dashboards, and predictive models that turn raw data into decisions.",
      },
      { property: "og:title", content: "Data Analytics That Move Metrics — CentricaSoft" },
      {
        property: "og:description",
        content: "Dashboards, semantic layers, and predictive models — operationalized.",
      },
    ],
  }),
  component: () => <ServicePage content={SERVICE_CONTENT["data-analytics"]} />,
});

import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/sections/ServicePage";
import { SERVICE_CONTENT } from "@/lib/services-data";

export const Route = createFileRoute("/what-we-do/data-engineering")({
  head: () => ({
    meta: [
      { title: "Data Engineering & Pipelines — CentricaSoft" },
      {
        name: "description",
        content:
          "Cloud-native pipelines at petabyte scale. Streaming ingestion, lakehouse architectures, and orchestration.",
      },
      { property: "og:title", content: "Data Engineering at Petabyte Scale — CentricaSoft" },
      {
        property: "og:description",
        content: "Lakehouse architectures and orchestration that handle 10TB+ daily.",
      },
    ],
  }),
  component: () => <ServicePage content={SERVICE_CONTENT["data-engineering"]} />,
});

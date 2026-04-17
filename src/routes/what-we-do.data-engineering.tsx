import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/sections/PagePlaceholder";

export const Route = createFileRoute("/what-we-do/data-engineering")({
  head: () => ({
    meta: [
      { title: "Data Engineering & Pipelines — CentricaSoft" },
      {
        name: "description",
        content:
          "Cloud-native pipelines, lakehouse architectures, and streaming ingestion at petabyte scale.",
      },
      { property: "og:title", content: "Data Engineering & Pipelines — CentricaSoft" },
      {
        property: "og:description",
        content: "Petabyte-scale ingestion, transformation, and serving on modern lakehouses.",
      },
    ],
  }),
  component: () => (
    <PagePlaceholder
      pill="03 · Services · Data"
      title="Data Engineering at Petabyte Scale"
      highlight="Petabyte"
      subtitle="Streaming ingestion, lakehouse architectures, and orchestration that handle 10TB+ daily — built on Spark, Databricks, Snowflake."
    />
  ),
});

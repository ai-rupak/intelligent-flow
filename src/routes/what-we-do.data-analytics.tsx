import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/sections/PagePlaceholder";

export const Route = createFileRoute("/what-we-do/data-analytics")({
  head: () => ({
    meta: [
      { title: "Data Analytics & Insights — CentricaSoft" },
      {
        name: "description",
        content: "Self-serve analytics, executive dashboards, and predictive models that move metrics that matter.",
      },
      { property: "og:title", content: "Data Analytics & Insights — CentricaSoft" },
      {
        property: "og:description",
        content: "Turn raw data into decisions with modern BI and predictive models.",
      },
    ],
  }),
  component: () => (
    <PagePlaceholder
      pill="04 · Services · Analytics"
      title="Analytics that move the metric."
      highlight="metric."
      subtitle="Self-serve dashboards, executive cockpits, and predictive models grounded in your real operational data."
    />
  ),
});

import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { MarqueeStrip } from "@/components/sections/MarqueeStrip";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { Services } from "@/components/sections/Services";
import { NuboFeature } from "@/components/sections/NuboFeature";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Stats } from "@/components/sections/Stats";
import { Clients } from "@/components/sections/Clients";
import { CTAStrip } from "@/components/sections/CTAStrip";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CentricaSoft — Intelligence, Engineered." },
      {
        name: "description",
        content:
          "AI Agents, GenAI platforms, and enterprise data infrastructure that scale without limits. 100+ projects delivered across the US and India.",
      },
      { property: "og:title", content: "CentricaSoft — Intelligence, Engineered." },
      {
        property: "og:description",
        content:
          "AI Agents, GenAI platforms, and enterprise data infrastructure that scale without limits.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <WhoWeAre />
      <Services />
      <NuboFeature />
      <CaseStudies />
      <Stats />
      <Clients />
      <CTAStrip />
    </>
  );
}

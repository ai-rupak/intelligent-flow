import { Hero } from "@/components/sections/Hero";
import { MarqueeStrip } from "@/components/sections/MarqueeStrip";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { Services } from "@/components/sections/Services";
import { NuboFeature } from "@/components/sections/NuboFeature";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Stats } from "@/components/sections/Stats";
import { Clients } from "@/components/sections/Clients";
import { CTAStrip } from "@/components/sections/CTAStrip";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <WhoWeAre />
      <Services />
      <NuboFeature />
      <Stats />
      <CaseStudies />
      <Clients />
      <CTAStrip />
    </>
  );
}

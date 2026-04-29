"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function WhoWeAre() {
  return (
    <section className="section-y">
      <div className="container-x">
        <SectionLabel number="01">Who We Are</SectionLabel>
        <div className="mt-12 grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <ScrollReveal x={-40} className="lg:col-span-7">
            <h2 className="font-display text-[clamp(36px,5vw,56px)] leading-[1.05] text-[var(--ink)]">
              We don't implement AI.
              <br />
              <span className="text-gradient-brand">We engineer intelligence.</span>
            </h2>
            <div className="mt-8 h-0.5 w-16 bg-gradient-brand-h" />
          </ScrollReveal>
          <ScrollReveal
            x={40}
            delay={0.08}
            className="lg:col-span-5 space-y-5 text-[17px] text-[var(--ink-2)] leading-[1.85]"
          >
            <p>
              CentricaSoft is an AI and data engineering company headquartered across the United
              States and India, built by industry veterans who shipped production systems before
              they wrote a marketing slide.
            </p>
            <p>
              We've delivered <span className="text-[var(--navy)] font-medium">100+ projects</span>{" "}
              for healthcare, finance, logistics, and enterprise teams â€” pairing 50+ consultants
              with proprietary platforms like Nubo to move faster than any pure-services shop and
              deeper than any pure-product vendor.
            </p>
            {/* <p>
              The work speaks: triage agents that handle clinical workloads, research assistants
              grounded in petabytes of context, lakehouses that ingest entire businesses in real
              time.
            </p> */}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

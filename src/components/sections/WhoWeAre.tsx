"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function WhoWeAre() {
  return (
    <section className="section-y">
      <div className="container-x">
        <SectionLabel number="01">Who We Are</SectionLabel>
        <div className="mt-12 grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <h2 className="font-display text-[clamp(36px,5vw,56px)] leading-[1.05] text-[var(--ink)]">
              We don't implement AI.
              <br />
              <span className="text-gradient-brand">We engineer intelligence.</span>
            </h2>
            <div className="mt-8 h-0.5 w-16 bg-gradient-brand-h" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}






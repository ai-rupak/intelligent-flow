"use client";

import { motion } from "framer-motion";
import { Zap, Search, Globe2, Handshake } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Stats } from "@/components/sections/Stats";
import { CTAStrip } from "@/components/sections/CTAStrip";
import { ScrollCounter } from "@/components/ui/ScrollCounter";

const VALUES = [
  {
    icon: Zap,
    title: "Precision",
    body: "Every system we build is tested to the edge case, then beyond. Production-grade isn't an aspiration — it's the starting line.",
  },
  {
    icon: Search,
    title: "Depth",
    body: "We go deep before we go wide — always. Architectural rigor before headcount. Understanding before code.",
  },
  {
    icon: Globe2,
    title: "Scale",
    body: "We architect for 10× the current requirement. Every pipeline, every agent, every dashboard built for tomorrow's load.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    body: "We embed with your team, not just advise it. Your roadmap is our roadmap. Your wins are our wins.",
  },
];

const OFFICES = [
  {
    flag: "🇺🇸",
    country: "United States",
    city: "San Francisco Bay Area",
    timezone: "PST · UTC-8",
    team: "30+ engineers & strategists",
    capabilities: ["Client engagement", "AI/ML research", "Solutions architecture", "Sales"],
  },
  {
    flag: "🇮🇳",
    country: "India",
    city: "Bengaluru · Hyderabad",
    timezone: "IST · UTC+5:30",
    team: "20+ engineers & analysts",
    capabilities: ["Data engineering", "GenAI development", "QA & DevOps", "24/7 ops"],
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        pill="01 · Company"
        title="Built to Build."
        highlight="Build."
        subtitle="We are CentricaSoft. AI and data engineers obsessed with making intelligence work in the real world — not just in demos."
      />

      {/* Mission */}
      <section className="section-y bg-[var(--surface-2)]">
        <div className="container-x">
          <SectionLabel number="— 01">Mission</SectionLabel>
          <div className="mt-12 grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-display text-[clamp(36px,5.5vw,64px)] leading-[1.05] text-[var(--ink)]">
                "We are industry and technology people obsessed with making AI work in the{" "}
                <span className="text-gradient-brand">real world</span> — not just in demos."
              </h2>
              <div className="mt-8 h-[2px] w-20 bg-gradient-brand-h" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="space-y-5 text-[16px] text-[var(--ink-2)] leading-[1.85]"
            >
              <p>
                CentricaSoft was founded by a small team of data engineers and AI researchers who
                kept seeing the same pattern: brilliant prototypes that never made it to production,
                and production systems that buckled the moment they met real-world data.
              </p>
              <p>
                We started with a simple thesis — that the gap between AI demo and AI deployment is
                where the value lives, and where most teams get stuck. Five years later, we've
                shipped 100+ engagements across the US and India, with consultants drawn from
                hyperscalers, top-tier consultancies, and PhD research labs.
              </p>
              <p>
                Today we partner with healthcare networks, asset managers, global retailers, and
                logistics platforms — anywhere intelligent automation can move a metric that
                matters.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-y">
        <div className="container-x">
          <SectionLabel number="— 02">Values</SectionLabel>
          <h2 className="mt-6 font-display text-[clamp(36px,5vw,56px)] leading-[1.05] text-[var(--ink)] max-w-[700px]">
            Four operating principles.
          </h2>

          <div className="mt-16 grid md:grid-cols-2 gap-6">
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group relative rounded-2xl bg-white border border-[var(--border)] p-10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_-20px_rgba(0,32,87,0.18)]"
                >
                  <div className="absolute top-6 right-8 font-mono text-[11px] text-[var(--border-2)]">
                    0{i + 1}
                  </div>
                  <div className="inline-flex w-12 h-12 items-center justify-center rounded-xl bg-gradient-brand-h text-white">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="mt-6 font-heading font-bold text-[22px] text-[var(--ink)]">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-[15px] text-[var(--ink-2)] leading-[1.75]">{v.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="section-y bg-[var(--surface-2)]">
        <div className="container-x">
          <SectionLabel number="— 03">Global Presence</SectionLabel>
          <h2 className="mt-6 font-display text-[clamp(36px,5vw,56px)] leading-[1.05] text-[var(--ink)] max-w-[700px]">
            Two offices. <span className="text-gradient-brand">Twenty-four hours.</span>
          </h2>
          <p className="mt-6 max-w-[600px] text-[16px] text-[var(--ink-2)] leading-[1.7]">
            Our follow-the-sun model means engineering progress every hour of every day. Strategy
            sessions in San Francisco, code shipped from Bengaluru, deployments by morning.
          </p>

          <div className="mt-16 grid md:grid-cols-2 gap-6">
            {OFFICES.map((o, i) => (
              <motion.div
                key={o.country}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                className="relative overflow-hidden rounded-3xl bg-white border border-[var(--border)] p-10"
              >
                <div className="absolute -top-10 -right-10 text-[200px] opacity-[0.07] leading-none select-none">
                  {o.flag}
                </div>
                <div className="relative">
                  <div className="text-[40px] leading-none">{o.flag}</div>
                  <h3 className="mt-5 font-display text-[clamp(28px,3.5vw,36px)] text-[var(--ink)]">
                    {o.country}
                  </h3>
                  <div className="mt-2 text-[16px] text-[var(--ink-2)]">{o.city}</div>
                  <div className="mt-6 grid grid-cols-2 gap-6 pt-6 border-t border-[var(--border)]">
                    <div>
                      <div className="label-mono">Timezone</div>
                      <div className="mt-2 text-[14px] text-[var(--ink)] font-medium">
                        {o.timezone}
                      </div>
                    </div>
                    <div>
                      <div className="label-mono">Team</div>
                      <div className="mt-2 text-[14px] text-[var(--ink)] font-medium">{o.team}</div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="label-mono mb-3">Capabilities</div>
                    <div className="flex flex-wrap gap-2">
                      {o.capabilities.map((c) => (
                        <span
                          key={c}
                          className="px-3 py-1.5 rounded-md bg-[var(--surface-2)] text-[12px] text-[var(--ink-2)]"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team mini */}
      <section className="section-y">
        <div className="container-x">
          <SectionLabel number="— 04">The Team</SectionLabel>
          <div className="mt-12 grid lg:grid-cols-[1fr_auto] gap-12 items-end">
            <h2 className="font-display text-[clamp(36px,5vw,56px)] leading-[1.05] text-[var(--ink)] max-w-[700px]">
              Engineers, researchers, operators.
            </h2>
            <p className="max-w-[400px] text-[15px] text-[var(--ink-2)] leading-[1.7]">
              Our consultants come from Snowflake, Databricks, Microsoft, Google, top-tier
              consultancies, and PhD research labs. Average tenure in data and AI: 9 years.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--border)] border border-[var(--border)] rounded-2xl overflow-hidden">
            {[
              { v: 50, s: "+", l: "Consultants" },
              { v: 9, s: " yr", l: "Avg tenure" },
              { v: 12, s: "", l: "PhDs on team" },
              { v: 6, s: "", l: "Languages spoken" },
            ].map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="bg-white p-8"
              >
                <div className="font-display text-[clamp(36px,4.5vw,48px)] text-gradient-brand leading-none">
                  <ScrollCounter value={m.v} suffix={m.s} />
                </div>
                <div className="mt-3 text-[13px] text-[var(--ink-2)]">{m.l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Stats />
      <CTAStrip />
    </>
  );
}

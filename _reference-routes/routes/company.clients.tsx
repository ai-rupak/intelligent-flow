import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Quote } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CTAStrip } from "@/components/sections/CTAStrip";
import { ScrollCounter } from "@/components/ui/ScrollCounter";

export const Route = createFileRoute("/company/clients")({
  head: () => ({
    meta: [
      { title: "Clients — CentricaSoft" },
      {
        name: "description",
        content:
          "Enterprises across healthcare, finance, logistics, and retail trust CentricaSoft to ship intelligence.",
      },
      { property: "og:title", content: "Clients — CentricaSoft" },
      {
        property: "og:description",
        content: "100+ enterprise engagements across 8 industries and 3 continents.",
      },
    ],
  }),
  component: ClientsPage,
});

const INDUSTRIES = [
  "All",
  "Healthcare",
  "Finance",
  "Logistics",
  "Retail",
  "Manufacturing",
  "Insurance",
  "Public Sector",
] as const;

type Industry = (typeof INDUSTRIES)[number];

const CLIENTS: { name: string; industry: Industry; tag: string }[] = [
  { name: "Northbridge Health", industry: "Healthcare", tag: "12-hospital network" },
  { name: "Meridian Capital", industry: "Finance", tag: "Asset management" },
  { name: "Vanta Logistics", industry: "Logistics", tag: "Global 3PL" },
  { name: "Halcyon Retail", industry: "Retail", tag: "Apparel · Global" },
  { name: "Atrium Health Group", industry: "Healthcare", tag: "Integrated delivery" },
  { name: "Beacon Insurance", industry: "Insurance", tag: "P&C carrier" },
  { name: "Polaris Industries", industry: "Manufacturing", tag: "Industrial OEM" },
  { name: "Ridgeline Bank", industry: "Finance", tag: "Regional banking" },
  { name: "Coastline Foods", industry: "Retail", tag: "Grocery chain" },
  { name: "Aerie Freight", industry: "Logistics", tag: "Air cargo" },
  { name: "Summit County", industry: "Public Sector", tag: "State agency" },
  { name: "Lattice Robotics", industry: "Manufacturing", tag: "Automation" },
];

const TESTIMONIALS = [
  {
    quote:
      "CentricaSoft didn't just build us a chatbot — they built us a system our analysts actually trust. Citations, audit logs, the whole stack. We rolled it out across the firm in 90 days.",
    author: "VP, Equity Research",
    company: "Top-10 US asset manager",
    industry: "Finance",
  },
  {
    quote:
      "We'd tried two other vendors before CentricaSoft. Their team was the only one that understood healthcare workflows AND petabyte data. The agent shipped on time. Nurses love it.",
    author: "CTO",
    company: "12-hospital health system",
    industry: "Healthcare",
  },
  {
    quote:
      "Cut our cloud bill by 62% while making our pipelines 14× faster. They optimized things we didn't even know were broken. Best engineering partnership we've had.",
    author: "VP, Data Engineering",
    company: "Global 3PL provider",
    industry: "Logistics",
  },
];

function ClientsPage() {
  const [active, setActive] = useState<Industry>("All");
  const [tIndex, setTIndex] = useState(0);

  const filtered = useMemo(
    () => (active === "All" ? CLIENTS : CLIENTS.filter((c) => c.industry === active)),
    [active],
  );

  return (
    <>
      <PageHero
        pill="02 · Company"
        title="Trusted by enterprises building the future."
        highlight="future."
        subtitle="From regional health networks to global asset managers, our clients ship faster because we've already done the hard part."
      />

      {/* Stats bar */}
      <section className="py-12 border-y border-[var(--border)] bg-white">
        <div className="container-x">
          <div className="grid grid-cols-3 gap-px bg-[var(--border)]">
            {[
              { v: 100, s: "+", l: "Engagements delivered" },
              { v: 8, s: "", l: "Industries served" },
              { v: 3, s: "", l: "Continents" },
            ].map((m, i) => (
              <div key={i} className="bg-white px-6 py-4">
                <div className="font-display text-[clamp(28px,4vw,40px)] text-gradient-brand leading-none">
                  <ScrollCounter value={m.v} suffix={m.s} />
                </div>
                <div className="mt-2 text-[13px] text-[var(--ink-2)]">{m.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filterable client grid */}
      <section className="section-y">
        <div className="container-x">
          <SectionLabel number="— 01">Selected Clients</SectionLabel>
          <h2 className="mt-6 font-display text-[clamp(36px,5vw,56px)] leading-[1.05] text-[var(--ink)] max-w-[700px]">
            Industries we serve.
          </h2>

          {/* Filter pills */}
          <div className="mt-12 flex flex-wrap gap-2">
            {INDUSTRIES.map((i) => {
              const isActive = active === i;
              return (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  type="button"
                  className={`relative px-4 py-2 rounded-full text-[13px] font-medium transition-all ${
                    isActive
                      ? "text-white"
                      : "text-[var(--ink-2)] bg-white border border-[var(--border)] hover:border-[var(--border-2)]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="industry-pill"
                      className="absolute inset-0 rounded-full bg-gradient-brand-h"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{i}</span>
                </button>
              );
            })}
          </div>

          {/* Grid */}
          <motion.div
            layout
            className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-[var(--border)] border border-[var(--border)] rounded-2xl overflow-hidden"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((c) => (
                <motion.div
                  key={c.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-white p-6 min-h-[140px] flex flex-col justify-between transition-colors hover:bg-[var(--surface-2)]"
                >
                  <div className="label-mono !text-[var(--sky-deep)]">{c.industry}</div>
                  <div>
                    <div className="font-display text-[18px] text-[var(--ink)] leading-tight">
                      {c.name}
                    </div>
                    <div className="mt-1 text-[12px] text-[var(--ink-3)]">{c.tag}</div>
                  </div>
                  <ArrowUpRight className="absolute top-5 right-5 w-4 h-4 text-[var(--border-2)] opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p className="mt-12 text-center text-[15px] text-[var(--ink-3)]">
              No clients in this category yet — talk to us about being the first.
            </p>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-y bg-[var(--surface-2)]">
        <div className="container-x">
          <SectionLabel number="— 02">In Their Words</SectionLabel>
          <div className="mt-12 grid lg:grid-cols-[auto_1fr] gap-12 items-center">
            <div className="font-mono text-[12px] text-[var(--ink-3)]">
              <span className="text-[var(--ink)]">{String(tIndex + 1).padStart(2, "0")}</span> /{" "}
              {String(TESTIMONIALS.length).padStart(2, "0")}
            </div>
            <div className="flex gap-3 lg:justify-end">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setTIndex(i)}
                  aria-label={`Testimonial ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === tIndex
                      ? "w-10 bg-gradient-brand-h"
                      : "w-6 bg-[var(--border-2)] hover:bg-[var(--ink-3)]"
                  }`}
                />
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={tIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 max-w-[1000px]"
            >
              <Quote className="w-12 h-12 text-[var(--sky-bright)] opacity-50" />
              <blockquote className="mt-6 font-display text-[clamp(24px,3.5vw,40px)] leading-[1.25] text-[var(--ink)]">
                {TESTIMONIALS[tIndex].quote}
              </blockquote>
              <div className="mt-10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-brand text-white flex items-center justify-center font-display text-[16px]">
                  {TESTIMONIALS[tIndex].author.split(",")[0][0]}
                </div>
                <div>
                  <div className="font-medium text-[15px] text-[var(--ink)]">
                    {TESTIMONIALS[tIndex].author}
                  </div>
                  <div className="text-[13px] text-[var(--ink-3)]">
                    {TESTIMONIALS[tIndex].company} · {TESTIMONIALS[tIndex].industry}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}

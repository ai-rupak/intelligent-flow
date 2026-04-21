"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Plus, MapPin, Briefcase } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { MagneticButton } from "@/components/ui/MagneticButton";

const CULTURE = [
  {
    title: "Engineering as craft.",
    body: "We hire people who care about whether the code is good — not just whether it ships. Code review is the most important meeting of the week.",
  },
  {
    title: "Customer reality, not roadmap fantasy.",
    body: "Every engineer spends time with customers. Every PM has shipped code. Roadmaps are built backwards from production pain, never forward from speculation.",
  },
  {
    title: "Async by default, deep by design.",
    body: "Long-form writing replaces status meetings. We protect maker schedules. Interruptions are an architectural smell, not a way of life.",
  },
  {
    title: "Globally distributed, locally trusted.",
    body: "Teams in Austin, Bengaluru, and Hyderabad. Same engineering bar, same equity tier, same ownership. Geography is logistics, not hierarchy.",
  },
];

const ROLES = [
  {
    team: "AI Engineering",
    title: "Senior Agent Systems Engineer",
    location: "Remote · US / India",
    type: "Full-time",
    blurb:
      "Design and ship multi-agent orchestration for Fortune 500 deployments. You'll own architecture for tool registries, planning loops, and rollback systems.",
  },
  {
    team: "AI Engineering",
    title: "Staff GenAI Engineer — RAG & Retrieval",
    location: "Austin, TX · Hybrid",
    type: "Full-time",
    blurb:
      "Lead the retrieval foundations behind Nubo: hybrid search, semantic ranking, prompt evaluation harnesses, and multimodal extensions.",
  },
  {
    team: "Data Platform",
    title: "Principal Data Engineer",
    location: "Bengaluru · Hybrid",
    type: "Full-time",
    blurb:
      "Architect petabyte-scale ingestion and migration pipelines. Snowflake, Databricks, dbt, Airflow — and the judgment to know when not to use them.",
  },
  {
    team: "Data Platform",
    title: "Senior Analytics Engineer",
    location: "Remote · India",
    type: "Full-time",
    blurb:
      "Build the semantic layer that powers customer dashboards. Strong dbt + SQL + business modeling chops required.",
  },
  {
    team: "Product & Design",
    title: "Senior Product Designer — Nubo",
    location: "Remote · Global",
    type: "Full-time",
    blurb:
      "Define the visual and interaction language for our flagship GenAI product. Motion, type systems, and product thinking equally weighted.",
  },
  {
    team: "Go-to-Market",
    title: "Solutions Architect — Healthcare AI",
    location: "Remote · US",
    type: "Full-time",
    blurb:
      "Embed with healthcare prospects. Translate clinical workflows into agentic AI architectures. Prior provider/payer domain experience required.",
  },
];

export default function CareersPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <PageHero
        pill="05 · Careers"
        title="Build the Future with Us."
        highlight="Future"
        subtitle="We're hiring engineers, researchers, and operators who want to work on AI that actually matters — in healthcare, finance, logistics, and beyond."
      />

      {/* Culture */}
      <section className="pb-32">
        <div className="container-x">
          <div className="grid md:grid-cols-2 gap-5">
            {CULTURE.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-3xl border border-[var(--border)] bg-white p-10 hover:border-[var(--sky-deep)] transition-colors"
              >
                <div className="label-mono !text-[10px] !text-[var(--sky-deep)]">
                  0{i + 1} · Culture
                </div>
                <h3 className="mt-5 font-display text-[28px] leading-[1.15] text-[var(--ink)]">
                  {c.title}
                </h3>
                <p className="mt-4 text-[15px] text-[var(--ink-2)] leading-[1.7]">{c.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="pb-32 bg-[var(--surface-2)] py-32">
        <div className="container-x">
          <div className="max-w-[680px] mb-16">
            <span className="label-mono !text-[var(--sky-deep)]">— · Open roles</span>
            <h2 className="mt-4 font-display text-[clamp(36px,5vw,56px)] leading-[1.05] text-[var(--ink)]">
              Six teams. <span className="text-gradient-brand">One bar.</span>
            </h2>
            <p className="mt-5 text-[17px] text-[var(--ink-2)] leading-[1.6]">
              Every role here ships to production. Every hire raises the median. If you don't see
              your title, write to us anyway — exceptional generalists always find a home.
            </p>
          </div>

          <div className="rounded-3xl border border-[var(--border)] bg-white overflow-hidden">
            {ROLES.map((role, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={role.title}
                  className={`border-b border-[var(--border)] last:border-b-0 ${
                    isOpen ? "bg-[var(--surface-2)]/50" : ""
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-6 p-7 md:p-8 text-left hover:bg-[var(--surface-2)]/40 transition-colors"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="label-mono !text-[10px] !text-[var(--sky-deep)]">
                        {role.team}
                      </div>
                      <h3 className="mt-2 font-display text-[22px] md:text-[26px] leading-[1.2] text-[var(--ink)]">
                        {role.title}
                      </h3>
                      <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[13px] text-[var(--ink-3)]">
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5" /> {role.location}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Briefcase className="w-3.5 h-3.5" /> {role.type}
                        </span>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0 w-11 h-11 rounded-full border border-[var(--border)] bg-white flex items-center justify-center"
                    >
                      <Plus className="w-4 h-4 text-[var(--ink-2)]" />
                    </motion.div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-7 md:px-8 pb-8 max-w-[760px]">
                          <p className="text-[15px] text-[var(--ink-2)] leading-[1.7]">
                            {role.blurb}
                          </p>
                          <div className="mt-6 inline-flex items-center gap-2 text-[14px] font-medium text-[var(--sky-deep)] cursor-pointer hover:gap-3 transition-all">
                            Apply for this role <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-[15px] text-[var(--ink-2)] mb-6">
              Don't see your role? We always want to talk to exceptional people.
            </p>
            <MagneticButton to="/contact">
              Introduce yourself <ArrowRight className="ml-2 w-4 h-4" />
            </MagneticButton>
          </div>
        </div>
      </section>
    </>
  );
}

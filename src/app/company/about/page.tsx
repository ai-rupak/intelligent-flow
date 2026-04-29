"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Clock3,
  Globe2,
  Linkedin,
  Lightbulb,
  Medal,
  ShieldCheck,
} from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CTAStrip } from "@/components/sections/CTAStrip";
import { ScrollCounter } from "@/components/ui/ScrollCounter";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionAccentPattern } from "@/components/ui/SectionAccentPattern";

const ABOUT_COLUMNS = [
  {
    label: "Who We Are",
    body: [
      "CentricaSoft is an AI, data, and cloud engineering company built to move ideas out of presentation decks and into production environments.",
      "Our teams combine consulting depth with delivery ownership, helping clients modernize systems, operationalize intelligence, and build with confidence.",
    ],
  },
  {
    label: "What We Do",
    body: [
      "We design and ship AI agents, data platforms, analytics systems, and cloud foundations tailored to real business workflows.",
      "From strategy and architecture to implementation and ongoing delivery, we stay close to measurable outcomes and long-term client value.",
    ],
  },
] as const;

const VALUES = [
  {
    icon: Lightbulb,
    title: "Innovation",
    body: "We stay curious, experiment deliberately, and keep translating new technology into systems that create practical value.",
  },
  {
    icon: Medal,
    title: "Excellence",
    body: "We care deeply about craft, quality, and consistency, from architecture choices to delivery details and client experience.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    body: "We build trust through honest communication, accountable delivery, and a commitment to doing the right thing when stakes are high.",
  },
] as const;

const OFFICES = [
  {
    country: "United States",
    city: "San Francisco",
    timezone: "PST / UTC-8",
    note: "Client and architecture hub",
    flagImage: "https://flagcdn.com/w640/us.png",
    team: "Strategy, client success, and solutions architecture",
    capabilities: [
      "Executive discovery",
      "AI roadmaps",
      "Architecture reviews",
      "Client leadership",
    ],
  },
  {
    country: "India",
    city: "Bengaluru",
    timezone: "IST / UTC+5:30",
    note: "Engineering hub",
    flagImage: "https://flagcdn.com/w640/in.png",
    team: "Platform engineering and AI delivery",
    capabilities: [
      "Data platforms",
      "Agent orchestration",
      "Cloud engineering",
      "Product buildout",
    ],
  },
  {
    country: "India",
    city: "Kolkata",
    timezone: "IST / UTC+5:30",
    note: "Operations hub",
    flagImage: "https://flagcdn.com/w640/in.png",
    team: "Analytics, QA, and delivery operations",
    capabilities: [
      "Quality assurance",
      "Analytics support",
      "Delivery management",
      "Client operations",
    ],
  },
] as const;

const TEAM_MEMBERS = [
  {
    name: "Chiranjib Ghosh",
    role: "CEO",
    ownership: "Vision and growth",
    body: "Owns company direction, growth strategy, and the long-range priorities behind delivery and partnerships.",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Amit Basu",
    role: "Co-Founder",
    ownership: "Product and innovation",
    body: "Guides innovation, product thinking, and how new technical ideas turn into repeatable client value.",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Shampa Ghosh",
    role: "Director",
    ownership: "Delivery governance",
    body: "Keeps programs aligned across stakeholders, milestones, and execution quality from kickoff to rollout.",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Samad Nalagadda",
    role: "Delivery Partner",
    ownership: "Client outcomes",
    body: "Owns business alignment, executive communication, and measurable value after systems go live.",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Mahalaxmi ",
    role: "Team Lead",
    ownership: "Engineering execution",
    body: "Guides squads through design, implementation, and review cycles while protecting engineering rigor.",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Indranil Basu",
    role: "AI Lead",
    ownership: "Applied intelligence",
    body: "Shapes agent design, model evaluation, and AI system quality so experiments mature into reliable production capability.",
    linkedin: "https://www.linkedin.com/",
  },
] as const;

const TEAM_STATS = [
  { value: 50, suffix: "+", label: "Consultants" },
  { value: 9, suffix: " yr", label: "Avg tenure" },
  { value: 12, suffix: "", label: "PhDs on team" },
  { value: 6, suffix: "", label: "Languages spoken" },
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHero
        pill="01 - Company"
        title="Built to Build."
        highlight="Build."
        subtitle="We are CentricaSoft. AI and data engineers obsessed with making intelligence work in the real world, not just in demos."
        variant="immersive"
        tone="company"
        asideLabel="Mission snapshot"
        meta={["50+ consultants", "US + India delivery", "Production-first AI"]}
        backgroundImage="https://images.pexels.com/photos/36765725/pexels-photo-36765725.jpeg?cs=srgb&dl=pexels-silverkblack-36765725.jpg&fm=jpg"
      />

      <section className="relative overflow-hidden bg-[var(--surface-2)] py-18 md:py-20">
        <SectionAccentPattern variant="top-left" />
        <div className="container-x relative z-10">
          <SectionLabel number="01">Who We Are</SectionLabel>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 overflow-hidden rounded-[28px] border border-[var(--border)] bg-white shadow-[0_24px_60px_-38px_rgba(0,18,52,0.16)]"
          >
            <div className="grid gap-px bg-[var(--border)] lg:grid-cols-2">
              {ABOUT_COLUMNS.map((column, index) => (
                <div key={column.label} className="bg-white p-7 md:p-9">
                  <div className="flex items-center gap-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-3.5 py-1.5">
                      {index === 0 ? (
                        <Globe2 className="h-3.5 w-3.5 text-[var(--sky-deep)]" />
                      ) : (
                        <BriefcaseBusiness className="h-3.5 w-3.5 text-[var(--sky-deep)]" />
                      )}
                      <span className="label-mono !text-[10px] !text-[var(--sky-deep)]">
                        {column.label}
                      </span>
                    </div>
                    <div className="h-px flex-1 bg-[var(--border)]" />
                  </div>

                  <div className="mt-6 space-y-5 text-[16px] leading-[1.8] text-[var(--ink-2)]">
                    {column.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid gap-px bg-[var(--border)] md:grid-cols-3">
              {[
                { value: 35, suffix: "+", label: "Global clientele" },
                { value: 446, suffix: "+", label: "Associates" },
                { value: 99, suffix: "+", label: "Integrations" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="bg-white p-6 md:p-7"
                >
                  <div className="h-1 w-14 rounded-full bg-gradient-brand-h" />
                  <div className="mt-5 font-display text-[clamp(34px,4vw,46px)] leading-none text-[var(--ink)]">
                    <ScrollCounter value={item.value} suffix={item.suffix} />
                  </div>
                  <div className="mt-3 text-[13px] text-[var(--ink-2)]">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[var(--navy)] py-20 text-white md:py-24">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 12% 18%, rgba(30,191,255,0.24), transparent 24%), radial-gradient(circle at 84% 76%, rgba(109,76,255,0.18), transparent 24%), url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='520' height='520' viewBox='0 0 520 520'><g fill='none' stroke='%232980ff' stroke-width='2' stroke-linecap='round' opacity='0.7'><path d='M14 84 C108 22,202 18,284 72 S432 180,534 116' stroke-dasharray='8 18'/><path d='M-8 190 C80 132,176 126,262 184 S420 288,520 218' stroke-dasharray='8 18'/><path d='M18 304 C112 244,214 246,300 302 S456 406,550 344' stroke-dasharray='8 18'/><path d='M48 422 C138 366,238 372,320 430 S458 522,548 472' stroke-dasharray='8 18'/><path d='M412 60 l12 8'/><path d='M336 132 l12 8'/><path d='M238 242 l12 8'/><path d='M434 314 l12 8'/><path d='M278 446 l12 8'/></g></svg>\")",
            backgroundSize: "auto, auto, 540px 540px",
            backgroundPosition: "0 0, 0 0, center",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, rgba(0,18,52,0.18) 0%, rgba(0,18,52,0.42) 100%)",
          }}
        />

        <div className="container-x relative z-10">
          <div className="inline-flex items-center gap-3 label-mono text-white/72">
            <span className="text-[var(--sky-bright)]">02</span>
            <span>Values</span>
          </div>
          <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(280px,0.42fr)] lg:items-end">
            <h2 className="max-w-[760px] font-display text-[clamp(36px,5vw,56px)] leading-[1.02] text-white">
              We live by values that keep delivery sharp and relationships durable.
            </h2>
            <p className="max-w-[360px] text-[15px] leading-[1.8] text-white/70">
              Innovation, excellence, and integrity are not wall language here. They shape how we
              architect, communicate, and deliver under pressure.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {VALUES.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-white/7 p-8 backdrop-blur-[14px] transition-all duration-300 hover:-translate-y-1.5 hover:border-white/18 hover:bg-white/10 hover:shadow-[0_24px_80px_-30px_rgba(0,0,0,0.45)]"
                >
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-70"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
                    }}
                  />
                  <div className="absolute right-6 top-5 font-mono text-[11px] text-white/30">
                    0{index + 1}
                  </div>
                  <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand-h text-white shadow-[0_12px_32px_-14px_rgba(30,191,255,0.75)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="relative mt-6 font-heading text-[22px] font-bold text-white">
                    {value.title}
                  </h3>
                  <div className="relative mt-5 h-px bg-white/14" />
                  <p className="relative mt-5 text-[15px] leading-[1.8] text-white/72">
                    {value.body}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-10 rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,rgba(46,112,255,0.95),rgba(65,106,255,0.82))] px-8 py-7 text-center shadow-[0_26px_80px_-34px_rgba(30,96,255,0.65)] md:px-12 md:py-9"
          >
            <p className="mx-auto max-w-[980px] text-[clamp(20px,2.2vw,32px)] font-semibold leading-[1.25] text-white">
              We build for trust, move with urgency, and stay accountable for the outcomes long
              after launch.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[var(--surface-2)] py-20 md:py-24">
        <SectionAccentPattern variant="split-right" />
        <div className="container-x relative z-10">
          <SectionLabel number="03">Global Presence</SectionLabel>
          <h2 className="mt-6 max-w-[760px] font-display text-[clamp(36px,5vw,56px)] leading-[1.05] text-[var(--ink)]">
            Three offices. <span className="text-gradient-brand">One delivery rhythm.</span>
          </h2>
          <p className="mt-6 max-w-[680px] text-[16px] leading-[1.7] text-[var(--ink-2)]">
            Our follow-the-sun model now runs across San Francisco, Bengaluru, and Kolkata so
            strategy, engineering, and delivery operations can move in a continuous loop.
          </p>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {OFFICES.map((office, index) => (
              <motion.div
                key={`${office.country}-${office.city}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="relative overflow-hidden border border-[var(--border)] bg-white shadow-[0_22px_60px_-36px_rgba(0,32,87,0.16)]"
              >
                <div className="relative h-40 overflow-hidden">
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${office.flagImage})` }}
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0,18,52,0.18) 0%, rgba(0,18,52,0.18) 28%, rgba(0,18,52,0.82) 100%)",
                    }}
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-25"
                    style={{
                      background:
                        "repeating-linear-gradient(120deg, rgba(255,255,255,0.22) 0 2px, transparent 2px 18px)",
                    }}
                  />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-3 py-1.5 backdrop-blur-md">
                      <Building2 className="h-3.5 w-3.5 text-[var(--sky-bright)]" />
                      <span className="label-mono !text-[10px] !text-white/78">{office.note}</span>
                    </div>
                    <h3 className="mt-4 font-display text-[clamp(24px,3vw,32px)] text-white">
                      {office.city}
                    </h3>
                    <div className="mt-1 text-[14px] text-white/72">{office.country}</div>
                  </div>
                </div>

                <div className="relative p-6">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-3 py-1.5">
                    <Building2 className="h-3.5 w-3.5 text-[var(--sky-deep)]" />
                    <span className="label-mono !text-[10px] !text-[var(--sky-deep)]">
                      Office details
                    </span>
                  </div>

                  <div className="mt-6 grid gap-5 border-t border-[var(--border)] pt-6 sm:grid-cols-2">
                    <div>
                      <div className="flex items-center gap-2 text-[var(--ink-3)]">
                        <Clock3 className="h-4 w-4" />
                        <span className="label-mono">Timezone</span>
                      </div>
                      <div className="mt-2 text-[14px] font-medium text-[var(--ink)]">
                        {office.timezone}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-[var(--ink-3)]">
                        <BriefcaseBusiness className="h-4 w-4" />
                        <span className="label-mono">Team focus</span>
                      </div>
                      <div className="mt-2 text-[14px] font-medium text-[var(--ink)]">
                        {office.team}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="label-mono mb-3">Capabilities</div>
                    <div className="flex flex-wrap gap-2">
                      {office.capabilities.map((capability) => (
                        <span
                          key={capability}
                          className="rounded-md bg-[var(--surface-2)] px-3 py-1.5 text-[12px] text-[var(--ink-2)]"
                        >
                          {capability}
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

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f4f9fd_0%,#ffffff_72%)] py-20 md:py-24">
        <SectionAccentPattern variant="bottom-left" />
        <div className="container-x relative z-10">
          <SectionLabel number="04">Leadership & Team</SectionLabel>
          <div className="mt-12 grid items-end gap-8 lg:grid-cols-[minmax(0,0.88fr)_minmax(280px,0.42fr)]">
            <h2 className="max-w-[620px] font-display text-[clamp(30px,4vw,44px)] leading-[1.08] text-[var(--ink)]">
              Meet the people shaping the work.
            </h2>
            <p className="max-w-[360px] text-[14px] leading-[1.7] text-[var(--ink-2)]">
              These cards are set up with image placeholders and LinkedIn slots so you can quickly
              swap in the real team members when you are ready.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {TEAM_MEMBERS.map((member, index) => (
              <motion.div
                key={member.role}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="group relative flex h-full flex-col overflow-hidden border border-[var(--border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,249,253,0.94))] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_-22px_rgba(0,32,87,0.16)]"
              >
                <div className="absolute right-4 top-4 label-mono !text-[10px] !text-[var(--border-2)]">
                  0{index + 1}
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="relative h-24 w-24 overflow-hidden rounded-full border border-[var(--border)] bg-[linear-gradient(135deg,var(--surface-2),white)]">
                    <div
                      aria-hidden
                      className="absolute inset-0 opacity-80"
                      style={{
                        background:
                          "radial-gradient(circle at 20% 20%, rgba(30,191,255,0.16), transparent 42%), radial-gradient(circle at 80% 78%, rgba(168,207,230,0.22), transparent 46%)",
                      }}
                    />
                    <div className="relative flex h-full w-full items-center justify-center text-center">
                      <div className="px-2">
                        <div className="font-heading text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--ink)]">
                          Photo
                        </div>
                        <div className="mt-1 text-[10px] text-[var(--ink-3)]">Drop image</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 label-mono !text-[10px] !text-[var(--sky-deep)]">
                    {member.ownership}
                  </div>
                  <h3 className="mt-2 font-display text-[clamp(20px,2.2vw,24px)] leading-[1.08] text-[var(--ink)]">
                    {member.role}
                  </h3>
                  <div className="mt-1 text-[13px] font-medium text-[var(--ink-3)]">
                    {member.name}
                  </div>
                </div>

                <p className="mt-4 text-[13.5px] leading-[1.7] text-[var(--ink-2)]">
                  {member.body}
                </p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto inline-flex items-center justify-between gap-2 border-t border-[var(--border)] pt-4 text-[13px] font-medium text-[var(--navy)] transition-colors hover:text-[var(--sky-deep)]"
                >
                  <span className="inline-flex items-center gap-2">
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--border)] shadow-[0_24px_64px_-40px_rgba(0,32,87,0.18)]">
            <div className="grid grid-cols-2 gap-px md:grid-cols-4">
              {TEAM_STATS.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="bg-white p-8"
                >
                  <div className="font-display text-[clamp(36px,4.5vw,48px)] leading-none text-gradient-brand">
                    <ScrollCounter value={metric.value} suffix={metric.suffix} />
                  </div>
                  <div className="mt-3 text-[13px] text-[var(--ink-2)]">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* <Stats /> */}
      <CTAStrip />
    </>
  );
}

import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ScrollCounter } from "@/components/ui/ScrollCounter";
import { HoverTilt } from "@/components/ui/HoverTilt";
import { HLDDiagram } from "@/components/ui/HLDDiagram";
import { HorizontalCarousel } from "@/components/ui/HorizontalCarousel";
import { CTAStrip } from "@/components/sections/CTAStrip";
import type { ServiceContent } from "@/lib/services-data";

export function ServicePage({ content }: { content: ServiceContent }) {
  const renderTitle = () => {
    if (!content.highlight) return content.title;
    const parts = content.title.split(content.highlight);
    return (
      <>
        {parts[0]}
        <span className="text-gradient-brand">{content.highlight}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <>
      {/* 01 — HERO */}
      <section className="relative pt-[160px] pb-32 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 70% at 75% 20%, rgba(30,191,255,0.12), transparent), radial-gradient(50% 50% at 10% 90%, rgba(0,32,87,0.06), transparent)",
          }}
        />
        <div className="container-x relative">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border-2)] bg-[var(--surface-2)]/60">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--sky-bright)] animate-pulse-dot" />
            <span className="label-mono !text-[10px] !text-[var(--sky-deep)]">{content.pill}</span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 font-display text-[clamp(48px,8vw,88px)] leading-[1.0] text-[var(--ink)] max-w-[1100px]"
          >
            {renderTitle()}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 max-w-[640px] text-[20px] text-[var(--ink-2)] leading-[1.6]"
          >
            {content.subtitle}
          </motion.p>
        </div>
      </section>

      {/* 02 — THE PROBLEM */}
      <section className="section-y bg-[var(--surface-2)]">
        <div className="container-x">
          <SectionLabel number="— 01">Why This Matters</SectionLabel>
          <div className="mt-12 grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-display text-[clamp(32px,5vw,52px)] leading-[1.1] text-[var(--ink)]">
                "{content.problemQuote}"
              </h2>
              <div className="mt-6 h-[2px] w-16 bg-gradient-brand-h" />
            </motion.div>
            <motion.ul
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="space-y-6"
            >
              {content.problemPoints.map((p, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="font-mono text-[11px] text-[var(--sky-deep)] mt-1.5 shrink-0">
                    0{i + 1}
                  </span>
                  <p className="text-[17px] text-[var(--ink-2)] leading-[1.65]">{p}</p>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* 03 — WHAT WE OFFER (carousel) */}
      <section className="section-y">
        <div className="container-x">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
            <div>
              <SectionLabel number="— 02">What We Offer</SectionLabel>
              <h2 className="mt-6 font-display text-[clamp(36px,5vw,56px)] leading-[1.05] text-[var(--ink)]">
                Our {content.title.split(/[&,]/)[0].trim()} Practice.
              </h2>
            </div>
          </div>

          <HorizontalCarousel itemCount={content.offerings.length}>
            {content.offerings.map((o, i) => (
              <div
                key={i}
                className="shrink-0 grow-0 px-2"
                style={{ flex: "0 0 min(420px, 90%)" }}
              >
                <HoverTilt max={3}>
                  <div className="h-full rounded-2xl bg-white border border-[var(--border)] p-8 transition-all duration-300 hover:shadow-[0_20px_60px_-20px_rgba(0,32,87,0.18)]">
                    <div className="text-[var(--sky-bright)] text-[28px] font-display">{o.icon}</div>
                    <h3 className="mt-5 font-heading font-bold text-[20px] text-[var(--ink)] leading-tight">
                      {o.title}
                    </h3>
                    <p className="mt-3 text-[15px] text-[var(--ink-2)] leading-[1.7]">{o.body}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {o.tags.map((t) => (
                        <span
                          key={t}
                          className="label-mono !text-[10px] px-2.5 py-1 rounded-md bg-[var(--surface-2)] !text-[var(--sky-deep)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </HoverTilt>
              </div>
            ))}
          </HorizontalCarousel>
        </div>
      </section>

      {/* 04 — EXPERTISE */}
      <section className="section-y bg-[var(--surface-2)]">
        <div className="container-x">
          <SectionLabel number="— 03">Expertise</SectionLabel>
          <div className="mt-12 grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-display text-[clamp(32px,4.5vw,48px)] leading-[1.1] text-[var(--ink)]">
                Depth before width.
              </h2>
              <p className="mt-6 text-[17px] text-[var(--ink-2)] leading-[1.8]">
                {content.expertiseNarrative}
              </p>
            </motion.div>
            <div className="grid grid-cols-2 gap-px bg-[var(--border)] border border-[var(--border)] rounded-2xl overflow-hidden">
              {content.expertiseGrid.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="bg-white p-8"
                >
                  <div className="font-display text-[clamp(32px,4vw,44px)] text-gradient-brand leading-none">
                    <ScrollCounter value={m.value} suffix={m.suffix} />
                  </div>
                  <div className="mt-3 text-[13px] text-[var(--ink-2)]">{m.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 05 — TECH STACK */}
      <section className="section-y">
        <div className="container-x">
          <SectionLabel number="— 04">Technology Stack</SectionLabel>
          <h2 className="mt-6 font-display text-[clamp(32px,4.5vw,48px)] leading-[1.1] text-[var(--ink)] max-w-[700px]">
            Battle-tested tools, opinionated choices.
          </h2>
          <div className="mt-12 space-y-6">
            {content.techStack.map((g, gi) => (
              <motion.div
                key={g.group}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: gi * 0.1 }}
                className="grid md:grid-cols-[160px_1fr] gap-6 items-center pb-6 border-b border-[var(--border)]"
              >
                <div className="label-mono !text-[var(--sky-deep)]">{g.group}</div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <span
                      key={it}
                      className="px-4 py-2 rounded-lg bg-white border border-[var(--border)] text-[14px] font-medium text-[var(--ink)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-12px_rgba(0,32,87,0.2)] hover:border-[var(--border-2)]"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 — APPROACH + HLD */}
      <section className="section-y bg-[var(--surface-2)]">
        <div className="container-x">
          <SectionLabel number="— 05">Approach</SectionLabel>
          <h2 className="mt-6 font-display text-[clamp(36px,5vw,56px)] leading-[1.05] text-[var(--ink)] max-w-[700px]">
            How We Work.
          </h2>

          <div className="mt-16 grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-12 items-start">
            <ol className="space-y-8">
              {content.approach.map((s, i) => (
                <motion.li
                  key={s.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="grid grid-cols-[60px_1fr] gap-5"
                >
                  <div className="font-mono text-[28px] text-gradient-brand leading-none pt-1">
                    {s.number}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-[20px] text-[var(--ink)]">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-[15px] text-[var(--ink-2)] leading-[1.7]">{s.body}</p>
                  </div>
                </motion.li>
              ))}
            </ol>

            <div>
              <HLDDiagram spec={content.hld} />
              <div className="mt-3 label-mono text-center">High-level architecture</div>
            </div>
          </div>
        </div>
      </section>

      {/* 07 — CASE STUDY TEASER */}
      <section className="py-20">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl bg-[var(--navy)] p-12 md:p-20 text-white"
          >
            <div
              aria-hidden
              className="absolute inset-0 opacity-30"
              style={{
                background:
                  "radial-gradient(60% 80% at 80% 50%, rgba(30,191,255,0.4), transparent)",
              }}
            />
            <div className="relative grid md:grid-cols-[1fr_auto] gap-10 items-end">
              <div>
                <div className="label-mono !text-[var(--sky)]">{content.caseStudy.tag}</div>
                <h3 className="mt-4 font-display text-[clamp(28px,4vw,44px)] leading-[1.15] max-w-[720px]">
                  {content.caseStudy.title}
                </h3>
                <p className="mt-5 text-[15px] text-white/70">{content.caseStudy.outcome}</p>
                <div className="mt-2 text-[13px] text-white/40">{content.caseStudy.client}</div>
              </div>
              <Link
                to="/insights"
                className="inline-flex items-center gap-2 text-[14px] text-white border-b border-white/30 pb-1 hover:border-[var(--sky-bright)] transition-colors"
              >
                Read Case Study <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Inline CTA quick row */}
      <section className="pb-24">
        <div className="container-x">
          <div className="flex flex-wrap items-center justify-between gap-6 py-8 border-y border-[var(--border)]">
            <div className="font-display text-[clamp(20px,2.5vw,28px)] text-[var(--ink)]">
              Have a project in mind?
            </div>
            <MagneticButton to="/contact">
              Talk to a specialist <ArrowRight className="ml-2 w-4 h-4" />
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* 08 — Global CTA strip */}
      <CTAStrip />
    </>
  );
}

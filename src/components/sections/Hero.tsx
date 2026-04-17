import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HeroCanvas } from "@/components/canvas/HeroCanvas";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ScrollCounter } from "@/components/ui/ScrollCounter";
import { HoverTilt } from "@/components/ui/HoverTilt";
import { NuboChatCard } from "@/components/ui/NuboChatCard";
import { STATS, TECH_STACK } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-[72px]">
      <HeroCanvas />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 80% at 80% 30%, rgba(30,191,255,0.08), transparent), radial-gradient(50% 60% at 10% 80%, rgba(0,32,87,0.06), transparent)",
        }}
      />

      <div className="container-x relative z-10 pt-16 pb-32 grid lg:grid-cols-12 gap-12 items-center">
        {/* LEFT */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border-2)] bg-[rgba(168,207,230,0.25)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--sky-deep)] animate-pulse-dot" />
            <span className="font-mono text-[11px] tracking-[0.14em] text-[var(--sky-deep)]">
              LIVE · AI + DATA PLATFORM
            </span>
          </motion.div>

          <div className="mt-8">
            <AnimatedText
              as="h1"
              className="font-display font-bold text-[clamp(48px,9vw,96px)] leading-[1.0] text-[var(--ink)]"
              highlight="Engineered."
            >
              Intelligence, Engineered.
            </AnimatedText>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 text-[18px] text-[var(--ink-2)] leading-[1.7] max-w-[520px]"
          >
            CentricaSoft builds AI Agents, GenAI platforms, and enterprise data infrastructure
            that scale without limits — from petabyte pipelines to autonomous decision systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-6"
          >
            <MagneticButton to="/insights">
              Explore Our Work
              <ArrowRight className="ml-2 w-4 h-4" />
            </MagneticButton>
            <a
              href="/products/nubo"
              className="group inline-flex items-center gap-1.5 text-[15px] text-[var(--sky-deep)] font-medium relative"
            >
              <span className="relative">
                Meet Nubo
                <span className="absolute left-0 right-0 -bottom-1 h-px bg-[var(--sky-deep)] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </span>
              <span aria-hidden>↗</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-14 flex flex-wrap gap-x-10 gap-y-4 items-end"
          >
            {STATS.map((s, i) => (
              <div key={s.label} className="flex items-end gap-10">
                {i > 0 && <span className="hidden sm:block w-px h-10 bg-[var(--border)]" />}
                <div>
                  <div className="font-display text-[32px] text-gradient-brand leading-none font-semibold">
                    <ScrollCounter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 text-[12px] text-[var(--ink-3)]">{s.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — floating cards */}
        <div className="lg:col-span-5 relative h-[460px] hidden lg:block">
          {/* back-right: agent status */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-12 right-0 w-[260px] z-10"
            style={{ transform: "rotate(4deg) scale(0.88)" }}
          >
            <div className="rounded-2xl bg-white border border-[var(--border)] p-5 shadow-[0_20px_60px_-20px_rgba(0,32,87,0.15)]">
              <div className="label-mono text-[var(--sky-deep)] mb-3">Agents</div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-dot" />
                <span className="text-[13px] font-medium text-[var(--ink)]">3 Active</span>
              </div>
              <div className="space-y-2 text-[12px] text-[var(--ink-2)]">
                <div className="flex justify-between"><span>Triage</span><span className="font-mono text-[var(--ink-3)]">8 done</span></div>
                <div className="flex justify-between"><span>Research</span><span className="font-mono text-[var(--ink-3)]">4 done</span></div>
                <div className="flex justify-between"><span>Routing</span><span className="font-mono text-[var(--ink-3)]">2 done</span></div>
              </div>
            </div>
          </motion.div>

          {/* back-left: data viz */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-0 left-0 w-[240px] z-20 animate-float-y-rev"
            style={{ transform: "rotate(-6deg) scale(0.92)" }}
          >
            <div className="rounded-2xl bg-[var(--surface-2)] border border-[var(--border)] p-5 shadow-[0_20px_60px_-20px_rgba(0,32,87,0.15)]">
              <div className="label-mono text-[var(--sky-deep)] mb-2">Ingest / sec</div>
              <div className="font-display text-[28px] text-[var(--navy)] leading-none">2.4 PB</div>
              <div className="mt-4 flex items-end gap-1 h-12">
                {[40, 65, 50, 80, 70, 90, 60, 95, 75].map((v, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${v}%` }}
                    transition={{ duration: 0.8, delay: 1 + i * 0.05 }}
                    className="flex-1 rounded-sm bg-gradient-to-t from-[var(--navy)] to-[var(--sky-bright)]"
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* front: Nubo chat */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-0 right-8 z-30 animate-float-y"
          >
            <HoverTilt>
              <NuboChatCard />
            </HoverTilt>
          </motion.div>
        </div>
      </div>

      {/* scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="font-mono text-[9px] tracking-[0.2em] text-[var(--ink-3)]">SCROLL</span>
        <motion.span
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 1.4, ease: "easeOut" }}
          style={{ transformOrigin: "top" }}
          className="block w-px h-12 bg-[var(--border-2)]"
        />
        <motion.span
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: 2.5 }}
          className="w-1.5 h-1.5 rounded-full bg-[var(--sky-deep)]"
        />
      </motion.div>

      {/* tech bar */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-[var(--border)] py-4 overflow-hidden mask-fade-x">
        <div className="flex items-center gap-3 container-x">
          <span className="font-mono text-[10px] tracking-[0.2em] text-[var(--ink-3)] flex-shrink-0">
            POWERED BY
          </span>
          <div className="flex-1 overflow-hidden">
            <div className="flex animate-marquee-slow gap-12 whitespace-nowrap">
              {[...TECH_STACK, ...TECH_STACK].map((t, i) => (
                <span key={i} className="font-mono text-[11px] text-[var(--ink-3)]">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

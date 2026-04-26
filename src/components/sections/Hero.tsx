"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { HeroVideo } from "@/components/canvas/HeroVideo";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ScrollCounter } from "@/components/ui/ScrollCounter";

const HERO_LINES = ["Your Data Has", "Never Thought", "This Fast."] as const;

const HUD_STATS = [
  {
    value: 100,
    suffix: "+",
    label: "Projects Delivered",
    accent: "linear-gradient(90deg, #002057 0%, #1EBFFF 100%)",
  },
  {
    value: 50,
    suffix: "+",
    label: "Expert Consultants",
    accent: "linear-gradient(90deg, #0077B6 0%, #1EBFFF 100%)",
  },
  {
    value: 3,
    suffix: "",
    label: "Global Offices",
    accent: "linear-gradient(90deg, #A8CFE6 0%, #1EBFFF 100%)",
  },
  {
    value: 8,
    suffix: "+",
    label: "Industries Served",
    accent: "linear-gradient(90deg, #002057 0%, #0077B6 100%)",
  },
] as const;

export function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-[#E2F1FB]">
      <HeroVideo />
      <HeroFragments />

      <div className="container-x relative z-50 flex min-h-[100svh] items-start justify-center px-0 pb-[92px] pt-[104px] sm:pb-[116px] md:pt-[120px] lg:min-h-[86svh] lg:pt-[128px] xl:min-h-[100svh] xl:items-center xl:pb-[250px]">
        <div className="mx-auto flex w-full max-w-[820px] flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/10 px-4 py-2 backdrop-blur-xl md:mb-8 md:px-5"
          >
            <motion.span
              className="block h-[7px] w-[7px] rounded-full bg-[var(--sky-bright)]"
              animate={{ opacity: [1, 0.35, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="font-mono text-[10px] tracking-[0.24em] text-white/82 md:text-[11px]">
              AI + DATA PLATFORM . LIVE
            </span>
          </motion.div>

          <div className="max-w-[820px]">
            <h1 className="font-display text-[clamp(38px,8.6vw,82px)] font-extrabold leading-[0.9] tracking-[-0.045em] text-white sm:text-[clamp(40px,7vw,82px)]">
              {HERO_LINES.map((line, index) => (
                <motion.span
                  key={line}
                  initial={{ opacity: 0, y: 48 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.22 + index * 0.14,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="block"
                  style={
                    index === 2
                      ? {
                          background: "linear-gradient(90deg, #A8CFE6 0%, #1EBFFF 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }
                      : undefined
                  }
                >
                  {line}
                </motion.span>
              ))}
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.72, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-[620px] text-[16px] leading-[1.8] text-white/72 sm:text-[16px] md:mt-7 md:text-[17px] xl:text-[18px]"
          >
            CentricaSoft engineers autonomous AI systems and enterprise data infrastructure for
            organizations that refuse to move slowly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.98, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 flex w-full max-w-[390px] flex-row items-center justify-center gap-3 sm:mt-8 sm:max-w-none sm:gap-5"
          >
            <MagneticButton
              to="/what-we-do/agentic-ai"
              variant="white"
              className="!flex !h-[52px] !items-center !justify-center !gap-2 !px-6 !text-[14px] !font-semibold !shadow-[0_12px_40px_rgba(0,32,87,0.22)] max-[360px]:!px-4 sm:!h-14 sm:!px-9 sm:!text-[15px]"
            >
              See What We Build
              <ArrowRight className="h-4 w-4" />
            </MagneticButton>

            <Link
              href="/products/nubo"
              className="group inline-flex h-[52px] shrink-0 items-center justify-center gap-2 rounded-full border border-white/18 bg-white/8 px-6 text-[14px] font-medium text-white/84 backdrop-blur-md transition-all duration-300 hover:border-white/32 hover:bg-white/12 hover:text-white max-[360px]:px-4 sm:h-14 sm:border-transparent sm:bg-transparent sm:px-2 sm:text-[15px] sm:text-white/72 sm:backdrop-blur-none"
            >
              <span className="relative">
                Meet Nubo
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-white/75 transition-transform duration-300 group-hover:scale-x-100" />
              </span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>
      </div>

      <HeroStatsBar />
      <ScrollIndicator />
    </section>
  );
}

function HeroStatsBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 1.25, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-x-0 bottom-[84px] z-[70] px-4 pb-5 sm:bottom-[72px] sm:px-6 sm:pb-8 lg:mt-5 xl:bottom-0 xl:px-10 xl:pb-12"
    >
      <div className="mx-auto grid max-w-[980px] grid-cols-2 gap-0 rounded-[24px] border border-white/14 bg-white/8 p-3 shadow-[0_24px_80px_-36px_rgba(0,18,52,0.9)] backdrop-blur-2xl sm:p-4 md:px-8 md:py-7 xl:grid-cols-4">
        {HUD_STATS.map((stat, index) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center justify-center px-2 py-5 text-center sm:px-3 md:py-4 xl:py-1 ${
              index > 1 ? "border-t border-white/10 md:border-t" : ""
            } ${index % 2 === 1 ? "border-l border-white/10 md:border-l" : ""} ${
              index > 0 ? "xl:border-l xl:border-t-0 xl:border-white/10" : ""
            }`}
          >
            <div
              className="mb-3 h-0.5 w-8 rounded-full"
              style={{ background: stat.accent }}
              aria-hidden
            />
            <div
              className="font-display text-[24px] font-bold leading-none sm:text-[28px] md:text-[40px]"
              style={{
                background: "linear-gradient(90deg, #FFFFFF 0%, #A8CFE6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              <ScrollCounter value={stat.value} suffix={stat.suffix} />
            </div>
            <div className="mt-2 text-[11px] leading-[1.35] tracking-[0.02em] text-white/58 sm:text-[12px] md:text-[13px]">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function HeroFragments() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[60] hidden xl:block" aria-hidden>
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.45, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-[5.5%] top-[18%] rounded-[18px] border border-white/14 bg-white/9 px-5 py-4 backdrop-blur-xl"
      >
        <div className="font-mono text-[10px] tracking-[0.16em] text-white/45">NUBO . LIVE</div>
        <div className="mt-2 font-display text-[28px] font-bold leading-none text-white">94.2%</div>
        <div className="mt-1 text-[12px] text-[#A8CFE6]">Pipeline Efficiency</div>
        <div className="mt-4 flex h-6 items-end gap-1">
          {[62, 81, 94].map((height, index) => (
            <motion.div
              key={height}
              className="w-2 rounded-sm"
              style={{ background: "linear-gradient(to top, #0077B6, #1EBFFF)" }}
              animate={{ height: [`${height * 0.42}%`, `${height}%`, `${height * 0.42}%`] }}
              transition={{
                duration: 2.1,
                delay: index * 0.26,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-[4.5%] top-[42%] rounded-[16px] border border-white/12 bg-white/8 px-4 py-4 backdrop-blur-xl"
      >
        <div className="mb-2 flex items-center gap-2">
          <motion.span
            className="block h-[7px] w-[7px] rounded-full bg-[var(--sky-bright)]"
            animate={{ opacity: [1, 0.3, 1], scale: [1, 1.25, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="font-mono text-[10px] tracking-[0.14em] text-white/48">
            AGENT STATUS
          </span>
        </div>
        <div className="text-[13px] text-white/82">7 Agents Active</div>
        <div className="mt-1 text-[12px] text-[#A8CFE6]/75">14 tasks completed today</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.95, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-[29%] right-[4.5%] rounded-[16px] border border-[#1EBFFF]/18 bg-[rgba(0,32,87,0.46)] px-4 py-4 backdrop-blur-xl"
      >
        <div className="font-mono text-[10px] tracking-[0.16em] text-[#A8CFE6]/65">
          DATA INGESTED
        </div>
        <div className="mt-2 font-display text-[22px] font-bold leading-none text-white">
          3.2 TB
        </div>
        <div className="mt-1 text-[11px] text-white/48">+18% vs last week</div>
      </motion.div>
    </div>
  );
}

function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.85, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="absolute left-1/2 z-[80] hidden -translate-x-1/2 flex-col items-center gap-3 xl:flex"
      style={{ bottom: "min(24vh, 180px)" }}
    >
      <span className="font-mono text-[9px] tracking-[0.24em] text-white/48">SCROLL</span>
      <div className="relative h-14 w-px overflow-hidden rounded-full bg-white/14">
        <motion.div
          className="absolute left-0 top-0 w-full rounded-full"
          style={{ background: "linear-gradient(to bottom, #FFFFFF 0%, #1EBFFF 100%)" }}
          animate={{ y: ["-100%", "100%"] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <motion.div
        className="h-1.5 w-1.5 rounded-full bg-white/78"
        animate={{ opacity: [1, 0.35, 1], scale: [1, 1.5, 1] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}

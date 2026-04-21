"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Shared editorial hero for sub-pages — light gradient mesh background,
 * pill badge with pulse dot, large display headline with optional gradient
 * highlight word, and an oversized lead paragraph.
 */
export function PageHero({
  pill,
  title,
  highlight,
  subtitle,
  children,
}: {
  pill: string;
  title: string;
  highlight?: string;
  subtitle: string;
  children?: ReactNode;
}) {
  const renderTitle = () => {
    if (!highlight) return title;
    const parts = title.split(highlight);
    return (
      <>
        {parts[0]}
        <span className="text-gradient-brand">{highlight}</span>
        {parts[1]}
      </>
    );
  };

  return (
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
          <span className="label-mono !text-[10px] !text-[var(--sky-deep)]">{pill}</span>
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
          className="mt-8 max-w-[680px] text-[20px] text-[var(--ink-2)] leading-[1.6]"
        >
          {subtitle}
        </motion.p>
        {children && <div className="mt-12">{children}</div>}
      </div>
    </section>
  );
}

"use client";

import { MARQUEE_ITEMS } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function MarqueeStrip() {
  return (
    <ScrollReveal y={18} blur={6}>
      <div className="bg-[var(--surface-3)] border-y border-[var(--border)] py-5 overflow-hidden">
        <div className="flex animate-marquee gap-10 whitespace-nowrap">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span
              key={i}
              className="font-mono text-[12px] tracking-[0.18em] uppercase text-[var(--ink-3)] flex items-center gap-10"
            >
              {item}
              <span className="w-1 h-1 rounded-full bg-[var(--border-2)]" />
            </span>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

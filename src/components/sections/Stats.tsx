"use client";

import { ScrollCounter } from "@/components/ui/ScrollCounter";

const STATS = [
  { value: 100, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Expert Consultants" },
  { value: 8, suffix: "", label: "Industries Served" },
  { value: 3, suffix: "", label: "Global Offices" },
];

export function Stats() {
  return (
    <section className="relative bg-[var(--navy)] text-white py-24 overflow-hidden">
      {/* faint hex */}
      <svg
        aria-hidden
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04]"
        width="600"
        height="600"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path d="M16 2L28.124 9V23L16 30L3.876 23V9L16 2Z" fill="white" />
      </svg>
      <div className="container-x relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          {STATS.map((s, i) => (
            <div key={s.label} className={`px-6 py-8 lg:py-4 ${i === 0 ? "lg:pl-0" : ""}`}>
              <div className="font-display font-semibold text-[clamp(48px,7vw,80px)] leading-none text-gradient-brand">
                <ScrollCounter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-3 text-[14px] text-white/60">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CASE_STUDIES } from "@/lib/constants";

export function CaseStudies() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", dragFree: false, loop: false });
  const [selected, setSelected] = useState(0);
  const [count, setCount] = useState(CASE_STUDIES.length);

  useEffect(() => {
    if (!emblaApi) return;
    setCount(emblaApi.scrollSnapList().length);
    const onSel = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSel);
    onSel();
    return () => {
      emblaApi.off("select", onSel);
    };
  }, [emblaApi]);

  return (
    <section className="section-y">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <SectionLabel number="04">Case Studies</SectionLabel>
            <h2 className="mt-6 font-display text-[clamp(40px,6vw,64px)] leading-[1.05] text-[var(--ink)]">
              Real Impact.
              <br />
              Real Scale.
            </h2>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="font-mono text-[12px] text-[var(--ink-3)]">
                <span className="text-[var(--navy)]">{String(selected + 1).padStart(2, "0")}</span>
                {" / "}
                {String(count).padStart(2, "0")}
              </div>
              <div className="flex gap-2">
                {[ArrowLeft, ArrowRight].map((Icon, i) => (
                  <button
                    key={i}
                    onClick={() => (i === 0 ? emblaApi?.scrollPrev() : emblaApi?.scrollNext())}
                    aria-label={i === 0 ? "Previous" : "Next"}
                    className="w-10 h-10 rounded-full border border-[var(--border)] inline-flex items-center justify-center text-[var(--ink-2)] hover:bg-[var(--navy)] hover:border-[var(--navy)] hover:text-white transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </button>
                ))}
              </div>
            </div>
            <div className="h-px bg-[var(--border)] relative overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-brand-h"
                animate={{ width: `${((selected + 1) / count) * 100}%` }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>
        </div>

        <div className="mt-16 -mx-5 lg:-mx-20">
          <div className="overflow-hidden px-5 lg:px-20" ref={emblaRef}>
            <div className="flex gap-6">
              {CASE_STUDIES.map((c, i) => (
                <article
                  key={c.counter}
                  className="flex-[0_0_85%] md:flex-[0_0_55%] lg:flex-[0_0_440px] group"
                >
                  <div className="rounded-2xl bg-white border border-[var(--border)] p-10 h-[480px] flex flex-col relative overflow-hidden transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_20px_60px_-20px_rgba(0,32,87,0.18)]">
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-brand-h opacity-60 group-hover:opacity-100 transition-opacity" />
                    <div className="flex items-start justify-between">
                      <span className="label-mono px-3 py-1 rounded-full bg-[var(--surface-2)] text-[var(--sky-deep)]">
                        {c.tag}
                      </span>
                      <span className="font-display text-[80px] leading-none text-[var(--border)] -mt-3">
                        {c.counter}
                      </span>
                    </div>
                    <h3 className="mt-8 font-heading font-bold text-[22px] text-[var(--ink)] leading-tight">
                      {c.title}
                    </h3>
                    <p className="mt-4 text-[14.5px] text-[var(--ink-2)] leading-[1.7] line-clamp-4">
                      {c.body}
                    </p>
                    <div className="mt-auto pt-6 flex items-center justify-between border-t border-[var(--border)]">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-gradient-brand text-white inline-flex items-center justify-center font-display text-[13px]">
                          {c.author
                            .split(" ")
                            .map((p) => p[0])
                            .join("")
                            .slice(0, 2)}
                        </div>
                        <div>
                          <div className="text-[12.5px] text-[var(--ink)] font-medium">
                            {c.author}
                          </div>
                          <div className="text-[11px] text-[var(--ink-3)]">{c.date}</div>
                        </div>
                      </div>
                      <span className="text-[13px] text-[var(--sky-deep)] opacity-0 group-hover:opacity-100 transition-opacity">
                        Read →
                      </span>
                    </div>
                  </div>
                  {/* unused index var */}
                  <span className="hidden">{i}</span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

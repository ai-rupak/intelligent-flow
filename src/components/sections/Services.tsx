import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { HoverTilt } from "@/components/ui/HoverTilt";
import { SERVICES } from "@/lib/constants";

export function Services() {
  return (
    <section className="section-y bg-[var(--surface-2)]">
      <div className="container-x">
        <SectionLabel number="02">Services</SectionLabel>
        <h2 className="mt-6 font-display text-[clamp(40px,6vw,64px)] leading-[1.05] text-[var(--ink)] max-w-[700px]">
          What We Build.
        </h2>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <HoverTilt max={4}>
                <Link
                  to={`/what-we-do/${s.slug}`}
                  className="group block relative overflow-hidden rounded-2xl bg-white border border-[var(--border)] p-10 h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_-20px_rgba(0,32,87,0.18)]"
                >
                  <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-brand scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                  <div className="absolute top-6 right-8 font-mono text-[11px] text-[var(--border-2)]">
                    0{i + 1}
                  </div>
                  <div className="text-[36px] mb-6">{s.icon}</div>
                  <h3 className="font-heading font-bold text-[22px] text-[var(--ink)] leading-tight">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-[15px] text-[var(--ink-2)] leading-[1.75]">{s.body}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="label-mono text-[10px] px-2.5 py-1 rounded-md bg-[var(--surface-2)] text-[var(--sky-deep)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8 flex items-center gap-1.5 text-[13px] text-[var(--sky-deep)] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                    Explore practice <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              </HoverTilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

export function SectionLabel({ number, children }: { number: string; children: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.6 }}
      className="inline-flex items-center gap-3 label-mono"
    >
      <span className="text-[var(--sky-deep)]">— {number}</span>
      <span>{children}</span>
    </motion.div>
  );
}

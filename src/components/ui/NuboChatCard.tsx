import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MESSAGES = [
  { from: "user", text: "Analyze Q3 pipeline performance" },
  {
    from: "nubo",
    text: "Pipeline efficiency at 94.2%. Top bottleneck: Stage 3 — avg 4.1d. Recommend automating handoff to ops.",
  },
];

export function NuboChatCard({ compact = false }: { compact?: boolean }) {
  const [step, setStep] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    const seq = async () => {
      const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));
      while (true) {
        setStep(0);
        await wait(1200);
        setStep(1);
        await wait(800);
        setTyping(true);
        await wait(1400);
        setTyping(false);
        setStep(2);
        await wait(4500);
      }
    };
    seq();
  }, []);

  return (
    <div
      className={`rounded-2xl bg-[var(--navy)] text-white overflow-hidden shadow-[0_30px_80px_-30px_rgba(0,32,87,0.5)] ${
        compact ? "w-full" : "w-full max-w-[380px]"
      }`}
    >
      <div className="h-[3px] bg-gradient-brand-h" />
      <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-gradient-brand-h flex items-center justify-center">
            <span className="font-display text-[12px] font-bold">N</span>
          </div>
          <div>
            <div className="text-[13px] font-medium">Nubo</div>
            <div className="text-[10px] text-white/50 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--sky-bright)] animate-pulse-dot" />
              Online · GPT-4o
            </div>
          </div>
        </div>
        <div className="label-mono text-white/30 text-[9px]">v2.4</div>
      </div>
      <div className="p-5 space-y-3 min-h-[220px]">
        <AnimatePresence>
          {step >= 1 && (
            <motion.div
              key="u"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex justify-end"
            >
              <div className="max-w-[80%] px-3.5 py-2.5 rounded-2xl rounded-tr-md bg-white/10 text-[13px]">
                {MESSAGES[0].text}
              </div>
            </motion.div>
          )}
          {typing && (
            <motion.div
              key="t"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-start"
            >
              <div className="px-4 py-3 rounded-2xl rounded-tl-md bg-gradient-brand-h flex gap-1">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
                    className="w-1.5 h-1.5 rounded-full bg-white"
                  />
                ))}
              </div>
            </motion.div>
          )}
          {step >= 2 && (
            <motion.div
              key="n"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex justify-start"
            >
              <div className="max-w-[85%] px-3.5 py-2.5 rounded-2xl rounded-tl-md bg-gradient-brand-h text-[13px] leading-[1.55]">
                {MESSAGES[1].text}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="px-5 py-3 border-t border-white/10 flex items-center gap-2 text-[11px] text-white/40">
        <span className="flex-1 truncate">Ask Nubo anything…</span>
        <kbd className="font-mono px-1.5 py-0.5 rounded bg-white/10 text-[10px]">⌘K</kbd>
      </div>
    </div>
  );
}

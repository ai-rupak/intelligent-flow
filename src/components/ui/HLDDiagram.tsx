import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import type { HLDSpec } from "@/lib/services-data";

/**
 * HLDDiagram — HTML/CSS/SVG architecture diagram.
 * Nodes positioned absolutely (% of container). Edges drawn as SVG paths
 * with brand-gradient stroke. Each node + edge fades in on scroll, staggered.
 */
export function HLDDiagram({ spec }: { spec: HLDSpec }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-15%" });
  const [size, setSize] = useState({ w: 0, h: spec.height ?? 540 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      setSize({ w: el.clientWidth, h: el.clientHeight });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // node center coords in pixels
  const nodeCenters = new Map<string, { x: number; y: number; w: number }>();
  spec.nodes.forEach((n) => {
    const w = n.w ?? 160;
    const cx = (n.x / 100) * size.w + w / 2;
    const cy = (n.y / 100) * size.h + 36; // approx half node height
    nodeCenters.set(n.id, { x: cx, y: cy, w });
  });

  return (
    <div
      ref={containerRef}
      className="relative w-full rounded-2xl bg-white border border-[var(--border)] overflow-hidden"
      style={{ height: spec.height ?? 540 }}
    >
      {/* Subtle grid background */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.5] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse at center, #000 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, #000 30%, transparent 80%)",
        }}
      />

      {/* Edges */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      >
        <defs>
          <linearGradient id="hld-edge" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--navy)" />
            <stop offset="100%" stopColor="var(--sky-bright)" />
          </linearGradient>
          <marker
            id="hld-arrow"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path d="M0,0 L10,5 L0,10 z" fill="var(--sky-bright)" />
          </marker>
        </defs>
        {size.w > 0 &&
          spec.edges.map((e, i) => {
            const a = nodeCenters.get(e.from);
            const b = nodeCenters.get(e.to);
            if (!a || !b) return null;
            // exit node from right edge if going right, otherwise from center
            const startX = b.x > a.x ? a.x + a.w / 2 : a.x;
            const endX = b.x > a.x ? b.x - b.w / 2 - 4 : b.x;
            const dx = (endX - startX) * 0.5;
            const path = `M ${startX} ${a.y} C ${startX + dx} ${a.y}, ${endX - dx} ${b.y}, ${endX} ${b.y}`;
            return (
              <motion.path
                key={`${e.from}-${e.to}-${i}`}
                d={path}
                stroke="url(#hld-edge)"
                strokeWidth={1.5}
                fill="none"
                markerEnd="url(#hld-arrow)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={inView ? { pathLength: 1, opacity: 0.7 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              />
            );
          })}
      </svg>

      {/* Nodes */}
      {spec.nodes.map((n, i) => {
        const w = n.w ?? 160;
        const variant =
          n.variant === "primary"
            ? "bg-gradient-to-br from-[var(--navy)] to-[var(--sky-deep)] text-white border-[var(--navy)]"
            : n.variant === "muted"
              ? "bg-[var(--surface-2)] text-[var(--ink-2)] border-[var(--border)]"
              : "bg-white text-[var(--ink)] border-[var(--border-2)]";
        return (
          <motion.div
            key={n.id}
            className={`absolute rounded-xl border px-3 py-2.5 shadow-[0_4px_16px_-8px_rgba(0,32,87,0.15)] ${variant}`}
            style={{ left: `${n.x}%`, top: `${n.y}%`, width: w, zIndex: 2 }}
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="font-heading font-semibold text-[12.5px] leading-tight">{n.label}</div>
            {n.sub && (
              <div
                className={`label-mono text-[9px] mt-0.5 ${
                  n.variant === "primary" ? "!text-white/60" : ""
                }`}
              >
                {n.sub}
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}

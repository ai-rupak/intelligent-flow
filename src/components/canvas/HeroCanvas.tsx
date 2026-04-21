"use client";

import { useEffect, useRef } from "react";

export function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    const NODE_COUNT = 70;
    const MAX_DIST = 160;

    type N = { x: number; y: number; vx: number; vy: number; r: number };
    const nodes: N[] = [];

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const init = () => {
      nodes.length = 0;
      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          r: 1.5 + Math.random() * 1.5,
        });
      }
    };

    const mouse = { x: -9999, y: -9999 };
    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    let raf = 0;
    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      // draw lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < MAX_DIST) {
            const alpha = (1 - d / MAX_DIST) * 0.18;
            ctx.strokeStyle = `rgba(0,119,182,${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      // draw + update nodes
      for (const n of nodes) {
        // mouse pull (top 3 nearest)
        const mdx = mouse.x - n.x;
        const mdy = mouse.y - n.y;
        const md = Math.hypot(mdx, mdy);
        if (md < 200 && md > 1) {
          n.vx += (mdx / md) * 0.02;
          n.vy += (mdy / md) * 0.02;
        }
        // damp
        n.vx *= 0.98;
        n.vy *= 0.98;
        // re-add small drift if too slow
        if (Math.abs(n.vx) < 0.05) n.vx += (Math.random() - 0.5) * 0.1;
        if (Math.abs(n.vy) < 0.05) n.vy += (Math.random() - 0.5) * 0.1;

        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;

        ctx.fillStyle = "rgba(0,32,87,0.3)";
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };

    resize();
    init();
    raf = requestAnimationFrame(tick);

    const ro = new ResizeObserver(() => {
      resize();
      init();
    });
    ro.observe(canvas);
    window.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 w-full h-full" aria-hidden />;
}

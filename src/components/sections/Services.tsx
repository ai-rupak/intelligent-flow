"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SERVICES as BASE_SERVICES } from "@/lib/constants";

type HomeService = {
  slug: string;
  title: string;
  body: string;
  tags: readonly string[];
  href?: string;
};

const HOME_SERVICES: readonly HomeService[] = [
  ...BASE_SERVICES,
  {
    slug: "ml-advanced-analytics",
    href: "/what-we-do/data-analytics",
    title: "Machine Learning & Advanced Analytics",
    body: "Forecasting, prediction, optimization, and decision intelligence for teams that need sharper planning and faster action.",
    tags: ["ML Models", "Forecasting", "Optimization"],
  },
  {
    slug: "app-development",
    href: "/contact",
    title: "App Development",
    body: "Web and mobile product development connected to modern data, AI, and enterprise platforms from day one.",
    tags: ["Web Apps", "Mobile", "Platform UX"],
  },
] as const;

const SERVICE_VISUALS: Record<string, { image: string; eyebrow: string }> = {
  "agentic-ai": {
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=80",
    eyebrow: "Autonomous Systems",
  },
  "genai-chatbots": {
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1400&q=80",
    eyebrow: "Enterprise Conversations",
  },
  "data-engineering": {
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80",
    eyebrow: "Cloud Data Fabric",
  },
  "data-analytics": {
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    eyebrow: "Decision Intelligence",
  },
  "ml-advanced-analytics": {
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    eyebrow: "Predictive Systems",
  },
  "app-development": {
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1400&q=80",
    eyebrow: "Product Engineering",
  },
};

const SERVICE_ACCENTS: Record<string, { title: string; counter: string; progress: string }> = {
  "agentic-ai": {
    title: "#8F7CFF",
    counter: "#9E8BFF",
    progress: "#7F5CFF",
  },
  "genai-chatbots": {
    title: "#55E6D7",
    counter: "#6BF0E3",
    progress: "#40D7C7",
  },
  "data-engineering": {
    title: "#7DE7FF",
    counter: "#8DEEFF",
    progress: "#1EBFFF",
  },
  "data-analytics": {
    title: "#FFB86B",
    counter: "#FFC98E",
    progress: "#FF9F43",
  },
  "ml-advanced-analytics": {
    title: "#8BE7C4",
    counter: "#A7F1D5",
    progress: "#52D9A5",
  },
  "app-development": {
    title: "#7DC2FF",
    counter: "#A9D7FF",
    progress: "#4AA3FF",
  },
};

export function Services() {
  const [active, setActive] = useState(0);
  const mobileScrollerRef = useRef<HTMLDivElement>(null);
  const mobileScrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const service = HOME_SERVICES[active];
  const visual = SERVICE_VISUALS[service.slug];
  const accent = SERVICE_ACCENTS[service.slug];

  const move = (direction: 1 | -1) => {
    setActive((current) => (current + direction + HOME_SERVICES.length) % HOME_SERVICES.length);
  };

  const setActiveIndex = (index: number) => {
    setActive(index);
    scrollMobileToCard(index);
  };

  const moveMobile = (direction: 1 | -1) => {
    const nextIndex = (active + direction + HOME_SERVICES.length) % HOME_SERVICES.length;
    setActiveIndex(nextIndex);
  };

  useEffect(() => {
    return () => {
      if (mobileScrollTimeoutRef.current) {
        clearTimeout(mobileScrollTimeoutRef.current);
      }
    };
  }, []);

  const scrollMobileToCard = (index: number) => {
    const scroller = mobileScrollerRef.current;
    const card = scroller?.children[index] as HTMLElement | undefined;

    if (!scroller || !card) return;

    scroller.scrollTo({
      left: card.offsetLeft - scroller.offsetLeft,
      behavior: "smooth",
    });
  };

  const syncActiveFromScroll = () => {
    const scroller = mobileScrollerRef.current;
    if (!scroller) return;

    const cards = Array.from(scroller.children) as HTMLElement[];
    if (!cards.length) return;

    const scrollerCenter = scroller.scrollLeft + scroller.clientWidth / 2;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(cardCenter - scrollerCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActive((current) => (current === closestIndex ? current : closestIndex));
  };

  const handleMobileScroll = () => {
    if (mobileScrollTimeoutRef.current) {
      clearTimeout(mobileScrollTimeoutRef.current);
    }

    mobileScrollTimeoutRef.current = setTimeout(syncActiveFromScroll, 80);
  };

  return (
    <section className="relative overflow-hidden bg-[#001234] py-14 text-white sm:py-16 lg:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-45"
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 12%, rgba(30,191,255,0.28) 0 1px, transparent 2px), radial-gradient(circle at 78% 42%, rgba(64,215,199,0.24) 0 1px, transparent 2px)",
          backgroundSize: "32px 32px, 42px 42px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-35"
        style={{
          background:
            "radial-gradient(70% 55% at 12% 8%, rgba(30,191,255,0.14), transparent), radial-gradient(65% 55% at 88% 52%, rgba(64,215,199,0.12), transparent)",
        }}
      />

      <div className="container-x relative">
        <ScrollReveal y={24} blur={8}>
          <SectionLabel number="02">Services</SectionLabel>
          <h2 className="mt-4 max-w-[760px] font-heading text-[clamp(20px,8vw,28px)] font-bold leading-[1.14] text-white sm:text-[clamp(30px,4.2vw,48px)] sm:leading-[1.12]">
            AI, GenAI, and data engineering services for teams building at scale.
          </h2>
        </ScrollReveal>

        <div className="mt-8 md:hidden">
          <div
            ref={mobileScrollerRef}
            onScroll={handleMobileScroll}
            className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {HOME_SERVICES.map((item, index) => {
              const itemVisual = SERVICE_VISUALS[item.slug];
              const itemAccent = SERVICE_ACCENTS[item.slug];
              const itemHref = item.href ?? `/what-we-do/${item.slug}`;

              return (
                <article
                  key={item.slug}
                  className="relative w-[min(84vw,360px)] shrink-0 snap-center overflow-hidden rounded-[24px] border border-white/10 bg-[#04122f] shadow-[0_24px_60px_-40px_rgba(0,0,0,0.72)]"
                >
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 16% 14%, rgba(124,109,255,0.18), transparent 18%), radial-gradient(circle at 82% 72%, rgba(30,191,255,0.14), transparent 22%)",
                    }}
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-25"
                    style={{
                      backgroundImage:
                        "repeating-radial-gradient(circle at 0 0, transparent 0 22px, rgba(59,97,208,0.3) 22px 24px, transparent 24px 46px)",
                    }}
                  />

                  <div className="relative p-5 pb-0">
                    <div
                      className="relative aspect-[1.4] overflow-hidden rounded-[14px] border border-white/10 bg-cover bg-center"
                      style={{ backgroundImage: `url(${itemVisual.image})` }}
                    >
                      <div className="absolute inset-0 bg-[#001234]/38" />
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#001234]/62 via-[#002057]/16 to-[#c5b2ff]/14" />
                      <div
                        aria-hidden
                        className="absolute inset-0 opacity-30"
                        style={{
                          background:
                            "linear-gradient(120deg, transparent 0 48%, rgba(200,180,255,0.28) 49%, rgba(139,110,255,0.18) 58%, transparent 60%)",
                        }}
                      />
                      <div className="absolute bottom-3 left-3 rounded-full border border-white/15 bg-[#001234]/55 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-white/70 backdrop-blur-md">
                        {itemVisual.eyebrow}
                      </div>
                    </div>
                  </div>

                  <div className="relative p-5 pb-6">
                    <div className="font-mono text-[13px]" style={{ color: itemAccent.counter }}>
                      {String(index + 1).padStart(2, "0")} /{" "}
                      {String(HOME_SERVICES.length).padStart(2, "0")}
                    </div>
                    <h3
                      className="mt-3 max-w-[13ch] font-heading text-[26px] font-bold leading-[1.05]"
                      style={{ color: itemAccent.title }}
                    >
                      {item.title}
                    </h3>
                    <p className="mt-4 max-w-[28ch] text-[14px] leading-[1.6] text-white/74">
                      {item.body}
                    </p>

                    <div className="mt-5 flex items-center justify-between">
                      <Link
                        href={itemHref}
                        className="group inline-flex items-center gap-2 text-[13px] font-medium text-[#7DE7FF]"
                      >
                        Explore practice
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                      <button
                        type="button"
                        onClick={() => moveMobile(1)}
                        aria-label="Next service"
                        className="grid h-10 w-10 place-items-center rounded-full border border-white/18 bg-white/[0.04] text-white/78 transition-all hover:border-[#7DE7FF]/60 hover:bg-white/[0.08] hover:text-white"
                      >
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-6 flex flex-col items-center gap-4">
            <div className="flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => moveMobile(-1)}
                aria-label="Previous service"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/[0.04] text-white/75 transition-all hover:border-[#7DE7FF]/60 hover:bg-white/[0.08] hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => moveMobile(1)}
                aria-label="Next service"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/[0.04] text-white/75 transition-all hover:border-[#7DE7FF]/60 hover:bg-white/[0.08] hover:text-white"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-2.5">
              {HOME_SERVICES.map((item, index) => (
                <button
                  key={`mobile-${item.slug}`}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show ${item.title}`}
                  className={`h-1.5 rounded-full transition-all ${
                    active === index ? "w-12" : "w-8 bg-white/20 hover:bg-white/35"
                  }`}
                  style={
                    active === index
                      ? { backgroundColor: SERVICE_ACCENTS[item.slug].progress }
                      : undefined
                  }
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-9 hidden items-center gap-8 md:mt-10 md:grid lg:grid-cols-[0.9fr_0.78fr] lg:gap-12">
          <ScrollReveal x={-32} className="relative">
            <div className="absolute -left-4 -top-4 h-16 w-16 border-l border-t border-[#1EBFFF]/30 sm:h-20 sm:w-20" />
            <div className="absolute -bottom-4 -right-4 h-16 w-16 border-b border-r border-[#40D7C7]/25 sm:h-20 sm:w-20" />
            <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] shadow-[0_30px_90px_-44px_rgba(30,191,255,0.55)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="relative aspect-[1.55] min-h-[220px] bg-cover bg-center sm:min-h-[260px] md:min-h-[300px] lg:min-h-[320px]"
                  style={{ backgroundImage: `url(${visual.image})` }}
                >
                  <div className="absolute inset-0 bg-[#001234]/24" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#001234]/58 via-[#002057]/18 to-[#1EBFFF]/10" />
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-12"
                    style={{
                      background:
                        "linear-gradient(120deg, transparent 0 44%, rgba(125,231,255,0.18) 45%, transparent 54%)",
                    }}
                  />
                  <div className="absolute bottom-4 left-4 rounded-md border border-white/15 bg-[#001234]/55 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white/70 backdrop-blur-md">
                    {visual.eyebrow}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </ScrollReveal>

          <ScrollReveal x={32} delay={0.08}>
            <AnimatePresence mode="wait">
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -18 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="font-mono text-[13px]" style={{ color: accent.counter }}>
                  {String(active + 1).padStart(2, "0")} /{" "}
                  {String(HOME_SERVICES.length).padStart(2, "0")}
                </div>
                <h3
                  className="mt-3 max-w-[500px] font-heading text-[clamp(24px,3.4vw,34px)] font-bold leading-[1.1]"
                  style={{ color: accent.title }}
                >
                  {service.title}
                </h3>
                <p className="mt-4 max-w-[520px] text-[15px] leading-[1.7] text-white/72 md:text-[16px]">
                  {service.body}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-white/65"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={service.href ?? `/what-we-do/${service.slug}`}
                  className="group mt-6 inline-flex items-center gap-2 text-[14px] font-medium text-[#7DE7FF]"
                >
                  Explore practice
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </motion.div>
            </AnimatePresence>

            <div className="mt-7 flex items-center gap-3">
              <button
                type="button"
                onClick={() => move(-1)}
                aria-label="Previous service"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/[0.04] text-white/75 transition-all hover:border-[#7DE7FF]/60 hover:bg-white/[0.08] hover:text-white md:h-11 md:w-11"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => move(1)}
                aria-label="Next service"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/[0.04] text-white/75 transition-all hover:border-[#7DE7FF]/60 hover:bg-white/[0.08] hover:text-white md:h-11 md:w-11"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-7 flex gap-2.5">
              {HOME_SERVICES.map((item, index) => (
                <button
                  key={item.slug}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-label={`Show ${item.title}`}
                  className={`h-1.5 rounded-full transition-all ${
                    active === index ? "w-12" : "w-8 bg-white/20 hover:bg-white/35"
                  }`}
                  style={
                    active === index
                      ? { backgroundColor: SERVICE_ACCENTS[item.slug].progress }
                      : undefined
                  }
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

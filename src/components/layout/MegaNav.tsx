"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, BarChart3, Bot, Database, MessageSquareText } from "lucide-react";

type Panel = "what-we-do" | "products" | "company";

const panel: Record<Panel, React.ReactNode> = {
  "what-we-do": <WhatWeDoPanel />,
  products: <ProductsPanel />,
  company: <CompanyPanel />,
};

export function MegaNav({ active, onClose }: { active: Panel | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          onMouseLeave={onClose}
          className="absolute left-0 right-0 top-full bg-white border-b border-[var(--border)] shadow-[0_24px_64px_-24px_rgba(0,32,87,0.12)]"
        >
          <div className="container-x py-12">{panel[active]}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function PanelHeader({ title, sub }: { title: string; sub: string }) {
  return (
    <div>
      <h3 className="font-display text-[22px] text-[var(--ink)]">{title}</h3>
      <p className="mt-3 text-[14px] text-[var(--ink-3)] leading-[1.7] max-w-[200px]">{sub}</p>
    </div>
  );
}

function ColLabel({ children }: { children: string }) {
  return <div className="label-mono mb-5">{children}</div>;
}

function NavRow({
  to,
  icon,
  title,
  desc,
}: {
  to: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <Link
      href={to}
      className="group block rounded-lg p-3 -m-3 transition-colors hover:bg-[var(--surface-2)] relative"
    >
      <span className="absolute left-0 top-3 bottom-3 w-[2px] bg-[var(--sky-bright)] scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-200" />
      <div className="flex items-start gap-3">
        <span className="mt-0.5 inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-white text-[var(--sky-deep)] transition-colors duration-200 group-hover:border-[var(--sky-bright)] group-hover:text-[var(--navy)]">
          {icon}
        </span>
        <div className="flex-1 min-w-0">
          <div className="font-heading font-semibold text-[14px] text-[var(--ink)] group-hover:text-[var(--navy)]">
            {title}
          </div>
          <div className="text-[12.5px] text-[var(--ink-3)] mt-1 leading-[1.5]">{desc}</div>
        </div>
      </div>
    </Link>
  );
}

function WhatWeDoPanel() {
  return (
    <div className="grid grid-cols-12 gap-10">
      <div className="col-span-3">
        <PanelHeader
          title="What We Do"
          sub="AI and data services engineered for enterprise outcomes."
        />
      </div>
      <div className="col-span-4">
        <ColLabel>Services</ColLabel>
        <div className="space-y-5">
          <NavRow
            to="/what-we-do/agentic-ai"
            icon={<Bot className="h-4 w-4" />}
            title="Agentic AI & Autonomous Agents"
            desc="AI agents that act, adapt, and deliver."
          />
          <NavRow
            to="/what-we-do/genai-chatbots"
            icon={<MessageSquareText className="h-4 w-4" />}
            title="Generative AI Chatbots"
            desc="Enterprise chatbots powered by RAG & LLMs."
          />
          <NavRow
            to="/what-we-do/data-engineering"
            icon={<Database className="h-4 w-4" />}
            title="Data Engineering & Pipelines"
            desc="Cloud-native pipelines at petabyte scale."
          />
          <NavRow
            to="/what-we-do/data-analytics"
            icon={<BarChart3 className="h-4 w-4" />}
            title="Data Analytics & Insights"
            desc="Turn raw data into decisions."
          />
        </div>
      </div>
      <div className="col-span-3">
        <ColLabel>Featured Work</ColLabel>
        <Link
          href="/insights"
          className="group block rounded-2xl bg-[var(--surface-2)] p-5 hover:bg-[var(--surface-3)] transition-colors"
        >
          <div className="aspect-[4/3] rounded-xl bg-gradient-brand mb-4 relative overflow-hidden">
            <div className="absolute inset-0 grain opacity-20" />
            <div className="absolute bottom-3 left-3 label-mono text-white/70">Healthcare</div>
          </div>
          <div className="flex items-center justify-between gap-3">
            <span className="font-heading font-semibold text-[13px] text-[var(--ink)] leading-tight">
              Autonomous triage agent for a 12-hospital network
            </span>
            <ArrowUpRight className="w-4 h-4 text-[var(--sky-deep)] flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </Link>
      </div>
      <div className="col-span-2">
        <ColLabel>Industries</ColLabel>
        <ul className="space-y-2.5 text-[13px] text-[var(--ink-2)]">
          {["Healthcare", "Finance", "Logistics", "Retail", "Enterprise"].map((i) => (
            <li
              key={i}
              className="hover:text-[var(--navy)] hover:translate-x-1 transition-all cursor-default"
            >
              {i}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ProductsPanel() {
  return (
    <div className="grid grid-cols-12 gap-10">
      <div className="col-span-4">
        <PanelHeader title="Our Products" sub="Built in-house. Deployed at enterprise scale." />
      </div>
      <div className="col-span-8">
        <ColLabel>Products</ColLabel>
        <Link
          href="/products/nubo"
          className="group block rounded-2xl bg-[var(--surface-2)] p-6 border-l-[3px] border-transparent hover:border-[var(--sky-bright)] transition-colors relative overflow-hidden"
        >
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-brand" />
          <div className="flex items-start justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-display text-[20px] text-[var(--navy)]">Nubo</span>
                <span className="label-mono text-[var(--sky-deep)]">★ Featured</span>
              </div>
              <p className="text-[14px] text-[var(--ink-2)] leading-[1.6]">
                The Enterprise GenAI Brain — production-grade chatbot platform.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["RAG", "Prompt Engineering", "LLM"].map((t) => (
                  <span
                    key={t}
                    className="label-mono text-[10px] px-2.5 py-1 rounded-md bg-white text-[var(--sky-deep)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 text-[13px] text-[var(--sky-deep)] font-medium">
                Explore Nubo →
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

function CompanyPanel() {
  return (
    <div className="grid grid-cols-12 gap-10">
      <div className="col-span-3">
        <PanelHeader title="Company" sub="Who we are, who we serve, and how we partner." />
      </div>
      <div className="col-span-5">
        <ColLabel>Company</ColLabel>
        <div className="space-y-5">
          <NavRow
            to="/company/about"
            icon="○"
            title="About Us"
            desc="Our story, mission, and team."
          />
          <NavRow
            to="/company/clients"
            icon="◇"
            title="Clients"
            desc="Enterprises who trust CentricaSoft."
          />
          <NavRow
            to="/company/partners"
            icon="△"
            title="Partners"
            desc="Our technology and delivery ecosystem."
          />
        </div>
      </div>
      <div className="col-span-4">
        <ColLabel>Latest</ColLabel>
        <Link href="/insights" className="group block">
          <div className="label-mono text-[var(--sky-deep)] mb-2">Insight · Apr 2025</div>
          <div className="font-heading font-semibold text-[15px] text-[var(--ink)] leading-snug group-hover:text-[var(--navy)]">
            Why agentic AI is the new operating layer for enterprise software
          </div>
          <div className="mt-2 text-[12.5px] text-[var(--ink-3)] leading-[1.6]">
            A look at how autonomous agents collapse the gap between intent and action.
          </div>
          <div className="mt-3 text-[12px] text-[var(--sky-deep)]">Read more →</div>
        </Link>
      </div>
    </div>
  );
}

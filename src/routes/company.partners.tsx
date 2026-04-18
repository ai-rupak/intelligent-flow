import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Cloud, Database, Brain, Briefcase } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CTAStrip } from "@/components/sections/CTAStrip";
import { HoverTilt } from "@/components/ui/HoverTilt";

export const Route = createFileRoute("/company/partners")({
  head: () => ({
    meta: [
      { title: "Partners — CentricaSoft" },
      {
        name: "description",
        content:
          "Our technology and delivery partner ecosystem — hyperscalers, data platforms, AI providers, and global delivery partners.",
      },
      { property: "og:title", content: "Partners — CentricaSoft" },
      {
        property: "og:description",
        content: "Our ecosystem. Your advantage. Hyperscalers, data platforms, and delivery partners.",
      },
    ],
  }),
  component: PartnersPage,
});

const TIERS = ["Strategic", "Premier", "Select"] as const;

const TECH_PARTNERS: {
  name: string;
  category: string;
  tier: (typeof TIERS)[number];
  blurb: string;
  icon: typeof Cloud;
}[] = [
  {
    name: "Snowflake",
    category: "Data Cloud",
    tier: "Strategic",
    blurb: "Certified consulting partner — lakehouse migrations and Cortex AI deployments.",
    icon: Database,
  },
  {
    name: "Databricks",
    category: "Lakehouse",
    tier: "Strategic",
    blurb: "Bronze-tier partner — production Spark, Delta, and ML pipeline implementation.",
    icon: Database,
  },
  {
    name: "AWS",
    category: "Hyperscaler",
    tier: "Strategic",
    blurb: "Advanced consulting partner — Bedrock, SageMaker, and serverless data platforms.",
    icon: Cloud,
  },
  {
    name: "Google Cloud",
    category: "Hyperscaler",
    tier: "Premier",
    blurb: "Vertex AI, BigQuery, and Looker — full-stack Google Cloud delivery.",
    icon: Cloud,
  },
  {
    name: "Microsoft Azure",
    category: "Hyperscaler",
    tier: "Premier",
    blurb: "Azure OpenAI, Fabric, and Synapse — enterprise-grade Microsoft cloud delivery.",
    icon: Cloud,
  },
  {
    name: "OpenAI",
    category: "AI Provider",
    tier: "Premier",
    blurb: "Production-grade GPT-4o deployments with usage governance and cost controls.",
    icon: Brain,
  },
  {
    name: "Anthropic",
    category: "AI Provider",
    tier: "Premier",
    blurb: "Claude 3.5 Sonnet for high-stakes agentic workloads with constitutional guardrails.",
    icon: Brain,
  },
  {
    name: "LangChain",
    category: "AI Tooling",
    tier: "Select",
    blurb: "LangGraph and LangSmith — agent orchestration and observability at scale.",
    icon: Brain,
  },
  {
    name: "Pinecone",
    category: "Vector DB",
    tier: "Select",
    blurb: "Hosted vector search powering our largest production RAG deployments.",
    icon: Database,
  },
];

const DELIVERY_PARTNERS = [
  {
    name: "Cognivantix Advisory",
    region: "North America",
    focus: "Healthcare strategy",
  },
  {
    name: "Northstar Consulting",
    region: "Europe",
    focus: "Financial services delivery",
  },
  {
    name: "Vellum Talent",
    region: "Global",
    focus: "Specialist AI staff augmentation",
  },
  {
    name: "Aperture Insights",
    region: "APAC",
    focus: "Retail & logistics analytics",
  },
];

const TIER_STYLE: Record<(typeof TIERS)[number], string> = {
  Strategic: "bg-gradient-brand-h text-white",
  Premier: "bg-[var(--navy)] text-white",
  Select: "bg-[var(--surface-3)] text-[var(--sky-deep)]",
};

function PartnersPage() {
  return (
    <>
      <PageHero
        pill="03 · Company"
        title="Our Ecosystem. Your Advantage."
        highlight="Advantage."
        subtitle="Hyperscaler partnerships, data-platform alliances, and a global delivery network — assembled to ship enterprise outcomes faster."
      />

      {/* Why partners */}
      <section className="section-y bg-[var(--surface-2)]">
        <div className="container-x">
          <SectionLabel number="— 01">Why It Matters</SectionLabel>
          <div className="mt-10 grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-start">
            <h2 className="font-display text-[clamp(32px,5vw,52px)] leading-[1.1] text-[var(--ink)]">
              Certified expertise.{" "}
              <span className="text-gradient-brand">Direct lines</span> to product teams.
            </h2>
            <div className="space-y-5 text-[16px] text-[var(--ink-2)] leading-[1.8]">
              <p>
                Our partner program isn't decoration — it's leverage. Direct escalation paths to
                Snowflake support, early access to Bedrock features, and joint roadmap sessions
                with Databricks engineering.
              </p>
              <p>
                When your project needs a hand from the platform team itself, we already have it on
                speed dial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="section-y">
        <div className="container-x">
          <SectionLabel number="— 02">Technology Partners</SectionLabel>
          <h2 className="mt-6 font-display text-[clamp(36px,5vw,56px)] leading-[1.05] text-[var(--ink)] max-w-[700px]">
            The platforms we deploy on.
          </h2>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TECH_PARTNERS.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                >
                  <HoverTilt max={3}>
                    <div className="group h-full rounded-2xl bg-white border border-[var(--border)] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(0,32,87,0.15)]">
                      <div className="flex items-start justify-between gap-4">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--surface-2)] text-[var(--sky-deep)] group-hover:bg-gradient-brand-h group-hover:text-white transition-all">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span
                          className={`label-mono !text-[9px] px-2 py-1 rounded-md ${TIER_STYLE[p.tier]} !text-current`}
                        >
                          {p.tier}
                        </span>
                      </div>
                      <h3 className="mt-6 font-display text-[24px] text-[var(--ink)] leading-tight">
                        {p.name}
                      </h3>
                      <div className="mt-1 label-mono !text-[var(--sky-deep)]">{p.category}</div>
                      <p className="mt-4 text-[14px] text-[var(--ink-2)] leading-[1.7]">
                        {p.blurb}
                      </p>
                    </div>
                  </HoverTilt>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Delivery Partners */}
      <section className="section-y bg-[var(--surface-2)]">
        <div className="container-x">
          <SectionLabel number="— 03">Delivery Partners</SectionLabel>
          <div className="mt-6 grid lg:grid-cols-[1fr_auto] gap-6 items-end mb-12">
            <h2 className="font-display text-[clamp(36px,5vw,56px)] leading-[1.05] text-[var(--ink)] max-w-[700px]">
              Global reach. Local expertise.
            </h2>
            <p className="max-w-[400px] text-[15px] text-[var(--ink-2)] leading-[1.7]">
              Our delivery network extends our team into every major region — without losing the
              quality bar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-[var(--border)] border border-[var(--border)] rounded-2xl overflow-hidden">
            {DELIVERY_PARTNERS.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white p-8 flex items-start gap-5"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 shrink-0 rounded-xl bg-[var(--surface-2)] text-[var(--sky-deep)]">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <div className="label-mono !text-[var(--sky-deep)]">{p.region}</div>
                  <h3 className="mt-2 font-heading font-bold text-[20px] text-[var(--ink)]">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-[14px] text-[var(--ink-2)]">{p.focus}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a partner CTA */}
      <section className="section-y">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl bg-[var(--navy)] text-white p-12 md:p-20"
          >
            <div
              aria-hidden
              className="absolute inset-0 opacity-30"
              style={{
                background:
                  "radial-gradient(50% 70% at 80% 50%, rgba(30,191,255,0.4), transparent)",
              }}
            />
            <div className="relative grid md:grid-cols-[1fr_auto] gap-10 items-end">
              <div>
                <div className="label-mono !text-[var(--sky)]">— Partner With Us</div>
                <h2 className="mt-5 font-display text-[clamp(32px,5vw,52px)] leading-[1.05] max-w-[640px]">
                  Want to join the ecosystem?
                </h2>
                <p className="mt-5 max-w-[520px] text-[15px] text-white/65 leading-[1.7]">
                  Whether you're a technology platform, a regional consultancy, or a specialist
                  studio — we're always looking for partners who care about engineering excellence.
                </p>
              </div>
              <a
                href="mailto:partners@centricasoft.com"
                className="inline-flex items-center gap-2 px-7 h-[52px] rounded-full bg-white text-[var(--navy)] text-[15px] font-medium hover:bg-[var(--sky)] transition-colors"
              >
                Become a Partner →
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { z } from "zod";
import { ArrowRight, Check, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — CentricaSoft" },
      {
        name: "description",
        content: "Tell us about your project. Our team responds within 24 hours.",
      },
      { property: "og:title", content: "Contact CentricaSoft" },
      {
        property: "og:description",
        content: "Let's build something exceptional. info@centricasoft.com",
      },
    ],
  }),
  component: ContactPage,
});

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  company: z.string().trim().max(120).optional(),
  interest: z.string().min(1, "Please pick an area"),
  message: z.string().trim().min(10, "Tell us a bit more — at least 10 characters").max(1500),
});

type FormState = {
  name: string;
  email: string;
  company: string;
  interest: string;
  message: string;
};

const INTERESTS = [
  "Agentic AI",
  "GenAI Chatbots (Nubo)",
  "Data Engineering",
  "Data Analytics",
  "Partnership",
  "Other",
];

function FloatingField({
  id,
  label,
  type = "text",
  value,
  onChange,
  error,
  textarea,
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  textarea?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;
  const Common = {
    id,
    value,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      onChange(e.target.value),
    className: `peer w-full bg-transparent text-[15px] text-[var(--ink)] placeholder-transparent focus:outline-none ${
      textarea ? "pt-7 pb-3 resize-none min-h-[140px]" : "pt-6 pb-2"
    }`,
    placeholder: label,
  };
  return (
    <div>
      <div
        className={`relative px-4 rounded-xl border bg-white transition-colors ${
          error
            ? "border-red-400"
            : active
              ? "border-[var(--sky-deep)]"
              : "border-[var(--border)]"
        }`}
      >
        <label
          htmlFor={id}
          className={`absolute left-4 pointer-events-none transition-all ${
            active
              ? "top-2 text-[11px] text-[var(--sky-deep)] font-medium tracking-wider uppercase"
              : "top-4 text-[15px] text-[var(--ink-3)]"
          }`}
        >
          {label}
        </label>
        {textarea ? (
          <textarea {...(Common as React.TextareaHTMLAttributes<HTMLTextAreaElement>)} rows={5} />
        ) : (
          <input type={type} {...(Common as React.InputHTMLAttributes<HTMLInputElement>)} />
        )}
      </div>
      {error && <p className="mt-2 text-[12px] text-red-500 px-1">{error}</p>}
    </div>
  );
}

function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    interest: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const update = (k: keyof FormState) => (v: string) => {
    setForm((s) => ({ ...s, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const next: Partial<Record<keyof FormState, string>> = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof FormState;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setDone(true);
  };

  return (
    <>
      <PageHero
        pill="06 · Contact"
        title="Let's Build Something Exceptional."
        highlight="Exceptional."
        subtitle="Tell us about your project. We respond to every inbound within 24 hours — usually faster."
      />

      <section className="pb-32">
        <div className="container-x">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20">
            {/* LEFT — meta */}
            <div className="space-y-12">
              <div>
                <span className="label-mono !text-[var(--sky-deep)]">— · Direct lines</span>
                <div className="mt-6 space-y-5">
                  <a
                    href="mailto:info@centricasoft.com"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-full border border-[var(--border)] bg-white flex items-center justify-center shrink-0 group-hover:border-[var(--sky-deep)] transition-colors">
                      <Mail className="w-4 h-4 text-[var(--sky-deep)]" />
                    </div>
                    <div>
                      <div className="text-[12px] text-[var(--ink-3)] uppercase tracking-wider">
                        Email
                      </div>
                      <div className="mt-1 text-[16px] font-medium text-[var(--ink)] group-hover:text-[var(--sky-deep)] transition-colors">
                        info@centricasoft.com
                      </div>
                    </div>
                  </a>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full border border-[var(--border)] bg-white flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-[var(--sky-deep)]" />
                    </div>
                    <div>
                      <div className="text-[12px] text-[var(--ink-3)] uppercase tracking-wider">
                        Phone
                      </div>
                      <div className="mt-1 text-[16px] font-medium text-[var(--ink)]">
                        +1 (512) 555-0142
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <span className="label-mono !text-[var(--sky-deep)]">— · Offices</span>
                <div className="mt-6 grid sm:grid-cols-2 gap-5">
                  {[
                    {
                      city: "Austin, TX",
                      lines: ["701 Brazos St., Suite 1600", "United States"],
                    },
                    {
                      city: "Bengaluru, IN",
                      lines: ["UB City, Vittal Mallya Rd", "Karnataka 560001"],
                    },
                  ].map((o) => (
                    <div
                      key={o.city}
                      className="rounded-2xl border border-[var(--border)] bg-white p-5"
                    >
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-[var(--sky-deep)]" />
                        <span className="text-[13px] font-semibold text-[var(--ink)]">
                          {o.city}
                        </span>
                      </div>
                      <div className="mt-3 text-[13px] text-[var(--ink-2)] leading-[1.6]">
                        {o.lines.map((l) => (
                          <div key={l}>{l}</div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-[var(--navy)] text-white p-7">
                <div className="label-mono !text-[10px] !text-[var(--sky-bright)]">
                  — · Response SLA
                </div>
                <p className="mt-4 text-[16px] leading-[1.6] text-white/85">
                  Every message is read by a senior engineer or partner — never a junior screener.
                  You'll get a substantive response, not a calendar link, within 24 hours.
                </p>
              </div>
            </div>

            {/* RIGHT — form */}
            <div>
              <div className="rounded-3xl border border-[var(--border)] bg-white p-8 md:p-10 relative overflow-hidden">
                <AnimatePresence mode="wait">
                  {done ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="py-12 text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 180 }}
                        className="mx-auto w-16 h-16 rounded-full bg-[var(--sky-bright)]/15 flex items-center justify-center"
                      >
                        <Check className="w-7 h-7 text-[var(--sky-deep)]" strokeWidth={3} />
                      </motion.div>
                      <h3 className="mt-7 font-display text-[32px] leading-[1.15] text-[var(--ink)]">
                        Message received.
                      </h3>
                      <p className="mt-4 text-[16px] text-[var(--ink-2)] leading-[1.6] max-w-[420px] mx-auto">
                        A senior engineer will reach out within 24 hours. In the meantime, feel
                        free to forward any docs to{" "}
                        <span className="text-[var(--sky-deep)] font-medium">
                          info@centricasoft.com
                        </span>
                        .
                      </p>
                      <button
                        onClick={() => {
                          setDone(false);
                          setForm({
                            name: "",
                            email: "",
                            company: "",
                            interest: "",
                            message: "",
                          });
                        }}
                        className="mt-8 text-[14px] font-medium text-[var(--sky-deep)] hover:gap-3 inline-flex items-center gap-2 transition-all"
                      >
                        Send another message <ArrowRight className="w-4 h-4" />
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, y: -20 }}
                      onSubmit={handleSubmit}
                      noValidate
                      className="space-y-5"
                    >
                      <div className="grid md:grid-cols-2 gap-5">
                        <FloatingField
                          id="name"
                          label="Your name"
                          value={form.name}
                          onChange={update("name")}
                          error={errors.name}
                        />
                        <FloatingField
                          id="email"
                          label="Work email"
                          type="email"
                          value={form.email}
                          onChange={update("email")}
                          error={errors.email}
                        />
                      </div>
                      <FloatingField
                        id="company"
                        label="Company (optional)"
                        value={form.company}
                        onChange={update("company")}
                        error={errors.company}
                      />

                      <div>
                        <div className="text-[11px] tracking-wider uppercase text-[var(--ink-3)] font-medium mb-3 px-1">
                          What can we help with?
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {INTERESTS.map((i) => (
                            <button
                              key={i}
                              type="button"
                              onClick={() => update("interest")(i)}
                              className={`px-3.5 py-2 rounded-full text-[13px] font-medium border transition-all ${
                                form.interest === i
                                  ? "bg-[var(--navy)] text-white border-[var(--navy)]"
                                  : "bg-white text-[var(--ink-2)] border-[var(--border)] hover:border-[var(--sky-deep)]"
                              }`}
                            >
                              {i}
                            </button>
                          ))}
                        </div>
                        {errors.interest && (
                          <p className="mt-2 text-[12px] text-red-500 px-1">{errors.interest}</p>
                        )}
                      </div>

                      <FloatingField
                        id="message"
                        label="Tell us about your project"
                        value={form.message}
                        onChange={update("message")}
                        error={errors.message}
                        textarea
                      />

                      <button
                        type="submit"
                        disabled={submitting}
                        className="group relative w-full md:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[var(--navy)] text-white text-[14px] font-medium hover:bg-[var(--navy-deep)] disabled:opacity-60 transition-all"
                      >
                        {submitting ? "Sending…" : "Send message"}
                        {!submitting && (
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        )}
                      </button>

                      <p className="text-[12px] text-[var(--ink-3)] leading-[1.6] pt-2">
                        By submitting, you agree to be contacted about your inquiry. We never share
                        your details with third parties.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

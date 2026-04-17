import { Link } from "@tanstack/react-router";
import { Linkedin, Twitter, Github } from "lucide-react";
import { SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-[var(--navy-deep)] text-white">
      <div className="container-x py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2.5">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <defs>
                  <linearGradient id="fhex" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#A8CFE6" />
                    <stop offset="1" stopColor="#1EBFFF" />
                  </linearGradient>
                </defs>
                <path d="M16 2L28.124 9V23L16 30L3.876 23V9L16 2Z" fill="url(#fhex)" />
                <path d="M16 9L22 12.5V19.5L16 23L10 19.5V12.5L16 9Z" fill="#001234" />
              </svg>
              <span className="font-display text-[18px] font-semibold">CentricaSoft</span>
            </div>
            <p className="mt-4 text-[14px] text-white/50 leading-[1.7] max-w-[280px]">
              AI and data engineers obsessed with making intelligence work in the real world.
            </p>
            <div className="mt-6 flex gap-3">
              {[Linkedin, Twitter, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="w-10 h-10 rounded-full border border-white/15 inline-flex items-center justify-center hover:bg-gradient-brand-h hover:border-transparent transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="label-mono text-white/50 mb-5">Useful Links</div>
            <ul className="space-y-3 text-[14px]">
              {[
                { label: "What We Do", to: "/what-we-do/agentic-ai" },
                { label: "Nubo Platform", to: "/products/nubo" },
                { label: "About", to: "/company/about" },
                { label: "Insights", to: "/insights" },
                { label: "Careers", to: "/careers" },
                { label: "Contact", to: "/contact" },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-white/70 hover:text-[var(--sky)] hover:translate-x-1 inline-block transition-all"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="label-mono text-white/50 mb-5">Global Presence</div>
            <ul className="space-y-3 text-[14px] text-white/70">
              <li>🇺🇸 United States</li>
              <li>🇮🇳 India</li>
              <li className="pt-3">
                <a href={`mailto:${SITE.email}`} className="hover:text-[var(--sky)] transition-colors">
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[12px] text-white/35">
          <div>© 2025 CentricaSoft LLC. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/60">Privacy Policy</a>
            <a href="#" className="hover:text-white/60">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

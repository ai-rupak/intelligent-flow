import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "../ui/Logo";
import { MagneticButton } from "../ui/MagneticButton";
import { MegaNav } from "./MegaNav";
import { NAV_ITEMS } from "@/lib/constants";

type Panel = "what-we-do" | "products" | "company";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<Panel | null>(null);
  const [mobile, setMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobile(false);
    setActive(null);
  }, [location.pathname]);

  let closeTimer: ReturnType<typeof setTimeout> | null = null;
  const open = (p: Panel) => {
    if (closeTimer) clearTimeout(closeTimer);
    setActive(p);
  };
  const scheduleClose = () => {
    if (closeTimer) clearTimeout(closeTimer);
    closeTimer = setTimeout(() => setActive(null), 100);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-[400ms] ${
        scrolled || active
          ? "bg-[rgba(247,250,253,0.92)] backdrop-blur-2xl border-b border-[rgba(200,223,240,0.5)]"
          : "bg-transparent border-b border-transparent"
      }`}
      onMouseLeave={scheduleClose}
    >
      <div className="container-x flex items-center justify-between h-[72px]">
        <Logo />

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) =>
            item.mega ? (
              <button
                key={item.label}
                onMouseEnter={() => open(item.mega as Panel)}
                onFocus={() => open(item.mega as Panel)}
                className={`px-4 h-[72px] text-[14px] font-medium transition-colors ${
                  active === item.mega
                    ? "text-[var(--navy)]"
                    : "text-[var(--ink-2)] hover:text-[var(--navy)]"
                }`}
              >
                {item.label}
              </button>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                onMouseEnter={scheduleClose}
                className="px-4 h-[72px] text-[14px] font-medium text-[var(--ink-2)] hover:text-[var(--navy)] transition-colors flex items-center"
                activeProps={{ className: "px-4 h-[72px] text-[14px] font-medium text-[var(--navy)] flex items-center" }}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          <Link
            to="/contact"
            className="text-[14px] text-[var(--ink-2)] hover:text-[var(--navy)] transition-colors"
          >
            Contact
          </Link>
          <MagneticButton
            to="/contact"
            className="!h-10 !px-6 !text-[13px]"
          >
            Request Consultation
          </MagneticButton>
        </div>

        <button
          onClick={() => setMobile(true)}
          aria-label="Open menu"
          className="lg:hidden w-10 h-10 inline-flex items-center justify-center rounded-full border border-[var(--border)]"
        >
          <Menu className="w-5 h-5 text-[var(--navy)]" />
        </button>

        <MegaNav active={active} onClose={scheduleClose} />
      </div>

      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1100] bg-[var(--navy)] lg:hidden"
          >
            <div className="container-x h-[72px] flex items-center justify-between">
              <Logo light />
              <button
                onClick={() => setMobile(false)}
                aria-label="Close menu"
                className="w-10 h-10 inline-flex items-center justify-center rounded-full border border-white/20 text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="container-x pt-12 flex flex-col gap-1">
              {[...NAV_ITEMS, { label: "Contact", href: "/contact" }].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    to={item.href}
                    className="block py-4 font-display text-[40px] text-white border-b border-white/10"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-10">
                <MagneticButton to="/contact" variant="white">
                  Request Consultation
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

import { Link } from "@tanstack/react-router";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="group inline-flex items-center gap-2.5">
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        className="transition-transform duration-[600ms] ease-out group-hover:rotate-[15deg]"
      >
        <defs>
          <linearGradient id="hexg" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="#002057" />
            <stop offset="1" stopColor="#1EBFFF" />
          </linearGradient>
        </defs>
        <path
          d="M16 2L28.124 9V23L16 30L3.876 23V9L16 2Z"
          fill="url(#hexg)"
        />
        <path
          d="M16 9L22 12.5V19.5L16 23L10 19.5V12.5L16 9Z"
          fill={light ? "#001234" : "#F7FAFD"}
        />
      </svg>
      <span
        className={`font-display text-[18px] font-semibold tracking-tight ${
          light ? "text-white" : "text-[var(--navy)]"
        }`}
      >
        CentricaSoft
      </span>
    </Link>
  );
}

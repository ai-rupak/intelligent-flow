"use client";

import Image from "next/image";
import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="group inline-flex items-center gap-2.5">
      <Image
        width={32}
        height={32}
        src="/assest/logo.webp"
        alt="CentricaSoft logo"
        priority
        className="h-8 w-8 rounded-[4px] object-contain transition-transform duration-[600ms] ease-out group-hover:rotate-[8deg]"
      />
      <span className="font-sans text-[18px] font-bold leading-none tracking-[0]">
        <span className={light ? "text-white" : "text-[#2F62C9]"}>Centrica</span>
        <span className={light ? "text-[#1EBFFF]" : "text-[#00AEEF]"}>Soft</span>
      </span>
      {/* <span
        className={`font-display text-[18px] font-semibold tracking-tight ${
          light ? "text-white" : "text-[var(--navy)]"
        }`}
      >
        CentricaSoft
      </span> */}
    </Link>
  );
}

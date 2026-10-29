"use client";

import { motion } from "motion/react";

/**
 * Belgrade Arbor-style floating pill navigation
 * Fixed at top center. Dark navy semi-transparent pill with beige text.
 * MENU | Logo | INQUIRE three-column split with vertical dividers.
 */
export function PillNav() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 3.2, ease: [0.4, 0, 0.2, 1] }}
      className="fixed top-7 left-1/2 -translate-x-1/2 z-50"
    >
      <div
        className="flex items-center h-14 rounded-full backdrop-blur-md px-2"
        style={{
          background: "rgba(47,66,89,0.9)",
          color: "var(--color-accent)",
        }}
      >
        {/* MENU */}
        <button className="group flex items-center gap-2 h-full px-7 cursor-pointer">
          <span className="flex flex-col gap-[5px]">
            <span className="block h-px w-4 bg-current transition-all group-hover:w-5" />
            <span className="block h-px w-4 bg-current transition-all" />
          </span>
          <span className="text-[11px] font-medium tracking-[0.15em]">MENU</span>
        </button>

        {/* Divider */}
        <div className="w-px h-6" style={{ background: "rgba(204,191,153,0.3)" }} />

        {/* Logo */}
        <div className="flex items-center justify-center h-full px-6">
          <svg width="28" height="28" viewBox="0 0 56 56" fill="none">
            <path
              d="M12 48 L12 28 Q12 16 20 16 Q28 16 28 28 L28 48"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              d="M28 48 L28 28 Q28 16 36 16 Q44 16 44 28 L44 48"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <circle cx="28" cy="12" r="4" fill="currentColor" />
          </svg>
        </div>

        {/* Divider */}
        <div className="w-px h-6" style={{ background: "rgba(204,191,153,0.3)" }} />

        {/* INQUIRE */}
        <button className="group flex items-center gap-2 h-full px-7 cursor-pointer">
          <span className="text-[11px] font-medium tracking-[0.15em]">INQUIRE</span>
          <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
        </button>
      </div>
    </motion.nav>
  );
}

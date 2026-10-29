"use client";

import { motion } from "motion/react";

/**
 * "Site of the Day" style vertical badge (right edge)
 * Lime neon background with navy text
 */
export function SiteBadge() {
  return (
    <motion.div
      initial={{ x: 60, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 3.6, ease: [0.4, 0, 0.2, 1] }}
      className="fixed right-0 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-2 py-6 px-3 cursor-pointer group"
      style={{ background: "var(--color-highlight)" }}
    >
      <span className="font-serif font-bold text-navy text-sm" style={{ color: "var(--color-foreground)" }}>
        W.
      </span>
      <span
        className="text-[10px] font-medium tracking-[0.2em]"
        style={{ color: "var(--color-foreground)", writingMode: "vertical-rl" }}
      >
        Site of the Day
      </span>
    </motion.div>
  );
}

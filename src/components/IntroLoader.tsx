"use client";

import { motion, useAnimate } from "motion/react";
import { useEffect, useState } from "react";

/**
 * Belgrade Arbor-style intro loader
 * Logo + horizontal progress bar + 0→100% counter
 * Fades out when complete
 */
export function IntroLoader({ onDone }: { onDone?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const start = performance.now();
    const duration = 2800; // slightly slower than Belgrade for drama
    let raf: number;

    const tick = (now: number) => {
      const elapsed = now - start;
      const p = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(p);
      if (p < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setVisible(false);
          onDone?.();
        }, 400);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: progress === 100 ? 0 : 1 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className="fixed inset-0 z-[100] bg-ivory flex flex-col items-center justify-center"
      style={{ background: "var(--color-ivory)" }}
    >
      {/* Logo (3-arch symbol) */}
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        className="mb-12 text-accent"
        style={{ color: "var(--color-accent)" }}
      >
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

      {/* Progress bar */}
      <div
        className="relative"
        style={{ width: "244px", height: "1px", background: "rgba(92,113,135,0.2)" }}
      >
        <motion.div
          className="absolute inset-y-0 left-0"
          style={{ background: "var(--color-accent)" }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "linear" }}
        />
      </div>

      {/* Percentage */}
      <div
        className="mt-6 font-sans tabular-nums"
        style={{ color: "var(--color-accent)", fontSize: "1rem", letterSpacing: "0.1em" }}
      >
        {progress}%
      </div>
    </motion.div>
  );
}

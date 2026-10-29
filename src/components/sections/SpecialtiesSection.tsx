"use client";

import { motion, useScroll } from "motion/react";
import { useRef } from "react";

const CENTERS = [
  { en: "Cataract · Presbyopia", kr: "백내장 · 노안" },
  { en: "Glaucoma", kr: "녹내장" },
  { en: "Retina", kr: "망막" },
  { en: "Vision Correction", kr: "시력 교정" },
  { en: "Pediatric", kr: "소아 안과" },
  { en: "General", kr: "일반 진료" },
];

export function SpecialtiesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-32 px-[100px]"
      style={{ background: "var(--color-surface-alt)" }}
    >
      {/* Label */}
      <div className="flex items-baseline gap-3 mb-20">
        <span
          className="font-serif text-base font-semibold"
          style={{ color: "var(--color-foreground)" }}
        >
          — 05
        </span>
        <span className="font-sans text-sm font-medium tracking-[0.3em] text-text-muted">
          SPECIALTIES
        </span>
      </div>

      {/* Title */}
      <div className="mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1 }}
          className="font-serif text-[clamp(3rem,6vw,6rem)] leading-[1] font-light"
          style={{ color: "var(--color-foreground)" }}
        >
          Six centers,
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-[clamp(3rem,6vw,6rem)] leading-[1] font-light italic"
          style={{ color: "var(--color-foreground)" }}
        >
          one promise.
        </motion.h2>
      </div>

      {/* List */}
      <div className="border-t" style={{ borderColor: "var(--color-foreground)" }}>
        {CENTERS.map((c, i) => (
          <motion.a
            key={i}
            href={`#center-${i}`}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group flex items-baseline justify-between py-6 border-b transition-all cursor-pointer hover:px-6"
            style={{ borderColor: "var(--color-border)" }}
          >
            <div className="flex items-baseline gap-12">
              <span
                className="font-serif font-light text-xl w-10"
                style={{ color: "var(--color-foreground)" }}
              >
                0{i + 1}
              </span>
              <span
                className="font-serif font-light text-[clamp(1.75rem,3.5vw,2.5rem)] group-hover:italic transition-all"
                style={{ color: "var(--color-foreground)" }}
              >
                {c.en}
              </span>
              <span className="font-serif-kr text-lg text-text-muted font-light">{c.kr}</span>
            </div>
            <span
              className="font-serif text-2xl group-hover:translate-x-3 transition-transform"
              style={{ color: "var(--color-foreground)" }}
            >
              ↗
            </span>
          </motion.a>
        ))}
      </div>

      {/* Progress */}
      <div className="mt-20 flex items-center gap-6">
        <div className="relative h-px w-[300px]" style={{ background: "var(--color-border)" }}>
          <motion.div
            className="absolute inset-y-0 left-0"
            style={{ background: "var(--color-highlight)", scaleX: scrollYProgress, transformOrigin: "left" }}
          />
        </div>
        <span className="font-sans text-xs tracking-[0.2em]" style={{ color: "var(--color-foreground)" }}>
          05
        </span>
      </div>
    </section>
  );
}

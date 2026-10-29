"use client";

import Image from "next/image";
import { motion, useScroll } from "motion/react";
import { useRef } from "react";

/**
 * 04 STORIES — Dark navy, left large serif text + right asymmetric portrait blob
 */
export function StoriesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-32 px-[100px]"
      style={{ background: "var(--color-surface-dark)", color: "var(--color-on-dark)" }}
    >
      {/* Label */}
      <div className="flex items-baseline gap-3 mb-20">
        <span
          className="font-sans text-sm font-medium tracking-[0.25em]"
          style={{ color: "var(--color-highlight)" }}
        >
          STORIES
        </span>
        <span className="font-sans text-sm font-medium tracking-[0.25em] opacity-70" style={{ color: "var(--color-accent)" }}>
          — A life, not just a vision
        </span>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Left: Large text */}
        <div className="col-span-7">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1 }}
            className="font-serif-kr text-[clamp(3rem,6vw,6rem)] leading-[1.1] font-light"
          >
            20년을 흐리게,
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif-kr text-[clamp(3rem,6vw,6rem)] leading-[1.1] font-light"
          >
            하루 만에 선명하게.
          </motion.h2>

          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-16 font-serif italic text-[clamp(1.5rem,2.5vw,2.5rem)] leading-[1.3]"
            style={{ color: "var(--color-accent)" }}
          >
            &ldquo;수술 다음 날, 손녀 얼굴을<br />
            처음 또렷하게 본 날이에요.&rdquo;
          </motion.blockquote>

          <div className="mt-12 space-y-1">
            <div className="font-sans text-sm font-medium tracking-[0.2em]" style={{ color: "var(--color-accent)" }}>
              — Mrs. Kim, 75
            </div>
            <div className="font-sans-kr text-sm opacity-80">
              백내장 수술 환자 · 2024
            </div>
          </div>

          <motion.a
            href="#stories"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="inline-flex items-center gap-3 mt-16 px-8 py-4 rounded-full border transition-all hover:scale-105"
            style={{ borderColor: "var(--color-accent)", color: "var(--color-accent)" }}
          >
            <span className="font-sans text-xs font-semibold tracking-[0.2em]">
              READ ALL STORIES
            </span>
            <span>↗</span>
          </motion.a>
        </div>

        {/* Right: Elder portrait with asymmetric border */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1.3, ease: [0.4, 0, 0.2, 1] }}
          className="col-span-5 relative h-[720px] overflow-hidden"
          style={{ borderRadius: "240px 80px 80px 240px" }}
        >
          <Image
            src="/images/elder-portrait.png"
            alt="Elderly patient portrait after cataract surgery"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
          />
        </motion.div>
      </div>

      {/* Progress */}
      <div className="mt-24 flex items-center gap-6">
        <div className="relative h-px w-[300px]" style={{ background: "rgba(204,191,153,0.3)" }}>
          <motion.div
            className="absolute inset-y-0 left-0"
            style={{ background: "var(--color-highlight)", scaleX: scrollYProgress, transformOrigin: "left" }}
          />
        </div>
        <span className="font-sans text-xs tracking-[0.2em]" style={{ color: "var(--color-accent)" }}>
          04
        </span>
      </div>
    </section>
  );
}

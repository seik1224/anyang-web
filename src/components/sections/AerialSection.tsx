"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

/**
 * 03 AERIAL — Belgrade's "View from above" clip-path reveal
 * Vertical line expands to full-width revealing aerial surgery image
 */
export function AerialSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Clip-path: starts as a thin vertical line at center, expands to full width
  const clipWidth = useTransform(scrollYProgress, [0.1, 0.5], [0, 100]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-32 px-[100px] min-h-screen"
      style={{ background: "var(--color-surface-alt)" }}
    >
      {/* Oversized faded title */}
      <h2
        className="absolute top-32 left-1/2 -translate-x-1/2 font-serif text-[clamp(5rem,15vw,15rem)] leading-none font-light opacity-10 whitespace-nowrap"
        style={{ color: "var(--color-foreground)" }}
      >
        FROM ABOVE
      </h2>

      {/* Aerial image with clip-path reveal */}
      <motion.div
        className="relative mx-auto mt-80 w-full max-w-[1440px] h-[640px] overflow-hidden rounded-md"
        style={{
          clipPath: useTransform(
            clipWidth,
            (v) => `inset(0% ${50 - v / 2}% 0% ${50 - v / 2}%)`,
          ),
        }}
      >
        <Image
          src="/images/aerial-surgery.png"
          alt="Overhead aerial view of eye surgery operating room"
          fill
          sizes="(max-width: 1440px) 100vw, 1440px"
          className="object-cover"
        />
      </motion.div>

      <div className="mt-10 flex items-baseline gap-6">
        <span
          className="font-sans text-sm font-medium tracking-[0.3em]"
          style={{ color: "var(--color-foreground)" }}
        >
          — A VIEW FROM ABOVE
        </span>
        <span className="font-serif-kr text-base italic text-text-muted">
          수술실의 모든 순간을 섬세하게. 환자 중심의 공간 설계.
        </span>
      </div>

      {/* Progress */}
      <div className="mt-24 flex items-center gap-6">
        <div className="relative h-px w-[300px]" style={{ background: "var(--color-border)" }}>
          <motion.div
            className="absolute inset-y-0 left-0"
            style={{ background: "var(--color-highlight)", scaleX: scrollYProgress, transformOrigin: "left" }}
          />
        </div>
        <span className="font-sans text-xs tracking-[0.2em]" style={{ color: "var(--color-foreground)" }}>
          03
        </span>
      </div>
    </section>
  );
}

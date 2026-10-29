"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

export function BeyondKoreaSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-32 px-[100px]"
      style={{ background: "var(--color-surface)" }}
    >
      {/* Top label */}
      <div className="flex items-baseline gap-3 mb-20">
        <span
          className="font-serif text-base font-semibold"
          style={{ color: "var(--color-foreground)" }}
        >
          — 02
        </span>
        <span className="font-sans text-sm font-medium tracking-[0.3em] text-text-muted">
          BEYOND KOREA · GLOBAL MISSION
        </span>
      </div>

      {/* Main title */}
      <div className="mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          className="font-serif text-[clamp(4rem,10vw,10rem)] leading-[1] font-light"
        >
          Beyond
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="font-serif text-[clamp(4rem,10vw,10rem)] leading-[1] font-light italic"
        >
          Korea.
        </motion.h2>
      </div>

      {/* Africa image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
        className="relative w-full h-[560px] mb-20 overflow-hidden rounded-md"
      >
        <Image
          src="/images/africa.png"
          alt="Vision Care medical mission in Africa"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-8 border-t pt-8" style={{ borderColor: "var(--color-border)" }}>
        {[
          { n: 39, u: "Countries" },
          { n: 200, u: "Medical Camps", suffix: "+" },
          { n: 50000, u: "Patients Treated", suffix: "+", display: "50K" },
        ].map((stat, i) => (
          <StatCounter key={i} target={stat.n} unit={stat.u} suffix={stat.suffix} displayOverride={stat.display} />
        ))}
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
          02
        </span>
      </div>
    </section>
  );
}

/** Counter animation on scroll into view */
function StatCounter({
  target,
  unit,
  suffix = "",
  displayOverride,
}: {
  target: number;
  unit: string;
  suffix?: string;
  displayOverride?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target]);

  return (
    <div ref={ref} className="flex flex-col">
      <span className="font-serif text-6xl font-light leading-none tabular-nums">
        {displayOverride ? displayOverride : count.toLocaleString()}
        {suffix}
      </span>
      <span className="mt-3 font-sans text-sm tracking-[0.2em] text-text-muted uppercase">
        {unit}
      </span>
    </div>
  );
}

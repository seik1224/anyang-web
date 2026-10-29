"use client";

import { motion, useScroll } from "motion/react";
import { useRef } from "react";

export function VisitSection() {
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
          VISIT
        </span>
        <span
          className="font-sans text-sm font-medium tracking-[0.25em] opacity-70"
          style={{ color: "var(--color-accent)" }}
        >
          — 06 / Book your visit
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
        >
          Book your
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-[clamp(3rem,6vw,6rem)] leading-[1] font-light italic"
          style={{ color: "var(--color-highlight)" }}
        >
          warm visit.
        </motion.h2>
      </div>

      <div className="grid grid-cols-12 gap-16">
        {/* Form */}
        <div className="col-span-7 grid grid-cols-2 gap-10">
          {[
            { label: "FIRST NAME *", type: "text" },
            { label: "LAST NAME *", type: "text" },
            { label: "PHONE *", type: "tel" },
            { label: "MESSAGE", type: "text" },
          ].map((f, i) => (
            <div key={i} className={f.label === "MESSAGE" ? "col-span-2" : ""}>
              <label className="block font-sans text-xs tracking-[0.2em] mb-2" style={{ color: "var(--color-accent)" }}>
                {f.label}
              </label>
              <input
                type={f.type}
                className="w-full bg-transparent border-b outline-none pb-3 font-serif text-xl font-light focus:border-highlight transition-colors"
                style={{ borderColor: "var(--color-accent-sub)", color: "var(--color-on-dark)" }}
              />
            </div>
          ))}

          <div className="col-span-2 flex items-center gap-3 mt-4">
            <input type="checkbox" className="w-4 h-4" />
            <span className="font-sans-kr text-sm opacity-80">개인정보 수집 및 이용에 동의합니다.</span>
          </div>

          <button
            className="col-span-2 group flex items-center gap-3 mt-4 w-fit text-left transition-all hover:gap-5"
            style={{ color: "var(--color-highlight)" }}
          >
            <span className="font-sans text-base font-semibold tracking-[0.2em]">LET&apos;S BEGIN</span>
            <span>→</span>
          </button>
        </div>

        {/* Map placeholder + info */}
        <div className="col-span-5">
          <div
            className="w-full h-[280px] rounded-md mb-10 flex items-center justify-center"
            style={{ background: "var(--color-accent-sub)" }}
          >
            <span className="font-sans text-sm font-medium tracking-[0.2em]" style={{ color: "var(--color-on-dark)" }}>
              [ NAVER MAP ]
            </span>
          </div>
          <div className="font-sans text-xs tracking-[0.25em] mb-3" style={{ color: "var(--color-highlight)" }}>
            — LOCATION
          </div>
          <div className="font-serif-kr text-lg font-light leading-relaxed">
            경기도 안양시 ○○동 ○○로 00<br />
            안양안과 2F
          </div>
          <div className="font-sans-kr text-sm text-text-muted mt-3 opacity-80">
            지하철 ○○역 1번 출구 · 도보 5분
          </div>
        </div>
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
          06
        </span>
      </div>
    </section>
  );
}

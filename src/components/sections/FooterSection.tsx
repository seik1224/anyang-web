"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

/**
 * FOOTER — Belgrade Arbor style
 * Gradient sky background + transparent isolated building photo on right
 * Left: subscribe form + menu
 */
export function FooterSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });

  // Parallax building (slower)
  const buildingY = useTransform(scrollYProgress, [0, 1], ["20%", "0%"]);

  return (
    <footer
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, #C0D1E0 0%, #E6DEC8 50%, #FDFBEF 100%)",
      }}
    >
      {/* Transparent building image on the right (large) */}
      <motion.div
        style={{ y: buildingY }}
        className="absolute right-0 bottom-0 w-[70%] h-[720px] pointer-events-none"
      >
        <Image
          src="/images/building-transparent.png"
          alt="Anyang Eye Clinic Building"
          fill
          sizes="70vw"
          className="object-contain object-bottom"
        />
      </motion.div>

      {/* Oversized ANYANG EYE overlay */}
      <h2
        className="absolute left-[8%] bottom-[22%] font-serif text-[clamp(5rem,12vw,12rem)] font-light leading-[0.9] pointer-events-none z-[2]"
        style={{ color: "var(--color-ivory)", opacity: 0.85, mixBlendMode: "overlay" }}
      >
        ANYANG EYE
      </h2>

      <div className="relative z-10 grid grid-cols-12 gap-8 px-[100px] py-24 min-h-[720px]">
        {/* Top row: menu left, phone right */}
        <div className="col-span-12 flex justify-between items-start">
          <nav className="flex flex-col gap-2">
            {["ABOUT", "PHILOSOPHY", "SPECIALTIES", "VISION CARE", "CONTACT"].map((m) => (
              <a
                key={m}
                href={`#${m.toLowerCase()}`}
                className="font-sans text-sm tracking-[0.2em] hover:opacity-70 transition-opacity"
                style={{ color: "var(--color-foreground)" }}
              >
                {m}
              </a>
            ))}
          </nav>
          <div className="font-sans text-sm tracking-[0.1em]" style={{ color: "var(--color-foreground)" }}>
            +82 31 000 0000
          </div>
        </div>

        {/* Newsletter form */}
        <div className="col-span-5 mt-16">
          <p
            className="font-serif italic text-xl font-light mb-6"
            style={{ color: "var(--color-foreground)" }}
          >
            Subscribe to join our community
          </p>
          <div className="space-y-6">
            {[
              { l: "FIRST NAME *", t: "text" },
              { l: "LAST NAME *", t: "text" },
              { l: "EMAIL *", t: "email" },
            ].map((f, i) => (
              <div key={i}>
                <label
                  className="block font-sans text-[11px] tracking-[0.2em] mb-2"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {f.l}
                </label>
                <input
                  type={f.t}
                  className="w-full bg-transparent border-b outline-none pb-2 font-serif text-lg font-light focus:border-foreground transition-colors"
                  style={{ borderColor: "var(--color-foreground)", color: "var(--color-foreground)" }}
                />
              </div>
            ))}
          </div>
          <div className="flex items-center gap-3 mt-6">
            <input type="checkbox" className="w-4 h-4" />
            <span className="font-sans-kr text-sm" style={{ color: "var(--color-text-muted)" }}>
              개인정보 처리방침에 동의합니다.
            </span>
          </div>
          <button
            className="group flex items-center gap-3 mt-6 hover:gap-5 transition-all"
            style={{ color: "var(--color-foreground)" }}
          >
            <span className="font-sans text-base font-semibold tracking-[0.15em]">
              LET&apos;S BEGIN
            </span>
            <span>→</span>
          </button>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="relative z-10 px-[100px] pb-8 flex justify-between items-center">
        <span className="font-sans text-xs" style={{ color: "var(--color-text-muted)" }}>
          © 2026. All Rights Reserved.
        </span>
        <span
          className="font-sans text-xs tracking-[0.2em]"
          style={{ color: "var(--color-text-muted)" }}
        >
          Privacy policy
        </span>
      </div>
    </footer>
  );
}

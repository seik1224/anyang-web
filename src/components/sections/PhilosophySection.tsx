"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

/**
 * 01 PHILOSOPHY — Dark navy section with letter-by-letter blur-to-focus text
 * Left: neon lime label "ANYANG" + large serif text with scroll-triggered blur reveal
 * Right: asymmetric organic blob-cropped images (lounge + exam room overlapping)
 */
export function PhilosophySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Image parallax (slower than scroll)
  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-32 px-[100px] overflow-hidden"
      style={{ background: "var(--color-surface-dark)", color: "var(--color-on-dark)" }}
    >
      {/* Lime neon label */}
      <div className="flex items-baseline gap-3 mb-24">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="font-sans text-sm font-medium tracking-[0.25em]"
          style={{ color: "var(--color-highlight)" }}
        >
          ANYANG
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-sans text-sm font-medium tracking-[0.25em]"
          style={{ color: "var(--color-accent)" }}
        >
          — OUR PHILOSOPHY
        </motion.span>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Left: Large serif text with letter-stagger blur-to-focus */}
        <div className="col-span-7">
          <BlurRevealText
            lines={[
              { text: "The vision of" },
              { text: "Anyang Eye Clinic" },
              { text: "is defined by a warm", italic: true },
              { text: "touch and a deep care" },
              { text: "for every soul.", italic: true },
            ]}
          />

          {/* Explore pill button */}
          <motion.a
            href="#philosophy-detail"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="inline-flex items-center gap-3 mt-16 px-8 py-4 rounded-full border transition-all hover:scale-105"
            style={{
              borderColor: "var(--color-accent)",
              color: "var(--color-accent)",
            }}
          >
            <span className="font-sans text-xs font-semibold tracking-[0.2em]">EXPLORE</span>
            <span>↗</span>
          </motion.a>
        </div>

        {/* Right: Asymmetric blob-cropped images */}
        <motion.div
          style={{ y: imageY }}
          className="col-span-5 relative h-[600px]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="absolute top-0 right-24 w-[320px] h-[420px] overflow-hidden"
            style={{
              borderRadius: "180px 60px 80px 220px",
            }}
          >
            <Image
              src="/images/lounge.png"
              alt="Modern eye clinic waiting lounge"
              fill
              sizes="320px"
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="absolute bottom-0 right-0 w-[360px] h-[340px] overflow-hidden"
            style={{
              borderRadius: "60px 200px 220px 80px",
            }}
          >
            <Image
              src="/images/exam-room.png"
              alt="Modern eye examination room"
              fill
              sizes="360px"
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Progress bar + section number */}
      <div className="mt-24 flex items-center gap-6">
        <div className="relative h-px w-[300px]" style={{ background: "rgba(204,191,153,0.3)" }}>
          <motion.div
            className="absolute inset-y-0 left-0"
            style={{ background: "var(--color-highlight)", scaleX: scrollYProgress, transformOrigin: "left" }}
          />
        </div>
        <span className="font-sans text-xs tracking-[0.2em]" style={{ color: "var(--color-accent)" }}>
          01
        </span>
      </div>
    </section>
  );
}

/** Scroll-triggered blur-to-focus reveal, letter by letter */
function BlurRevealText({
  lines,
}: {
  lines: Array<{ text: string; italic?: boolean }>;
}) {
  return (
    <div className="space-y-0">
      {lines.map((line, lineIdx) => (
        <div
          key={lineIdx}
          className="font-serif text-[clamp(3rem,6vw,6rem)] leading-[1.05]"
          style={{ fontStyle: line.italic ? "italic" : "normal", fontWeight: 300 }}
        >
          {line.text.split(" ").map((word, wordIdx) => (
            <span key={wordIdx} className="inline-block mr-[0.25em]">
              {word.split("").map((char, charIdx) => (
                <motion.span
                  key={charIdx}
                  initial={{ opacity: 0.2, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-15%" }}
                  transition={{
                    duration: 0.5,
                    delay: (lineIdx * 0.15) + (wordIdx * 0.04) + (charIdx * 0.015),
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

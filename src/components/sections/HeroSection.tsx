"use client";

import Image from "next/image";
import { motion } from "motion/react";

/**
 * HERO — Full-bleed cinematic image (no text overlay, Belgrade-style)
 * Image: anyang-eye-clinic lobby interior with iris ceiling installation
 * Subtle Ken Burns zoom on load, fade-in after loader
 */
export function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Hero background image with Ken Burns effect */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          scale: { duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" },
          opacity: { duration: 1.4, delay: 3.0, ease: [0.4, 0, 0.2, 1] },
        }}
        className="absolute inset-0"
      >
        <Image
          src="/images/hero-lobby.png"
          alt="Anyang Eye Clinic Lobby — grand iris ceiling installation at dusk"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Subtle dark gradient at top (for pill nav legibility) */}
      <div
        className="absolute inset-x-0 top-0 h-40 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(16,16,16,0.3) 0%, transparent 100%)",
        }}
      />
    </section>
  );
}

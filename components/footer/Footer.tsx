"use client";

import { motion } from "framer-motion";

import FooterHeader from "./FooterHeader";
import FooterStats from "./FooterStats";
import FooterGrid from "./FooterGrid";
import FooterCTA from "./FooterCTA";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative overflow-hidden border-t border-white/10 bg-[#030712]"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[160px]" />

        <div className="absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-sky-500/5 blur-[120px]" />

      </div>

      {/* Grid Pattern */}

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
        }}
        className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:px-8 lg:px-10"
      >
        <FooterHeader />

        <FooterStats />

        <FooterGrid />

        <FooterCTA />

        <FooterBottom />
      </motion.div>
    </footer>
  );
}
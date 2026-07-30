"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

import { footerData } from "./footer-data";

export default function FooterCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: 0.15,
      }}
      className="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row"
    >
      {/* Download Resume */}

      <Link
        href={footerData.cta.primary.href}
        target="_blank"
        className="group relative overflow-hidden rounded-2xl"
      >
        {/* Glow */}

        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 opacity-90 transition-all duration-300 group-hover:scale-105" />

        <div className="relative flex items-center gap-3 rounded-2xl px-8 py-4 font-semibold text-white backdrop-blur-xl">
          <Download
            size={20}
            className="transition-transform duration-300 group-hover:-translate-y-1"
          />

          <span>{footerData.cta.primary.label}</span>
        </div>
      </Link>

      {/* Let's Connect */}

      <Link
        href={footerData.cta.secondary.href}
        className="group rounded-2xl border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/10"
      >
        <div className="flex items-center gap-3 text-slate-300 transition-colors duration-300 group-hover:text-white">
          <span>{footerData.cta.secondary.label}</span>

          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </div>
      </Link>
    </motion.div>
  );
}
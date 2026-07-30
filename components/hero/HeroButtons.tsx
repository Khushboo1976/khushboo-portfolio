"use client";

import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroButtons() {
  return (
    <div className="flex flex-wrap items-center gap-5">

      {/* Hire Me */}
      <Link href="/contact">
        <motion.div
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="group relative overflow-hidden rounded-2xl"
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-600 opacity-90" />

          <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
            <div className="absolute -left-20 top-0 h-full w-20 rotate-12 bg-white/30 blur-xl transition-all duration-700 group-hover:left-[120%]" />
          </div>

          <div className="relative flex items-center gap-3 px-8 py-4 font-semibold text-white">
            Hire Me

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </div>
        </motion.div>
      </Link>

      {/* View Projects */}
      <Link href="/projects">
        <motion.div
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10"
        >
          View Projects
        </motion.div>
      </Link>

      {/* Resume */}
      <Link
        href="/resume/Khushboo_Goyal_Resume.pdf"
        target="_blank"
      >
        <motion.div
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-3 rounded-2xl border border-cyan-400/20 px-7 py-4 text-cyan-300 transition hover:border-cyan-400 hover:bg-cyan-500/10"
        >
          <Download size={18} />

          Resume
        </motion.div>
      </Link>
    </div>
  );
}
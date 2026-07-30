"use client";

import { motion } from "framer-motion";
import { personalBelief } from "@/data/philosophy";

export default function PhilosophyFooter() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.7 }}
      className="relative mt-14 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-emerald-500/5" />

      <div className="relative z-10">
        <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
          {personalBelief.title}
        </span>

        <blockquote className="mx-auto mt-6 max-w-4xl text-2xl font-semibold leading-relaxed text-white lg:text-3xl">
          &ldquo;{personalBelief.quote}&rdquo;
        </blockquote>

        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-400" />

          <span className="text-sm uppercase tracking-[0.35em] text-slate-400">
            {personalBelief.author}
          </span>

          <div className="h-px w-12 bg-gradient-to-l from-transparent to-emerald-400" />
        </div>
      </div>
    </motion.div>
  );
}
"use client";

import { motion } from "framer-motion";

interface QuoteCardProps {
  icon: string;
  title: string;
  quote: string;
  author: string;
  description: string;
  glow: "blue" | "green";
}

export default function QuoteCard({
  icon,
  title,
  quote,
  author,
  description,
  glow,
}: QuoteCardProps) {
  const glowClass =
    glow === "blue"
      ? "hover:border-cyan-400/60 hover:shadow-cyan-500/20"
      : "hover:border-emerald-400/60 hover:shadow-emerald-500/20";

  const accent =
    glow === "blue"
      ? "from-cyan-400 to-blue-500"
      : "from-emerald-400 to-green-500";

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      className={`
        relative
        flex
        h-[420px]
        flex-col
        justify-between
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-8
        shadow-2xl
        backdrop-blur-xl
        transition-all
        duration-500
        ${glowClass}
      `}
    >
      {/* Decorative Quote */}
      <div className="pointer-events-none absolute right-6 top-0 select-none text-[120px] font-bold text-white/5">
        ❝
      </div>

      {/* Header */}
      <div>
        <div
          className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${accent} text-2xl shadow-lg`}
        >
          {icon}
        </div>

        <h3 className="mt-6 text-2xl font-bold text-white">
          {title}
        </h3>
      </div>

      {/* Quote */}
      <blockquote className="mt-8 text-3xl font-semibold leading-snug text-white">
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Description */}
      <p className="mt-6 text-base leading-7 text-slate-300">
        {description}
      </p>

      {/* Author */}
      <div className="mt-8 border-t border-white/10 pt-5">
        <span className="text-sm uppercase tracking-[0.3em] text-slate-400">
          — {author}
        </span>
      </div>
    </motion.div>
  );
}
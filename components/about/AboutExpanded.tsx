"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface AboutExpandedProps {
  title: string;
  heading: string;
  paragraphs: string[];
  highlights: string[];
  icon: LucideIcon;
  accent: "blue" | "purple" | "emerald" | "orange";
  onClose: () => void;
}

export default function AboutExpanded({
  title,
  heading,
  paragraphs,
  highlights,
  icon: Icon,
  accent,
  onClose,
}: AboutExpandedProps) {
  const accentStyle = {
    blue: {
      icon: "text-cyan-400",
      badge: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
      glow: "from-cyan-500/10 to-blue-500/5",
    },

    purple: {
      icon: "text-violet-400",
      badge: "bg-violet-500/10 text-violet-300 border-violet-500/20",
      glow: "from-violet-500/10 to-fuchsia-500/5",
    },

    emerald: {
      icon: "text-emerald-400",
      badge: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
      glow: "from-emerald-500/10 to-green-500/5",
    },

    orange: {
      icon: "text-orange-400",
      badge: "bg-orange-500/10 text-orange-300 border-orange-500/20",
      glow: "from-orange-500/10 to-yellow-500/5",
    },
  };

  const style = accentStyle[accent];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35 }}
      className="relative mt-8 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 backdrop-blur-xl"
    >
      {/* Background Glow */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${style.glow}`}
      />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 px-8 py-6">
        <div className="flex items-center gap-4">
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-slate-900/70 ${style.icon}`}
          >
            <Icon size={30} />
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
              {title}
            </p>

            <h2 className="mt-1 text-3xl font-bold text-white">
              {heading}
            </h2>
          </div>
        </div>

        <button
          onClick={onClose}
          className="rounded-xl border border-white/10 bg-slate-900/70 p-3 transition hover:border-slate-700/60"
        >
          <X size={20} />
        </button>
      </div>

      {/* Body */}
      <div className="relative z-10 grid gap-10 p-8 lg:grid-cols-3">
        {/* Story */}
        <div className="space-y-6 lg:col-span-2">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg leading-8 text-slate-300"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Highlights */}
        <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-6">
          <h3 className="mb-5 text-lg font-semibold text-white">
            Key Highlights
          </h3>

          <div className="flex flex-wrap gap-3">
            {highlights.map((item) => (
              <span
                key={item}
                className={`rounded-full border px-4 py-2 text-sm ${style.badge}`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
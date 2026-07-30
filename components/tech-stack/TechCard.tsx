"use client";

import { motion } from "framer-motion";
import type { TechCategory } from "@/types/tech";

interface TechCardProps {
  category: TechCategory;
}

export default function TechCard({ category }: TechCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        duration: 0.35,
        ease: "easeOut",
      }}
      className="group relative h-[470px] overflow-hidden rounded-3xl border border-slate-700/50 bg-[#111827]/70 p-8 backdrop-blur-2xl shadow-xl transition-all duration-500 hover:border-cyan-400/40 hover:shadow-cyan-500/10"
    >
      {/* Gradient Glow */}

      <div
        className={`absolute inset-0 bg-gradient-to-br ${category.accent} opacity-[0.06] transition-opacity duration-500 group-hover:opacity-[0.12]`}
      />

      {/* Top Accent */}

      <div
        className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${category.accent}`}
      />

      {/* Content */}

      <div className="relative z-10 flex h-full flex-col">
        {/* Header */}

        <div>
          <h3 className="text-3xl font-bold tracking-tight text-white">
            {category.title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            {category.subtitle}
          </p>
        </div>

        {/* Divider */}

        <div className="my-7 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent" />

        {/* Technology Chips */}

        <div className="flex flex-wrap gap-3">
          {category.technologies.map((tech) => {
            const Icon = tech.icon;

            return (
              <motion.div
                key={tech.name}
                whileHover={{
                  scale: 1.08,
                  y: -2,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="flex items-center gap-3 rounded-full border border-slate-700/70 bg-slate-800/70 px-4 py-3 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/10"
              >
                <Icon className="text-[22px] text-cyan-300 transition-colors duration-300 group-hover:text-cyan-200" />

                <span className="text-sm font-medium text-slate-100">
                  {tech.name}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Footer */}

        <div className="mt-auto pt-8">
          <div className="inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-medium uppercase tracking-widest text-cyan-300">
            {category.technologies.length} Technologies
          </div>
        </div>
      </div>
    </motion.div>
  );
}
"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface AboutCardProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  accent: "blue" | "purple" | "emerald" | "orange";
  active: boolean;
  onClick: () => void;
}

export default function AboutCard({
  title,
  subtitle,
  icon: Icon,
  accent,
  active,
  onClick,
}: AboutCardProps) {
  const accentStyles = {
    blue: {
      icon: "text-cyan-400",
      glow: "group-hover:shadow-cyan-500/20 group-hover:border-cyan-400/40",
      gradient: "from-cyan-500/20 to-blue-500/10",
    },

    purple: {
      icon: "text-violet-400",
      glow: "group-hover:shadow-violet-500/20 group-hover:border-violet-400/40",
      gradient: "from-violet-500/20 to-fuchsia-500/10",
    },

    emerald: {
      icon: "text-emerald-400",
      glow: "group-hover:shadow-emerald-500/20 group-hover:border-emerald-400/40",
      gradient: "from-emerald-500/20 to-green-500/10",
    },

    orange: {
      icon: "text-orange-400",
      glow: "group-hover:shadow-orange-500/20 group-hover:border-orange-400/40",
      gradient: "from-orange-500/20 to-yellow-500/10",
    },
  };

  const style = accentStyles[accent];

  return (
    <motion.button
      layout
      onClick={onClick}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{
        layout: {
          duration: 0.55,
        },
      }}
      className={`
        group
        relative
        flex
        h-[330px]
        w-full
        flex-col
        justify-between
        overflow-hidden
        rounded-3xl
        border
        border-slate-700/60
        bg-slate-900/60
        p-8
        text-left
        backdrop-blur-xl
        transition-all
        duration-500
        ${style.glow}
        ${active ? "ring-2 ring-cyan-400/50" : ""}
      `}
    >
      {/* Background Gradient */}

      <div
        className={`absolute inset-0 bg-gradient-to-br ${style.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
      />

      {/* Decorative Circle */}

      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full border border-white/5" />

      <div className="relative z-10">
        <div
          className={`
            mb-8
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            border
            border-slate-700/60
            bg-slate-900/70
            ${style.icon}
          `}
        >
          <Icon size={32} strokeWidth={2} />
        </div>

        <h3 className="text-2xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-slate-400">
          {subtitle}
        </p>
      </div>

      <div className="relative z-10 flex items-center justify-between">
        <span className="text-sm font-medium text-slate-400">
          Discover More
        </span>

        <ChevronRight
          className="transition-transform duration-300 group-hover:translate-x-2"
          size={22}
        />
      </div>
    </motion.button>
  );
}
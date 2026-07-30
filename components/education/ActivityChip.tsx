"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Props {
  title: string;
  href?: string;
}

export default function ActivityChip({
  title,
  href,
}: Props) {
  // Non-clickable chip
  if (!href) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-300 transition-colors duration-300">
        {title}
      </div>
    );
  }

  return (
    <motion.div
      whileHover={{
        y: -3,
      }}
      transition={{
        duration: 0.2,
      }}
    >
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-500/[0.06] hover:shadow-lg hover:shadow-cyan-500/10 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
      >
        <span className="font-medium text-slate-300 transition-colors duration-300 group-hover:text-white">
          {title}
        </span>

        <ArrowUpRight
          size={17}
          className="text-cyan-400 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:scale-110"
        />
      </Link>
    </motion.div>
  );
}
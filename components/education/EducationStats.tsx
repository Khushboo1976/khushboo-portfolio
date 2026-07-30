"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  CalendarDays,
  BookOpen,
  Sparkles,
} from "lucide-react";

const stats = [
  {
    icon: GraduationCap,
    value: "8.03 / 10",
    label: "Current CGPA",
  },
  {
    icon: CalendarDays,
    value: "Jun 2027",
    label: "Expected Graduation",
  },
  {
    icon: BookOpen,
    value: "CSIT",
    label: "B.Tech Major",
  },
  {
    icon: Sparkles,
    value: "PCM + CS",
    label: "Academic Stream",
  },
];

export default function EducationStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative mb-16 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5" />

      <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-cyan-300">
            Academic Overview
          </span>

          <h3 className="mt-4 text-3xl font-bold text-white">
            Building a Strong Technical Foundation
          </h3>

          <p className="mt-4 leading-7 text-slate-400">
            My academic journey combines strong classroom performance with
            practical industry experience, technical projects, research,
            leadership, and continuous learning to prepare for modern software
            engineering and AI roles.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.4,
                }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                className="group rounded-2xl border border-white/10 bg-slate-900/40 p-5 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-500/[0.06] hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <Icon className="mb-4 h-6 w-6 text-cyan-400 transition-transform duration-300 group-hover:scale-110" />

                <h4 className="text-xl font-bold text-white">
                  {item.value}
                </h4>

                <p className="mt-1 text-sm text-slate-400">
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
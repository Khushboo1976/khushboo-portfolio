"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Award,
  BadgeCheck,
  IndianRupee,
} from "lucide-react";

const stats = [
  {
    icon: BriefcaseBusiness,
    value: "4",
    label: "Industry Internships",
    color: "from-cyan-500 to-sky-500",
  },
  {
    icon: Award,
    value: "2",
    label: "Letters of Recommendation",
    color: "from-amber-400 to-orange-500",
  },
  {
    icon: BadgeCheck,
    value: "4",
    label: "AICTE Approved",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    icon: IndianRupee,
    value: "1",
    label: "Stipend Internship",
    color: "from-emerald-500 to-green-400",
  },
];

export default function ExperienceStats() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.12,
            }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            {/* Glow */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20`}
            />

            {/* Icon */}
            <div
              className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${stat.color}`}
            >
              <Icon className="h-7 w-7 text-white" />
            </div>

            {/* Value */}
            <h3 className="text-4xl font-bold text-white">
              {stat.value}
            </h3>

            {/* Label */}
            <p className="mt-2 text-sm text-slate-400">
              {stat.label}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}
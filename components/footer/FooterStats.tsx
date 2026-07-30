"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Award,
  GraduationCap,
  BadgeCheck,
} from "lucide-react";

const stats = [
  {
    icon: BriefcaseBusiness,
    value: "15+",
    label: "Projects",
  },
  {
    icon: Award,
    value: "22",
    label: "Certificates",
  },
  {
    icon: GraduationCap,
    value: "8.04",
    label: "CGPA",
  },
  {
    icon: BadgeCheck,
    value: "Open",
    label: "To Work",
  },
];

export default function FooterStats() {
  return (
    <section className="my-20">
      <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -6,
              }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/5 hover:shadow-[0_0_40px_rgba(34,211,238,.12)]"
            >
              <div className="mb-5 flex justify-center">
                <div className="rounded-2xl bg-cyan-500/10 p-3 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <Icon
                    size={24}
                    className="text-cyan-400"
                  />
                </div>
              </div>

              <h3 className="text-center text-3xl font-black text-white">
                {stat.value}
              </h3>

              <p className="mt-2 text-center text-sm text-slate-400">
                {stat.label}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
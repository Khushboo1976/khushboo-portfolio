"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";

export default function ExperienceTimeline() {
  return (
    <div className="relative hidden lg:block">
      {/* Background Line */}
      <div className="absolute left-0 right-0 top-7 h-[2px] rounded-full bg-white/10" />

      {/* Animated Progress */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
        className="absolute left-0 top-7 h-[2px] rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-orange-400"
      />

      <div className="grid grid-cols-4">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.18,
            }}
            className="relative flex flex-col items-center"
          >
            {/* Timeline Node */}
            <motion.div
              whileHover={{
                scale: 1.2,
              }}
              className="relative z-10"
            >
              {/* Glow */}
              <div
                className="absolute -inset-3 rounded-full blur-2xl"
                style={{
                  background: exp.accent,
                  opacity: 0.35,
                }}
              />

              {/* Circle */}
              <div
                className="relative h-5 w-5 rounded-full border-4 border-[#070B14]"
                style={{
                  background: exp.accent,
                }}
              />
            </motion.div>

            {/* Date */}
            <p className="mt-6 text-sm font-medium text-slate-300">
              {exp.timeline}
            </p>

            {/* Company */}
            <p
              className="mt-1 text-base font-semibold"
              style={{
                color: exp.accent,
              }}
            >
              {exp.company}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
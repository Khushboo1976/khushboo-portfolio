"use client";
import EducationStats from "./EducationStats";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

import EducationCard from "./EducationCard";
import { education } from "@/data/education";

export default function EducationSection() {
  return (
    <section
      id="education"
      className="relative overflow-hidden py-28"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute right-0 bottom-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
            <GraduationCap size={18} />
            Education
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Academic Journey
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Building a strong foundation through academic excellence,
            technical learning, innovation, leadership, and continuous
            growth.
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="grid gap-8 lg:grid-cols-2">
          {education.map((item, index) => (
            <EducationCard
              key={item.id}
              education={item}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
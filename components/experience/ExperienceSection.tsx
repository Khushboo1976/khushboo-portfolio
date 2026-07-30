"use client";

import { motion } from "framer-motion";

import { experiences } from "@/data/experience";

import ExperienceStats from "./ExperienceStats";
import ExperienceTimeline from "./ExperienceTimeline";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden py-24"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-violet-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
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
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
            Professional Journey
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Turning Knowledge into
            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-orange-400 bg-clip-text text-transparent">
              {" "}
              Real-World Impact
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            AICTE-approved internships and industry collaborations that
            strengthened my expertise in Artificial Intelligence,
            Machine Learning, Generative AI, and Data Analytics through
            real-world projects, mentorship, and continuous learning.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="mt-20">
          <ExperienceStats />
        </div>

        {/* Timeline */}
        <div className="mt-24">
          <ExperienceTimeline />
        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
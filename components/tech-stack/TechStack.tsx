"use client";

import { motion } from "framer-motion";
import TechCarousel from "./TechCarousel";

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="relative overflow-hidden py-28 bg-[#050816]"
    >
      {/* Soft Background Glow */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-violet-500/10 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-6 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300 backdrop-blur-md">
            Tech Stack
          </span>

          <h2 className="mt-8 text-5xl font-bold text-white">
            Technologies I Work With
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            A collection of programming languages, frameworks, databases,
            AI technologies and developer tools that I use to build
            scalable, modern software.
          </p>
        </motion.div>

        <TechCarousel />
      </div>
    </section>
  );
}
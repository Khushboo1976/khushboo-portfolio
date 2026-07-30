"use client";

import { motion } from "framer-motion";
import QuoteCard from "./QuoteCard";
import PhilosophyFooter from "./PhilosophyFooter";
import { philosophyQuotes } from "@/data/philosophy";

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#050816] py-24"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-[150px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <span className="inline-block rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-cyan-300">
            MY PHILOSOPHY
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Ideas That Shape My Journey
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            The principles that inspire how I learn, build software,
            conduct research, and contribute through technology.
          </p>
        </motion.div>

        {/* Quote Cards */}

        <div className="grid gap-8 lg:grid-cols-2">
          {philosophyQuotes.map((item) => (
            <QuoteCard
              key={item.id}
              icon={item.icon}
              title={item.title}
              quote={item.quote}
              author={item.author}
              description={item.description}
              glow={item.glow as "blue" | "green"}
            />
          ))}
        </div>

        {/* Personal Belief */}

        <PhilosophyFooter />
      </div>
    </section>
  );
}
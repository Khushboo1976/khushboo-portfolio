"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { aboutCards } from "@/data/about";

import AboutCard from "./AboutCard";
import AboutExpanded from "./AboutExpanded";

export default function About() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const selected = aboutCards.find((card) => card.id === activeCard);

  return (
    <section
      id="about"
      className="relative overflow-hidden py-28"
    >
      {/* ===========================
          Premium Background
      ============================ */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Dark Base */}
        <div className="absolute inset-0 bg-[#050816]" />

        {/* Top Fade */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/40 to-transparent" />

        {/* Left Glow */}
        <div className="absolute -left-48 top-24 h-[520px] w-[520px] rounded-full bg-cyan-500/12 blur-[160px]" />

        {/* Right Glow */}
        <div className="absolute -right-48 bottom-0 h-[560px] w-[560px] rounded-full bg-violet-500/12 blur-[180px]" />

        {/* Center Glow */}
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[180px]" />

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-cyan-400">
            ABOUT ME
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            More Than Just a Resume
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Behind every project is a story of curiosity, growth,
            resilience, and the drive to build technology that creates
            meaningful impact.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {aboutCards.map((card) => (
            <motion.div
              key={card.id}
              layout
              animate={{
                opacity:
                  activeCard === null || activeCard === card.id
                    ? 1
                    : 0.45,

                scale:
                  activeCard === null || activeCard === card.id
                    ? 1
                    : 0.96,
              }}
              transition={{ duration: 0.35 }}
            >
              <AboutCard
                title={card.title}
                subtitle={card.subtitle}
                icon={card.icon}
                accent={card.accent}
                active={activeCard === card.id}
                onClick={() =>
                  setActiveCard((prev) =>
                    prev === card.id ? null : card.id
                  )
                }
              />
            </motion.div>
          ))}
        </div>

        {/* Expanded */}

        <AnimatePresence mode="wait">
          {selected && (
            <AboutExpanded
              key={selected.id}
              title={selected.title}
              heading={selected.content.heading}
              paragraphs={selected.content.paragraphs}
              highlights={selected.content.highlights}
              icon={selected.icon}
              accent={selected.accent}
              onClose={() => setActiveCard(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
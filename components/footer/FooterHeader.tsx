"use client";

import { motion } from "framer-motion";

export default function FooterHeader() {
  return (
    <div className="relative overflow-hidden rounded-3xl">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className="mx-auto max-w-3xl text-center"
      >
        {/* Badge */}

        <motion.div
          initial={{ opacity: 0, scale: .95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .15 }}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300 backdrop-blur-xl"
        >
          ✨ Open to Opportunities
        </motion.div>

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: .25,
            duration: .6,
          }}
          className="mt-8 text-5xl font-black tracking-tight text-white md:text-6xl"
        >
          Let's Build
          <br />

          <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
            Something Amazing
          </span>
        </motion.h2>

        {/* Subtitle */}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: .45,
            duration: .6,
          }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-400"
        >
          Building scalable software, AI-powered applications,
          and data-driven solutions with modern technologies.
          <br />
          I'm actively seeking Software Engineering, AI/ML,
          Data Analytics and Full-Time opportunities.
        </motion.p>
      </motion.div>

      {/* Decorative Divider */}

      <motion.div
        initial={{ opacity: 0, scaleX: .7 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: .6,
        }}
        className="mt-16 flex items-center justify-center"
      >
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        <div className="mx-5 flex h-4 w-4 rotate-45 items-center justify-center rounded-sm border border-cyan-400/50 bg-cyan-400/20 backdrop-blur-md">
          <div className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
        </div>

        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </motion.div>
    </div>
  );
}
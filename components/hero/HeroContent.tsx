"use client";

import { motion } from "framer-motion";
import HeroButtons from "./HeroButtons";
import HeroSocial from "./HeroSocial";
import RoleSwitcher from "./RoleSwitcher";

const highlights = [
  "8.04 CGPA",
  "AI & ML",
  "Research Published",
  "Microsoft Certified",
];

export default function HeroContent() {
  return (
    <div className="relative z-20 max-w-3xl">

      {/* Availability */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 backdrop-blur-xl"
      >
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
        </span>

        <span className="text-sm font-medium tracking-wide text-cyan-100">
          Open to Software Engineering • AI • ML • Data Opportunities
        </span>
      </motion.div>

      {/* Greeting */}
      <motion.p
        initial={{ opacity: 0, x: -25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-3 text-lg font-medium text-cyan-400"
      >
        Hello, I am
      </motion.p>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="leading-none"
      >
        <span className="block text-5xl font-black text-white md:text-7xl">
          Khushboo
        </span>

        <span className="mt-2 block bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 bg-clip-text text-5xl font-black text-transparent md:text-7xl">
          Goyal
        </span>
      </motion.h1>

      {/* Roles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
        className="mt-8 h-12"
      >
        <RoleSwitcher />
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-8 max-w-2xl text-lg leading-9 text-slate-300 md:text-xl"
      >
        I am a Computer Science student and aspiring{" "}
        <span className="font-semibold text-white">
          Software Engineer
        </span>{" "}
        passionate about{" "}
        <span className="font-semibold text-cyan-300">
          Artificial Intelligence
        </span>
        ,{" "}
        <span className="font-semibold text-cyan-300">
          Machine Learning
        </span>
        ,{" "}
        <span className="font-semibold text-cyan-300">
          Backend Development
        </span>{" "}
        and{" "}
        <span className="font-semibold text-cyan-300">
          Data Analytics
        </span>
        .

        <br />
        <br />

        I enjoy designing scalable applications, solving real-world problems,
        publishing research, and transforming innovative ideas into impactful
        digital products.
      </motion.p>

      {/* Highlights */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-10 flex flex-wrap gap-4"
      >
        {highlights.map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-500/10"
          >
            <span className="text-sm font-medium text-white">
              {item}
            </span>
          </div>
        ))}
      </motion.div>

      {/* Tech Stack */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-10 flex flex-wrap gap-3"
      >
        {[
          "Python",
          "React",
          "Next.js",
          "FastAPI",
          "Java",
          "SQL",
          "TensorFlow",
          "Git",
        ].map((tech) => (
          <div
            key={tech}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-white"
          >
            {tech}
          </div>
        ))}
      </motion.div>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.15 }}
        className="mt-12"
      >
        <HeroButtons />
      </motion.div>

      {/* Social */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="mt-10"
      >
        <HeroSocial />
      </motion.div>
    </div>
  );
}
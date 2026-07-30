"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const technologies = [
  {
    title: "Python",
    icon: "🐍",
    className: "top-8 left-0",
  },
  {
    title: "React",
    icon: "⚛️",
    className: "top-28 right-0",
  },
  {
    title: "AI",
    icon: "🧠",
    className: "left-4 bottom-40",
  },
  {
    title: "Next.js",
    icon: "▲",
    className: "bottom-20 right-2",
  },
  {
    title: "SQL",
    icon: "🗄️",
    className: "bottom-0 left-20",
  },
  {
    title: "FastAPI",
    icon: "⚡",
    className: "top-1/2 -right-6",
  },
];

export default function HeroImage() {
  return (
    <div className="relative -mt-20 flex h-[720px] w-full items-center justify-center">

      {/* Main Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute h-[520px] w-[520px] rounded-full bg-cyan-500/20 blur-[130px]"
      />

      {/* Secondary Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute bottom-10 h-[350px] w-[350px] rounded-full bg-violet-500/20 blur-[110px]"
      />

      {/* Floating Tech Cards */}
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.title}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            y: [0, -12, 0],
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            delay: index * 0.25,
          }}
          className={`absolute ${tech.className}`}
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl shadow-xl">
            <div className="flex items-center gap-2">
              <span className="text-xl">{tech.icon}</span>
              <span className="text-sm font-medium text-white">
                {tech.title}
              </span>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Photo */}
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: 1,
          y: [0, -10, 0],
        }}
        transition={{
          duration: 1,
          y: {
            duration: 6,
            repeat: Infinity,
          },
        }}
        className="relative -mt-12 z-10"
      >
        <Image
          src="/profile/profile-transparent.png"
          alt="Khushboo Goyal"
          width={520}
          height={720}
          priority
          className="h-auto w-[500px] select-none drop-shadow-[0_35px_80px_rgba(34,211,238,0.45)]"
        />
      </motion.div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 h-40 w-full bg-gradient-to-t from-[#050816] to-transparent" />
    </div>
  );
}
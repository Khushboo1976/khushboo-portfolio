"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const roles = [
  "Software Engineer",
  "AI Engineer",
  "Machine Learning Engineer",
  "Data Analyst",
  "Backend Developer",
  "Full Stack Developer",
  "Python Developer",
  "Generative AI Developer",
];

export default function RoleSwitcher() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % roles.length);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-12 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.h2
          key={roles[index]}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{
            duration: 0.45,
          }}
          className="absolute left-0 text-3xl font-bold text-cyan-400 md:text-5xl"
        >
          {roles[index]}
        </motion.h2>
      </AnimatePresence>
    </div>
  );
}
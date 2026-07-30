"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { techStack } from "@/data/techStack";
import TechCard from "./TechCard";
import CarouselButton from "./CarouselButton";

export default function TechCarousel() {
  const [current, setCurrent] = useState(0);

  const total = techStack.length;

  const next = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const previous = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  const visibleCards = useMemo(() => {
    return [
      techStack[current],
      techStack[(current + 1) % total],
      techStack[(current + 2) % total],
    ];
  }, [current, total]);

  return (
    <div className="relative w-full overflow-hidden px-10">
      <CarouselButton
        direction="left"
        onClick={previous}
      />

      <CarouselButton
        direction="right"
        onClick={next}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{
            opacity: 0,
            x: 60,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          exit={{
            opacity: 0,
            x: -60,
          }}
          transition={{
            duration: 0.45,
          }}
          className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1"
        >
          {visibleCards.map((category) => (
            <TechCard
              key={category.id}
              category={category}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
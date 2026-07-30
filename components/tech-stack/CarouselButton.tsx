"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselButtonProps {
  direction: "left" | "right";
  onClick: () => void;
}

export default function CarouselButton({
  direction,
  onClick,
}: CarouselButtonProps) {
  return (
    <motion.button
      whileHover={{
        scale: 1.08,
      }}
      whileTap={{
        scale: 0.95,
      }}
      onClick={onClick}
      className={`
        absolute
        top-1/2
        z-30
        flex
        h-14
        w-14
        -translate-y-1/2
        items-center
        justify-center
        rounded-full
        border
        border-white/10
        bg-slate-900/80
        backdrop-blur-xl
        shadow-lg
        transition-all
        duration-300
        hover:border-cyan-400/50
        hover:bg-slate-800
        hover:shadow-cyan-500/20
        ${
          direction === "left"
            ? "-left-7"
            : "-right-7"
        }
      `}
    >
      {direction === "left" ? (
        <ChevronLeft className="h-6 w-6 text-white" />
      ) : (
        <ChevronRight className="h-6 w-6 text-white" />
      )}
    </motion.button>
  );
}
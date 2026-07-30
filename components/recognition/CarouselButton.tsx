"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselButtonProps {
  direction: "left" | "right";
  onClick: () => void;
  disabled?: boolean;
}

export default function CarouselButton({
  direction,
  onClick,
  disabled = false,
}: CarouselButtonProps) {
  return (
    <motion.button
      whileHover={
        !disabled
          ? {
              scale: 1.08,
              y: -2,
            }
          : undefined
      }
      whileTap={
        !disabled
          ? {
              scale: 0.95,
            }
          : undefined
      }
      onClick={onClick}
      disabled={disabled}
      className={`
        absolute
        top-1/2
        z-20
        hidden
        -translate-y-1/2
        rounded-full
        border
        p-3
        backdrop-blur-xl
        transition-all
        duration-300
        lg:flex
        ${
          direction === "left"
            ? "left-0 -translate-x-1/2"
            : "right-0 translate-x-1/2"
        }
        ${
          disabled
            ? "cursor-not-allowed border-white/5 bg-slate-900/40 text-slate-600 opacity-40"
            : "border-white/10 bg-slate-900/80 text-white hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-500/10"
        }
      `}
      aria-label={
        direction === "left"
          ? "Previous certificates"
          : "Next certificates"
      }
    >
      {direction === "left" ? (
        <ChevronLeft className="h-5 w-5" />
      ) : (
        <ChevronRight className="h-5 w-5" />
      )}
    </motion.button>
  );
}
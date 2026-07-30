"use client";

import { motion } from "framer-motion";

import { FILTERS } from "@/data/projects";
import { ProjectCategory } from "@/types/project";

interface ProjectFiltersProps {
  activeFilter: ProjectCategory | "all";
  onFilterChange: (filter: ProjectCategory | "all") => void;
}

export default function ProjectFilters({
  activeFilter,
  onFilterChange,
}: ProjectFiltersProps) {
  return (
    <div className="mb-12 flex justify-center">
      <div
        className="
          flex
          flex-wrap
          justify-center
          gap-3
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-3
          backdrop-blur-xl
        "
      >
        {/* ALL */}

        <button
          onClick={() => onFilterChange("all")}
          className="
            relative
            overflow-hidden
            rounded-2xl
            px-5
            py-3
            text-sm
            font-medium
            transition-colors
          "
        >
          {activeFilter === "all" && (
            <motion.div
              layoutId="activeFilter"
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 28,
              }}
              className="
                absolute
                inset-0
                rounded-2xl
                bg-cyan-500
              "
            />
          )}

          <span
            className={`relative z-10 ${
              activeFilter === "all"
                ? "text-black"
                : "text-slate-300"
            }`}
          >
            🚀 All
          </span>
        </button>

        {/* FILTERS */}

        {FILTERS.map((filter) => (
          <button
            key={filter.id}
            onClick={() => onFilterChange(filter.id)}
            className="
              relative
              overflow-hidden
              rounded-2xl
              px-5
              py-3
              text-sm
              font-medium
              transition-colors
            "
          >
            {activeFilter === filter.id && (
              <motion.div
                layoutId="activeFilter"
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 28,
                }}
                className="
                  absolute
                  inset-0
                  rounded-2xl
                  bg-cyan-500
                "
              />
            )}

            <span
              className={`relative z-10 flex items-center gap-2 ${
                activeFilter === filter.id
                  ? "text-black"
                  : "text-slate-300"
              }`}
            >
              <span>{filter.emoji}</span>

              {filter.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
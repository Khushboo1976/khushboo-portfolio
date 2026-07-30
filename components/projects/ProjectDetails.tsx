"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Lightbulb, Target, TrendingUp } from "lucide-react";

import { Project } from "@/types/project";

interface ProjectDetailsProps {
  project: Project;
  expanded: boolean;
}

const sections = [
  {
    key: "problem",
    title: "Problem",
    icon: Target,
    color: "text-rose-400",
  },
  {
    key: "solution",
    title: "Solution",
    icon: Lightbulb,
    color: "text-cyan-400",
  },
  {
    key: "impact",
    title: "Impact",
    icon: TrendingUp,
    color: "text-emerald-400",
  },
] as const;

export default function ProjectDetails({
  project,
  expanded,
}: ProjectDetailsProps) {
  return (
    <AnimatePresence initial={false}>
      {expanded && (
        <motion.div
          initial={{
            opacity: 0,
            height: 0,
          }}
          animate={{
            opacity: 1,
            height: "auto",
          }}
          exit={{
            opacity: 0,
            height: 0,
          }}
          transition={{
            duration: 0.35,
            ease: "easeInOut",
          }}
          className="overflow-hidden"
        >
          <motion.div
            initial={{ y: 12 }}
            animate={{ y: 0 }}
            exit={{ y: -12 }}
            transition={{
              duration: 0.3,
            }}
            className="
              mt-6
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
            "
          >
            <div
              className="
                max-h-[340px]
                overflow-y-auto
                space-y-6
                p-6
              "
            >
              {sections.map((section) => {
                const Icon = section.icon;

                return (
                  <motion.div
                    key={section.key}
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="
                      rounded-2xl
                      border
                      border-white/10
                      bg-black/20
                      p-5
                    "
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <div
                        className="
                          rounded-xl
                          bg-white/5
                          p-2
                        "
                      >
                        <Icon
                          className={`h-5 w-5 ${section.color}`}
                        />
                      </div>

                      <h4
                        className="
                          text-lg
                          font-semibold
                          text-white
                        "
                      >
                        {section.title}
                      </h4>
                    </div>

                    <p
                      className="
                        leading-7
                        text-slate-400
                      "
                    >
                      {project.details[section.key]}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
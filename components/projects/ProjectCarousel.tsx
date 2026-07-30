"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import type { Project } from "@/types/project";
import ProjectCard from "./ProjectCard";

interface ProjectCarouselProps {
  projects: Project[];
}

export default function ProjectCarousel({
  projects,
}: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [direction, setDirection] = useState<1 | -1>(1);

  const totalProjects = projects.length;
  const project = projects[currentIndex];

  const nextProject = useCallback(() => {
    if (totalProjects <= 1) return;

    setDirection(1);
    setExpanded(false);

    setCurrentIndex((prev) => (prev + 1) % totalProjects);
  }, [totalProjects]);

  const previousProject = useCallback(() => {
    if (totalProjects <= 1) return;

    setDirection(-1);
    setExpanded(false);

    setCurrentIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
  }, [totalProjects]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowRight":
          nextProject();
          break;

        case "ArrowLeft":
          previousProject();
          break;

        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [nextProject, previousProject]);

  if (!project) {
    return null;
  }

  return (
    <div className="relative w-full">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={project.id}
          custom={direction}
          initial={{
            opacity: 0,
            x: direction === 1 ? 80 : -80,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          exit={{
            opacity: 0,
            x: direction === 1 ? -80 : 80,
          }}
          transition={{
            duration: 0.35,
            ease: "easeInOut",
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={(_, info) => {
            if (info.offset.x < -120) {
              nextProject();
            } else if (info.offset.x > 120) {
              previousProject();
            }
          }}
        >
          <ProjectCard
            project={project}
            expanded={expanded}
            onToggle={() => setExpanded((prev) => !prev)}
          />
        </motion.div>
      </AnimatePresence>

      {totalProjects > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous project"
            onClick={previousProject}
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              rounded-full
              border
              border-white/10
              bg-black/50
              p-3
              backdrop-blur-xl
              transition-all
              hover:scale-110
              hover:bg-cyan-500
            "
          >
            <ChevronLeft className="h-5 w-5 text-white" />
          </button>

          <button
            type="button"
            aria-label="Next project"
            onClick={nextProject}
            className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              rounded-full
              border
              border-white/10
              bg-black/50
              p-3
              backdrop-blur-xl
              transition-all
              hover:scale-110
              hover:bg-cyan-500
            "
          >
            <ChevronRight className="h-5 w-5 text-white" />
          </button>
        </>
      )}

      {totalProjects > 1 && (
        <div className="mt-8 flex justify-center gap-3">
          {projects.map((item, index) => (
            <button
              key={item.id}
              type="button"
              aria-label={`Go to project ${index + 1}`}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
                setExpanded(false);
              }}
              className={`h-3 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "w-10 bg-cyan-400"
                  : "w-3 bg-white/20 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
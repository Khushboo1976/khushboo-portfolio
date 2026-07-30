"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FolderGit2,
  Sparkles,
  BrainCircuit,
  Trophy,
  ArrowRight,
} from "lucide-react";

import { PROJECTS } from "@/data/projects";
import { ProjectCategory } from "@/types/project";

import ProjectCarousel from "./ProjectCarousel";
import ProjectFilters from "./ProjectFilters";

export default function ProjectSection() {
  const [activeFilter, setActiveFilter] =
    useState<ProjectCategory | "all">("all");

  const filteredProjects = useMemo(() => {
    return activeFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((project) =>
          project.categories.includes(activeFilter)
        );
  }, [activeFilter]);

  const stats = [
    {
      icon: FolderGit2,
      label: "Projects",
      value: PROJECTS.length,
    },
    {
      icon: Trophy,
      label: "Featured",
      value: PROJECTS.filter((p) => p.featured).length,
    },
    {
      icon: BrainCircuit,
      label: "AI / ML",
      value: PROJECTS.filter(
        (p) =>
          p.categories.includes("ai") ||
          p.categories.includes("ml")
      ).length,
    },
    {
      icon: Sparkles,
      label: "Categories",
      value: 8,
    },
  ];

  return (
    <section
      id="projects"
      className="relative isolate overflow-hidden py-32 lg:py-40"
    >
      {/* Background */}

      <div className="absolute inset-0 -z-10">

        <div
          className="
            absolute
            inset-0
            opacity-[0.03]
            [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
            [background-size:80px_80px]
          "
        />

        <div
          className="
            absolute
            left-20
            top-24
            h-72
            w-72
            rounded-full
            bg-cyan-500/10
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            right-16
            bottom-20
            h-96
            w-96
            rounded-full
            bg-violet-500/10
            blur-[150px]
          "
        />

      </div>

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-500/10
              px-5
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.3em]
              text-cyan-300
              backdrop-blur-xl
            "
          >
            ✨ Featured Work
          </div>

          <h2
            className="
              mt-8
              text-5xl
              font-black
              tracking-tight
              text-white
              md:text-7xl
            "
          >
            Projects That

            <span
              className="
                block
                bg-gradient-to-r
                from-cyan-300
                via-sky-400
                to-violet-400
                bg-clip-text
                text-transparent
              "
            >
              Solve Real Problems
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-lg
              leading-9
              text-slate-400
            "
          >
            From AI-powered applications and machine learning
            models to full-stack platforms and data analytics
            solutions, each project demonstrates practical
            problem-solving, scalable architecture, and modern
            engineering practices.
          </p>
        </motion.div>

        {/* Stats */}

        <div
          className="
            mt-20
            grid
            gap-6
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
                viewport={{ once: true }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-7
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:border-cyan-400/30
                  hover:bg-white/10
                "
              >
                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    transition
                    duration-500
                    group-hover:opacity-100
                    bg-gradient-to-br
                    from-cyan-500/10
                    to-violet-500/10
                  "
                />

                <div className="relative z-10">

                  <Icon className="mb-5 h-8 w-8 text-cyan-400" />

                  <h3 className="text-4xl font-bold text-white">
                    {stat.value}
                  </h3>

                  <p className="mt-2 text-slate-400">
                    {stat.label}
                  </p>

                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Filters */}

        <div className="mt-24">
          <ProjectFilters
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </div>

        {/* Carousel */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-16"
        >
          <ProjectCarousel
            key={activeFilter}
            projects={filteredProjects}
          />
        </motion.div>

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-24 flex justify-center"
        >
          <a
            href="https://github.com/Khushboo1976"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-cyan-400/20
              bg-gradient-to-r
              from-cyan-500/10
              to-violet-500/10
              px-8
              py-4
              text-cyan-300
              backdrop-blur-xl
              transition-all
              duration-300
              hover:scale-105
              hover:border-cyan-300/40
            "
          >
            Explore All Projects

            <ArrowRight
              className="
                h-5
                w-5
                transition-transform
                group-hover:translate-x-1
              "
            />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
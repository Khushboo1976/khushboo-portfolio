"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  GitBranch,
  ExternalLink,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import { Project } from "@/types/project";
import ProjectDetails from "./ProjectDetails";

interface ProjectCardProps {
  project: Project;
  expanded: boolean;
  onToggle: () => void;
}

export default function ProjectCard({
  project,
  expanded,
  onToggle,
}: ProjectCardProps) {
  return (
    <motion.article
      layout
      whileHover={{
        y: -6,
      }}
      transition={{
        layout: {
          duration: 0.35,
        },
      }}
      className="
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        shadow-[0_0_50px_rgba(0,255,255,0.04)]
      "
    >
      {/* HERO IMAGE */}

      <div className="relative h-80 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority={project.featured}
          sizes="(max-width:768px)100vw,1200px"
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-40
            bg-gradient-to-t
            from-black
            to-transparent
          "
        />

        <span
          style={{
            backgroundColor: project.badgeColor,
          }}
          className="
            absolute
            left-6
            top-6
            rounded-full
            px-4
            py-2
            text-xs
            font-semibold
            text-white
            shadow-lg
          "
        >
          {project.badge}
        </span>
      </div>

      {/* CONTENT */}

      <div className="space-y-8 p-8">

        <div>
          <h3 className="text-3xl font-bold text-white">
            {project.title}
          </h3>

          <p className="mt-4 leading-8 text-slate-400">
            {project.shortDescription}
          </p>
        </div>

        {/* TECHNOLOGIES */}

        <div className="flex flex-wrap gap-3">
          {project.technologies.map((tech) => {
            const Icon = tech.icon;

            return (
              <div
                key={tech.name}
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-cyan-500/20
                  bg-cyan-500/10
                  px-4
                  py-2
                  text-sm
                  text-cyan-200
                "
              >
                <Icon size={15} />

                {tech.name}
              </div>
            );
          })}
        </div>

        {/* ACTION BUTTONS */}

        <div className="grid gap-4 md:grid-cols-2">

          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
              justify-center
              gap-2
              rounded-2xl
              border
              border-white/10
              py-3.5
              transition-all
              hover:border-cyan-400/40
              hover:bg-white/10
            "
          >
            <GitBranch size={18} />

            GitHub
          </a>

          {project.links.live ? (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-2xl
                bg-cyan-500
                py-3.5
                font-semibold
                text-black
                transition-all
                hover:bg-cyan-400
              "
            >
              <ExternalLink size={18} />

              Live Demo
            </a>
          ) : (
            <div
              className="
                flex
                items-center
                justify-center
                rounded-2xl
                border
                border-dashed
                border-white/10
                py-3.5
                text-slate-500
              "
            >
              Demo Coming Soon
            </div>
          )}
        </div>

        {/* DETAILS BUTTON */}

        <button
          onClick={onToggle}
          className="
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-2xl
            border
            border-white/10
            py-3.5
            transition-all
            hover:bg-white/10
          "
        >
          {expanded ? (
            <>
              Show Less

              <ChevronUp size={18} />
            </>
          ) : (
            <>
              View Details

              <ChevronDown size={18} />
            </>
          )}
        </button>

        {/* DETAILS */}

        <ProjectDetails
          project={project}
          expanded={expanded}
        />

      </div>
    </motion.article>
  );
}
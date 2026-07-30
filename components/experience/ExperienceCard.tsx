"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Award,
  FileText,
  Sparkles,
  BadgeCheck,
  IndianRupee,
  ArrowUpRight,
} from "lucide-react";

import { Experience } from "@/types/experience";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export default function ExperienceCard({
  experience,
  index,
}: ExperienceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
      }}
      whileHover={{
        y: -8,
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-all"
    >
      {/* Accent Line */}
      <div
        className="absolute inset-x-0 top-0 h-1"
        style={{
          backgroundColor: experience.accent,
        }}
      />

      {/* Glow */}
      <div
        className="absolute -right-20 -top-20 h-56 w-56 rounded-full blur-3xl opacity-10 transition-all duration-700 group-hover:opacity-30"
        style={{
          backgroundColor: experience.accent,
        }}
      />

      <div className="p-7">
        {/* Header */}
        <div className="flex items-center gap-4">
          <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-white/10 bg-white p-2">
            <Image
              src={experience.companyLogo}
              alt={experience.company}
              fill
              className="object-contain p-2"
            />
          </div>

          <div>
            <p
              className="text-sm font-semibold"
              style={{
                color: experience.accent,
              }}
            >
              {experience.role}
            </p>

            <h3 className="text-xl font-bold text-white">
              {experience.company}
            </h3>
          </div>
        </div>

        {/* Duration */}
        <div className="mt-6 flex flex-wrap gap-5 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            {experience.duration}
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={16} />
            {experience.location}
          </div>
        </div>

        {/* Badges */}
        <div className="mt-6 flex flex-wrap gap-2">
          {experience.aicte && (
            <span className="flex items-center gap-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">
              <BadgeCheck size={14} />
              AICTE Approved
            </span>
          )}

          {experience.stipend && (
            <span className="flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
              <IndianRupee size={14} />
              Paid Internship
            </span>
          )}

          {experience.lor && (
            <span className="flex items-center gap-1 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs text-amber-300">
              <Award size={14} />
              Letter of Recommendation
            </span>
          )}
        </div>

        {/* Tech Stack */}
        <div className="mt-7 flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 transition hover:bg-white/10"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Highlights */}
        <div className="mt-7 space-y-3">
          {experience.highlights.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 text-sm text-slate-300"
            >
              <Sparkles
                size={15}
                className="mt-1 shrink-0"
                style={{
                  color: experience.accent,
                }}
              />

              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap gap-3">

          <a
            href={experience.certificate}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
          >
            <FileText size={16} />
            Certificate
            <ArrowUpRight size={15} />
          </a>

          {experience.lor && (
            <a
              href={experience.lor}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
            >
              <Award size={16} />
              View LOR
              <ArrowUpRight size={15} />
            </a>
          )}

        </div>
      </div>
    </motion.article>
  );
}
"use client";

import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  Calendar,
  GraduationCap,
  School,
} from "lucide-react";

import ActivityChip from "./ActivityChip";
import { Education } from "@/types/education";

interface Props {
  education: Education;
  index: number;
}

export default function EducationCard({
  education,
  index,
}: Props) {
  const isSchool = education.type === "school";

  return (
    <motion.article
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? -60 : 60,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
      }}
      whileHover={{
        y: -8,
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/30 hover:shadow-2xl hover:shadow-cyan-500/10"
    >
      {/* Background Glow */}
      <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/20" />

      <div className="relative z-10 p-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-6">
          <div className="flex items-start gap-5">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/15 to-blue-500/15">
              {isSchool ? (
                <School className="h-8 w-8 text-cyan-400" />
              ) : (
                <GraduationCap className="h-8 w-8 text-cyan-400" />
              )}
            </div>

            <div>
              <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-cyan-300">
                {isSchool ? "School" : "University"}
              </span>

              <h3 className="mt-4 text-2xl font-bold text-white">
                {isSchool ? "School Education" : education.degree}
              </h3>

              <p className="mt-2 text-lg font-medium text-cyan-400">
                {education.institute}
              </p>

              <p className="mt-1 text-sm text-slate-400">
                {education.board}
              </p>
            </div>
          </div>
        </div>

        {/* Duration */}
        <div className="mt-8 flex items-center gap-2 text-sm text-slate-400">
          <Calendar className="h-4 w-4 text-cyan-400" />
          {education.duration}
        </div>

        {/* Score */}
        <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/[0.05] p-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-400">
            {education.scoreLabel}
          </p>

          {isSchool ? (
            <div className="mt-5 grid grid-cols-2 gap-6">
              <div>
                <p className="text-3xl font-bold text-white">87%</p>
                <p className="mt-1 text-sm text-slate-400">Class X</p>
              </div>

              <div>
                <p className="text-3xl font-bold text-white">85%</p>
                <p className="mt-1 text-sm text-slate-400">Class XII</p>
              </div>
            </div>
          ) : (
            <>
              <h4 className="mt-4 text-4xl font-bold text-white">
                {education.score}
              </h4>

              {education.status && (
                <p className="mt-2 text-sm text-cyan-300">
                  {education.status}
                </p>
              )}
            </>
          )}
        </div>

        {/* Subjects */}
        <div className="mt-8 border-t border-white/10 pt-8">
          <div className="mb-5 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-cyan-400" />

            <h4 className="font-semibold text-white">
              {isSchool
                ? "Core Subjects"
                : "Relevant Coursework"}
            </h4>
          </div>

          <div className="flex flex-wrap gap-3">
            {education.highlights.map((subject) => (
              <span
                key={subject}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-500/[0.06] hover:text-white"
              >
                {subject}
              </span>
            ))}
          </div>
        </div>

        {/* Activities */}
        <div className="mt-8 border-t border-white/10 pt-8">
          <div className="mb-5 flex items-center gap-2">
            <Award className="h-5 w-5 text-cyan-400" />

            <h4 className="font-semibold text-white">
              Leadership & Activities
            </h4>
          </div>

          <div className="space-y-3">
            {education.activities.map((activity) => (
              <ActivityChip
                key={activity.title}
                title={activity.title}
                href={activity.href}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
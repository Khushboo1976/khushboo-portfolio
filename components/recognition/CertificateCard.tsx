"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Calendar,
  Building2,
} from "lucide-react";

import { Recognition } from "@/types/recognition";

interface Props {
  certificate: Recognition;
  onClick: () => void;
}

export default function CertificateCard({
  certificate,
  onClick,
}: Props) {
  return (
    <motion.article
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.25,
      }}
      className="group flex w-[360px] shrink-0 flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:shadow-2xl hover:shadow-cyan-500/10"
    >
      {/* Certificate Preview */}
      <div
        onClick={onClick}
        className="relative aspect-[4/3] cursor-pointer overflow-hidden"
      >
        <Image
          src={certificate.image}
          alt={certificate.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* View */}
        <div className="absolute right-4 top-4 rounded-full bg-black/50 p-2 backdrop-blur-md opacity-0 transition-all duration-300 group-hover:opacity-100">
          <ArrowUpRight
            size={18}
            className="text-white"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Title */}
        <h3 className="line-clamp-2 text-xl font-bold text-white">
          {certificate.title}
        </h3>

        {/* Issuer */}
        <div className="mt-4 flex items-center gap-2 text-sm text-slate-400">
          <Building2
            size={16}
            className="text-cyan-400"
          />
          {certificate.issuer}
        </div>

        {/* Year */}
        <div className="mt-2 flex items-center gap-2 text-sm text-slate-400">
          <Calendar
            size={16}
            className="text-cyan-400"
          />
          {certificate.year}
        </div>

        {/* Description */}
        <p className="mt-5 line-clamp-3 text-sm leading-6 text-slate-400">
          {certificate.description}
        </p>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          {certificate.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-cyan-400/15 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <button
          onClick={onClick}
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300"
        >
          View Certificate

          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </button>
      </div>
    </motion.article>
  );
}
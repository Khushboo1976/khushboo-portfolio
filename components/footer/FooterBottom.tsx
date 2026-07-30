"use client";

import Link from "next/link";
import { Heart } from "lucide-react";

export default function FooterBottom() {
  return (
    <div className="mt-20">
      {/* Divider */}

      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Bottom Content */}

      <div className="mt-8 flex flex-col items-center justify-between gap-6 md:flex-row">

        {/* Copyright */}

        <div className="space-y-1 text-center md:text-left">
          <p className="text-sm font-medium text-slate-300">
            © {new Date().getFullYear()} Khushboo Goyal
          </p>

          <p className="text-sm text-slate-500">
            All Rights Reserved.
          </p>
        </div>

        {/* Built With */}

        <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-slate-400">

          <span>Designed & Developed with</span>

          <Heart
            size={16}
            className="fill-red-500 text-red-500 animate-pulse"
          />

          <span>using</span>

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-cyan-300">
            Next.js
          </span>

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-cyan-300">
            React
          </span>

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-cyan-300">
            TypeScript
          </span>

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-cyan-300">
            Tailwind CSS
          </span>
        </div>

        {/* Small Credit */}

        <Link
          href="#hero"
          className="text-sm text-slate-500 transition-colors duration-300 hover:text-cyan-400"
        >
          Back to Top ↑
        </Link>

      </div>
    </div>
  );
}
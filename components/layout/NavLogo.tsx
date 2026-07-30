"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NavLogo() {
  return (
    <Link href="/" className="group flex items-center gap-3">
      <motion.div
        whileHover={{
          rotate: -8,
          scale: 1.08,
        }}
        transition={{
          type: "spring",
          stiffness: 350,
        }}
        className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500 via-blue-500 to-violet-600 shadow-lg shadow-cyan-500/20"
      >
        <span className="text-lg font-black tracking-wider text-white">
          KG
        </span>
      </motion.div>

      <div className="hidden md:block">
        <h2 className="text-lg font-bold tracking-wide text-white transition group-hover:text-cyan-300">
          Khushboo Goyal
        </h2>

        <p className="text-xs tracking-[0.35em] uppercase text-slate-400">
          Software Engineer
        </p>
      </div>
    </Link>
  );
}
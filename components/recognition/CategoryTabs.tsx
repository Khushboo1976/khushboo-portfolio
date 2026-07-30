"use client";

import { motion } from "framer-motion";

import { CertificateCategory } from "@/types/recognition";

export type RecognitionFilter =
  | "all"
  | "featured"
  | CertificateCategory;

interface Props {
  active: RecognitionFilter;
  onChange: (value: RecognitionFilter) => void;
}

const tabs: {
  label: string;
  value: RecognitionFilter;
}[] = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Featured",
    value: "featured",
  },
  {
    label: "Certifications",
    value: "certification",
  },
  {
    label: "Achievements",
    value: "achievement",
  },
  {
    label: "Research",
    value: "research",
  },
];

export default function CategoryTabs({
  active,
  onChange,
}: Props) {
  return (
    <div className="mb-12 overflow-x-auto scrollbar-hide">
      <div className="flex w-max min-w-full gap-4 pb-2">
        {tabs.map((tab) => {
          const isActive = active === tab.value;

          return (
            <button
              key={tab.value}
              type="button"
              onClick={() => onChange(tab.value)}
              className="relative"
            >
              <motion.div
                layout
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className={`relative whitespace-nowrap rounded-full border px-6 py-3 text-sm font-medium transition-all duration-300
                ${
                  isActive
                    ? "border-cyan-400 bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25"
                    : "border-white/10 bg-white/5 text-slate-300 hover:border-cyan-400/30 hover:bg-cyan-500/10 hover:text-white"
                }`}
              >
                {tab.label}

                {isActive && (
                  <motion.div
                    layoutId="recognition-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}
              </motion.div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
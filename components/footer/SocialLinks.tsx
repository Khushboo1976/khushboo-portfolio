"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  GitBranch,
  Mail,
  Code2,
} from "lucide-react";
import { FaLinkedin} from "react-icons/fa";

const socials = [
  {
    name: "GitHub",
    username: "@Khushboo1976",
    href: "https://github.com/Khushboo1976",
    icon: GitBranch,
  },
  {
    name: "LinkedIn",
    username: "Khushboo Goyal",
    href: "https://linkedin.com/in/khushboo-goyal-32bab0291",
    icon: FaLinkedin,
  },
  {
    name: "LeetCode",
    username: "khushboo_1976",
    href: "https://leetcode.com/u/khushboo_1976/",
    icon: Code2,
  },
  {
    name: "Email",
    username: "Let's Talk",
    href: "mailto:khushboo12244@gmail.com",
    icon: Mail,
  },
];

export default function SocialLinks() {
  return (
    <div className="space-y-6">
      <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
        Connect
      </h3>

      <div className="space-y-3">
        {socials.map((social, index) => {
          const Icon = social.icon;

          return (
            <motion.div
              key={social.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
            >
              <Link
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:shadow-[0_0_35px_rgba(34,211,238,0.12)]"
              >
                {/* Icon */}

                <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-400 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <Icon size={20} />
                </div>

                {/* Content */}

                <div className="flex-1">
                  <p className="text-sm font-medium text-white">
                    {social.name}
                  </p>

                  <p className="text-xs text-slate-400">
                    {social.username}
                  </p>
                </div>

                {/* Arrow */}

                <ArrowUpRight
                  size={18}
                  className="text-slate-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400"
                />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
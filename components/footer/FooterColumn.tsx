"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
  icon: React.ElementType;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

export default function FooterColumn({
  title,
  links,
}: FooterColumnProps) {
  return (
    <div className="space-y-6">
      {/* Column Title */}
      <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
        {title}
      </h3>

      {/* Links */}
      <ul className="space-y-3">
        {links.map((link, index) => {
          const Icon = link.icon;

          const external =
            link.href.startsWith("http") ||
            link.href.startsWith("mailto:") ||
            link.href.startsWith("tel:");

          return (
            <motion.li
              key={link.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.06,
                duration: 0.35,
              }}
            >
              <Link
                href={link.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-3 rounded-xl px-3 py-2 text-slate-400 transition-all duration-300 hover:bg-white/5 hover:text-white"
              >
                <Icon
                  size={18}
                  className="text-cyan-400 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                />

                <span className="flex-1 text-sm">
                  {link.label}
                </span>

                {external && (
                  <ArrowUpRight
                    size={15}
                    className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                  />
                )}
              </Link>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
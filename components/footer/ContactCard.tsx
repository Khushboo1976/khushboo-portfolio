"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Copy, ArrowUpRight } from "lucide-react";

interface ContactLink {
  label: string;
  href: string;
  icon: React.ElementType;
}

interface ContactCardProps {
  title: string;
  links: ContactLink[];
}

export default function ContactCard({
  title,
  links,
}: ContactCardProps) {
  const [copied, setCopied] = useState(false);

  async function copyEmail(email: string) {
    try {
      await navigator.clipboard.writeText(email);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      console.error("Failed to copy email.");
    }
  }

  return (
    <div className="space-y-6">
      {/* Heading */}

      <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
        {title}
      </h3>

      <div className="space-y-3">
        {links.map((link, index) => {
          const Icon = link.icon;

          const isEmail = link.href.startsWith("mailto:");
          const isLocation = link.label === "Delhi, India";

          return (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
            >
              {isEmail ? (
                <button
                  type="button"
                  onClick={() => copyEmail("khushboo12244@gmail.com")}
                  className="group flex w-full items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-left backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/10"
                >
                  <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-400">
                    <Icon size={18} />
                  </div>

                  <div className="flex-1 overflow-hidden">
                    <p className="truncate text-sm font-medium text-white">
                      {link.label}
                    </p>

                    <p className="text-xs text-slate-400">
                      {copied ? "Copied!" : "Click to copy"}
                    </p>
                  </div>

                  {copied ? (
                    <Check
                      size={18}
                      className="text-green-400"
                    />
                  ) : (
                    <Copy
                      size={18}
                      className="text-slate-500"
                    />
                  )}
                </button>
              ) : (
                <Link
                  href={link.href}
                  target={isLocation ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-500/10"
                >
                  <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-400">
                    <Icon size={18} />
                  </div>

                  <div className="flex-1 overflow-hidden">
                    <p className="truncate text-sm font-medium text-white">
                      {link.label}
                    </p>

                    <p className="text-xs text-slate-400">
                      {link.href.startsWith("tel:")
                        ? "Call Now"
                        : link.href.includes("wa.me")
                        ? "Message Me"
                        : isLocation
                        ? "Delhi, India"
                        : "Open"}
                    </p>
                  </div>

                  {!isLocation && (
                    <ArrowUpRight
                      size={18}
                      className="text-slate-500 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  )}
                </Link>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
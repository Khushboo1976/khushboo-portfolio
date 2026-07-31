"use client";

import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import { navigation } from "@/config/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({
  isOpen,
  onClose,
}: MobileMenuProps) {
  const pathname = usePathname();

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 280,
              damping: 30,
            }}
            className="fixed right-0 top-0 z-50 flex h-screen w-[330px] flex-col border-l border-white/10 bg-[#060B18]/95 backdrop-blur-xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
              <div>
                <h2 className="text-lg font-bold text-white">
                  Khushboo Goyal
                </h2>

                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  Portfolio
                </p>
              </div>

              <button
                onClick={onClose}
                className="rounded-xl border border-white/10 p-2 text-white transition hover:bg-white/10"
              >
                <X size={22} />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex flex-1 flex-col gap-2 p-6">
              {navigation.map((item) => {
                const active =
                  pathname === item.href ||
                  (item.href !== "/" &&
                    pathname.startsWith(item.href));

                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className={`rounded-xl px-4 py-3 text-base font-medium transition ${
                      active
                        ? "bg-cyan-500/10 text-cyan-400"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </nav>

            {/* Buttons */}
            <div className="space-y-3 border-t border-white/10 p-6">
              <Link
                href="/resume/Khushboo_Goyal_Resume.pdf"
                target="_blank"
                className="flex justify-center rounded-xl border border-cyan-400/30 px-5 py-3 font-medium text-cyan-300 transition hover:bg-cyan-500/10"
              >
                Download Resume
              </Link>

              <Link
                href="/contact"
                className="flex justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-semibold text-white shadow-lg shadow-cyan-500/30 transition hover:scale-[1.02]"
              >
                Hire Me
              </Link>

              {/* Social */}
              <div className="flex justify-center gap-6 pt-4 text-xl text-slate-400">
                <Link
                  href="https://github.com/Khushboo1976"
                  target="_blank"
                  className="transition hover:text-white"
                >
                  <FaGithub />
                </Link>

                <Link
                  href="https://www.linkedin.com/in/khushboo-goyal-32bab0291/"
                  target="_blank"
                  className="transition hover:text-cyan-400"
                >
                  <FaLinkedin />
                </Link>

                <Link
                  href="mailto:khushboogoyal12244@gmail.com"
                  className="transition hover:text-cyan-400"
                >
                  <FaEnvelope />
                </Link>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

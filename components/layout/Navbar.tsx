"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "border-b border-white/10 bg-slate-950/70 backdrop-blur-2xl shadow-2xl shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-[90rem] items-center justify-between px-6 lg:px-10">
          {/* Logo */}
          <motion.div
            whileHover={{
              scale: 1.05,
              rotate: -2,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
            }}
          >
            <NavLogo />
          </motion.div>

          {/* Desktop Navigation */}
          <NavLinks />

          {/* Desktop Buttons */}
          <div className="hidden items-center gap-4 lg:flex">
            <motion.div
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
            >
              <Link
                href="/resume/Khushboo_Goyal_Resume.pdf"
                target="_blank"
                className="rounded-xl border border-cyan-500/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-200 backdrop-blur transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-white"
              >
                Resume
              </Link>
            </motion.div>

            <motion.div
              animate={{
                boxShadow: [
                  "0 0 15px rgba(34,211,238,.20)",
                  "0 0 30px rgba(34,211,238,.45)",
                  "0 0 15px rgba(34,211,238,.20)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
            >
              <Link
                href="https://wa.me/919354226150?text=Hi%20Khushboo,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
                target="_blank"
                className="rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/30 transition-all duration-300"
              >
                Hire Me
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            type="button"
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setMenuOpen((prev) => !prev);
            }}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            className="relative z-[9999] rounded-xl border border-white/10 bg-white/5 p-2 text-white backdrop-blur transition-all duration-300 hover:bg-white/10 active:scale-95 lg:hidden"
          >
            <Menu size={24} />
          </motion.button>
        </div>
      </motion.header>

      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}

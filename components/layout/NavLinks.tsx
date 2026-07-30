"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { navigation } from "@/config/navigation";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-2 lg:flex">
      {navigation.map((item) => {
        const active =
          pathname === item.href ||
          (item.href !== "/" && pathname.startsWith(item.href));

        return (
          <Link
            key={item.title}
            href={item.href}
            className="relative px-4 py-2"
          >
            <motion.span
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className={`relative z-10 text-sm font-medium transition-colors duration-300 ${
                active
                  ? "text-cyan-400"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {item.title}
            </motion.span>

            {active && (
              <motion.div
                layoutId="active-nav"
                className="absolute inset-0 rounded-xl bg-cyan-500/10 border border-cyan-400/20"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              />
            )}

            <motion.div
              className="absolute bottom-0 left-1/2 h-[2px] w-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
              whileHover={{
                width: "70%",
                x: "-35%",
              }}
              transition={{ duration: 0.25 }}
            />
          </Link>
        );
      })}
    </nav>
  );
}
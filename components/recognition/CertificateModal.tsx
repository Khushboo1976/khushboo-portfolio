"use client";

import { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  Building2,
  Calendar,
  X,
} from "lucide-react";

import { Recognition } from "@/types/recognition";

interface Props {
  certificate: Recognition | null;
  open: boolean;
  onClose: () => void;
}

export default function CertificateModal({
  certificate,
  open,
  onClose,
}: Props) {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [open, onClose]);

  if (!certificate) return null;

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.25,
            }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.94,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.96,
              y: 20,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            className="fixed left-1/2 top-1/2 z-50 max-h-[90vh] w-[95%] max-w-6xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl border border-white/10 bg-slate-950 shadow-2xl"
          >
            {/* Close */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close certificate preview"
              className="
                absolute
                right-5
                top-5
                z-20
                rounded-full
                border
                border-white/10
                bg-black/60
                p-2.5
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-cyan-400/40
                hover:bg-cyan-500/10
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-cyan-400
              "
            >
              <X className="h-5 w-5 text-white" />
            </button>

            <div className="grid max-h-[90vh] overflow-y-auto lg:grid-cols-2">
              {/* Certificate Image */}
              <div className="relative flex min-h-[380px] items-center justify-center bg-slate-900 p-8">
                <Image
                  src={certificate.image}
                  alt={certificate.title}
                  fill
                  className="object-contain p-8"
                  priority
                />
              </div>

              {/* Details */}
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <span className="mb-5 inline-flex w-fit rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-300">
                  {certificate.category}
                </span>

                <h2 className="text-3xl font-bold leading-tight text-white lg:text-4xl">
                  {certificate.title}
                </h2>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3 text-slate-300">
                    <Building2 className="h-5 w-5 text-cyan-400" />
                    <span>{certificate.issuer}</span>
                  </div>

                  <div className="flex items-center gap-3 text-slate-300">
                    <Calendar className="h-5 w-5 text-cyan-400" />
                    <span>{certificate.year}</span>
                  </div>
                </div>

                <p className="mt-8 leading-8 text-slate-400">
                  {certificate.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {certificate.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="mt-10 text-sm text-slate-500">
                  Click outside the modal or press{" "}
                  <span className="font-medium text-slate-300">
                    Esc
                  </span>{" "}
                  to close.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
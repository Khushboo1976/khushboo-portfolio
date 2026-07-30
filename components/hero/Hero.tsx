"use client";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#050816] pt-24"
    >
      {/* Background */}
      <HeroBackground />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-20 px-6 lg:flex-row lg:px-8">

        {/* Left */}
        <div className="w-full lg:w-1/2">
          <HeroContent />
        </div>

        {/* Right */}
        <div className="flex w-full justify-center lg:w-1/2 lg:justify-end">
          <HeroImage />
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block">
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs uppercase tracking-[0.35em] text-slate-500">
            Scroll
          </span>

          <div className="flex h-12 w-7 justify-center rounded-full border border-cyan-400/30">
            <div className="mt-2 h-3 w-3 animate-bounce rounded-full bg-cyan-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
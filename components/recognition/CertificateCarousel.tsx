"use client";

import { useRef } from "react";

import { Recognition } from "@/types/recognition";

import CarouselButton from "./CarouselButton";
import CertificateCard from "./CertificateCard";

interface Props {
  certificates: Recognition[];
  onSelect: (certificate: Recognition) => void;
}

export default function CertificateCarousel({
  certificates,
  onSelect,
}: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const firstCard = scrollRef.current.firstElementChild as HTMLElement;

    const amount = (firstCard?.offsetWidth ?? 360) + 24;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      {/* Left Gradient */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-24 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent lg:block" />

      {/* Right Gradient */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-24 bg-gradient-to-l from-slate-950 via-slate-950/70 to-transparent lg:block" />

      {/* Navigation */}
      <CarouselButton
        direction="left"
        onClick={() => scroll("left")}
      />

      <CarouselButton
        direction="right"
        onClick={() => scroll("right")}
      />

      {/* Carousel */}
      <div
        ref={scrollRef}
        onWheel={(e) => {
          if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
            e.preventDefault();

            scrollRef.current?.scrollBy({
              left: e.deltaY,
              behavior: "smooth",
            });
          }
        }}
        className="
          flex
          gap-6
          overflow-x-auto
          scroll-smooth
          snap-x
          snap-mandatory
          scrollbar-hide
          pb-4
          px-1
        "
      >
        {certificates.map((certificate) => (
          <div
            key={certificate.id}
            className="snap-start shrink-0"
          >
            <CertificateCard
              certificate={certificate}
              onClick={() => onSelect(certificate)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
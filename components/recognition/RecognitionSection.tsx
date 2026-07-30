"use client";

import { useMemo, useState } from "react";
import { Award } from "lucide-react";

import { recognitions } from "@/data/recognition";
import { Recognition } from "@/types/recognition";

import CategoryTabs, {
  RecognitionFilter,
} from "./CategoryTabs";
import CertificateCarousel from "./CertificateCarousel";
import CertificateModal from "./CertificateModal";

export default function RecognitionSection() {
  const [filter, setFilter] =
    useState<RecognitionFilter>("all");

  const [selected, setSelected] =
    useState<Recognition | null>(null);

  const filteredCertificates = useMemo(() => {
    switch (filter) {
      case "all":
        return recognitions;

      case "featured":
        return recognitions.filter(
          (item) => item.featured
        );

      default:
        return recognitions.filter(
          (item) => item.category === filter
        );
    }
  }, [filter]);

  return (
    <>
      <section
        id="recognition"
        className="relative py-28"
      >
        <div className="mx-auto max-w-7xl px-6">
          {/* Heading */}
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
              <Award size={16} />
              Recognition
            </div>

            <h2 className="text-4xl font-bold text-white md:text-5xl">
              Certifications &
              <span className="text-cyan-400">
                {" "}
                Achievements
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              A collection of internships,
              certifications, research publications,
              hackathons, leadership initiatives,
              and achievements that reflect my
              continuous learning journey.
            </p>
          </div>

          {/* Category Filter */}
          <CategoryTabs
            active={filter}
            onChange={setFilter}
          />

          {/* Carousel */}
          <CertificateCarousel
            certificates={filteredCertificates}
            onSelect={setSelected}
          />
        </div>
      </section>

      {/* Modal */}
      <CertificateModal
        open={selected !== null}
        certificate={selected}
        onClose={() => setSelected(null)}
      />
    </>
  );
}
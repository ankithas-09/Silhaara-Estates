"use client";

import { useState } from "react";
import FadeIn from "@/components/ui/FadeIn";

const items = [
  {
    number: "01",
    title: "Secluded Valley: Your Private Sanctuary",
    description:
      "Positioned away from density and noise, Antaranya offers a deeply private landscape experience where silence, greenery, and open skies become part of everyday living.",
  },
  {
    number: "02",
    title: "Spacious Living: Freedom to Thrive",
    description:
      "With only 15 villas spread across 20 acres, openness is intentionally preserved — creating a rare sense of space, privacy, and breathing room.",
  },
  {
    number: "03",
    title: "Created For Community: Nurturing Every Moment",
    description:
      "Shared experiences are designed around warmth and slowness — evening firesides, wellness gatherings, farm-to-table moments, and meaningful connection.",
  },
  {
    number: "04",
    title: "Forest-Integrated Architecture",
    description:
      "Every villa emerges from the landscape rather than dominating it — following natural contours, preserving existing ecosystems, and blending into the terrain.",
  },
  {
    number: "05",
    title: "Wellness and Movement",
    description:
      "Yoga decks, walking trails, restorative spaces, and nature-led wellness experiences are integrated seamlessly into the environment.",
  },
  {
    number: "06",
    title: "Quiet Hospitality",
    description:
      "Luxury here is expressed through restraint — thoughtful service, immersive nature, and environments curated for calm rather than excess.",
  },
  {
    number: "07",
    title: "Work-from-Nature Setups",
    description:
      "Private work lounges and nature-facing decks allow residents to work remotely while remaining immersed within a quiet forest ecosystem.",
  },
];

type AccordionProps = {
  number: string;
  title: string;
  description: string;
};

function AccordionItem({
  number,
  title,
  description,
}: AccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10">

      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="
          w-full
          py-5 md:py-6
          flex items-start justify-between gap-6
          text-left
          group
        "
      >

        <div className="flex gap-4 md:gap-6">

          <p className="text-[10px] tracking-[0.35em] uppercase text-ivory/30 pt-1.5 shrink-0">
            {number}
          </p>

          <h3
            className="
              font-serif font-light
              text-lg md:text-xl lg:text-2xl
              text-ivory/90
              tracking-wide leading-snug
              transition-colors duration-300
              group-hover:text-ivory
            "
          >
            {title}
          </h3>

        </div>

        {/* Plus icon */}
        <div
          className={`
            mt-1 shrink-0
            text-gold text-xl font-light
            transition-transform duration-500
            ${open ? "rotate-45" : ""}
          `}
        >
          +
        </div>

      </button>

      {/* Content */}
      <div
        className={`
          overflow-hidden transition-all duration-500 ease-in-out
          ${open ? "max-h-40 pb-5" : "max-h-0"}
        `}
      >
        <div className="pl-[42px] md:pl-[64px] max-w-2xl">
          <p className="text-sm text-ivory/55 leading-relaxed font-light">
            {description}
          </p>
        </div>
      </div>

    </div>
  );
}

export default function AntaranyaExperience() {
  return (
    <section
      id="about"
      className="bg-green text-ivory py-16 md:py-20 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <FadeIn>
          <div className="mb-10 md:mb-12">

            <h2
              className="
                font-serif font-light
                text-2xl md:text-3xl lg:text-4xl
                text-ivory tracking-wide leading-tight
                max-w-3xl
              "
            >
              What Makes Antaranya So Unique
            </h2>

          </div>
        </FadeIn>

        <div className="border-t border-white/10">

          {items.map((item) => (
            <AccordionItem
              key={item.number}
              number={item.number}
              title={item.title}
              description={item.description}
            />
          ))}

        </div>

      </div>
    </section>
  );
}
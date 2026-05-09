"use client";

import { useEffect, useRef, useState } from "react";
import FadeIn from "@/components/ui/FadeIn";

const points = [
  {
    number: "01",
    title: "Emerging Demand",
    description:
      "Affluent buyers are increasingly shifting toward private, nature-led second homes within driving distance of major cities, driven by a desire for privacy, wellness, and meaningful ownership.",
  },
  {
    number: "02",
    title: "Supply Gap",
    description:
      "Premium, low-density, nature-integrated communities remain extremely limited and fragmented, creating a structural imbalance between demand and credible supply.",
  },
  {
    number: "03",
    title: "Scarcity-Driven Value",
    description:
      "Limited density and carefully curated development ensure exclusivity, enabling stronger pricing power, long-term appreciation, and controlled inventory release.",
  },
  {
    number: "04",
    title: "Land-Backed Ownership",
    description:
      "Each investment is anchored in tangible land ownership, combining intrinsic asset value with structured development and brand-led premium positioning.",
  },
];

export default function Investment() {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  // ✨ Subtle parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const progress = (rect.top - windowHeight) / windowHeight;
        setOffset(progress * 30);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="investment">

      {/* ── Section 1: Visual ───────────────────────────────── */}
      <div ref={ref} className="w-full h-[70vh] overflow-hidden">
        <img
          src="/media/investment-hero-1.png"
          alt="Investment landscape"
          style={{
            transform: `translateY(${offset}px) scale(1.06)`,
          }}
          className="
            w-full h-full object-cover
            transition-transform duration-1000 ease-out
          "
        />
      </div>

      {/* ── Section 2: Heading + Content ───────────────────── */}
      <section className="bg-ivory text-green py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <FadeIn>
            <div className="text-center mb-20 md:mb-24">
              <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl text-green tracking-wide mb-6">
                Investment
              </h2>

              <p className="font-serif font-light text-lg md:text-xl lg:text-2xl text-green/65 tracking-wide max-w-2xl mx-auto">
                A rare convergence of demand, scarcity, and vision.
              </p>
            </div>
          </FadeIn>

          {/* ── Equal Height Grid ───────────────────────────── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {points.map((point, i) => (
              <FadeIn key={point.number} delay={i * 120}>
                <div
                  className="
                    group h-full flex flex-col
                    min-h-[260px] md:min-h-[280px]
                    border border-green/10 rounded-xl
                    p-8 md:p-10
                    transition-all duration-500 ease-out
                    hover:-translate-y-1
                    hover:border-gold/20
                  "
                >
                  {/* Number */}
                  <p className="text-[10px] tracking-[0.4em] uppercase text-green/30 mb-4">
                    {point.number}
                  </p>

                  {/* Title */}
                  <h3
                    className="
                      font-serif font-light
                      text-lg md:text-xl
                      text-green tracking-wide uppercase
                      mb-4 leading-snug
                    "
                  >
                    {point.title}
                  </h3>

                  {/* Divider */}
                  <div className="w-6 h-px bg-gold/50 mb-5 transition-all duration-500 group-hover:w-10 group-hover:bg-gold" />

                  {/* Description */}
                  <p className="text-sm md:text-base text-green/70 leading-relaxed font-light flex-grow">
                    {point.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* ── CTA ───────────────────────────────────────── */}
          <FadeIn delay={250}>
            <div className="flex justify-end mt-16 md:mt-20">
              <a
                href="/media/investor-deck.pdf"
                download
                className="
                  px-6 py-2.5
                  text-[11px] tracking-[0.25em] uppercase
                  border border-gold text-gold
                  hover:bg-gold hover:text-green
                  hover:shadow-[0_10px_30px_rgba(230,197,148,0.25)]
                  transition-all duration-500 ease-out
                "
              >
                Get Investment Details
              </a>
            </div>
          </FadeIn>

        </div>
      </section>

    </div>
  );
}
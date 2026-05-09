"use client";

import { useEffect, useState } from "react";

const slides = [
  "/media/path.png",
  "/media/villa1.png",
  "/media/deck3.png",
  "/media/stargazing.png",
  "/media/firepit.png",
];

export default function AntaranyaSlideshow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 4200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">

      {/* ── Slides ───────────────────────────────────── */}
      {slides.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          aria-hidden="true"
          className={`
            absolute inset-0 w-full h-full object-cover
            transition-all duration-[2200ms] ease-in-out
            ${i === active
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
            }
          `}
        />
      ))}

      {/* ── Cinematic overlay ───────────────────────── */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.28), rgba(32,58,54,0.58))",
        }}
      />

      {/* ── Hero Content ────────────────────────────── */}
      <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-6">

        <div className="max-w-4xl">

          <p className="text-[10px] md:text-[11px] tracking-[0.5em] uppercase text-ivory/45 mb-8">
            Chikmagalur, Karnataka
          </p>

          <h1
            className="
              font-serif font-light
              text-5xl md:text-7xl lg:text-8xl
              text-ivory tracking-wide leading-none
              mb-8
            "
          >
            ANTARANYA
          </h1>

          <p
            className="
              text-base md:text-lg
              text-ivory/70 font-light
              leading-relaxed max-w-2xl mx-auto
            "
          >
            A forest-integrated villa community designed around
            stillness, rarity, and regenerative living.
          </p>

        </div>

      </div>

      {/* ── Progress indicators ────────────────────── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`
              h-px transition-all duration-500
              ${i === active
                ? "w-12 bg-gold"
                : "w-6 bg-white/25"
              }
            `}
          />
        ))}
      </div>

    </section>
  );
}
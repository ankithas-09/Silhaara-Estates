"use client";

import { useState, useEffect } from "react";
import FadeIn from "@/components/ui/FadeIn";

type Amenity = { title: string; image: string };
type Phase = "idle" | "exit" | "enter";
type Direction = "right" | "left";

const amenities: Amenity[] = [
  { title: "Gym",                  image: "/media/gym1.png" },
  { title: "Padel Court",          image: "/media/padel.png" },
  { title: "Swimming Pool",        image: "/media/pool1.png" },
  { title: "Yoga Deck",            image: "/media/yoga-deck.png" },
  { title: "Children's Play Area", image: "/media/children.png" },
  { title: "Work from Nature",     image: "/media/work1.png" },
  { title: "Farm to Table",        image: "/media/organic-fresh1.png" },
  { title: "Stargazing Pod",       image: "/media/stargazing1.png" },
];

const total = amenities.length;

function useVisibleCount() {
  const [count, setCount] = useState(3);
  useEffect(() => {
    function update() {
      if      (window.innerWidth <  640) setCount(1);
      else if (window.innerWidth < 1024) setCount(2);
      else                               setCount(3);
    }
    update();
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);
  return count;
}

export default function Amenities() {
  const [index, setIndex]       = useState(0);
  const [phase, setPhase]       = useState<Phase>("idle");
  const [direction, setDirection] = useState<Direction>("right");
  const visibleCount = useVisibleCount();

  function slide(dir: "prev" | "next") {
    if (phase !== "idle") return;
    const d: Direction = dir === "next" ? "right" : "left";
    setDirection(d);
    setPhase("exit");

    setTimeout(() => {
      setIndex((prev) =>
        dir === "next"
          ? (prev + visibleCount) % total
          : (prev - visibleCount + total) % total
      );
      setPhase("enter");
      setTimeout(() => setPhase("idle"), 460);
    }, 300);
  }

  function jumpTo(i: number) {
    if (phase !== "idle" || i === index) return;
    setDirection(i > index ? "right" : "left");
    setPhase("exit");
    setTimeout(() => {
      setIndex(i);
      setPhase("enter");
      setTimeout(() => setPhase("idle"), 460);
    }, 300);
  }

  const trackAnimation =
    phase === "exit"
      ? `${direction === "right" ? "slideOutLeft" : "slideOutRight"} 0.3s ease both`
      : phase === "enter"
      ? `${direction === "right" ? "slideInFromRight" : "slideInFromLeft"} 0.46s ease both`
      : "none";

  const visibleItems = Array.from({ length: visibleCount }, (_, i) =>
    amenities[(index + i) % total]
  );

  return (
    <section
      id="amenities"
      className="bg-green text-ivory py-28 md:py-36 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* ── Heading ──────────────────────────────────────────────── */}
        <FadeIn>
          <div className="text-center mb-16 md:mb-20">
            <h2
              className="
                font-serif font-light
                text-3xl md:text-4xl lg:text-5xl
                text-ivory tracking-wide mb-5
              "
            >
              Amenities
            </h2>
            <p className="text-base md:text-lg text-ivory/65 font-light max-w-xl mx-auto leading-relaxed">
              Curated spaces designed for restoration, movement,
              stillness, and connection with nature.
            </p>
          </div>
        </FadeIn>

        {/* ── Carousel ─────────────────────────────────────────────── */}
        <FadeIn delay={150}>
          <div className="flex items-center gap-4 md:gap-6">

            {/* ← Prev */}
            <button
              onClick={() => slide("prev")}
              aria-label="Previous amenity"
              className="
                shrink-0 w-10 h-10 md:w-11 md:h-11 rounded-full
                border border-white/15
                flex items-center justify-center
                text-ivory/50 hover:text-ivory hover:bg-white/8
                transition-all duration-300
              "
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M9 11.5L4.5 7L9 2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Track */}
            <div className="flex-1 min-w-0">
              <div
                className="flex gap-6 md:gap-8"
                style={{ animation: trackAnimation }}
              >
                {visibleItems.map((item, i) => (
                  <div
                    key={`${index}-${i}`}
                    className="flex flex-col items-center"
                    style={{ flex: "1 1 0", minWidth: 0 }}
                  >
                    <p
                      className="
                        font-serif text-sm md:text-base
                        tracking-[0.25em] uppercase
                        text-ivory/75 text-center mb-4
                      "
                    >
                      {item.title}
                    </p>
                    <div className="w-full overflow-hidden rounded-2xl">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="
                          w-full h-[420px] md:h-[480px] object-cover
                          transition-transform duration-700 ease-out
                          hover:scale-105
                        "
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* → Next */}
            <button
              onClick={() => slide("next")}
              aria-label="Next amenity"
              className="
                shrink-0 w-10 h-10 md:w-11 md:h-11 rounded-full
                border border-white/15
                flex items-center justify-center
                text-ivory/50 hover:text-ivory hover:bg-white/8
                transition-all duration-300
              "
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M5 2.5L9.5 7L5 11.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

          </div>
        </FadeIn>

        {/* ── Dot indicators ───────────────────────────────────────── */}
        <FadeIn delay={280}>
          <div className="flex justify-center items-center gap-2 mt-10">
            {amenities.map((a, i) => (
              <button
                key={i}
                onClick={() => jumpTo(i)}
                aria-label={`Go to ${a.title}`}
                className={`
                  h-px rounded-full transition-all duration-400
                  ${i === index
                    ? "w-8 bg-gold"
                    : "w-4 bg-ivory/20 hover:bg-ivory/40"
                  }
                `}
              />
            ))}
          </div>
        </FadeIn>

      </div>
    </section>
  );
}

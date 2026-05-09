import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import NilaGallery from "@/components/sections/NilaGallery";
import NilaFloorPlans from "@/components/sections/NilaFloorPlans";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "NILA — Stillness Within the Forest · ANTARANYA",
  description:
    "NILA is a compact forest residence at ANTARANYA, designed around stillness, natural light, and quiet living within Chikmagalur.",
};

/* ── Info card data ─────────────────────────────────────────────────── */
const specs = [
  { label: "Plot Area", value: "15,000 sqft" },
  { label: "Villa Size", value: "1,000 - 1500 sqft" },
  { label: "Configurations", value: "2BHK · 3BHK" },
];

export default function NilaPage() {
  return (
    <main className="bg-ivory text-green overflow-x-hidden">

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* MINIMAL VILLA NAVBAR                                       */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <header
        className="
          fixed top-0 left-0 w-full z-50
          px-6 md:px-10 lg:px-14
          py-5
        "
      >
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a href="/antaranya">
            <img
              src="/media/silhaara-logo.png"
              alt="Silhaara"
              className="
                h-12 md:h-14
                w-auto
                object-contain
              "
            />
          </a>

          {/* Our Villas Button */}
          <a
            href="/antaranya#villas"
            className="
              px-6 py-3
              rounded-full
              bg-[#f5f2eb]
              border border-[#f5f2eb]/70
              text-green
              text-[10px]
              tracking-[0.32em]
              uppercase
              shadow-[0_10px_30px_rgba(0,0,0,0.08)]
              hover:bg-white
              hover:scale-[1.03]
              transition-all duration-500
            "
          >
            Our Villas
          </a>

        </div>
      </header>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* 1. FULLSCREEN HERO                                        */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative h-[92vh] overflow-hidden">

        {/* Background Image */}
        <img
          src="/media/v1-img1.png"
          alt="NILA forest residence"
          className="absolute inset-0 w-full h-full object-cover animate-slow-zoom"
          draggable={false}
        />

        {/* Cinematic Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(18,52,46,0.28) 0%, rgba(18,52,46,0.38) 60%, rgba(18,52,46,0.60) 100%)",
          }}
          aria-hidden="true"
        />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

          <FadeIn>
            <p className="text-[10px] tracking-[0.55em] uppercase text-ivory/50 mb-7">
              Antaranya Forest Residences
            </p>
          </FadeIn>

          <FadeIn delay={120}>
            <h1
              className="
                font-serif font-light
                text-6xl md:text-8xl lg:text-[8rem]
                text-ivory tracking-wide leading-none
                mb-7
              "
            >
              NILA
            </h1>
          </FadeIn>

          <FadeIn delay={240}>
            <p
              className="
                text-sm md:text-base
                text-ivory/65 font-light
                max-w-md
                leading-relaxed tracking-wide
              "
            >
              Stillness — Compact forest residence designed around
              calm living
            </p>
          </FadeIn>

        </div>

      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* 2. FLOATING SPEC CARDS                                    */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="relative z-20 -mt-12 md:-mt-14 px-6 mb-0">

        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">

          {specs.map((s, i) => (
            <FadeIn key={s.label} delay={i * 80}>

              <div
                className="
                  bg-ivory/95 backdrop-blur-sm
                  border border-green/8
                  rounded-2xl
                  shadow-[0_8px_40px_rgba(0,0,0,0.07)]
                  px-7 py-6
                  text-center
                "
              >
                <p className="text-[9px] tracking-[0.45em] uppercase text-green/38 mb-3">
                  {s.label}
                </p>

                <p className="font-serif font-light text-2xl md:text-3xl text-green tracking-wide">
                  {s.value}
                </p>

              </div>

            </FadeIn>
          ))}

        </div>

      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* 3. DESIGN PHILOSOPHY                                      */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-28 md:py-40 px-6">

        <div className="max-w-5xl mx-auto">

          <FadeIn>

            <div className="max-w-3xl mx-auto">

              <p className="text-[10px] tracking-[0.45em] uppercase text-green/35 mb-8">
                Design Philosophy
              </p>

              <h2
                className="
                  font-serif font-light
                  text-3xl md:text-4xl lg:text-5xl
                  text-green tracking-wide leading-relaxed mb-12
                "
              >
                Architecture Designed Around Stillness
              </h2>

              <div className="w-10 h-px bg-gold/45 mb-12" />

              <div className="space-y-7 text-base md:text-lg text-green/62 font-light leading-[1.95]">

                <p>
                  NILA is designed as a quiet forest retreat where
                  architecture remains restrained and nature dominates
                  the experience. The villa emphasizes stillness,
                  openness, natural light, and indoor-outdoor
                  transitions.
                </p>

                <p>
                  Large openings frame the surrounding landscape while
                  warm natural materials create a soft and calming
                  atmosphere throughout the residence. Every space is
                  intentionally designed to feel intimate, breathable,
                  and deeply connected to the forest.
                </p>

                <p>
                  The experience prioritizes quiet luxury over excess,
                  allowing simplicity, proportion, texture, and light
                  to define the character of the home.
                </p>

              </div>

            </div>

          </FadeIn>

        </div>

      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* 4. CINEMATIC GALLERY                                      */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <NilaGallery />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* 5. FLOOR PLANS                                            */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <NilaFloorPlans />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* 6. CONTACT SECTION                                        */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <Contact />

    </main>
  );
}
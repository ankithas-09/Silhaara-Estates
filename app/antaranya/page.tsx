import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import FadeIn from "@/components/ui/FadeIn";
import AntaranyaSlideshow from "@/components/sections/AntaranyaSlideshow";
import AntaranyaVillas from "@/components/sections/AntaranyaVillas";
import AntaranyaExperience from "@/components/sections/AntaranyaExperience";
import AntaranyaPlotMap from "@/components/sections/AntaranyaPlotMap";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "ANTARANYA — SILHAARA",
  description:
    "A forest-integrated villa community in Chikmagalur designed around stillness, rarity, and regenerative living.",
};

export default function AntaranyaPage() {
  return (
    <main className="bg-green overflow-x-hidden">

      <Navbar />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* 1. FULLSCREEN CINEMATIC HERO                           */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <AntaranyaSlideshow />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* 2. PROJECT NARRATIVE                                   */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        id="about"
        className="bg-ivory text-green py-20 md:py-28 lg:py-32 px-6"
      >
        <div className="max-w-5xl mx-auto">

          <FadeIn>
            <div className="max-w-3xl mx-auto">

              <p className="text-[10px] tracking-[0.45em] uppercase text-green/35 mb-10">
                Chikmagalur, Karnataka
              </p>

              <p
                className="
                  font-serif font-light
                  text-2xl md:text-3xl lg:text-[3.2rem]
                  text-green leading-[1.45]
                  tracking-[0.01em]
                  mb-14
                "
              >
                ANTARANYA is a low-density forest retreat envisioned as
                a quieter alternative to conventional luxury living —
                where architecture exists in dialogue with land, light,
                and landscape.
              </p>

              <div className="w-10 h-px bg-gold/50 mb-12" />

              <div className="space-y-8 text-green/65 text-base md:text-lg font-light leading-[1.95]">

                <p>
                  Spread across 20 acres in Chikmagalur, the project is
                  intentionally limited to just 15 private villas,
                  preserving openness, ecological balance, and a sense
                  of rare stillness.
                </p>

                <p>
                  Rather than clearing nature to build, ANTARANYA is
                  designed to emerge from its surroundings — integrating
                  native landscapes, low-impact planning, and immersive
                  hospitality into a singular living experience.
                </p>

              </div>

            </div>
          </FadeIn>

        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* 3. PROJECT SCALE + RARITY                              */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-ivory text-green pb-28 md:pb-36 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="border-y border-green/10">

            <div className="grid grid-cols-1 md:grid-cols-3">

              {/* ── 20 Acres ───────────────────────────── */}
              <FadeIn>
                <div className="py-14 md:py-20 md:px-10 border-b md:border-b-0 md:border-r border-green/10">

                  <p className="text-[10px] tracking-[0.4em] uppercase text-green/30 mb-6">
                    Land
                  </p>

                  <h2
                    className="
                      font-serif font-light
                      text-5xl md:text-6xl
                      leading-none tracking-tight
                      text-green mb-6
                    "
                  >
                    20
                  </h2>

                  <p className="font-serif text-lg md:text-xl text-green/75 mb-5">
                    Acres
                  </p>

                  <p className="text-sm md:text-base text-green/55 font-light leading-relaxed">
                    Low-density forest-integrated planning designed around openness,
                    preservation, and long-term stewardship.
                  </p>

                </div>
              </FadeIn>

              {/* ── 15 Villas ─────────────────────────── */}
              <FadeIn delay={120}>
                <div className="py-14 md:py-20 md:px-10 border-b md:border-b-0 md:border-r border-green/10">

                  <p className="text-[10px] tracking-[0.4em] uppercase text-green/30 mb-6">
                    Residences
                  </p>

                  <h2
                    className="
                      font-serif font-light
                      text-5xl md:text-6xl
                      leading-none tracking-tight
                      text-green mb-6
                    "
                  >
                    15
                  </h2>

                  <p className="font-serif text-lg md:text-xl text-green/75 mb-5">
                    Villas
                  </p>

                  <p className="text-sm md:text-base text-green/55 font-light leading-relaxed">
                    A consciously limited collection curated for rarity,
                    privacy, silence, and enduring value.
                  </p>

                </div>
              </FadeIn>

              {/* ── Chikmagalur ───────────────────────── */}
              <FadeIn delay={240}>
                <div className="py-14 md:py-20 md:px-10">

                  <p className="text-[10px] tracking-[0.4em] uppercase text-green/30 mb-6">
                    Location
                  </p>

                  <h2
                    className="
                      font-serif font-light
                      text-4xl md:text-5xl
                      leading-none tracking-tight
                      text-green mb-6
                    "
                  >
                    Chikmagalur
                  </h2>

                  <p className="font-serif text-lg md:text-xl text-green/75 mb-5">
                    Karnataka
                  </p>

                  <p className="text-sm md:text-base text-green/55 font-light leading-relaxed">
                    Surrounded by forests, coffee estates, mist, and open skies
                    in one of South India’s quietest landscapes.
                  </p>

                </div>
              </FadeIn>

            </div>

          </div>

        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* 4. EXPERIENCE ACCORDION                                */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <AntaranyaExperience />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* 5. OUR VILLAS                                          */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="villas">
        <AntaranyaVillas />
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* 6. INTERACTIVE MASTERPLAN                              */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="plot-map">
        <AntaranyaPlotMap />
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* 7. CONTACT SECTION                                     */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <Contact />

    </main>
  );
}
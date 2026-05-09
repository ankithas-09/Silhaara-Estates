import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import AranyakaGallery from "@/components/sections/AranyakaGallery";
import AranyakaFloorPlans from "@/components/sections/AranyakaFloorPlans";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "ARANYAKA — A Complete Forest Estate · ANTARANYA",
  description:
    "ARANYAKA is a complete private forest estate at ANTARANYA — conceived for slow, generational living within dense landscape in Chikmagalur.",
};

/* ── Info card data ─────────────────────────────────────────────────── */
const specs = [
  { label: "Plot Area", value: "43560 sqft" },
  { label: "Villa Size", value: "2800 - 3800 sqft" },
  { label: "Configurations", value: "3BHK, 4BHK, 5BHK" },
];

export default function AranyakaPage() {
  return (
    <main className="bg-ivory text-green overflow-x-hidden">

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* TOP FLOATING BUTTON                                        */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div
        className="
          fixed top-0 left-0 w-full z-50
          px-6 md:px-10 lg:px-14
          py-6
          flex justify-end
        "
      >

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

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* 1. FULLSCREEN HERO                                         */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative h-[92vh] overflow-hidden">

        {/* Background image */}
        <img
          src="/media/v3-img1.png"
          alt="ARANYAKA forest estate"
          className="absolute inset-0 w-full h-full object-cover animate-slow-zoom"
          draggable={false}
        />

        {/* Cinematic overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(18,52,46,0.20) 0%, rgba(18,52,46,0.32) 55%, rgba(18,52,46,0.65) 100%)",
          }}
          aria-hidden="true"
        />

        {/* Hero content */}
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
                text-5xl md:text-7xl lg:text-[8rem]
                text-ivory tracking-wide leading-none
                mb-7
              "
            >
              ARANYAKA
            </h1>
          </FadeIn>

          <FadeIn delay={240}>
            <p
              className="
                text-sm md:text-base
                text-ivory/65 font-light
                max-w-sm md:max-w-md
                leading-relaxed tracking-wide
              "
            >
              Timeless — A complete private forest estate for slow,
              generational living
            </p>
          </FadeIn>

        </div>

      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* 2. FLOATING SPEC CARDS                                     */}
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
      {/* 3. DESIGN PHILOSOPHY                                       */}
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
                A Private World Within the Forest
              </h2>

              <div className="w-10 h-px bg-gold/45 mb-12" />

              <div className="space-y-7 text-base md:text-lg text-green/62 font-light leading-[1.95]">

                <p>
                  ARANYAKA is conceived not merely as a residence but
                  as a complete private forest world, a self-contained
                  estate hidden within dense landscape and designed
                  for those who seek permanence, depth, and
                  generational belonging.
                </p>

                <p>
                  Large-span architecture opens entirely to the forest,
                  while private nature trails, wellness courts, and an
                  estate-scale pool create a living environment that
                  extends far beyond the built boundary. The estate
                  belongs to the land as much as it belongs to its
                  inhabitants.
                </p>

                <p>
                  Timeless materials, unhurried proportions, and a
                  commitment to enduring craft define every space.
                  ARANYAKA is designed to age gracefully deepening
                  in character alongside the forest that surrounds it.
                </p>

              </div>

            </div>

          </FadeIn>

        </div>

      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* 4. CINEMATIC GALLERY                                       */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <AranyakaGallery />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* 5. FLOOR PLANS                                             */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <AranyakaFloorPlans />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* 6. CONTACT SECTION                                         */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <Contact />

    </main>
  );
}
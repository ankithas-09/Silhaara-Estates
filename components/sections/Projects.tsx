import FadeIn from "@/components/ui/FadeIn";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-ivory text-green py-28 md:py-36 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* ── Heading ───────────────────────────────────────────── */}
        <FadeIn>
          <div className="text-center mb-14 md:mb-18">
            <p className="text-[10px] tracking-[0.45em] uppercase text-green/35 mb-5">
              Destinations
            </p>

            <h2
              className="
                font-serif font-light
                text-3xl md:text-4xl lg:text-5xl
                text-green tracking-wide mb-5
              "
            >
              Projects
            </h2>

            <p className="text-base md:text-lg text-green/60 font-light max-w-xl mx-auto leading-relaxed">
              Forest-integrated destinations designed around rarity,
              stillness, and regenerative living.
            </p>
          </div>
        </FadeIn>

        {/* ── Featured Project Card ───────────────────────────── */}
        <FadeIn delay={140}>
          <div
            className="
              relative w-full
              h-[500px] md:h-[620px]
              rounded-3xl overflow-hidden
              group
            "
          >
            {/* Background image */}
            <img
              src="/media/antaranya-cover.png"
              alt="Antaranya — Chikmagalur"
              className="
                absolute inset-0 w-full h-full object-cover
                transition-transform duration-[1400ms] ease-out
                group-hover:scale-[1.04]
              "
            />

            {/* Cinematic overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(32,58,54,0.82), rgba(32,58,54,0.38), rgba(32,58,54,0.16))",
              }}
            />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-10 md:p-14 z-10">

              {/* Label */}
              <p className="text-[10px] tracking-[0.4em] uppercase text-ivory/55 mb-3">
                Flagship Project
              </p>

              {/* Title */}
              <h3
                className="
                  font-serif font-light
                  text-3xl md:text-4xl lg:text-5xl
                  text-ivory tracking-wide mb-4
                "
              >
                ANTARANYA
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base text-ivory/72 font-light max-w-sm leading-relaxed mb-8">
                A forest-integrated villa community in Chikmagalur
                designed around stillness, privacy, and regenerative
                living.
              </p>

              {/* CTA */}
              <a
                href="/antaranya"
                className="
                  self-start
                  px-6 py-2.5
                  text-[11px] tracking-[0.25em] uppercase
                  text-gold
                  border border-gold/60
                  bg-black/20 backdrop-blur-sm
                  shadow-[0_8px_30px_rgba(0,0,0,0.25)]
                  hover:bg-gold hover:text-green
                  hover:border-gold
                  transition-all duration-500 ease-out
                "
              >
                Explore Project
              </a>

            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
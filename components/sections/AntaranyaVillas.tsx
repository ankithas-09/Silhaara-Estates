"use client";

import FadeIn from "@/components/ui/FadeIn";

type Villa = {
  number: string;
  identity: string;
  name: string;
  description: string;
  image: string;
  cta: string;
  href: string;
};

const villas: Villa[] = [
  {
    number: "01",
    identity: "Quiet & Grounded",
    name: "NILA",
    description:
      "NILA is designed around stillness; a compact forest residence where soft light, natural textures, and open transitions create a deeply calming living experience. Wrapped by landscape and shaped by restraint, the architecture quietly dissolves into the forest around it.",
    image: "/media/v1-img1.png",
    cta: "View NILA Residences",
    href: "/villas/nila",
  },
  {
    number: "02",
    identity: "Immersive & Expansive",
    name: "VANYA",
    description:
      "VANYA is shaped by openness and connection; a hospitality-inspired forest residence where dramatic volumes, elevated pools, wellness spaces, and indoor-outdoor living create an immersive relationship with nature.",
    image: "/media/v2-img1.png",
    cta: "View VANYA Residences",
    href: "/villas/vanya",
  },
  {
    number: "03",
    identity: "Timeless & Elemental",
    name: "ARANYAKA",
    description:
      "ARANYAKA is conceived as a complete private forest estate; hidden within dense landscape and designed for slow, generational living. Large-span architecture, private nature trails, wellness courts, and estate-scale experiences create a world that belongs entirely to the forest.",
    image: "/media/v3-img1.png",
    cta: "View ARANYAKA Estates",
    href: "/villas/aranyaka",
  },
];

export default function AntaranyaVillas() {
  return (
    <section
      id="villas"
      className="
        relative overflow-hidden
        bg-[#f5f2eb]
        text-green
      "
    >
      {/* Atmospheric Background Texture */}
      <div
        className="
          absolute inset-0
          opacity-[0.65]
          pointer-events-none
        "
        style={{
          backgroundImage:
            "radial-gradient(circle at top left, rgba(18,52,46,0.03), transparent 32%), radial-gradient(circle at bottom right, rgba(212,184,134,0.05), transparent 30%)",
        }}
      />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* SECTION INTRO                                       */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="relative z-10 px-8 md:px-12 lg:px-16 xl:px-24 pt-28 md:pt-36 pb-16 md:pb-20">

        <div className="max-w-6xl mx-auto">

          <FadeIn>
            <p className="text-[10px] tracking-[0.5em] uppercase text-green/35 mb-8">
              Our Forest Residences
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <h2
              className="
                font-serif font-light
                text-3xl md:text-4xl lg:text-[3.2rem]
                leading-[1.15]
                tracking-[0.01em]
                text-green
                max-w-3xl
                mb-10
              "
            >
              Three Distinct Ways
              <br />
              of Belonging to Nature
            </h2>
          </FadeIn>

          <FadeIn delay={180}>
            <div className="w-10 h-px bg-gold/40 mb-10" />
          </FadeIn>

          <FadeIn delay={260}>
            <div
              className="
                max-w-3xl
                space-y-6
                text-base md:text-lg
                text-green/60
                font-light
                leading-[1.9]
              "
            >
              <p>
                At ANTARANYA in Chikmagalur, each residence is designed
                as a different experience of forest living from intimate
                retreats immersed in stillness to expansive private estates
                hidden within the landscape.
              </p>

              <p>
                NILA embraces quiet simplicity and calm immersion.
                VANYA opens itself to light, movement, and shared
                experiences within nature. ARANYAKA becomes a complete
                private forest world; timeless, layered, and deeply
                rooted in the land around it.
              </p>

              <p>
                Together, the collection reflects ANTARANYA’s philosophy
                of regenerative luxury, where architecture exists in
                harmony with forest, climate, and silence.
              </p>
            </div>
          </FadeIn>

        </div>

      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* VILLA PANELS                                         */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="relative z-10 px-8 md:px-12 lg:px-16 xl:px-24 pb-24 md:pb-32">

        <div className="max-w-[1500px] mx-auto">

          {villas.map((villa, index) => (
            <FadeIn key={villa.name} delay={index * 120}>

              <div
                className={`
                  relative
                  min-h-[68vh]
                  flex flex-col lg:flex-row
                  items-center
                  gap-12 lg:gap-16
                  ${index !== 0 ? "mt-16 md:mt-24" : ""}
                `}
              >
                {/* IMAGE SIDE */}
                <div className="w-full lg:w-[58%]">

                  <div
                    className={`
                      relative
                      overflow-hidden
                      rounded-[2rem] md:rounded-[2.5rem]
                      shadow-[0_30px_80px_rgba(0,0,0,0.10)]
                      ${
                        villa.name === "ARANYAKA"
                          ? "aspect-[16/11]"
                          : "aspect-[16/10]"
                      }
                    `}
                  >
                    {/* Image */}
                    <img
                      src={villa.image}
                      alt={villa.name}
                      draggable={false}
                      className="
                        absolute inset-0
                        w-full h-full
                        object-cover
                        transition-transform duration-[2200ms]
                        ease-out
                        hover:scale-[1.03]
                      "
                    />

                    {/* Cinematic Overlay */}
                    <div
                      className="
                        absolute inset-0
                        pointer-events-none
                      "
                      style={{
                        background:
                          "linear-gradient(to top, rgba(18,52,46,0.42), rgba(18,52,46,0.06))",
                      }}
                    />

                    {/* Border */}
                    <div
                      className="
                        absolute inset-0
                        rounded-[2rem] md:rounded-[2.5rem]
                        ring-1 ring-black/5
                      "
                    />

                    {/* Number Overlay */}
                    <div
                      className="
                        absolute top-6 right-6 md:top-8 md:right-8
                        font-serif font-light
                        text-[80px] md:text-[120px]
                        leading-none
                        text-white/[0.06]
                        select-none
                      "
                    >
                      {villa.number}
                    </div>

                  </div>

                </div>

                {/* CONTENT SIDE */}
                <div className="w-full lg:w-[42%]">

                  {/* Number */}
                  <p
                    className="
                      text-[10px]
                      tracking-[0.45em]
                      uppercase
                      text-green/28
                      mb-5
                    "
                  >
                    {villa.number}
                  </p>

                  {/* Identity */}
                  <p
                    className="
                      text-[10px]
                      tracking-[0.35em]
                      uppercase
                      text-gold/70
                      mb-4
                    "
                  >
                    {villa.identity}
                  </p>

                  {/* Villa Name */}
                  <h3
                    className="
                      font-serif font-light
                      text-4xl md:text-[3.2rem] lg:text-[3.5rem]
                      tracking-[0.01em]
                      leading-none
                      text-green
                      mb-7
                    "
                  >
                    {villa.name}
                  </h3>

                  {/* Divider */}
                  <div className="w-10 h-px bg-gold/35 mb-7" />

                  {/* Description */}
                  <p
                    className="
                      max-w-lg
                      text-sm md:text-base
                      text-green/60
                      font-light
                      leading-[1.95]
                      mb-9
                    "
                  >
                    {villa.description}
                  </p>

                  {/* CTA */}
                  <a
                    href={villa.href}
                    className="
                      group
                      inline-flex
                      items-center
                      gap-3
                      border border-gold/40
                      px-6 py-3
                      text-[10px]
                      tracking-[0.28em]
                      uppercase
                      text-gold
                      hover:bg-gold
                      hover:text-green
                      transition-all duration-700 ease-out
                    "
                  >
                    <span>{villa.cta}</span>

                    <span
                      className="
                        transition-transform duration-500
                        group-hover:translate-x-1.5
                      "
                    >
                      →
                    </span>
                  </a>

                </div>

              </div>

            </FadeIn>
          ))}

        </div>

      </div>

      {/* Bottom Divider */}
      <div className="relative z-10 flex justify-center pb-16">
        <div className="w-14 h-px bg-gold/20" />
      </div>

    </section>
  );
}
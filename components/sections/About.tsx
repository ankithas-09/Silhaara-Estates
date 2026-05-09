import FadeIn from "@/components/ui/FadeIn";
import FoundationBlock from "@/components/ui/FoundationBlock";

const foundations = [
  {
    number: "01",
    title: "Build with the Land, Not on It",
    description:
      "We treat every site as a living system, not a blank plot. Contours, water paths, and ecosystems guide every decision so what exists is preserved and quietly enhanced, never replaced.",
    image: "/media/f1.png",
  },
  {
    number: "02",
    title: "Regenerative Design",
    description:
      "We move beyond sustainability. Each development restores its ecosystem, enriching soil, reintroducing native species, and strengthening the land through our presence.",
    image: "/media/f2.png",
  },
  {
    number: "03",
    title: "Silence as a Design Element",
    description:
      "We design for stillness. Every element reduces noise; visual, physical, and acoustic so what remains is the quiet of the forest, uninterrupted.",
    image: "/media/f3.png",
  },
  {
    number: "04",
    title: "Permanence over Trend",
    description:
      "We build for generations, not cycles. Using natural materials and timeless design, each space is created to feel as enduring as the land itself.",
    image: "/media/f4.png",
  },
];

export default function About() {
  return (
    <>
      {/* ── Vision Block ───────────────────────────────────────── */}
      <section
        id="about"
        className="bg-ivory text-green py-28 md:py-36 lg:py-44 px-6"
      >
        <div className="max-w-4xl mx-auto text-center">

          {/* Main statement */}
          <FadeIn>
            <h2
              className="
                font-serif font-light
                text-2xl md:text-3xl lg:text-4xl
                leading-relaxed tracking-wide
                text-green
              "
            >
              To create a world where forests are not
              <br className="hidden md:block" /> cleared for development, but become its
              <br className="hidden md:block" /> foundation.
            </h2>
          </FadeIn>

          {/* Supporting narrative */}
          <FadeIn delay={200}>
            <div className="mt-12 space-y-6 max-w-2xl mx-auto">

              <p className="font-serif font-light text-base md:text-lg lg:text-xl leading-relaxed text-green/80">
                SILHAARA envisions a future where living is seamlessly integrated within natural ecosystems, preserving their beauty and balance.
              </p>

              <p className="font-serif font-light text-base md:text-lg lg:text-xl leading-relaxed text-green/65">
                We aim to redefine luxury by shifting from excess to coexistence, placing forests at the center of every decision.
              </p>

              <p className="font-serif font-light text-base md:text-lg lg:text-xl leading-relaxed text-green/50">
                Our vision is to make forest-integrated living the new standard of luxury.
              </p>

            </div>
          </FadeIn>

        </div>
      </section>

      {/* ── Foundations ───────────────────────────────────────── */}
      <section
        id="vision"
        className="bg-ivory text-green pb-28 md:pb-40 px-6"
      >
        <div className="max-w-6xl mx-auto">

          {/* Subtle spacing instead of heading */}
          <div className="h-16 md:h-24" />

          {/* Foundation blocks */}
          <div className="space-y-24 md:space-y-32 lg:space-y-40">
            {foundations.map((block, i) => (
              <FoundationBlock
                key={block.number}
                {...block}
                reverse={i % 2 !== 0}
              />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
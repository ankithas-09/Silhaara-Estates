import FadeIn from "@/components/ui/FadeIn";

export default function ForestConservation() {
  return (
    <section className="bg-green text-ivory py-32 md:py-40 px-6">
      <div className="max-w-5xl mx-auto text-center">

        {/* ── Main statement ───────────────────────────────────────── */}
        <FadeIn>
          <h2
            className="
              font-serif font-light
              text-3xl md:text-5xl lg:text-6xl
              text-ivory leading-relaxed tracking-wide
            "
          >
            We do not see forests as land to be cleared,
            <br className="hidden md:block" /> but as ecosystems to be protected,
            <br className="hidden md:block" /> restored, and lived within.
          </h2>
        </FadeIn>

        {/* ── Divider ──────────────────────────────────────────────── */}
        <FadeIn delay={200}>
          <div className="flex justify-center mt-14 mb-14">
            <div className="w-12 h-px bg-gold/40" />
          </div>
        </FadeIn>

        {/* ── Supporting narrative ─────────────────────────────────── */}
        <FadeIn delay={320}>
          <p
            className="
              text-base md:text-lg lg:text-xl
              text-ivory/60 font-light
              leading-relaxed max-w-2xl mx-auto
            "
          >
            Every SILHAARA development is guided by low-density planning,
            native ecology preservation, regenerative landscaping, and
            long-term stewardship of the land.
          </p>
        </FadeIn>

      </div>
    </section>
  );
}

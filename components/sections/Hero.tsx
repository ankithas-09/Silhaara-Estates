export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* ── Background video (slow zoom) ───────────────────────── */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover animate-slow-zoom"
        aria-hidden="true"
      >
        <source src="/media/landing-page-v2.mp4" type="video/mp4" />
      </video>

      {/* ── Dark green overlay ────────────────────────────────── */}
      <div
        className="absolute inset-0 z-10"
        style={{ backgroundColor: "rgba(32, 58, 54, 0.6)" }}
        aria-hidden="true"
      />

      {/* ── Center content ────────────────────────────────────── */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">

        <h1
          className="
            font-serif font-light text-ivory
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl
            leading-[1.12] tracking-wide
            animate-fade-up
          "
        >
          Luxury that restores<br />what it inhabits
        </h1>

        <p
          className="
            mt-6 md:mt-8
            text-sm md:text-base
            text-ivory/75
            max-w-md md:max-w-lg
            leading-relaxed tracking-wide
            font-light
            animate-fade-up-delay
          "
        >
          Eco-luxury villas where architecture, land, and legacy<br className="hidden md:block" />
          exist in quiet harmony.
        </p>

      </div>

      {/* ── Scroll indicator ──────────────────────────────────── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 animate-fade-in-delay">
        <span className="text-[10px] tracking-[0.35em] text-ivory/40 uppercase">
          Scroll
        </span>
        <div className="relative h-12 w-px bg-ivory/15 overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-full bg-gold animate-scroll-drop" />
        </div>
      </div>

    </section>
  );
}

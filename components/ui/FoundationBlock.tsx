import FadeIn from "./FadeIn";

type Props = {
  number: string;
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
};

export default function FoundationBlock({
  number,
  title,
  description,
  image,
  reverse = false,
}: Props) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* ── Image ───────────────────────────────────────── */}
      <FadeIn delay={reverse ? 100 : 0}>
        <div
        className={`
          relative overflow-hidden rounded-2xl
          aspect-[4/5] md:h-[540px]
          group
          transition-transform duration-700 ease-out
          ${reverse ? "md:-translate-x-6 lg:-translate-x-10" : "md:translate-x-6 lg:translate-x-10"}
       `}
        >
          <img
            src={image}
            alt={title}
            className="
              w-full h-full object-cover
              transition-transform duration-[1200ms] ease-out
              group-hover:scale-[1.04]
            "
          />

          {/* Subtle dark overlay for readability */}
          <div className="absolute inset-0 bg-black/10" />

          {/* Number watermark */}
          <span
            className="
              absolute bottom-6 right-7
              font-serif text-7xl font-light
              text-white/10 select-none
            "
          >
            {number}
          </span>
        </div>
      </FadeIn>

      {/* ── Text ───────────────────────────────────────── */}
      <FadeIn delay={reverse ? 0 : 100}>
        <div className="max-w-md">

          <p className="text-[10px] tracking-[0.35em] uppercase text-green/40 mb-4">
            {number}
          </p>

          <h3
            className="
              font-serif text-2xl md:text-3xl font-light
              text-green leading-snug mb-6
            "
          >
            {title}
          </h3>

          <div className="w-8 h-px bg-gold mb-7" />

          <p className="text-green/65 text-sm md:text-base leading-relaxed font-light">
            {description}
          </p>

        </div>
      </FadeIn>
    </div>
  );
}
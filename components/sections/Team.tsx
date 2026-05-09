import FadeIn from "@/components/ui/FadeIn";

const members = [
  {
    role: "Architecture",
    description:
      "Designed by architects who believe a building should disappear into its landscape. Every structure is a quiet negotiation with the forest — not a statement, but a response. Rooted in biophilic principles, crafted for permanence.",
  },
  {
    role: "Construction",
    description:
      "Built by craftspeople trained in material honesty. Local stone, reclaimed timber, living roofs. Construction practices that leave the site better than they found it — with zero-waste site management and regenerative soil protocols.",
  },
  {
    role: "Experience",
    description:
      "Curated by hospitality minds who understand that true luxury is not about abundance, but about reduction. What remains when everything unnecessary is removed — that is the SILHAARA standard.",
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="bg-green text-ivory pt-4 md:pt-6 lg:pt-8 pb-28 md:pb-36 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* ── Subtle divider ─────────────────────────────────── */}
        <div className="w-full h-px bg-white/5 mb-10 md:mb-12" />

        {/* ── Heading ───────────────────────────────────────── */}
        <FadeIn>
          <div className="text-center mb-14 md:mb-16">
            <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl text-ivory tracking-wide max-w-4xl mx-auto leading-relaxed">
              Built by expertise across design, construction, and experience.
            </h2>
          </div>
        </FadeIn>

        {/* ── Cards ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {members.map((member, i) => (
            <FadeIn key={member.role} delay={i * 120}>
              <div
                className="
                  group relative h-full
                  border border-white/10 rounded-2xl
                  p-8 md:p-10
                  transition-all duration-500 ease-out
                  hover:-translate-y-1
                  hover:border-gold/30
                  hover:bg-white/[0.03]
                "
              >
                {/* Accent line */}
                <div className="w-6 h-px bg-gold/60 mb-8 transition-all duration-500 group-hover:w-12 group-hover:bg-gold" />

                {/* Role */}
                <h3 className="text-[11px] tracking-[0.35em] uppercase text-ivory/50 mb-4">
                  {member.role}
                </h3>

                {/* Description */}
                <p className="text-ivory/75 text-sm md:text-base leading-relaxed font-light">
                  {member.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
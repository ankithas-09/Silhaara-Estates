"use client";

import { useState } from "react";
import FadeIn from "@/components/ui/FadeIn";

const floorPlans = {
  "2BHK": {
    images: [
      "/media/Vanya-2b-f1.png",
      "/media/Vanya-2b-f2.png",
      "/media/Vanya-2b-f3.png",
    ],
    specs: [
      ["Entrance Foyer", "70 sqft"],
      ["Living Pavilion", "320 sqft"],
      ["Dining Area", "120 sqft"],
      ["Show Kitchen", "90 sqft"],
      ["Service Kitchen + Pantry", "60 sqft"],
      ["Master Suite 1", "170 sqft"],
      ["Walk-in Wardrobe 1", "45 sqft"],
      ["Ensuite Bathroom 1", "75 sqft"],
      ["Master Suite 2", "155 sqft"],
      ["Walk-in Wardrobe 2", "40 sqft"],
      ["Ensuite Bathroom 2", "65 sqft"],
      ["Study / Work Alcove", "45 sqft"],
      ["Utility / Laundry / Storage", "45 sqft"],
      ["Circulation", "150 sqft"],
      ["TOTAL", "~1,500 sqft"],
    ],
  },

  "3BHK": {
    images: [
      "/media/Vanya-3b-f1.png",
      "/media/Vanya-3b-f2.png",
      "/media/Vanya-3b-f3.png",
    ],
    specs: [
      ["Entrance Foyer", "85 sqft"],
      ["Grand Living Pavilion", "380 sqft"],
      ["Dining Lounge", "150 sqft"],
      ["Show Kitchen + Island", "120 sqft"],
      ["Service Kitchen + Pantry", "75 sqft"],
      ["Master Suite", "210 sqft"],
      ["Walk-in Wardrobe (Master)", "55 sqft"],
      ["Ensuite Bathroom (Master)", "85 sqft"],
      ["Guest Suite 1", "155 sqft"],
      ["Guest Suite 2", "145 sqft"],
      ["Shared Designer Bathroom", "70 sqft"],
      ["Private Study Lounge", "65 sqft"],
      ["Utility / Laundry / Storage", "55 sqft"],
      ["Internal Courtyard Lounge", "95 sqft"],
      ["Circulation", "240 sqft"],
      ["TOTAL", "~1,800 sqft"],
    ],
  },

  "4BHK": {
    images: [
      "/media/Vanya-4b-f1.png",
      "/media/Vanya-4b-f2.png",
      "/media/Vanya-4b-f3.png",
    ],
    specs: [
      ["Arrival Foyer", "95 sqft"],
      ["Luxury Living Pavilion", "450 sqft"],
      ["Formal Dining Space", "180 sqft"],
      ["Show Kitchen + Island", "140 sqft"],
      ["Service Kitchen + Pantry", "90 sqft"],
      ["Master Suite", "240 sqft"],
      ["Walk-in Wardrobe (Master)", "70 sqft"],
      ["Ensuite Bathroom (Master)", "95 sqft"],
      ["Guest Suite 1", "165 sqft"],
      ["Guest Suite 2", "155 sqft"],
      ["Guest Suite 3", "145 sqft"],
      ["Shared Designer Bathroom", "75 sqft"],
      ["Powder Bathroom", "45 sqft"],
      ["Private Study / Library", "85 sqft"],
      ["Utility / Laundry / Storage", "65 sqft"],
      ["Indoor Forest Lounge", "120 sqft"],
      ["Circulation", "285 sqft"],
      ["TOTAL", "~2,200 sqft"],
    ],
  },
};

export default function VanyaFloorPlans() {
  const [selected, setSelected] = useState<"2BHK" | "3BHK" | "4BHK">("2BHK");
  const [currentImage, setCurrentImage] = useState(0);

  const current = floorPlans[selected];

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === current.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? current.images.length - 1 : prev - 1
    );
  };

  const switchPlan = (plan: "2BHK" | "3BHK" | "4BHK") => {
    setSelected(plan);
    setCurrentImage(0);
  };

  return (
    <section className="pt-10 md:pt-14 pb-28 md:pb-40 px-6 bg-[#f5f2eb]">

      <div className="max-w-[1500px] mx-auto">

        {/* Section Header */}
        <FadeIn>

          <div className="mb-16 md:mb-20">

            <p className="text-[10px] tracking-[0.45em] uppercase text-green/35 mb-5">
              Floor Plans
            </p>

            <h2
              className="
                font-serif font-light
                text-3xl md:text-4xl lg:text-[3.2rem]
                text-green
                tracking-wide
                leading-tight
                max-w-3xl
              "
            >
              Immersive Pavilion
              <br />
              Forest Estate Layouts
            </h2>

          </div>

        </FadeIn>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-14 lg:gap-20 items-center">

          {/* LEFT SIDE — FLOOR PLAN IMAGE */}
          <FadeIn>

            <div className="flex items-center h-full">

              {/* Image Container */}
              <div
                className="
                  relative overflow-hidden
                  rounded-[2rem] md:rounded-[2.6rem]
                  bg-white
                  border border-black/[0.04]
                  shadow-[0_30px_80px_rgba(0,0,0,0.06)]
                  w-full
                "
              >
                <img
                  src={current.images[currentImage]}
                  alt={`${selected} Floor Plan`}
                  className="
                    w-full h-full
                    object-contain
                    transition-all duration-700
                  "
                  draggable={false}
                />

                {/* Left Arrow */}
                <button
                  onClick={prevImage}
                  className="
                    absolute left-5 top-1/2 -translate-y-1/2
                    z-20
                    w-12 h-12
                    rounded-full
                    bg-white/90
                    backdrop-blur-md
                    border border-black/5
                    text-green
                    hover:bg-green
                    hover:text-white
                    transition-all duration-500
                    flex items-center justify-center
                    shadow-lg
                  "
                >
                  ←
                </button>

                {/* Right Arrow */}
                <button
                  onClick={nextImage}
                  className="
                    absolute right-5 top-1/2 -translate-y-1/2
                    z-20
                    w-12 h-12
                    rounded-full
                    bg-white/90
                    backdrop-blur-md
                    border border-black/5
                    text-green
                    hover:bg-green
                    hover:text-white
                    transition-all duration-500
                    flex items-center justify-center
                    shadow-lg
                  "
                >
                  →
                </button>

                {/* Counter */}
                <div
                  className="
                    absolute bottom-5 right-5
                    px-4 py-2
                    rounded-full
                    bg-green/90
                    text-white
                    text-[10px]
                    tracking-[0.28em]
                    uppercase
                  "
                >
                  {String(currentImage + 1).padStart(2, "0")} /{" "}
                  {String(current.images.length).padStart(2, "0")}
                </div>

              </div>

            </div>

          </FadeIn>

          {/* RIGHT SIDE — DETAILS */}
          <FadeIn delay={120}>

            <div className="flex flex-col justify-center h-full">

              {/* Toggle Buttons */}
              <div className="flex gap-3 mb-12 flex-wrap">

                {(["2BHK", "3BHK", "4BHK"] as const).map((plan) => (
                  <button
                    key={plan}
                    onClick={() => switchPlan(plan)}
                    className={`
                      px-6 py-3
                      rounded-full
                      text-[11px]
                      tracking-[0.25em]
                      uppercase
                      transition-all duration-500
                      border
                      ${
                        selected === plan
                          ? "bg-green text-white border-green"
                          : "bg-transparent text-green/60 border-green/10 hover:border-green/30"
                      }
                    `}
                  >
                    {plan}
                  </button>
                ))}

              </div>

              {/* Specs Card */}
              <div
                className="
                  rounded-[2rem]
                  bg-white/70
                  backdrop-blur-sm
                  border border-black/[0.04]
                  p-8 md:p-10
                  shadow-[0_20px_60px_rgba(0,0,0,0.04)]
                "
              >
                <div className="space-y-5">

                  {current.specs.map(([label, value], idx) => (
                    <div
                      key={idx}
                      className={`
                        flex items-start justify-between gap-8
                        ${
                          label === "TOTAL"
                            ? "pt-6 border-t border-green/10 mt-6"
                            : ""
                        }
                      `}
                    >
                      <span
                        className={`
                          text-sm md:text-[15px]
                          leading-relaxed
                          ${
                            label === "TOTAL"
                              ? "font-medium text-green"
                              : "text-green/60 font-light"
                          }
                        `}
                      >
                        {label}
                      </span>

                      <span
                        className={`
                          text-sm md:text-[15px]
                          whitespace-nowrap
                          ${
                            label === "TOTAL"
                              ? "font-medium text-green"
                              : "text-green/80"
                          }
                        `}
                      >
                        {value}
                      </span>

                    </div>
                  ))}

                </div>

              </div>

              {/* Brochure Download */}
              <div className="mt-8">

                <a
                  href="/media/vanya.pdf"
                  download
                  className="
                    inline-flex items-center gap-3
                    px-7 py-4
                    rounded-full
                    bg-green
                    border border-green
                    text-white
                    hover:bg-[#163c35]
                    transition-all duration-500
                    hover:shadow-[0_18px_40px_rgba(18,52,46,0.18)]
                  "
                >
                  <span
                    className="
                      text-white
                      text-[11px]
                      tracking-[0.28em]
                      uppercase
                      whitespace-nowrap
                    "
                  >
                    Download VANYA Brochure
                  </span>

                  <span className="text-white text-base leading-none">
                    ↓
                  </span>
                </a>

              </div>

            </div>

          </FadeIn>

        </div>

      </div>

    </section>
  );
}
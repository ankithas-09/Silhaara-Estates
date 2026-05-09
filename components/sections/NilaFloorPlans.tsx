"use client";

import { useState } from "react";
import FadeIn from "@/components/ui/FadeIn";

const floorPlans = {
  "2BHK": {
    images: [
      "/media/Nila-2b-f1.png",
      "/media/Nila-2b-f2.png",
      "/media/Nila-2b-f3.png",
    ],
    specs: [
      ["Entry Foyer", "40 sqft"],
      ["Open Living + Dining", "260 sqft"],
      ["Kitchen + Island", "110 sqft"],
      ["Master Bedroom 1", "140 sqft"],
      ["Ensuite Bathroom 1", "55 sqft"],
      ["Walk-in Wardrobe 1", "35 sqft"],
      ["Master Bedroom 2", "125 sqft"],
      ["Ensuite Bathroom 2", "50 sqft"],
      ["Walk-in Wardrobe 2", "30 sqft"],
      ["Utility / Laundry / Storage", "35 sqft"],
      ["Reading Niche / Lounge Corner", "50 sqft"],
      ["Circulation", "70 sqft"],
      ["TOTAL", "~1,000 sqft"],
    ],
  },

  "3BHK": {
    images: [
      "/media/Nila-3b-f1.png",
      "/media/Nila-3b-f2.png",
      "/media/Nila-3b-f3.png",
    ],
    specs: [
      ["Entry Foyer", "50 sqft"],
      ["Open Living + Dining", "340 sqft"],
      ["Kitchen + Island", "145 sqft"],
      ["Master Bedroom", "190 sqft"],
      ["Ensuite Bathroom (Master)", "75 sqft"],
      ["Walk-in Wardrobe (Master)", "50 sqft"],
      ["Guest Bedroom 1", "125 sqft"],
      ["Guest Bedroom 2", "120 sqft"],
      ["Shared Bathroom", "60 sqft"],
      ["Powder Bathroom", "40 sqft"],
      ["Shared Forest Lounge", "85 sqft"],
      ["Utility / Laundry / Storage", "50 sqft"],
      ["Circulation", "170 sqft"],
      ["TOTAL", "~1,500 sqft"],
    ],
  },
};

export default function NilaFloorPlans() {
  const [selected, setSelected] = useState<"2BHK" | "3BHK">("2BHK");
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

  const switchPlan = (plan: "2BHK" | "3BHK") => {
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
              <div className="flex gap-3 mb-12">

                {(["2BHK", "3BHK"] as const).map((plan) => (
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
                  href="/media/nila.pdf"
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
                    Download NILA Brochure
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
"use client";

import { useState } from "react";
import FadeIn from "@/components/ui/FadeIn";

const floorPlans = {
  "3BHK": {
    images: [
      "/media/Aranyaka-3b-f1.png",
      "/media/Aranyaka-3b-f2.png",
      "/media/Aranyaka-3b-f3.png",
    ],
    specs: [
      ["Arrival Foyer", "90 sqft"],
      ["Grand Living Pavilion", "520 sqft"],
      ["Formal Dining Lounge", "220 sqft"],
      ["Show Kitchen + Island", "160 sqft"],
      ["Service Kitchen + Pantry", "95 sqft"],
      ["Master Suite", "260 sqft"],
      ["Walk-in Wardrobe (Master)", "75 sqft"],
      ["Ensuite Bathroom (Master)", "110 sqft"],
      ["Guest Suite 1", "180 sqft"],
      ["Guest Suite 2", "170 sqft"],
      ["Shared Designer Bathroom", "80 sqft"],
      ["Powder Bathroom", "45 sqft"],
      ["Private Study Lounge", "90 sqft"],
      ["Indoor Courtyard / Zen Court", "140 sqft"],
      ["Utility / Laundry / Storage", "75 sqft"],
      ["Staff Utility Room", "60 sqft"],
      ["Circulation", "390 sqft"],
      ["TOTAL", "~2,800 sqft"],
    ],
  },

  "4BHK": {
    images: [
      "/media/Aranyaka-4b-f1.png",
      "/media/Aranyaka-4b-f2.png",
      "/media/Aranyaka-4b-f3.png",
    ],
    specs: [
      ["Arrival Foyer", "120 sqft"],
      ["Luxury Living Pavilion", "620 sqft"],
      ["Formal Dining Space", "260 sqft"],
      ["Show Kitchen + Island", "190 sqft"],
      ["Service Kitchen + Pantry", "110 sqft"],
      ["Master Suite", "320 sqft"],
      ["Walk-in Wardrobe (Master)", "90 sqft"],
      ["Ensuite Bathroom (Master)", "130 sqft"],
      ["Guest Suite 1", "190 sqft"],
      ["Guest Suite 2", "180 sqft"],
      ["Guest Suite 3", "170 sqft"],
      ["Shared Designer Bathroom", "90 sqft"],
      ["Powder Bathroom", "50 sqft"],
      ["Private Library / Office", "120 sqft"],
      ["Indoor Forest Lounge", "180 sqft"],
      ["Meditation / Wellness Room", "110 sqft"],
      ["Utility / Laundry / Storage", "90 sqft"],
      ["Staff Utility Room", "75 sqft"],
      ["Circulation", "505 sqft"],
      ["TOTAL", "~3,400 sqft"],
    ],
  },

  "5BHK": {
    images: [
      "/media/Aranyaka-5b-f1.png",
      "/media/Aranyaka-5b-f2.png",
      "/media/Aranyaka-5b-f3.png",
    ],
    specs: [
      ["Arrival Court + Foyer", "160 sqft"],
      ["Ultra Luxury Living Pavilion", "720 sqft"],
      ["Formal Dining Lounge", "320 sqft"],
      ["Show Kitchen + Double Island", "240 sqft"],
      ["Service Kitchen + Pantry", "140 sqft"],
      ["Master Suite", "360 sqft"],
      ["Walk-in Wardrobe (Master)", "110 sqft"],
      ["Ensuite Bathroom (Master)", "150 sqft"],
      ["Guest Suite 1", "200 sqft"],
      ["Guest Suite 2", "190 sqft"],
      ["Guest Suite 3", "180 sqft"],
      ["Guest Suite 4", "170 sqft"],
      ["Shared Designer Bathroom", "95 sqft"],
      ["Powder Bathroom", "55 sqft"],
      ["Private Office / Library", "140 sqft"],
      ["Indoor Wellness Lounge", "220 sqft"],
      ["Home Theatre Lounge", "180 sqft"],
      ["Meditation Pavilion", "130 sqft"],
      ["Utility / Laundry / Storage", "110 sqft"],
      ["Staff Utility Room", "90 sqft"],
      ["Circulation", "650 sqft"],
      ["TOTAL", "~3,800 sqft"],
    ],
  },
};

export default function AranyakaFloorPlans() {
  const [selected, setSelected] = useState<"3BHK" | "4BHK" | "5BHK">("3BHK");
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

  const switchPlan = (plan: "3BHK" | "4BHK" | "5BHK") => {
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

          {/* LEFT SIDE */}
          <FadeIn>

            <div className="flex items-center h-full">

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

          {/* RIGHT SIDE */}
          <FadeIn delay={120}>

            <div className="flex flex-col justify-center h-full">

              {/* Toggle Buttons */}
              <div className="flex gap-3 mb-12 flex-wrap">

                {(["3BHK", "4BHK", "5BHK"] as const).map((plan) => (
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
                  href="/media/aranyaka.pdf"
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
                    Download ARANYAKA Brochure
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
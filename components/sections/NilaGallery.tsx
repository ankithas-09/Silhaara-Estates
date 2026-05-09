"use client";

import { useState } from "react";
import FadeIn from "@/components/ui/FadeIn";

const galleryImages = [
  "/media/v1-img1.png",
  "/media/v1-img2.png",
  "/media/v1-img3.png",
  "/media/v1-img4.png",
  "/media/v1-img5.png",
  "/media/v1-img6.png",
  "/media/v1-img7.png",
  "/media/v1-img8.png",
  "/media/v1-img9.png",
];

export default function NilaGallery() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  return (
    <section className="pb-14 md:pb-20 px-6">

      <div className="max-w-[1500px] mx-auto">

        <FadeIn>

          {/* Section Header */}
          <div className="mb-10 md:mb-14">

            <p className="text-[10px] tracking-[0.45em] uppercase text-green/35 mb-4">
              Gallery
            </p>

          </div>

          {/* Main Gallery Image */}
          <div
            className="
              relative overflow-hidden
              rounded-[2rem] md:rounded-[2.8rem]
              shadow-[0_30px_80px_rgba(0,0,0,0.08)]
              aspect-[16/7.5]
            "
          >
            {/* Image */}
            <img
              src={galleryImages[currentImage]}
              alt={`NILA Gallery ${currentImage + 1}`}
              className="
                absolute inset-0
                w-full h-full
                object-cover
                transition-all duration-700 ease-out
              "
              draggable={false}
            />

            {/* Cinematic Overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(18,52,46,0.25), rgba(18,52,46,0.04))",
              }}
            />

            {/* Left Arrow */}
            <button
              onClick={prevImage}
              className="
                absolute left-5 md:left-7 top-1/2 -translate-y-1/2
                z-20
                w-12 h-12 md:w-14 md:h-14
                rounded-full
                bg-black/18
                backdrop-blur-md
                border border-white/10
                text-white/85
                hover:bg-white
                hover:text-green
                transition-all duration-500
                flex items-center justify-center
              "
            >
              <span className="text-lg md:text-xl">←</span>
            </button>

            {/* Right Arrow */}
            <button
              onClick={nextImage}
              className="
                absolute right-5 md:right-7 top-1/2 -translate-y-1/2
                z-20
                w-12 h-12 md:w-14 md:h-14
                rounded-full
                bg-black/18
                backdrop-blur-md
                border border-white/10
                text-white/85
                hover:bg-white
                hover:text-green
                transition-all duration-500
                flex items-center justify-center
              "
            >
              <span className="text-lg md:text-xl">→</span>
            </button>

            {/* Floating Counter */}
            <div
              className="
                absolute bottom-6 right-6 md:bottom-8 md:right-8
                px-4 py-2
                rounded-full
                bg-white/10 backdrop-blur-md
                border border-white/10
                text-ivory text-xs tracking-[0.25em] uppercase
              "
            >
              {String(currentImage + 1).padStart(2, "0")} /{" "}
              {String(galleryImages.length).padStart(2, "0")}
            </div>

          </div>

        </FadeIn>

      </div>

    </section>
  );
}
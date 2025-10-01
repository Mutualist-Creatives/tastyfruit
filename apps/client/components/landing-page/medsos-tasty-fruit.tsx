"use client";

import Image from "next/image";
import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";

// --- Data untuk carousel slides ---
const carouselImages = [
  {
    src: "/assets/landing-page/medsos-tasty-fruit/png/post-1.png",
    alt: "Post 1",
  },
  {
    src: "/assets/landing-page/medsos-tasty-fruit/png/post-2.png",
    alt: "Post 2",
  },
  {
    src: "/assets/landing-page/medsos-tasty-fruit/png/post-3.png",
    alt: "Post 3",
  },
  {
    src: "/assets/landing-page/medsos-tasty-fruit/png/post-4.png",
    alt: "Post 4",
  },
  {
    src: "/assets/landing-page/medsos-tasty-fruit/png/post-5.png",
    alt: "Post 5",
  },
  {
    src: "/assets/landing-page/medsos-tasty-fruit/png/post-6.png",
    alt: "Post 6",
  },
];

export default function MedsosTastyFruit() {
  // [PERBAIKAN 1] Duplikasi array untuk memastikan slide cukup untuk looping
  const allCarouselImages = [...carouselImages, ...carouselImages];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="w-full h-auto bg-linear-to-t from-[#B4FC28] to-transparent mt-20 py-0 md:py-10 -mb-12">
      <div className="w-full h-auto mx-auto">
        <div className="w-full h-auto flex justify-center items-center px-4">
          <Image
            src="/assets/landing-page/medsos-tasty-fruit/medsos-tasty-fruit-title.svg"
            alt="Media Sosial Tasty Fruit"
            width={450}
            height={250}
            className="object-contain w-full md:w-[80em] xl:w-[960px]"
          />
        </div>

        <div className="w-full bg-[#003CE2]">
          <div className="w-full mx-auto mt-8 relative max-w-[1440px]">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex -ml-2 sm:-ml-4">
                {/* [PERBAIKAN 2] Gunakan array yang sudah diduplikasi */}
                {allCarouselImages.map((img, index) => (
                  <div
                    key={index}
                    className="flex-grow-0 flex-shrink-0 w-[75%] sm:w-1/2 md:w-1/3 lg:w-1/5 pl-4 sm:pl-6 py-6"
                  >
                    <div className="aspect-[4/5] rounded-2xl overflow-hidden drop-shadow-lg/50 my-2 sm:my-4">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={300}
                        height={375}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Previous Button */}
            <motion.button
              onClick={scrollPrev}
              className="absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 bg-[#B4FC28] backdrop-blur-sm rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-[#003CE2] shadow-md transition-colors z-10"
              aria-label="Previous slide"
              whileTap={{ scale: 0.75 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <Image
                src={"/assets/ui/arrow-right-blue.svg"}
                alt="Arrow Left"
                width={24}
                height={24}
                className="w-[22px] h-[22px] sm:w-[25px] sm:h-[25px] rotate-180"
              />
            </motion.button>

            {/* Next Button */}
            <motion.button
              onClick={scrollNext}
              className="absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 bg-[#B4FC28] backdrop-blur-sm rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-[#003CE2] shadow-md transition-colors z-10"
              aria-label="Next slide"
              whileTap={{ scale: 0.75 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <Image
                src={"/assets/ui/arrow-right-blue.svg"}
                alt="Arrow Right"
                width={24}
                height={24}
                className="w-[22px] h-[22px] sm:w-[25px] sm:h-[25px]"
              />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}

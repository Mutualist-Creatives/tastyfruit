"use client";

import Image from "next/image";
import { CtaButton } from "@/components/ui/cta-button";
import { useState, useEffect } from "react";

export default function TastyUniverse() {
  const [stripeColumns, setStripeColumns] = useState(Array.from({ length: 9 }));

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 640) {
        // sm breakpoint
        setStripeColumns(Array.from({ length: 6 }));
      } else if (window.innerWidth < 1024) {
        // lg breakpoint
        setStripeColumns(Array.from({ length: 6 }));
      } else {
        setStripeColumns(Array.from({ length: 9 }));
      }
    };

    // Set initial value
    updateColumns();

    // Add event listener
    window.addEventListener("resize", updateColumns);

    // Cleanup
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  return (
    <section className="w-full relative overflow-hidden">
      {/* Top blue stripe */}
      <div className="hidden md:block absolute top-0 w-full h-7 md:h-13 bg-[#003BE2] z-10"></div>

      <div className="w-full h-full md:h-[50em] pb-20 md:pb-0 flex flex-col-reverse md:flex-row items-center mx-auto max-w-[1440px] gap-8 lg:gap-0">
        {/* Left content section */}
        <div className="w-full h-auto md:h-auto md:w-[50%] lg:w-[40%]">
          <div className="flex flex-col justify-center gap-6 w-full px-4 sm:px-6 lg:px-20 font-nunito pb-10 md:pb-0">
            {/* Tasty Universe Image */}
            <Image
              src="/assets/tasty-universe/tasty-universe-title-mobile.svg"
              alt="Tasty Universe Title"
              width={450}
              height={250}
              className="object-contain lg:w-full lg:h-full xl:w-full xl:h-auto block md:hidden"
            />

            <Image
              src="/assets/tasty-universe/tasty-universe-title.svg"
              alt="Tasty Universe Title"
              width={450}
              height={250}
              className="object-contain lg:w-full lg:h-full xl:w-full xl:h-auto hidden md:block"
            />

            {/* Description text */}
            <div className="text-center md:text-start px-9 md:px-0 space-y-4 text-blue-600">
              <p className="text-xs leading-relaxed md:text-xl lg:text-lg lg:leading-5 xl:text-base xl:leading-6">
                Kenalan yuk sama maskot Tasty Fruit®!
              </p>
              <p className="text-xs leading-relaxed md:text-xl lg:text-lg lg:leading-5 xl:text-base xl:leading-6">
                Dengan kepribadian mereka yang unik dan super{" "}
                <span className="italic">fun</span>, mereka siap bikin harimu
                jadi lebih segar dan penuh dengan tawa.
              </p>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex justify-center lg:justify-start">
              <CtaButton
                href="/tasty-universe"
                color="green"
                fontSize="text-3xl"
              >
                SELANJUTNYA!
              </CtaButton>
            </div>
            <div className="flex lg:hidden justify-center lg:justify-start ">
              <CtaButton href="/tasty-universe" color="green" py="0">
                PELAJARI LEBIH LANJUT!
              </CtaButton>
            </div>
          </div>
        </div>

        {/* Right section with stripes and image */}
        <div className="w-full h-auto min-h-[25em] md:min-h-0 md:h-full md:w-4/6 relative">
          <div className="block md:hidden absolute top-0 w-full h-7 md:h-13 bg-[#003BE2] z-10"></div>
          {/* Stripe columns background */}
          <div className="absolute inset-0 flex justify-between">
            {stripeColumns.map((_, idx) => (
              <div key={idx} className="flex">
                <div className="w-4 md:w-5 h-full bg-[#B5FE28]"></div>
                <div className="w-4 md:w-5 h-full bg-[#003BE2]"></div>
              </div>
            ))}
          </div>
          <div className="block md:hidden absolute bottom-0 w-full h-7 md:h-13 bg-[#003BE2] z-10"></div>
          {/* Mascot Characters */}
          {/* Lime/Green character - top left - bigger and extending out */}
          <div className="absolute top-5 left-1/6 md:-top-5 md:-left-10 lg:-top-12 lg:-left-20 xl:-left-5 z-20">
            <Image
              src="/assets/landing-page/tasty-universe/oishi-maru.png"
              alt="Oishimaru"
              width={400}
              height={350}
              className="object-contain w-[60vw] h-[60vw] md:w-[50vw] md:h-[50vw] lg:w-[45vw] lg:h-[45vw] xl:w-[38em] xl:h-[38em] drop-shadow-xl"
              priority
            />
          </div>
          {/* Dragon Fruit character - bottom center - bigger and extending out */}
          <div className="absolute -bottom-10 -left-1/5 md:-bottom-10 md:-left-30 lg:-bottom-17 lg:-left-40 xl:-bottom-25 xl:-left-50 z-30">
            <Image
              src="/assets/landing-page/tasty-universe/mishku.png"
              alt="Mishku"
              width={500}
              height={350}
              className="object-contain w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] lg:w-[50vw] lg:h-[50vw] xl:w-[45em] xl:h-[45em] drop-shadow-xl"
              priority
            />
          </div>
          {/* Banana character - right side - bigger and extending out */}
          <div className="absolute top-1/3 -right-5 md:top-65 md:-right-10 lg:top-40 lg:-right-16 z-20">
            <Image
              src="/assets/landing-page/tasty-universe/mr-tasty.png"
              alt="Mr Tasty"
              width={425}
              height={400}
              className="object-contain w-[60vw] h-[60vw] md:w-[50vw] md:h-[50vw] lg:w-[50vw] lg:h-[50vw] xl:w-[40em] xl:h-[40em] drop-shadow-xl"
              priority
            />
          </div>
        </div>
      </div>

      {/* Bottom blue stripe */}
      <div className="absolute bottom-15 md:bottom-0 w-full h-7 md:h-13 bg-[#003BE2] z-10"></div>
    </section>
  );
}

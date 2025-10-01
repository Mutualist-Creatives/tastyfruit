// components/landing-page/komitmen-tasty.tsx
import Image from "next/image";
import { CtaButton } from "@/components/ui/cta-button";

export default function KomitmenTasty() {
  return (
    <section className="w-full mt-15 md:mt-20 py-16 lg:py-24 flex items-center overflow-hidden">
      <div className="mx-auto w-full h-full">
        {/* Container with responsive layout */}
        <div className="relative flex h-full flex-col items-stretch gap-4 lg:flex-row lg:gap-6">
          {/* Images Section - 70% width on desktop */}
          <div className="relative flex-1 h-[360px] md:h-[440px] lg:h-[440px] xl:h-[500px] w-full lg:w-[65%] lg:flex-none">
            {/* Komitmen Tasty Title SVG */}
            <div className="absolute left-0 z-20 -top-12 h-full">
              <Image
                src="/assets/landing-page/komitmen-tasty/komitmen-tasty-title.svg"
                alt="Komitmen Tasty"
                width={275}
                height={200}
                className="h-[140px] w-[180px] md:h-[200px] md:w-[275px] lg:h-[200px] lg:w-[275px]"
                style={{ objectFit: "contain" }}
              />
            </div>

            {/* Image Collage */}
            <div className="flex h-full gap-2 pl-0 md:pl-0 md:gap-3 lg:gap-5 lg:pl-20">
              {/* Left Column (Full Height + Mobile-only image) */}
              <div className="w-[50%] lg:w-[60%] h-full flex flex-col gap-2 md:gap-3 lg:gap-0">
                {/* Main Left Image */}
                <div className="flex-1 relative min-h-[50vh] lg:min-h-full lg:w-full lg:h-full">
                  <Image
                    src="/assets/landing-page/komitmen-tasty/jpg/photo-1.jpg"
                    alt="Workers in banana plantation"
                    fill
                    className="rounded-2xl object-cover lg:rounded-3xl"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 40vw, 30vw"
                  />
                </div>
                {/* Fourth image - only visible on mobile, below main left image */}
                <div className="flex-1 lg:hidden relative">
                  <Image
                    src="/assets/landing-page/komitmen-tasty/jpg/photo-2.jpg"
                    alt="Additional banana plantation view"
                    fill
                    className="rounded-2xl object-cover"
                  />
                </div>
              </div>

              {/* Right Column (Top/Bottom Images) */}
              <div className="relative flex w-[50%] lg:w-[40%] h-full flex-col gap-2 md:gap-3 lg:gap-5 min-h-[50vh] lg:min-h-full">
                <div className="flex-[0.5] lg:flex-[0.3] relative">
                  <Image
                    src="/assets/landing-page/komitmen-tasty/jpg/photo-2.jpg"
                    alt="Farmer in field - top"
                    fill
                    className="rounded-2xl object-cover lg:rounded-3xl"
                    sizes="(max-width: 768px) 30vw, (max-width: 1024px) 25vw, 20vw"
                  />
                </div>
                <div className="flex-[0.5] lg:flex-[0.7] relative">
                  <Image
                    src="/assets/landing-page/komitmen-tasty/jpg/photo-3.jpg"
                    alt="Banana detail - bottom"
                    fill
                    className="rounded-2xl object-cover lg:rounded-3xl"
                  />
                </div>

                {/* Heart decoration positioned between images (scaled for smaller screens) */}
                <div className="absolute -left-1 lg:-left-4 top-[50%] lg:top-[30%] z-10 -translate-x-1/2 -translate-y-1/2 transform">
                  <div className="rounded-full">
                    <Image
                      src="/assets/decorations/heart.svg"
                      alt="Heart"
                      width={24}
                      height={24}
                      className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section - 30% width on desktop */}
          <div className="flex w-full flex-col justify-end space-y-3 md:max-w-[65ch] mx-auto lg:mx-0 lg:w-[35%] lg:space-y-4">
            {/* Quality Badges */}
            <div className="flex justify-start gap-2">
              <div className="flex-shrink-0">
                <Image
                  src="/assets/badges/highland-farm-blue.svg"
                  alt="Dataran Tinggi"
                  width={56}
                  height={56}
                  className="h-10 w-10 md:h-12 md:w-12"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="flex-shrink-0">
                <Image
                  src="/assets/badges/pesticide-free-blue.svg"
                  alt="Pesticide Free"
                  width={56}
                  height={56}
                  className="h-10 w-10 md:h-12 md:w-12"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="flex-shrink-0">
                <Image
                  src="/assets/badges/handpicked-blue.svg"
                  alt="Quality Certified"
                  width={56}
                  height={56}
                  className="h-10 w-10 md:h-12 md:w-12"
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>

            {/* Content Text */}
            <div className="w-[80%] lg:w-full space-y-3 text-start text-[#003CE9] lg:space-y-4 lg:text-left flex-shrink-0">
              <p className="text-xs leading-relaxed md:text-xl lg:text-lg lg:leading-5 xl:text-base xl:leading-6">
                Buah kami tumbuh di kebun{" "}
                <span className="font-bold">dataran tinggi Sukabumi</span> yang
                kaya akan <span className="font-bold">mineral</span>. Hasilnya
                adalah pisang segar dengan rasa manis yang unik dengan tekstur
                lembut.
              </p>
              <p className="text-xs leading-relaxed md:text-xl lg:text-lg lg:leading-5 xl:text-base xl:leading-6">
                Tasty Fruit® menumbuhkan pisang secara{" "}
                <span className="font-bold text-[#003CE9]">etis</span>,{" "}
                <span className="font-bold text-[#003CE9]">
                  selaras dengan irama alam
                </span>
                . Kami tidak hanya mengadopsi{" "}
                <span className="font-bold">
                  praktik berkelanjutan untuk menjaga bumi
                </span>
                , tetapi juga <span className="font-bold">merangkul</span> dan{" "}
                <span className="font-bold">memberdayakan komunitas lokal</span>
                .
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex justify-start pt-2">
              <CtaButton href="/komitmen-tasty" color="blue" py="0">
                PELAJARI LEBIH LANJUT
              </CtaButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

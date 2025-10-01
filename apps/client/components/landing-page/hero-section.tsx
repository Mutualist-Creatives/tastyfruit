// components/landing-page/hero-section.tsx
import Image from "next/image";
import { CtaButton } from "@/components/ui/cta-button";

export default function HeroSection() {
  return (
    <section className="w-full">
      <div className="mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-[4fr_6fr] items-center gap-8 sm:gap-12 lg:gap-16">
          {/* Left Column: Content */}
          <div className="space-y-6 text-center lg:text-left text-[#003CE9] md:max-w-[65ch] mx-auto lg:mx-0 order-2 lg:order-1">
            {/* Heart Decorations */}
            <Image
              src="/assets/decorations/heart.svg"
              alt="Tasty Fruit Logo"
              width={60}
              height={60}
              className="hidden lg:block mx-auto lg:mx-0 w-12 sm:w-16 lg:w-20 h-auto"
            />
            {/* Text Content */}
            <div className="space-y-4 sm:space-y-6">
              <p className="text-xs md:text-xl lg:text-lg leading-relaxed text-center lg:text-left">
                Kami percaya bahwa <span className="font-bold">bahagia</span>{" "}
                dimulai dari <span className="font-bold">rasa</span>.
              </p>
              <p className="text-xs md:text-xl lg:text-lg leading-relaxed text-center lg:text-left">
                Tasty Fruit® selalu menyediakan{" "}
                <span className="font-bold">buah tersegar</span> dan{" "}
                <span className="font-bold">terlezat</span> untuk kebutuhan
                sehari-hari. Lebih dari sekadar lezat, setiap buah membantu
                menutrisi tubuh dan pikiran, menjadikan lebih sehat, ceria, dan
                berseri-seri dari luar dan dalam.
              </p>
              <p className="text-xs md:text-xl lg:text-lg leading-relaxed text-center lg:text-left font-bold">
                Tastier, Happier!
              </p>
            </div>
            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start pt-2">
              <CtaButton href="/kisah-tasty" color="green" py="0">
                PELAJARI LEBIH LANJUT
              </CtaButton>
            </div>
            <div className="flex justify-center lg:justify-start pt-2">
              <Image
                src="/assets/decorations/heart.svg"
                alt="Heart decoration"
                width={80}
                height={80}
                className="w-12 sm:w-16 lg:w-20 h-auto"
              />
            </div>
          </div>
          {/* Right Column: Main Graphic */}
          <div className="relative order-1 lg:order-2">
            {/* Main "Tastier! Happier!" Image */}
            <Image
              src="/assets/landing-page/hero-section/tastier-happier-with-stars.svg"
              alt="Tastier! Happier!"
              width={600}
              height={400}
              className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none h-auto mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

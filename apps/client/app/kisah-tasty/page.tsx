import Image from "next/image";
import { CtaButton } from "@/components/ui/cta-button";
import SectionBadge from "@/components/ui/section-badge";
import Container from "@/components/layout/container";

export default function KisahTasty() {
  return (
    <Container>
      <section className="relative w-full items-start flex overflow-hidden">
        <div className="mx-auto w-full h-full">
          {/* Container with responsive layout - Added min height and padding bottom */}
          <div className="relative h-full lg:h-[37.5em] flex flex-col lg:flex-row-reverse lg:gap-10 items-start pb-8 lg:pb-0">
            {/* Content Section */}
            <div className="w-full flex flex-col justify-start relative z-10">
              <div className="flex flex-col items-start gap-2 w-full">
                <SectionBadge
                  label="KISAH TASTY"
                  className="text-xs md:text-2xl lg:text-xl px-1 py-0.5 md:px-2 md:py-0.5 mb-1"
                />

                {/* Full width title */}
                <div className="text-center lg:text-left mb-0.5 md:mb-3">
                  {/* --- CHANGED: Font size adjusted for smoother scaling on smaller devices --- */}
                  <div className="font-bricolage-grotesque-condensed text-[#003CE9] font-extrabold text-2xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-6xl bg-[#B5FE28] px-2 md:px-4 md:py-2">
                    PERJALANAN DARI DATARAN TINGGI
                  </div>
                </div>

                <div className="text-center lg:text-left">
                  {/* --- CHANGED: Font size adjusted for smoother scaling on smaller devices --- */}
                  <div className="font-bricolage-grotesque-condensed text-[#003CE9] font-extrabold text-2xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-6xl bg-[#B5FE28] px-2 sm:px-4">
                    HINGGA BRAND MODERN
                  </div>
                </div>
                {/* Images Section - Adjusted positioning */}
                <div className="relative lg:absolute mt-5 w-full lg:w-[60%] flex items-center lg:top-[8em] xl:top-[8.5em] right-0">
                  <div className="flex w-full h-full gap-2 md:gap-4 lg:gap-4 xl:ga-6 lg:pl-20">
                    {/* Left Column */}
                    <div className="w-1/2 lg:w-[60%] flex flex-col gap-2 md:gap-4">
                      {/* Main Left Image */}
                      <div className="relative w-full h-full min-h-[350px] lg:min-h-[430px]">
                        <Image
                          src="/assets/landing-page/komitmen-tasty/jpg/photo-1.jpg"
                          alt="Workers in banana plantation"
                          fill
                          className="rounded-2xl lg:rounded-3xl object-cover"
                          sizes="100vw"
                        />
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="w-1/2 lg:w-[40%] flex flex-col gap-2 md:gap-4 lg:gap-6">
                      <div className="relative w-full h-[180px] lg:h-[180px]">
                        <Image
                          src="/assets/landing-page/komitmen-tasty/jpg/photo-2.jpg"
                          alt="Farmer in field - top"
                          fill
                          className="rounded-2xl lg:rounded-3xl object-cover"
                          sizes="100vw"
                        />
                      </div>
                      <div className="relative w-full h-[180px] lg:h-[225px]">
                        <Image
                          src="/assets/landing-page/komitmen-tasty/jpg/photo-3.jpg"
                          alt="Banana detail - bottom"
                          fill
                          className="rounded-2xl lg:rounded-3xl object-cover"
                          sizes="100vw"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mt-5 w-[70%] lg:w-[40%] text-left">
                  {/* --- CHANGED: Simplified font scaling for better readability --- */}
                  <p className="font-nunito text-[#003CE9] text-xs md:text-lg mb-5">
                    Tasty Fruit® adalah brand produk buah-buahan dari PT
                    Panyindangan, bagian dari DSN Group - perusahaan agribisnis
                    terintegrasi yang berkomitmen pada keberlanjutan dan
                    inovasi.
                  </p>
                  {/* --- CHANGED: Simplified font scaling for better readability --- */}
                  <p className="font-nunito text-[#003CE9] text-xs md:text-lg">
                    Fokus utama kami adalah menyediakan buah segar berkualitas
                    tinggi dari kebun kami yang dikelola dengan standar
                    internasional, mulai dari pembibitan hingga distribusi.
                  </p>
                </div>

                {/* CTA Button */}
                <div className="flex mx-0 justify-start mt-6">
                  <CtaButton
                    href="/kisah-tasty/perjalanan-kami"
                    color="blue"
                    py="0"
                  >
                    PELAJARI LEBIH LANJUT!
                  </CtaButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

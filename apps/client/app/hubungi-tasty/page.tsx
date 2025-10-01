import Image from "next/image";

export default function HubungiTasty() {
  return (
    <>
      <section className="relative w-full h-auto overflow-hidden mx-auto">
        {/* Blue top border */}
        {/* Banana Image Mobile */}
        <div className="w-full h-full -z-10 absolute -right-[12em] top-[10em]  md:hidden">
          <Image
            src="/assets/ui/pisang-mobile.svg"
            alt="Pisang"
            width={800}
            height={900}
            className="w-full h-full object-contain scale-200"
          />
        </div>

        {/* Banana Image Desktop */}
        <div className="w-full h-full -z-10 absolute top-0 hidden md:block">
          <Image
            src="/assets/ui/pisang.svg"
            alt="Pisang"
            width={800}
            height={900}
            className="object-contain w-[40rem] lg:w-[55rem] translate-x-[50vw]"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col w-full h-screen mx-auto max-w-[1440px] px-6 lg:px-12 font-nunito py-12">
          <div className="flex md:flex-col w-full md:w-[65%] lg:w-[60%] items-start gap-2">
            {/* Heading Section */}
            <div className="w-[50%] md:w-full flex flex-col items-start gap-2">
              <div className="font-bricolage-grotesque-condensed text-[#B5FE28] font-extrabold text-xl md:text-5xl lg:text-6xl bg-[#003BE2] px-2 md:px-4 md:py-2 -mb-2 tracking-wide -rotate-3">
                INGIN TAHU LEBIH?
              </div>
              <div className="font-bricolage-grotesque-condensed text-[#003CE9] font-extrabold text-xl md:text-6xl lg:text-7xl bg-[#B5FE28] px-2 md:px-4 md:py-2 tracking-wide ml-4 md:ml-28">
                HUBUNGI KAMI
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-8 w-[50%] md:w-full max-w-2xl">
              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                {/* Address Section */}
                <div className="flex flex-col items-start flex-1">
                  <div className="w-full flex justify-start items-center">
                    <Image
                      src="/assets/ui/location-blue.svg"
                      alt="Location"
                      width={24}
                      height={24}
                      className="hidden md:block w-6 h-6"
                    />
                    <div className="text-[#003CE9] text-xs md:text-sm lg:text-base xl:text-lg font-bold ml-0 md:ml-2">
                      GRAHA DSN
                    </div>
                  </div>
                  <div className="text-[#003CE9] text-xs md:text-sm lg:text-base xl:text-lg text-left font-normal ml-0 md:ml-8 mt-1">
                    Jl. Pulo Ayang Kav. OR3 Kawasan Industri Pulogadung Cakung,
                    Jakarta Timur DKI Jakarta, 13260
                  </div>
                </div>

                {/* Vertical Line for Tablet & Desktop */}
                <div className="hidden md:block w-px rounded-full bg-[#003CE9] mx-4"></div>
                {/* Horizontal line for mobile */}
                <hr className="block md:hidden w-full border-t-[#003CE9]" />

                {/* Contact Section */}
                <div className="flex flex-col items-start flex-1 gap-2">
                  <div className="flex items-center">
                    <Image
                      src="/assets/ui/telephone-blue.svg"
                      alt="Phone"
                      width={20}
                      height={20}
                      className="w-3 h-3 md:w-5 md:h-5"
                    />
                    <div className="text-[#003CE9] text-xs md:text-sm lg:text-base xl:text-lg font-normal ml-2">
                      (021) 4618135
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Image
                      src="/assets/ui/instagram-blue.svg"
                      alt="Instagram"
                      width={20}
                      height={20}
                      className="w-3 h-3 md:w-5 md:h-5"
                    />
                    <div className="text-[#003CE9] text-xs md:text-sm lg:text-base xl:text-lg font-normal ml-2">
                      tastyfruit.id
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Image
                      src="/assets/ui/email-blue.svg"
                      alt="Email"
                      width={20}
                      height={20}
                      className="w-3 h-3 md:w-5 md:h-5"
                    />
                    <div className="text-[#003CE9] text-xs md:text-sm lg:text-base xl:text-lg font-normal ml-2">
                      halo@tastyfruit.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

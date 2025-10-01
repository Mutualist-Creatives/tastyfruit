import Image from "next/image";
import SectionBadge from "@/components/ui/section-badge";
import { CtaButton } from "@/components/ui/cta-button";

export default function Publikasi() {
  return (
    <section className="w-full h-auto">
      <div className="mx-auto">
        <div className="flex flex-col items-center gap-8 sm:grid sm:grid-cols-2 sm:items-start lg:grid-cols-[4fr_6fr] sm:gap-12">
          {/* === Blok 1: Judul & Badge === */}
          {/* Diubah: w-full, px-4, items-start untuk mobile rata kiri */}
          <div className="w-full flex flex-col items-start text-left">
            <SectionBadge
              label="ARTIKEL TASTY"
              className="text-xs md:text-2xl px-1 py-0.5 md:px-2 mb-3"
            />
            <div className="font-bricolage-grotesque-condensed text-[#003CE9] font-extrabold text-2xl md:text-5xl bg-[#B5FE28] px-2 md:px-4 py-0.5 md:py-2">
              PUBLIKASI
            </div>
          </div>

          {/* === Blok 2: Gambar === */}
          {/* Tetap di tengah (default) pada mobile */}
          <div className="relative w-full h-[250px] sm:h-full sm:col-start-2 sm:row-start-1 sm:row-span-2 lg:max-w-[475px] lg:ml-auto rounded-3xl lg:rounded-4xl overflow-hidden">
            <Image
              src="/assets/artikel/farmer.jpg"
              alt="Tasty Fruit Farmer"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 475px, 50vw, 100vw"
              priority
            />
          </div>

          {/* === Blok 3: Deskripsi, CTA, & Dekorasi === */}
          {/* Tetap di tengah pada mobile */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left space-y-8">
            <div className="w-[80%] sm:w-full lg:w-[70%] max-w-prose space-y-4 text-[#003CE9]">
              <p className="text-xs md:text-lg leading-relaxed">
                Mau tau informasi terbaru mengenai Tasty Fruit? Rubrik ini buat
                kalian!
              </p>
              <p className="text-xs md:text-lg leading-relaxed">
                Dari acara pop-up booth Tasty Fruit®, tips memilih pisang
                terbaik, hingga{" "}
                <span className="italic">behind the scenes</span>, pastikan kamu
                selalu terhubung agar tidak ketinggalan informasi terbaru dari
                Tasty Fruit®.
              </p>
            </div>

            <div className="flex flex-col items-center sm:items-start gap-4 lg:gap-8">
              <CtaButton py="0" href="/artikel/publikasi" color="blue">
                PELAJARI LEBIH LANJUT!
              </CtaButton>
              <Image
                src="/assets/decorations/heart.svg"
                alt="Heart decoration"
                width={80}
                height={80}
                className="w-16 h-auto lg:w-20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

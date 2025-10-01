"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionBadge from "@/components/ui/section-badge";
import { publikasiData } from "@/lib/publikasi-data";

type Artikel = (typeof publikasiData)[0];

interface ArtikelDetailProps {
  artikel: Artikel;
  // Ubah tipe agar bisa menerima null
  nextArtikel?: Artikel | null;
  prevArtikel?: Artikel | null;
  sanitizedContent: string;
}

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Event":
      return "bg-[#003BE2] text-white";
    case "Aktivitas":
      return "bg-[#E30E75] text-white";
    case "Produk":
      return "bg-[#FFE600] text-[#003BE2]";
    case "Informasi":
      return "bg-[#00C896] text-white";
    default:
      return "bg-[#003BE2] text-[#B5FE28]";
  }
};

export default function ArtikelDetail({
  artikel,
  nextArtikel,
  prevArtikel,
  sanitizedContent,
}: ArtikelDetailProps) {
  return (
    <section className="w-full h-auto">
      {/* Page Titles (Aligned left) */}
      <div className="flex flex-col items-start gap-2 mb-8 relative">
        <SectionBadge
          label="ARTIKEL TASTY"
          className="text-xs md:text-2xl px-1 py-0.5 md:px-2 mb-1"
        />
        <div className="font-bricolage-grotesque-condensed text-[#003CE9] font-extrabold text-2xl md:text-5xl bg-[#B5FE28] px-2 md:px-4 py-0.5 md:py-2">
          PUBLIKASI
        </div>
      </div>
      <div className="mx-auto relative flex flex-col items-start max-w-3xl">
        {/* Main Article Content Wrapper */}
        <div className="mx-auto w-full font-nunito text-[#003BE2]">
          <div className="space-y-6">
            <h1 className="text-xl md:text-4xl font-bold text-[#003CE9] text-center font-bricolage-grotesque leading-tight">
              {artikel.title}
            </h1>

            <div className="relative my-4">
              <div
                className={`absolute top-4 left-4 z-10 inline-block px-2 py-1 rounded-full text-sm font-bold ${getCategoryColor(
                  artikel.category
                )}`}
              >
                {artikel.category}
              </div>
              <Image
                src={artikel.image}
                alt={artikel.title}
                width={896}
                height={504}
                className="w-full h-auto md:h-[25em] object-cover rounded-2xl"
              />
            </div>

            <div className="flex justify-between items-center text-sm">
              <span className="font-bold">{artikel.date}</span>
              <span>
                oleh <span className="font-bold"> {artikel.author}</span>
              </span>
            </div>

            <article
              className="text-xs md:text-base prose lg:prose-lg max-w-none text-justify"
              dangerouslySetInnerHTML={{ __html: sanitizedContent }}
            />
          </div>
        </div>

        {/* Fixed Navigation Buttons */}
        <div className="fixed bottom-[15vh] md:bottom-16 left-0 w-full p-4 md:p-8 z-50 pointer-events-none">
          <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
            {/* Previous Button - Always show, but link changes */}
            <div className="flex justify-start pointer-events-auto">
              {/* PERBAIKAN: href sekarang benar-benar dinamis berdasarkan keberadaan prevArtikel */}
              <Link
                href={
                  prevArtikel
                    ? `/artikel/publikasi/${prevArtikel.id}`
                    : "/artikel/publikasi"
                }
                className="block"
                aria-label={
                  prevArtikel ? "Artikel Sebelumnya" : "Kembali ke Publikasi"
                }
              >
                <motion.div
                  className="bg-[#B5FE28] rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-[#003CE2] shadow-md transition-colors"
                  whileTap={{ scale: 0.75 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <Image
                    src="/assets/ui/arrow-right-blue.svg"
                    alt={prevArtikel ? "Previous article" : "Back to articles"}
                    width={20}
                    height={20}
                    className="rotate-180"
                  />
                </motion.div>
              </Link>
            </div>

            {/* Next Article Button - PERBAIKAN: Hanya muncul jika nextArtikel ada (bukan null/undefined) */}
            {nextArtikel && (
              <div className="flex justify-end pointer-events-auto">
                <Link
                  href={`/artikel/publikasi/${nextArtikel.id}`}
                  className="block"
                  aria-label="Artikel Selanjutnya"
                >
                  <motion.div
                    className="bg-[#B5FE28] rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-[#003CE2] shadow-md transition-colors"
                    whileTap={{ scale: 0.75 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    <Image
                      src="/assets/ui/arrow-right-blue.svg"
                      alt="Next article"
                      width={20}
                      height={20}
                    />
                  </motion.div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

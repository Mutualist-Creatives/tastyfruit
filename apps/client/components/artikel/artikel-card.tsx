// components/artikel/artikel-card.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PublikasiData } from "@/lib/publikasi-data";
import { ResepTastyData } from "@/lib/resep-tasty-data";

interface ArtikelCardProps {
  publikasi?: PublikasiData;
  resep?: ResepTastyData;
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
    case "Resep":
      return "bg-[#003CE9] text-[#B5FE28]";
    default:
      return "bg-[#003BE2] text-[#B5FE28]";
  }
};

export default function ArtikelCard({ publikasi, resep }: ArtikelCardProps) {
  const pathname = usePathname();
  const isResepPage = pathname.includes("/resep-tasty");

  const id = isResepPage ? resep!.id : publikasi!.id;
  const image = isResepPage ? resep!.image : publikasi!.image;
  const title = isResepPage ? resep!.name : publikasi!.title;
  const category = isResepPage ? "Resep" : publikasi!.category;
  const basePath = isResepPage ? "/artikel/resep-tasty" : "/artikel/publikasi";

  const cardStyles = {
    bgColor: isResepPage ? "bg-[#B5FE28]" : "bg-[#003CE9]",
    textColor: isResepPage ? "text-[#003CE9]" : "text-white",
    mutedTextColor: isResepPage ? "text-[#003CE9]/80" : "text-white/70",
    arrowCircleBg: isResepPage ? "bg-[#003CE9]" : "bg-[#B5FE28]",
    arrowSrc: isResepPage
      ? "/assets/ui/arrow-right-green.svg"
      : "/assets/ui/arrow-right-blue.svg",
  };

  return (
    <Link href={`${basePath}/${id}`} className="block">
      <div
        className={`${cardStyles.bgColor} rounded-3xl p-3 sm:p-4 h-full hover:scale-105 transition-transform duration-300 cursor-pointer flex flex-col`}
      >
        <div className="relative mb-3 sm:mb-4">
          {!isResepPage && (
            <div
              className={`absolute top-2 left-2 z-10 inline-block px-1.5 py-0.5 rounded-full text-[8px] md:text-xs font-bold ${getCategoryColor(
                category
              )}`}
            >
              {category}
            </div>
          )}
          <Image
            src={image}
            alt={title}
            width={400}
            height={300}
            className="w-full aspect-[4/4] sm:aspect-[4/3] md:aspect-[4/3] object-cover rounded-2xl"
          />
        </div>
        <div className="space-y-2 sm:space-y-3 flex flex-col flex-grow">
          <h3
            className={`${cardStyles.textColor} font-bold text-xs  md:text-base sm:text-lg leading-tight flex-grow line-clamp-2`}
          >
            {title}
          </h3>
          <div className="flex items-center justify-between mt-auto">
            {isResepPage && resep ? (
              // ADJUSTED: Font size reduced for better balance
              <div
                className={`${cardStyles.textColor} font-medium text-[8px] sm:text-sm`}
              >
                <span>{resep.servings} servings</span>
                <div className="flex items-center gap-0 md:gap-1.5">
                  <Image
                    src="/assets/artikel/resep-tasty/time.svg"
                    alt="Time"
                    width={16}
                    height={16}
                    className="w-2 h-2 md:w-3.5 md:h-3.5" // Icon size adjusted slightly
                  />
                  {/* ADJUSTED: Added italic style */}
                  <span className="mt-0.5 italic">{resep.time}</span>
                </div>
              </div>
            ) : (
              // ADJUSTED: Font size reduced for consistency
              <span
                className={`${cardStyles.mutedTextColor} text-[8px] sm:text-sm`}
              >
                {publikasi?.date}
              </span>
            )}
            {/* Read More Arrow */}
            {/* ADJUSTED: Arrow circle size reduced */}
            <div
              className={`${cardStyles.arrowCircleBg} rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center transition-transform`}
            >
              <Image
                src={cardStyles.arrowSrc}
                alt="Read more arrow"
                width={12} // Icon size adjusted
                height={12} // Icon size adjusted
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

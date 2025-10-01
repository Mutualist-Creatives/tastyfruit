"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Ganti atau sesuaikan path import sesuai struktur proyek Anda
import { CtaButton } from "@/components/ui/cta-button";
import HtmlContent from "@/components/ui/html-content";
import SectionBadge from "@/components/ui/section-badge";

import { ProdukData } from "@/lib/produk-data";

interface ProdukSectionProps {
  item: ProdukData;
}

// Konfigurasi animasi untuk kartu carousel
const cardVariants = {
  hidden: { opacity: 0, scale: 0.5, x: "0%", y: "0%", zIndex: 0 },
  left: {
    opacity: 1,
    scale: 0.85,
    x: "var(--left-x, -35%)",
    y: "var(--left-y, 0%)",
    zIndex: 1,
  },
  center: { opacity: 1, scale: 1, x: "0%", y: "0%", zIndex: 2 },
  right: {
    opacity: 1,
    scale: 0.85,
    x: "var(--right-x, 35%)",
    y: "var(--right-y, 0%)",
    zIndex: 1,
  },
};

export default function ProdukSection({ item }: ProdukSectionProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Helper function to get card image path
  const getCardImagePath = (fruitSlug: string, fruitTypeSlug: string) => {
    // Map fruit slugs to their folder names
    const fruitFolderMap: { [key: string]: string } = {
      alpukat: "alpukat",
      melon: "melon",
      pisang: "pisang",
    };

    const folderName = fruitFolderMap[fruitSlug] || fruitSlug;
    return `/assets/produk/${folderName}/${fruitTypeSlug}-card.png`;
  };

  // Fungsi untuk menentukan posisi kartu (kiri, tengah, kanan)
  const getCardState = (
    index: number,
    selectedIndex: number,
    totalSlides: number
  ) => {
    if (index === selectedIndex) return "center";
    const leftIndex = selectedIndex === 0 ? totalSlides - 1 : selectedIndex - 1;
    if (index === leftIndex) return "left";
    const rightIndex =
      selectedIndex === totalSlides - 1 ? 0 : selectedIndex + 1;
    if (index === rightIndex) return "right";
    return "hidden";
  };

  // Efek untuk auto-slide carousel setiap 3 detik
  useEffect(() => {
    const totalSlides = item.fruitType.length;
    if (totalSlides === 0) return;
    const interval = setInterval(() => {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(interval);
  }, [item.fruitType.length]);

  const isLayoutA = item.layoutType === "layout-a";

  // Komponen untuk mobile content dengan struktur baru
  const MobileContent = () => {
    const isBlue = item.layoutType === "layout-a";
    const primaryColor = isBlue ? "#B5FE28" : "#003BE2";
    const textColor = isBlue ? "#003BE2" : "#B5FE28";
    const alignRight = !isLayoutA;

    return (
      <div className="md:hidden w-full">
        {/* PRODUK TASTY Label - Mobile */}
        <div
          className={`flex ${
            alignRight ? "justify-end" : "justify-start"
          } mb-2`}
        >
          <SectionBadge
            label="PRODUK TASTY"
            className="text-xs md:text-3xl lg:text-2xl px-1 py-0.5 md:px-2 md:py-0.5 mb-1"
          />
        </div>

        {/* Fruit Title - Mobile */}
        <div
          className={`flex ${
            alignRight ? "justify-end" : "justify-start"
          } mb-6`}
        >
          <h2
            className="font-bricolage-grotesque-condensed text-[#003BE2] font-extrabold text-4xl md:text-4xl lg:text-5xl xl:text-6xl bg-[#B5FE28] px-2 py-0 md:px-4 md:py-2 w-fit"
            style={{ color: textColor, backgroundColor: primaryColor }}
          >
            {item.fruit.toUpperCase()}
          </h2>
        </div>
        {/* Carousel - Mobile */}
        <div className="mb-6">{CardsCarousel()}</div>

        {/* Description - Mobile */}
        <div className="flex justify-center mb-6">
          <HtmlContent
            className="text-[#003BE2] leading-relaxed font-nunito text-xs w-[75%] text-center"
            content={item.description}
          />
        </div>

        {/* CTA Button - Mobile (bigger) */}
        <div className="flex justify-center">
          <CtaButton
            href={`/produk/${item.slug}`}
            color={item.layoutType === "layout-b" ? "blue" : "green"}
            py="0"
          >
            PELAJARI LEBIH LANJUT
          </CtaButton>
        </div>
      </div>
    );
  };

  // Komponen untuk desktop blok judul dan deskripsi
  const DesktopTitleBlock = (alignRight: boolean) => {
    const isBlue = item.layoutType === "layout-a";
    const primaryColor = isBlue ? "#B5FE28" : "#003BE2";
    const textColor = isBlue ? "#003BE2" : "#B5FE28";

    return (
      <div
        className={`hidden md:block max-w-xl ${
          alignRight ? "text-right" : "text-left"
        }`}
      >
        <div
          className={`flex flex-col gap-2 ${
            alignRight ? "items-end" : "items-start"
          }`}
        >
          {/* PRODUK TASTY Label - Desktop */}
          <SectionBadge
            label="PRODUK TASTY"
            className="text-xs md:text-2xl lg:text-xl px-1 py-0.5 md:px-2 md:py-0.5 mb-1"
          />
          <h1
            className="font-bricolage-grotesque-condensed text-[#003BE2] font-extrabold text-4xl md:text-4xl lg:text-5xl xl:text-6xlbg-[#B5FE28] px-2 py-0 md:px-4 md:py-2 w-fit"
            style={{ color: textColor, backgroundColor: primaryColor }}
          >
            {item.fruit.toUpperCase()}
          </h1>
        </div>
        <HtmlContent
          className={`mt-4 text-[#003BE2] max-w-[45ch] leading-relaxed font-nunito w-[80%] lg:w-[60%] text-lg ${
            alignRight ? "ml-auto" : ""
          }`}
          content={item.description}
        />
        <div
          className={`mt-4 flex flex-col ${
            alignRight ? "items-end" : "items-start"
          }`}
        >
          <CtaButton
            href={`/produk/${item.slug}`}
            color={item.layoutType === "layout-b" ? "blue" : "green"}
            py="0"
          >
            PELAJARI LEBIH LANJUT
          </CtaButton>
          <div className="mt-8">
            <Image
              src="/assets/decorations/heart.svg"
              alt="Heart decoration"
              width={80}
              height={80}
              className="w-16 lg:w-20 h-auto"
            />
          </div>
        </div>
      </div>
    );
  };

  // Komponen untuk carousel kartu buah
  const CardsCarousel = () => {
    return (
      <div className="relative w-full h-[360px] md:h-[320px] lg:h-[380px] xl:h-[420px]">
        <style jsx>{`
          .carousel-container {
            --left-x: -25%;
            --right-x: 25%;
          }
          @media (min-width: 768px) {
            .carousel-container {
              --left-x: -30%;
              --right-x: 30%;
            }
          }
          @media (min-width: 1024px) {
            .carousel-container {
              --left-x: -35%;
              --right-x: 35%;
            }
          }
          @media (min-width: 1280px) {
            .carousel-container {
              --left-x: -40%;
              --right-x: 40%;
            }
          }
        `}</style>
        <div className="carousel-container w-full h-full mx-auto">
          {item.fruitType.map((f, index) => {
            const cardImagePath = getCardImagePath(item.slug, f.slug);
            const isActive = index === selectedIndex;
            const isBlue = item.layoutType === "layout-a";
            const glowClass = isActive
              ? isBlue
                ? "shadow-[0_0_60px_rgba(255,255,255,0.9),0_0_100px_rgba(255,255,255,0.5)]"
                : "shadow-[0_0_60px_rgba(181,254,40,0.8),0_0_100px_rgba(181,254,40,0.4)]"
              : "shadow-none";

            return (
              <motion.div
                key={f.slug}
                variants={cardVariants}
                animate={getCardState(
                  index,
                  selectedIndex,
                  item.fruitType.length
                )}
                transition={{ type: "spring", stiffness: 300, damping: 35 }}
                className="absolute top-0 bottom-0 left-0 right-0 m-auto w-[280px] sm:w-[320px] md:w-[280px] lg:w-[320px] xl:w-[360px] h-fit"
              >
                <div
                  className={`relative w-full h-auto transition-all duration-300 ${
                    isActive ? "transform -translate-y-1" : ""
                  }`}
                >
                  <Image
                    src={cardImagePath}
                    alt={`${f.name} card`}
                    width={360}
                    height={430}
                    className={`w-full h-auto object-contain transition-all duration-300 ${glowClass}`}
                    priority={isActive}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  };

  // Render utama komponen
  return (
    <section
      className="w-full h-auto max-w-full md:h-[46em] lg:h-[50em] overflow-hidden mx-auto"
      style={
        item.bgGradient
          ? {
              background: `linear-gradient(to bottom, ${item.bgGradient}00, ${item.bgGradient}, ${item.bgGradient}00)`,
            }
          : {}
      }
    >
      <div className="w-full h-auto mx-auto max-w-full 2xl:max-w-[1440px] px-4 sm:px-6 lg:px-20 py-12">
        {/* Mobile Layout */}
        {MobileContent()}

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-2 gap-5 w-full h-auto">
          {isLayoutA ? (
            <>
              <div className="flex items-start justify-start">
                {DesktopTitleBlock(false)}
              </div>
              <div className="h-full flex items-center justify-end">
                {CardsCarousel()}
              </div>
            </>
          ) : (
            <>
              <div className="h-full flex items-center justify-start">
                {CardsCarousel()}
              </div>
              <div className="flex items-start justify-end">
                {DesktopTitleBlock(true)}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

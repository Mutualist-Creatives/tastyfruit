"use client";

import Image from "next/image";
import { CtaButton } from "@/components/ui/cta-button";
import SectionBadge from "@/components/ui/section-badge";
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";
import { resepTastyData, ResepTastyData } from "@/lib/resep-tasty-data";

// --- Data & Types (Tidak berubah) ---
const topRowRecipes = resepTastyData.slice(0, 3);
const bottomRowRecipes = resepTastyData.slice(3, 6);
const topRowImages = [...topRowRecipes, ...topRowRecipes];
const bottomRowImages = [...bottomRowRecipes, ...bottomRowRecipes];

interface RecipeCardProps {
  recipe: ResepTastyData;
  index: number;
  direction: string;
}

// --- Recipe Card Component (Tidak berubah) ---
const RecipeCard = ({ recipe, index, direction }: RecipeCardProps) => (
  <div key={`${direction}-${index}`} className="flex-shrink-0 px-2">
    <div className="relative">
      <Image
        src={recipe.image}
        alt={`Recipe image: ${recipe.name}`}
        width={400}
        height={400}
        className="object-cover rounded-2xl w-40 h-44 sm:w-52 sm:h-60 md:w-60 md:h-72 lg:w-[255px] lg:h-[300px]"
      />
      <div
        className="absolute inset-0 rounded-2xl opacity-50"
        style={{ backgroundColor: "#003CE9" }}
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
        <h3 className="font-bold text-lg sm:text-xl md:text-xl mb-2">
          {recipe.name}
        </h3>
        <div className="text-sm sm:text-base opacity-90 mb-1">
          {recipe.servings} servings
        </div>
        <div className="text-sm sm:text-base opacity-90">{recipe.time}</div>
      </div>
    </div>
  </div>
);

// --- The Refactored Component ---
export default function ResepTasty() {
  const [marqueeSpeed, setMarqueeSpeed] = useState(40);

  useEffect(() => {
    const updateSpeed = () => {
      if (window.innerWidth < 640) setMarqueeSpeed(30);
      else if (window.innerWidth < 1024) setMarqueeSpeed(40);
      else setMarqueeSpeed(50);
    };

    updateSpeed();
    window.addEventListener("resize", updateSpeed);
    return () => window.removeEventListener("resize", updateSpeed);
  }, []);

  return (
    // Section ini menjadi grid container, TANPA padding horizontal (px)
    <section className="flex flex-col gap-8 w-full mx-auto max-w-full 2xl:max-w-[1440px] font-nunito py-12 sm:grid sm:grid-cols-2 sm:items-start lg:grid-cols-[6fr_4fr] sm:gap-x-12">
      {/* === Blok 1: Judul & Badge === */}
      {/* Padding diterapkan di sini */}
      <div className="w-full flex flex-col items-start text-left sm:items-end sm:text-right sm:col-start-2 sm:row-start-1 px-6 lg:px-20">
        <SectionBadge
          label="ARTIKEL TASTY"
          className="hidden lg:flex text-xs md:text-2xl px-1 py-0.5 md:px-2 mb-3"
        />
        <div className="font-bricolage-grotesque-condensed text-[#003CE9] font-extrabold text-2xl md:text-5xl bg-[#B5FE28] px-2 md:px-4 py-0.5 md:py-2">
          RESEP TASTY
        </div>
      </div>

      {/* === Blok 2: Marquee === */}
      {/* Blok ini TIDAK memiliki padding horizontal, sehingga menjadi full-bleed */}
      <div className="w-full flex flex-col gap-4 sm:col-start-1 sm:row-start-1 sm:row-span-2">
        <Marquee speed={marqueeSpeed} direction="left">
          {topRowImages.map((recipe, index) => (
            <RecipeCard
              key={`top-${index}`}
              recipe={recipe}
              index={index}
              direction="top"
            />
          ))}
        </Marquee>
        <Marquee speed={marqueeSpeed} direction="right">
          {bottomRowImages.map((recipe, index) => (
            <RecipeCard
              key={`bottom-${index}`}
              recipe={recipe}
              index={index}
              direction="bottom"
            />
          ))}
        </Marquee>
      </div>

      {/* === Blok 3: Deskripsi, CTA, & Dekorasi === */}
      {/* Padding juga diterapkan di sini */}
      <div className="flex flex-col items-center text-center sm:items-end sm:text-right space-y-8 px-6 lg:px-20">
        <div className="max-w-md space-y-4 text-[#003CE9]">
          <p className="text-xs md:text-lg leading-relaxed">
            Pusing? Males ribet? Tenang!
          </p>
          <p className="text-xs md:text-lg leading-relaxed">
            Tasty Fruit® punya jawabannya. Di rubrik ini, ada banyak resep-resep
            yang gak cuma bikin dapurmu rame, tapi juga lidahmu bergoyang
            gembira.
          </p>
          <p className="text-xs md:text-lg leading-relaxed">
            Yuk, coba kreasi buah-buahan yang unik dari Tasty Fruit® sekarang
            juga!
          </p>
        </div>

        <div className="flex flex-col items-center sm:items-end gap-4 lg:gap-8">
          <CtaButton py="0" href="/artikel/resep-tasty" color="blue">
            LANJUT BERKREASI
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
    </section>
  );
}

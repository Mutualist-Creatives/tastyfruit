"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionBadge from "@/components/ui/section-badge";
import { ResepTastyData } from "@/lib/resep-tasty-data";

interface ResepDetailProps {
  resep: ResepTastyData;
  nextResep?: ResepTastyData | null;
  prevResep?: ResepTastyData | null;
}

export default function ResepDetail({
  resep,
  nextResep,
  prevResep,
}: ResepDetailProps) {
  return (
    <article className="w-full mx-auto">
      {/* ================================================================== */}
      {/* === MOBILE & TABLET LAYOUT (<1024px) ===                         */}
      {/* ================================================================== */}
      <div className="lg:hidden">
        {/* Header */}
        <div className="flex flex-col items-start text-left gap-2 mb-8">
          <SectionBadge
            label="ARTIKEL TASTY"
            className="text-xs md:text-2xl px-1 py-0.5 md:px-2 mb-1"
          />
          <div className="font-bricolage-grotesque-condensed text-[#003CE9] font-extrabold text-2xl md:text-5xl bg-[#B5FE28] px-2 md:px-4 py-0.5 md:py-2">
            RESEP TASTY
          </div>
        </div>

        {/* Author and Title */}
        {/* ADJUSTED: Reduced margin-bottom to bring info block closer */}
        <div className="text-[#003CE9] mb-4">
          <p className="text-sm">
            Resep oleh <span className="font-bold">{resep.author}</span>
          </p>
          <h1 className="font-bold text-5xl md:text-6xl my-2 font-bricolage-grotesque-condensed">
            {resep.name.toUpperCase()}
          </h1>
        </div>

        {/* Info Servings & Time */}
        <div className="text-[#003CE9]">
          {/* ADJUSTED: Reduced gap and bottom margin */}
          <div className="flex items-center gap-4 text-sm text-[#003CE9]/80 mb-6">
            <p>{resep.servings} servings</p>
            <div className="flex items-center gap-1.5">
              <Image
                src="/assets/artikel/resep-tasty/time.svg"
                alt="Time"
                width={16}
                height={16}
              />
              <span>{resep.time}</span>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="w-full mb-8">
          <Image
            src={resep.image}
            alt={resep.name}
            width={500}
            height={281}
            className="rounded-2xl object-cover w-full h-auto aspect-video"
          />
        </div>

        {/* Ingredients and Instructions */}
        <div className="text-[#003CE9]">
          <div className="mb-6">
            <h2 className="font-bold text-xl mb-3">Bahan Baku</h2>
            <ul className="space-y-3 border-t border-[#003CE9]/20 pt-3">
              {resep.ingredients.map((ingredient) => (
                <li
                  key={ingredient.name}
                  className="flex justify-between items-start text-base"
                >
                  <div>
                    <span>{ingredient.name}</span>
                    {ingredient.note && (
                      <span className="block text-xs text-[#003CE9]/70 italic">
                        {ingredient.note}
                      </span>
                    )}
                  </div>
                  <span className="font-medium text-right flex-shrink-0 ml-4">
                    {ingredient.amount}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-xl mb-3">Cara Masak</h2>
            <ol className="space-y-4 border-t border-[#003CE9]/20 pt-3 text-base leading-relaxed">
              {resep.instructions.map((step, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="font-bricolage-grotesque-condensed font-bold text-3xl text-[#003CE9]/50 mt-[-2px]">
                    {index + 1}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-bold">{step.title}</h3>
                    <p className="italic text-[#003CE9]/90">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      {/* ================================================================== */}
      {/* === DESKTOP LAYOUT (>=1024px) ===                                */}
      {/* ================================================================== */}
      <div className="hidden lg:block">
        <div className="flex flex-col items-start text-left gap-2 mb-8">
          <SectionBadge
            label="ARTIKEL TASTY"
            className="text-2xl px-2 py-0.5 mb-5"
          />
          <div className="font-bricolage-grotesque-condensed text-[#003CE9] font-extrabold text-5xl bg-[#B5FE28] px-4 py-2">
            RESEP TASTY
          </div>
        </div>
        <div className="grid grid-cols-2 gap-12">
          <div className="w-full">
            <Image
              src={resep.image}
              alt={resep.name}
              width={500}
              height={500}
              className="rounded-2xl object-cover w-full h-auto aspect-square"
            />
          </div>
          <div className="text-[#003CE9]">
            <p className="text-sm">
              Resep oleh <span className="font-bold">{resep.author}</span>
            </p>
            {/* ADJUSTED: Reduced margin-bottom to bring info block closer */}
            <h1 className="font-bold text-7xl mb-2 font-bricolage-grotesque-condensed">
              {resep.name.toUpperCase()}
            </h1>
            {/* ADJUSTED: Reduced gap and bottom margin */}
            <div className="flex items-center gap-4 text-sm text-[#003CE9]/80 mb-6">
              <p>{resep.servings} servings</p>
              <div className="flex items-center gap-1.5">
                <Image
                  src="/assets/artikel/resep-tasty/time.svg"
                  alt="Time"
                  width={16}
                  height={16}
                />
                <span>{resep.time}</span>
              </div>
            </div>
            <div className="mb-6">
              <h2 className="font-bold text-xl mb-3">Bahan Baku</h2>
              <ul className="space-y-3 border-t border-[#003CE9]/20 pt-3">
                {resep.ingredients.map((ingredient) => (
                  <li
                    key={ingredient.name}
                    className="flex justify-between items-start text-base"
                  >
                    <div>
                      <span>{ingredient.name}</span>
                      {ingredient.note && (
                        <span className="block text-xs text-[#003CE9]/70 italic">
                          {ingredient.note}
                        </span>
                      )}
                    </div>
                    <span className="font-medium text-right flex-shrink-0 ml-4">
                      {ingredient.amount}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-bold text-xl mb-3">Cara Masak</h2>
              <ol className="space-y-4 border-t border-[#003CE9]/20 pt-3 text-base leading-relaxed">
                {resep.instructions.map((step, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="font-bricolage-grotesque-condensed font-bold text-3xl text-[#003CE9]/50 mt-[-2px]">
                      {index + 1}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-bold">{step.title}</h3>
                      <p className="italic text-[#003CE9]/90">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Navigation Buttons - Similar to publikasi-detail */}
      <div className="fixed bottom-[15vh] md:bottom-16 left-0 w-full p-4 md:p-8 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
          {/* Previous Button - Always show */}
          <div className="flex justify-start">
            <Link
              href={
                prevResep
                  ? `/artikel/resep-tasty/${prevResep.id}`
                  : "/artikel/resep-tasty"
              }
              className="block"
            >
              <motion.div
                className="bg-[#B5FE28] rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-[#003CE2] shadow-md transition-colors"
                whileTap={{ scale: 0.75 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <Image
                  src="/assets/ui/arrow-right-blue.svg"
                  alt={prevResep ? "Previous recipe" : "Back to recipes"}
                  width={20}
                  height={20}
                  className="rotate-180"
                />
              </motion.div>
            </Link>
          </div>

          {/* Next Recipe Button - Only show if nextResep exists */}
          {nextResep && (
            <div className="flex justify-end">
              <Link
                href={`/artikel/resep-tasty/${nextResep.id}`}
                className="block"
              >
                <motion.div
                  className="bg-[#B5FE28] rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-[#003CE2] shadow-md transition-colors"
                  whileTap={{ scale: 0.75 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <Image
                    src="/assets/ui/arrow-right-blue.svg"
                    alt="Next recipe"
                    width={20}
                    height={20}
                  />
                </motion.div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

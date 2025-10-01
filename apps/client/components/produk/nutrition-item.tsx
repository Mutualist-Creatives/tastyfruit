"use client";
import Image from "next/image";

interface NutritionItemProps {
  label: string;
  value: string;
  unit: string;
  align?: "center" | "left" | "right";
}

export default function NutritionItem({
  label,
  value,
  unit,
  align = "center",
}: NutritionItemProps) {
  const alignment = getAlignmentClasses(align);

  return (
    <div className={`text-center ${alignment}`.trim()}>
      {/* Nutrition Label */}
      <NutritionLabel label={label} />

      {/* Nutrition Value with Heart Background */}
      <NutritionValue value={value} unit={unit} />
    </div>
  );
}

// ==================== COMPONENT DEFINITIONS ====================

function NutritionLabel({ label }: { label: string }) {
  return (
    <div className="bg-[#003BE2] text-xs md:text-xl lg:text-2xl text-[#B5FE28] px-1.5 lg:py-0.25 w-fit mx-auto font-bricolage-grotesque-condensed font-bold">
      {label.toUpperCase()}
    </div>
  );
}

function NutritionValue({ value, unit }: { value: string; unit: string }) {
  return (
    <div className="relative">
      {/* Heart Background Image */}
      <HeartBackground />

      {/* Value and Unit Overlay */}
      <ValueOverlay value={value} unit={unit} />
    </div>
  );
}

function HeartBackground() {
  return (
    <Image
      src="/assets/decorations/heart.svg"
      alt="Heart decoration"
      width={120}
      height={120}
      className="w-20 h-20 lg:w-24 lg:h-24 xl:w-32 xl:h-32 mx-auto"
    />
  );
}

function ValueOverlay({ value, unit }: { value: string; unit: string }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
      {/* Nutrition Value */}
      <span className="text-2xl lg:text-4xl xl:text-5xl font-bold text-[#003BE2] font-bricolage-grotesque-condensed">
        {value}
      </span>

      {/* Unit Label */}
      <span className="text-[8px] text-bold text-[#003BE2] font-nunito -mt-2">
        {unit}
      </span>
    </div>
  );
}

// ==================== UTILITY FUNCTIONS ====================

function getAlignmentClasses(align: "center" | "left" | "right"): string {
  switch (align) {
    case "left":
      return "items-start text-left";
    case "right":
      return "items-end text-right";
    case "center":
    default:
      return "items-center text-center";
  }
}

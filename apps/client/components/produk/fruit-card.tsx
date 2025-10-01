"use client";
import Image from "next/image";
import Link from "next/link";

type Layout = "layout-a" | "layout-b";

interface FruitCardProps {
  name: string;
  image: string; // Ini tetap ada, mungkin digunakan oleh DefaultCard
  layoutType: Layout;
  isActive?: boolean;
  variant?: "default" | "simple";
  href?: string;
  fruitCardImage?: string; // [PERUBAHAN 1] Menambahkan prop baru di interface
}

export default function FruitCard({
  name,
  image,
  layoutType,
  isActive = false,
  variant = "default",
  href,
  fruitCardImage, // [PERUBAHAN 2] Menerima prop baru
}: FruitCardProps) {
  const isBlue = layoutType === "layout-a";

  const cardContent =
    variant === "simple" ? (
      <SimpleCard
        name={name}
        // 'image' di sini sekarang diganti dengan fruitCardImage
        image={fruitCardImage || image} // [PERUBAHAN 3] Mengirim prop baru ke SimpleCard
        isBlue={isBlue}
        hasHref={!!href}
      />
    ) : (
      <DefaultCard
        name={name}
        image={image}
        isBlue={isBlue}
        isActive={isActive}
        hasHref={!!href}
      />
    );

  if (href) {
    return (
      <Link href={`/produk/${href}`} className="cursor-pointer">
        {cardContent}
      </Link>
    );
  }

  return <div>{cardContent}</div>;
}

// ==================== COMPONENT DEFINITIONS ====================

// [PERUBAHAN 4] SimpleCard sekarang akan menerima fruitCardImage melalui prop 'image'-nya
function SimpleCard({
  name,
  image,
  isBlue,
  hasHref,
}: {
  name: string;
  image: string; // Prop ini sekarang berisi path ke 'pisang-card.png', dll.
  isBlue: boolean;
  hasHref: boolean;
}) {
  const simpleBgColor = isBlue ? " bg-[#B5FE28]" : "bg-[#003BE2]";
  const simpleHolderSrc = isBlue
    ? "/assets/produk/image-holder-blue.svg"
    : "/assets/produk/image-holder-green.svg";
  const simpleTextColor = isBlue ? "text-[#003BE2]" : "text-[#B5FE28] ";

  return (
    <div
      className={`
        relative w-full mx-auto aspect-[4/5] 
        ${simpleBgColor} 
        rounded-2xl overflow-hidden shadow-lg 
        transform-gpu hover:scale-[1.03] transition-transform duration-100 
        ${hasHref ? "cursor-pointer" : ""}
        md:max-w-sm md:min-h-[175px] lg:min-h-[200px] xl:min-h-[250px]
      `}
    >
      <BackgroundPattern holderSrc={simpleHolderSrc} />
      <CardPatternOverlay />
      {/* Komponen ini sekarang akan menampilkan gambar dari fruitCardImage */}
      <FruitImage image={image} name={name} />
      <FruitNameLabel
        name={name}
        bgColor={simpleBgColor}
        textColor={simpleTextColor}
      />
    </div>
  );
}

// ... Sisa dari file tidak ada perubahan ...
function DefaultCard({
  name,
  image,
  isBlue,
  isActive,
  hasHref,
}: {
  name: string;
  image: string;
  isBlue: boolean;
  isActive: boolean;
  hasHref: boolean;
}) {
  const cardConfig = getDefaultCardConfig(isBlue, isActive);

  return (
    <div className="w-full max-w-[320px] md:max-w-[250px] lg:max-w-[300px] xl:max-w-[350px] mx-auto">
      <div
        className={`
          relative rounded-2xl lg:rounded-[28px] p-4 md:p-5 
          ${cardConfig.cardBg} 
          ${cardConfig.glowClass} 
          transition-shadow duration-300
          ${hasHref ? "cursor-pointer" : ""}
        `}
      >
        <div className="relative rounded-2xl lg:rounded-[24px] overflow-hidden h-[320px] md:h-[275px] lg:h-[350px] xl:h-[425px]">
          <Image
            src={cardConfig.holderSrc}
            alt="Card background holder"
            fill
            sizes="(max-width: 768px) 320px, 300px, 350px"
            className="object-contain"
          />
          <DefaultCardContent
            image={image}
            name={name}
            badgeColor={cardConfig.badgeColor}
            titleBg={cardConfig.titleBg}
          />
        </div>
      </div>
    </div>
  );
}

function BackgroundPattern({ holderSrc }: { holderSrc: string }) {
  return (
    <Image
      src={holderSrc}
      alt="Card background holder"
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      className="object-contain p-3"
    />
  );
}

function CardPatternOverlay() {
  return (
    <div className="absolute inset-3 overflow-hidden">
      <div className="relative w-full h-full">
        <Image
          src={"/assets/tasty-universe/card-pattern.svg"}
          alt={"image holder"}
          fill
          sizes="(max-width: 768px) 80vw, 40vw"
          className="object-cover object-center opacity-10"
        />
      </div>
    </div>
  );
}

function FruitImage({ image, name }: { image: string; name: string }) {
  return (
    <div className="absolute inset-3 mb-10 md:mb-18">
      <div className="relative w-full h-full">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 80vw, 40vw"
          className="object-contain object-top drop-shadow-lg"
        />
      </div>
    </div>
  );
}

function FruitNameLabel({
  name,
  bgColor,
  textColor,
}: {
  name: string;
  bgColor: string;
  textColor: string;
}) {
  return (
    <div
      className={`absolute bottom-3 md:bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 px-2 py-0.5 ${bgColor}`}
    >
      <h3
        className={`font-bricolage-grotesque-condensed font-extrabold text-lg md:text-xl ${textColor}`}
      >
        {name.toUpperCase()}
      </h3>
    </div>
  );
}

function DefaultCardContent({
  image,
  name,
  badgeColor,
  titleBg,
}: {
  image: string;
  name: string;
  badgeColor: string;
  titleBg: string;
}) {
  return (
    <div className="relative z-10 h-full flex flex-col">
      <div className="relative flex-1 px-6 md:px-6 lg:px-6 xl:px-8">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 220px, 240px, 280px"
          className="object-contain object-center drop-shadow-lg"
        />
      </div>
      <div className="px-6 md:px-6 lg:px-6 xl:px-8 pb-8 md:pb-8 lg:pb-12">
        <BadgesAndLogoRow badgeColor={badgeColor} />
        <div
          className={`text-center font-bricolage-grotesque-condensed font-extrabold text-lg md:text-sm lg:text-xl xl:text-2xl w-fit mx-auto px-2 py-1 ${titleBg}`}
        >
          {name.toUpperCase()}
        </div>
      </div>
    </div>
  );
}

function BadgesAndLogoRow({ badgeColor }: { badgeColor: string }) {
  const badgeClasses = "h-4 w-4 md:h-3 md:w-3 lg:h-5 lg:w-5 xl:h-6 xl:w-6";

  return (
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center gap-1 md:gap-1 lg:gap-2">
        <Image
          src={`/assets/badges/highland-farm-${badgeColor}.svg`}
          alt="Highland Farm badge"
          width={24}
          height={24}
          className={badgeClasses}
        />
        <Image
          src={`/assets/badges/pesticide-free-${badgeColor}.svg`}
          alt="Pesticide Free badge"
          width={24}
          height={24}
          className={badgeClasses}
        />
        <Image
          src={`/assets/badges/handpicked-${badgeColor}.svg`}
          alt="Handpicked badge"
          width={24}
          height={24}
          className={badgeClasses}
        />
      </div>
      <div className="flex-shrink-0">
        <Image
          src="/assets/tasty-fruit-logo.svg"
          alt="Tasty Fruit"
          width={40}
          height={40}
          className="w-7 h-7 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10"
        />
      </div>
    </div>
  );
}

function getDefaultCardConfig(isBlue: boolean, isActive: boolean) {
  const holderSrc = isBlue
    ? "/assets/produk/image-holder-blue.svg"
    : "/assets/produk/image-holder-green.svg";

  const titleBg = isBlue
    ? "bg-[#B5FE28] text-[#003BE2]"
    : "bg-[#003BE2] text-[#B5FE28]";

  const badgeColor = isBlue ? "white" : "blue";
  const cardBg = isBlue ? "bg-[#B5FE28]" : "bg-[#003BE2]";

  const glowClass = isActive
    ? isBlue
      ? "shadow-[0_0_40px_rgba(255,255,255,0.7)]"
      : "shadow-[0_0_40px_rgba(181,254,40,0.6)]"
    : "shadow-none";

  return {
    holderSrc,
    titleBg,
    badgeColor,
    cardBg,
    glowClass,
  };
}

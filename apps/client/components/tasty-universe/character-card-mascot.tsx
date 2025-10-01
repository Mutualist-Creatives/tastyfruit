"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

// The type definition remains the same
type Character = {
  name: string;
  title?: string;
  species: string;
  tabsColor: string[];
  cardColor: string;
  primaryColor: string;
  secondaryColor: string;
  tertiaryColor: string;
  pictureBgColor: string;
  imageHolderColor: string;
  image: string;
};

export default function CharacterCardMascot({
  character,
}: {
  character: Character;
}) {
  const [imageHolderSrc, setImageHolderSrc] = useState(
    `/assets/tasty-universe/image-holder-${character.imageHolderColor}.svg`
  );

  useEffect(() => {
    const computeResponsiveHolder = () => {
      const base = `/assets/tasty-universe/image-holder-${character.imageHolderColor}`;
      if (typeof window !== "undefined") {
        if (window.matchMedia("(min-width: 1280px)").matches) {
          return `${base}-lg.svg`;
        }
        if (window.matchMedia("(min-width: 1024px)").matches) {
          return `${base}-md.svg`;
        }
      }
      return `${base}-md.svg`;
    };

    const update = () => setImageHolderSrc(computeResponsiveHolder());
    update();
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, [character.imageHolderColor]);

  return (
    <div
      className="w-auto h-full min-w-[125px] min-h-[160px] sm:min-h-[180px] rounded-lg p-2 md:p-2.5 lg:p-2.5 transform-gpu hover:scale-[1.03] transition-transform duration-200 cursor-pointer relative overflow-hidden"
      style={{ backgroundColor: character.cardColor }}
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10 bg-center bg-no-repeat z-[1]"
        style={{
          backgroundImage: "url(/assets/tasty-universe/card-pattern.svg)",
          backgroundSize: "cover",
        }}
      />
      <div className="h-full flex items-center justify-center z-10 relative">
        <div
          className="relative w-full h-full bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${imageHolderSrc})` }}
        >
          {/* Background container with overflow visible */}
          <div
            className="absolute inset-3 sm:inset-3 md:inset-4 lg:inset-4 rounded-lg flex items-center justify-center overflow-visible"
            style={{ backgroundColor: character.pictureBgColor }}
          >
            {/* Image container that can overflow */}
            <div className="relative w-full h-full scale-135 mt-5">
              <Image
                src={character.image}
                alt={`${character.name} character`}
                fill
                className="object-contain drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

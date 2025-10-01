import React from "react";
import Image from "next/image";

interface RibbonProps {
  fruitName: string;
}

const Ribbon: React.FC<RibbonProps> = ({ fruitName }) => {
  return (
    <div className="flex flex-col items-start">
      {/* 1. Div pita atas dengan hex code langsung */}
      <div
        className="
        -rotate-3
          bg-[#003CE9] 
          text-[#9CFF00] 
          py-2 px-4 
          text-center 
          font-bricolage-grotesque-condensed 
          font-extrabold 
          text-3xl md:text-5xl xl:text-7xl
          uppercase 
          shadow-lg"
      >
        Kandungan Alami
      </div>

      {/* 2. Div efek lipatan dengan hex code langsung */}
      {/* <div
        className="
          bg-[#023AB7] 
          w-8 
          h-2
          shadow-md"
      ></div> */}
      <Image
        src="/assets/produk/ribbon-vector.svg"
        alt="Heart decoration"
        width={120}
        height={120}
        className="h-auto w-39 md:w-54 xl:w-84 ml-[4em] md:ml-[6.75em] xl:ml-[9.25em] -mb-1.5 -mt-1.75 md:-mb-2 md:-mt-2.5 xl:-mb-2.75 xl:-mt-3.5"
      />
      {/* 3. Div pita bawah dengan hex code langsung */}
      <div
        className="
          ml-[2.15em] xl:ml-[2.05em]
          bg-[#003CE9] 
          text-[#9CFF00] 
          py-2 px-4 
          text-start
          font-bricolage-grotesque-condensed 
          font-extrabold 
          text-3xl md:text-5xl xl:text-7xl
          uppercase 
          shadow-lg"
      >
        Dari {fruitName}!
      </div>
    </div>
  );
};

export default Ribbon;

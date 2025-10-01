// app/tasty-universe/page.tsx

"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { characterData } from "@/lib/character-data";
import { CtaButton } from "@/components/ui/cta-button";
import Container from "@/components/layout/container";

export default function TastyUniverse() {
  const router = useRouter();

  const handleMascotClick = (slug: string) => {
    router.push(`/tasty-universe/${slug}`);
  };

  return (
    <Container>
      <section className="w-full h-auto font-nunito relative">
        {/* Decorative images using your original assets */}
        {/* <Image
          src="/assets/decorations/star.svg"
          alt=""
          aria-hidden="true"
          width={40}
          height={40}
          className="absolute top-16 left-20 w-10 h-10 -z-10 hidden lg:block pointer-events-none select-none"
        /> */}
        {/* <Image
          src="/assets/decorations/star.svg"
          alt=""
          aria-hidden="true"
          width={60}
          height={60}
          className="absolute top-32 left-8 w-15 h-15 -z-10 hidden lg:block"
        /> */}
        {/* <Image
          src="/assets/decorations/heart.svg"
          alt=""
          aria-hidden="true"
          width={50}
          height={50}
          className="absolute bottom-32 left-16 w-12 h-12 -z-10 hidden lg:block pointer-events-none select-none"
        /> */}
        {/* <Image
          src="/assets/decorations/star.svg"
          alt=""
          aria-hidden="true"
          width={35}
          height={35}
          className="absolute top-20 right-32 w-9 h-9 -z-10 hidden lg:block"
        />
        <Image
          src="/assets/decorations/star.svg"
          alt=""
          aria-hidden="true"
          width={45}
          height={45}
          className="absolute bottom-16 right-24 w-11 h-11 -z-10 hidden lg:block"
        /> */}

        {/* Main content container with proper padding */}
        {/* Main content flex container */}
        <div className="w-full h-full mx-auto max-w-[1280px] flex flex-col lg:flex-row md:items-end justify-between gap-6 lg:gap-8">
          {/* Left Section - Content */}
          <div className="w-full h-full lg:w-1/2 lg:pr-4 xl:pr-8 mb-8 lg:mb-0">
            {/* Title using your original asset */}
            <div className="relative mb-6 lg:mb-8">
              <Image
                src="/assets/tasty-universe/tasty-universe-title.svg"
                alt="Tasty Universe Title"
                width={450}
                height={250}
                className="w-full max-w-[350px] sm:max-w-[400px] lg:max-w-[450px] h-auto mx-auto lg:mx-0"
                priority
                sizes="(max-width: 640px) 350px, (max-width: 1024px) 400px, 450px"
              />
            </div>

            {/* Description text */}
            <div className="w-full lg:w-[78%] space-y-4 text-blue-600 px-2 md:px-[6em] lg:px-0 mb-6 lg:mb-8 text-center lg:text-left">
              <p className="text-base sm:text-lg leading-relaxed">
                Di <span className="font-bold">Tasty Universe</span>, setiap
                rasa punya wajahnya sendiri. Inilah para bintang Tasty Fruit!
              </p>
              <p className="text-base sm:text-lg leading-relaxed">
                Maskot Tasty Fruit®{" "}
                <span className="font-bold">penuh semangat</span> dan{" "}
                <span className="font-bold">karakter</span> yang unik. Mereka
                mewakili setiap gigitan segar yang menutrisi, siap membuat
                duniamu lebih berwarna dan sehat!
              </p>
            </div>

            {/* CTA Button using your component */}
            <div className="flex justify-center lg:justify-start mt-8">
              <CtaButton href="/tasty-universe/mr-tasty" color="blue">
                MEET THE PACK!
              </CtaButton>
            </div>
          </div>

          {/* Right Section - Character Grid using your actual components */}
          <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end">
            <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3 sm:gap-5 lg:gap-4 xl:gap-4">
              {characterData.map((character) => (
                <div
                  key={character.name}
                  className="w-full cursor-pointer"
                  onClick={() => handleMascotClick(character.slug)}
                >
                  <Image
                    src={character.mascotCardImage}
                    alt={character.name}
                    width={200}
                    height={266}
                    className="w-full h-full object-contain rounded-lg transform-gpu hover:scale-[1.03] transition-transform duration-200"
                    priority={character.slug === "mr-tasty"} // Example priority
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

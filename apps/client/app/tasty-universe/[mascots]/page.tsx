import Image from "next/image";
import { notFound } from "next/navigation";
import { characterData } from "@/lib/character-data";
import FlipCard from "@/components/tasty-universe/flip-card";
import Container from "@/components/layout/container";
import { CtaButton } from "@/components/ui/cta-button";
import StarDecorations from "@/components/ui/star-decorations";

export function generateStaticParams() {
  return characterData.map((c) => ({ mascots: c.slug }));
}

export default async function Mascots({
  params,
}: {
  params: Promise<{ mascots: string }>;
}) {
  const { mascots } = await params;
  const character = characterData.find((c) => c.slug === mascots);

  if (!character) return notFound();

  // Get the first fun fact entry for cleaner access
  const funFact = character.funFact?.[0];

  return (
    <Container>
      <section className="w-full h-auto">
        {/* <div className="hidden lg:block">
          <StarDecorations count={4} seed={36276432} randomRotate={true} />
          <StarDecorations count={3} seed={383238} randomRotate={true} />
        </div> */}

        {/* <div className="block lg:hidden">
          <StarDecorations count={3} seed={383238} randomRotate={true} />
          <StarDecorations count={1} seed={213} randomRotate={true} />
          <StarDecorations count={1} seed={32894} randomRotate={true} />
        </div> */}

        <div className="max-w-7xl relative">
          {/* Desktop Layout */}
          <div className="hidden lg:block">
            {/* Left column: texts */}
            <div className="w-full lg:w-[40%] space-y-6">
              <div className="flex justify-start">
                <CtaButton px="2" py="0" href="/" color="blue">
                  MEET THE PACK!
                </CtaButton>
              </div>
              <h1 className="font-bricolage-grotesque-condensed text-[#003CE9] font-extrabold text-5xl lg:text-6xl bg-[#B5FE28] px-4 py-2 inline-block">
                {character.name}
              </h1>
              <div className="w-full lg:w-[70%]">
                {character.introduction && (
                  <p className="text-blue-700 text-lg md:text-lg leading-relaxed max-w-xl mb-5">
                    {(() => {
                      const nameRegex = new RegExp(character.name, "gi");
                      const parts = character.introduction.split(nameRegex);
                      const matches =
                        character.introduction.match(nameRegex) || [];

                      return parts.map((part, index) => (
                        <span key={index}>
                          {part}
                          {index < parts.length - 1 && matches[index] && (
                            <span className="font-bold">{matches[index]}</span>
                          )}
                        </span>
                      ));
                    })()}
                  </p>
                )}

                {character.description && (
                  <p className="text-blue-700 text-lg md:text-lg leading-relaxed max-w-xl">
                    {character.description}
                  </p>
                )}
              </div>
              <div className="w-[40%] lg:w-full grid grid-cols-2 lg:grid-cols-2 gap-2 lg:gap-2 xl:gap-4 pt-4">
                <div>
                  <p className="text-sm text-blue-700 font-bold pb-2">
                    Tempat Tumbuh
                  </p>
                  <div className="inline-block bg-[#B5FE28] px-3 py-1 text-[#003CE9] font-bricolage-grotesque-condensed font-extrabold md:text-2xl lg:text-2xl xl:text-3xl">
                    {character.growingPlace.toUpperCase() || "-"}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-blue-700 font-bold pb-2">
                    Karakteristik
                  </p>
                  <div className="inline-block bg-[#B5FE28] px-3 py-1 text-[#003CE9] font-bricolage-grotesque-condensed font-extrabold md:text-2xl lg:text-2xl xl:text-3xl">
                    {character.characteristic.toUpperCase() || "-"}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-blue-700 font-bold pb-2">
                    Waktu Panen
                  </p>
                  <div className="inline-block bg-[#B5FE28] px-3 py-1 text-[#003CE9] font-bricolage-grotesque-condensed font-extrabold md:text-2xl lg:text-2xl xl:text-3xl">
                    {character.harvestTime.toUpperCase() || "-"}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-blue-700 font-bold pb-2">
                    Spesies
                  </p>
                  <div className="inline-block bg-[#B5FE28] px-3 py-1 text-[#003CE9] font-bricolage-grotesque-condensed font-extrabold md:text-2xl lg:text-2xl xl:text-3xl">
                    {character.species.toUpperCase()}
                  </div>
                </div>
              </div>
            </div>

            {/* Middle column: character image only (no holder/bg) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={character.image}
                alt={character.name}
                width={560}
                height={560}
                className="object-contain drop-shadow-xl w-[auto] h-[30em] lg:h-[35em] -z-50"
                priority
              />
            </div>

            {/* Right column: Fun section */}
            <div className="absolute top-0 right-0 w-[30%] h-full flex flex-col gap-6">
              {/* Flip Card redesigned */}
              <div className="w-[180px] h-[250px] lg:w-[210px] lg:h-[290px] ml-auto">
                {(() => {
                  const entry = character.flipCard?.[0];
                  return (
                    <FlipCard
                      frontBg="transparent"
                      backBg="#003BE2"
                      front={
                        <div className="relative w-full h-full rounded-2xl overflow-hidden">
                          <Image
                            src={entry?.image || character.image}
                            alt={character.name}
                            width={210}
                            height={290}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      }
                      back={
                        <div
                          className="w-full h-full flex items-center justify-center"
                          style={{ backgroundColor: "#003BE2" }}
                        >
                          <p className="text-4xl md:text-3xl lg:text-4xl font-extrabold text-white">
                            ?
                          </p>
                        </div>
                      }
                      className="h-full"
                    />
                  );
                })()}
              </div>

              {/* Fun facts section */}
              {funFact && (
                <div className="rounded-4xl bg-[#003CE9] text-white p-6 relative mt-auto">
                  {/* Heart decoration in top right corner */}
                  <Image
                    src="/assets/decorations/heart.svg"
                    alt=""
                    aria-hidden="true"
                    width={24}
                    height={24}
                    className="absolute lg:-top-10 xl:-top-12 right-10 w-[6em] h-[6em] xl:w-[7em] xl:h-[7em] pointer-events-none select-none"
                  />
                  <div className="inline-flex font-bricolage-grotesque-condensed items-center gap-2 bg-[#9CFF00] text-[#003CE9] px-1 py-0.5 font-extrabold text-3xl">
                    FUN FACT
                  </div>
                  <p className="mt-2 text-sm md:text-base leading-relaxed font-bold">
                    {funFact.introduction}
                  </p>
                  <p className="text-sm md:text-md leading-relaxed opacity-90">
                    {funFact.description}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Mobile & Tablet Layout - REVISI */}
          <div className="block lg:hidden space-y-6">
            {/* Div Atas: Konten Kiri dan Kanan */}
            <div className="relative flex justify-between min-h-[450px] md:min-h-[550px]">
              {/* Konten Kiri */}
              <div className="w-4/6 md:w-1/2 flex flex-col">
                {/* MEET THE PACK button di pojok kiri atas */}
                <div className="mb-4">
                  <CtaButton py="0" href="/tasty-universe" color="blue">
                    MEET THE PACK!
                  </CtaButton>
                </div>

                {/* Nama mascot */}
                <div className="mb-4">
                  <h1 className="font-bricolage-grotesque-condensed text-[#003CE9] font-extrabold text-4xl md:text-7xl bg-[#B5FE28] px-3 py-2 inline-block">
                    {character.name}
                  </h1>
                </div>

                {/* Gambar mascot (absolute positioned di bawah nama) */}
                <div className="w-full absolute top-28 md:top-34 left-0 md:left-4 right-1/2">
                  <Image
                    src={character.image}
                    alt={character.name}
                    width={300}
                    height={300}
                    className="object-contain drop-shadow-xl w-auto h-[20em] md:h-[27.5em] max-w-full"
                    priority
                  />
                </div>
              </div>

              {/* Konten Kanan */}
              <div className="w-1/2 flex flex-col justify-between items-end">
                {/* Flip Card di pojok kanan atas */}
                <div className="w-[6em] h-[8.5em] md:w-[10em] md:h-[13em] mt-[3em]">
                  {(() => {
                    const entry = character.flipCard?.[0];
                    return (
                      <FlipCard
                        frontBg="transparent"
                        backBg="#003BE2"
                        front={
                          <div className="relative w-full h-full overflow-hidden">
                            <Image
                              src={entry?.image || character.image}
                              alt={character.name}
                              width={160}
                              height={224}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        }
                        back={
                          <div
                            className="w-full h-full flex items-center justify-center"
                            style={{ backgroundColor: "#003BE2" }}
                          >
                            <p className="text-3xl md:text-4xl font-extrabold text-white">
                              ?
                            </p>
                          </div>
                        }
                        className="h-full"
                      />
                    );
                  })()}
                </div>

                {/* Fun Fact di pojok kanan bawah */}
                {funFact && (
                  <div className="w-full max-w-[280px] md:max-w-[320px]">
                    <div className="rounded-3xl bg-[#003CE9] text-white p-4 md:p-5 relative">
                      {/* Heart decoration */}
                      <Image
                        src="/assets/decorations/heart.svg"
                        alt=""
                        aria-hidden="true"
                        width={24}
                        height={24}
                        className="absolute -top-6 md:-top-8 right-4 md:right-6 w-14 h-14 md:w-16 md:h-16 pointer-events-none select-none"
                      />
                      <div className="inline-flex font-bricolage-grotesque-condensed items-center gap-2 bg-[#9CFF00] text-[#003CE9] px-1 py-0 md:px-2 md:py-1 font-extrabold text-lg md:text-xl whitespace-nowrap">
                        FUN FACT
                      </div>
                      <p className="mt-2 text-[8px] md:text-base leading-relaxed font-bold">
                        {funFact.introduction}
                      </p>
                      <p className="text-[7px] md:text-sm leading-relaxed opacity-90">
                        {funFact.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Div Bawah: Width 80% dari kiri */}
            <div className="w-4/5 md:w-4/7 space-y-6">
              {/* Introduction */}
              {character.introduction && (
                <p className="text-blue-700 text-xs md:text-lg leading-relaxed">
                  {(() => {
                    const nameRegex = new RegExp(character.name, "gi");
                    const parts = character.introduction.split(nameRegex);
                    const matches =
                      character.introduction.match(nameRegex) || [];

                    return parts.map((part, index) => (
                      <span key={index}>
                        {part}
                        {index < parts.length - 1 && matches[index] && (
                          <span className="font-bold">{matches[index]}</span>
                        )}
                      </span>
                    ));
                  })()}
                </p>
              )}

              {/* Description */}
              {character.description && (
                <p className="text-blue-700 text-xs md:text-lg leading-relaxed">
                  {character.description}
                </p>
              )}

              {/* Grid Content */}
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div>
                  <p className="text-xs md:text-sm text-blue-700 font-bold pb-2">
                    Tempat Tumbuh
                  </p>
                  <div className="inline-block bg-[#B5FE28] px-2 md:px-3 py-1 text-[#003CE9] font-bricolage-grotesque-condensed font-extrabold text-sm md:text-lg">
                    {character.growingPlace.toUpperCase() || "-"}
                  </div>
                </div>
                <div>
                  <p className="text-xs md:text-sm text-blue-700 font-bold pb-2">
                    Karakteristik
                  </p>
                  <div className="inline-block bg-[#B5FE28] px-2 md:px-3 py-1 text-[#003CE9] font-bricolage-grotesque-condensed font-extrabold text-sm md:text-lg">
                    {character.characteristic.toUpperCase() || "-"}
                  </div>
                </div>
                <div>
                  <p className="text-xs md:text-sm text-blue-700 font-bold pb-2">
                    Waktu Panen
                  </p>
                  <div className="inline-block bg-[#B5FE28] px-2 md:px-3 py-1 text-[#003CE9] font-bricolage-grotesque-condensed font-extrabold text-sm md:text-lg">
                    {character.harvestTime.toUpperCase() || "-"}
                  </div>
                </div>
                <div>
                  <p className="text-xs md:text-sm text-blue-700 font-bold pb-2">
                    Spesies
                  </p>
                  <div className="inline-block bg-[#B5FE28] px-2 md:px-3 py-1 text-[#003CE9] font-bricolage-grotesque-condensed font-extrabold text-sm md:text-lg">
                    {character.species.toUpperCase()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

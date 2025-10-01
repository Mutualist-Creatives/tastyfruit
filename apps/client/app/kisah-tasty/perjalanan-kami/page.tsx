"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/layout/container";
import SectionBadge from "@/components/ui/section-badge";
import { useRouter } from "next/navigation";
import BasicCard from "@/components/ui/basic-card";

// --- DATA INOVASI BARU ---
const innovations = [
  {
    image: "/assets/kisah-tasty/photo-2.jpg",
    title: "Sistem irigasi tetes",
    footerText: "Dengan air alami dari mata air pegunungan",
    category: "Inovasi",
  },
  {
    image: "/assets/kisah-tasty/photo-1.jpg",
    title: "Pengendalian hama berbasis drone",
    footerText: "Untuk perlindungan taman",
    category: "Inovasi",
  },
  {
    image: "/assets/kisah-tasty/photo-2.jpg",
    title: "Sistem kabel (cableway)",
    footerText:
      "Yang terintegrasi untuk sistem pengangkutan buah dari kebun ke Packing House",
    category: "Inovasi",
  },
  {
    image: "/assets/landing-page/komitmen-tasty/jpg/photo-3.jpg",
    title: "Biosecurity",
    footerText:
      "Ketat untuk mencegah kontaminasi dan menjamin mutu buah serta tanaman",
    category: "Inovasi",
  },
];
// --- AKHIR DATA INOVASI BARU ---

// --- Hook untuk mendeteksi ukuran layar ---
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<{
    width: number | undefined;
    height: number | undefined;
  }>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

// --- Interface dan Data Perjalanan ---
interface Journey {
  year: string;
  title: string;
  description: string;
  layout: "layout-a" | "layout-b" | "layout-c";
}

const journeyData: Journey[] = [
  {
    year: "2018",
    title: "FONDASI DI DATARAN TINGGI CIPANAS",
    description:
      "Perjalanan kami dimulai dengan penanaman perdana pisang jenis Cavendish di lahan 15 hektar di dataran tinggi Cipanas, Jawa Barat. Lokasi ini dipilih karena kondisi geografis dan iklimnya yang ideal, memberikan fondasi alami untuk menghasilkan pisang premium.",
    layout: "layout-a",
  },
  {
    year: "2019",
    title: "MENYAPA PASAR DENGAN PISANG HIJAU",
    description:
      "Tasty Fruit mulai memperkenalkan produknya ke pasar dalam bentuk pisang hijau. Ini menjadi langkah awal dalam membangun kepercayaan pasar terhadap kualitas hasil panen dari dataran tinggi kami.",
    layout: "layout-b",
  },
  {
    year: "2020",
    title: "INOVASI RIPENING\nDAN PERLUASAN DISTRIBUSI",
    description:
      "Untuk menjawab kebutuhan pasar akan pisang matang, kami membangun fasilitas ripening skala kecil di Cipanas. Pisang matang dari kebun kami mulai didistribusikan ke wilayah Jabodetabek, memperluas jangkauan dan membuka peluang pasar baru.",
    layout: "layout-b",
  },
  {
    year: "2024",
    title: "PANEN PERDANA, REJUVENASI BRAND, \nDAN DIVERSIFIKASI PRODUK",
    description:
      "Panen perdana dari kebun baru di Sukabumi menjadi bukti keberhasilan ekspansi kami. Di tahun ini pula, kami melakukan rejuvenasi brand untuk menghadirkan citra Tasty Fruit yang lebih modern, dinamis, dan dekat dengan konsumen Indonesia. Selain itu, kami juga mulai merambah ke berbagai buah-buahan lainnya seperti melon, alpukat, buah naga, dan lain-lain untuk memperkaya pilihan produk Tasty Fruit bagi konsumen.",
    layout: "layout-c",
  },
  {
    year: "2025",
    title: "NATIONAL FULFILLMENT CENTER & CITRA BARU",
    description:
      "Kami membangun Packing House dan National Fulfillment Center (Cold Storage, Ripening, & Distribution Center) berskala nasional di Sukabumi, sebagai langkah besar untuk mendukung distribusi luas ke seluruh Indonesia. Bersamaan dengan itu, kami akan memperkenalkan citra baru Tasty Fruit – merefleksikan perjalanan, pertumbuhan, dan ambisi kami untuk menjadi pemimpin di industri pisang nasional.",
    layout: "layout-c",
  },
];

// --- Komponen-komponen Pendukung ---

const JourneyTitle = ({
  title,
  className,
  isMobile,
}: {
  title: string;
  className: string;
  isMobile: boolean;
}) => {
  if (isMobile && title.includes("\n")) {
    const titleParts = title.split("\n").map((part) => part.trim());
    return (
      <div className="flex flex-col items-start mt-5 space-y-3">
        {titleParts.map((part, index) => (
          <div key={index} className={className}>
            {part}
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="flex flex-col items-start mt-5">
      <div className={className}>{title.replace(/\n/g, " ")}</div>
    </div>
  );
};

const revealAnimation = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
  transition: { duration: 0.5 },
};

const splitDescriptionForLayoutC = (description: string) => {
  if (description.length < 200) {
    return { leftContent: description, rightContent: "" };
  }
  const afterMinChar = description.substring(200);
  const periodIndex = afterMinChar.indexOf(".");
  if (periodIndex === -1) {
    return { leftContent: description, rightContent: "" };
  }
  const splitPoint = 200 + periodIndex + 1;
  const leftContent = description.substring(0, splitPoint).trim();
  const rightContent = description.substring(splitPoint).trim();
  return { leftContent, rightContent };
};

const JourneyContent = ({
  journey,
  isMobile,
}: {
  journey: Journey;
  isMobile: boolean;
}) => (
  <>
    <div className="flex items-center gap-4">
      <div className="inline-block font-bricolage-grotesque-condensed text-[#B5FE28] font-extrabold text-4xl md:text-5xl bg-[#003BE2] px-3 py-1">
        {journey.year}
      </div>
    </div>
    <JourneyTitle
      title={journey.title}
      isMobile={isMobile}
      className="inline-block font-bricolage-grotesque-condensed text-[#003CE9] font-extrabold text-[22px] md:text-4xl lg:text-2xl xl:text-[36px] bg-[#B5FE28] px-2 py-0"
    />
    <div className="w-full">
      <div className="font-nunito text-[#003CE9] text-xs md:text-lg lg:text-base xl:text-lg mt-[5em] lg:mt-5">
        {journey.description}
      </div>
    </div>
  </>
);

const LayoutCContent = ({
  journey,
  isMobile,
  isLastItem,
}: {
  journey: Journey;
  isMobile: boolean;
  isLastItem?: boolean;
}) => {
  const { leftContent, rightContent } = splitDescriptionForLayoutC(
    journey.description
  );

  return (
    <>
      <div>
        <div className="flex items-center gap-4">
          <div className="relative inline-block font-bricolage-grotesque-condensed text-[#B5FE28] font-extrabold text-4xl md:text-5xl bg-[#003BE2] px-3 py-1 overflow-hidden">
            {isLastItem && (
              <motion.div
                className="absolute inset-0 bg-[#003CE9] z-0"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            )}
            <span className="relative z-10">{journey.year}</span>
          </div>
        </div>
        <JourneyTitle
          title={journey.title}
          isMobile={isMobile}
          className="inline-block font-bricolage-grotesque-condensed text-[#003CE9] font-extrabold text-[20px] md:text-4xl xl:text-[40px] bg-[#B5FE28] px-2 py-0"
        />
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-4 lg:gap-8 mt-5">
        <div className="w-full lg:w-1/2 text-left">
          <div className="font-nunito text-[#003CE9] text-xs md:text-lg">
            {leftContent}
          </div>
        </div>
        {rightContent && (
          <div className="w-full lg:w-1/2 text-left">
            <div className="font-nunito text-[#003CE9] text-xs md:text-lg">
              {rightContent}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

const StaticParagraphContent = () => (
  <>
    <div className="w-[70%] text-start lg:text-left mt-6">
      <div className="font-nunito text-[#003CE9] text-xs md:text-lg lg:text-base xl:text-lg">
        Tasty Fruit adalah merek buah modern yang berawal dari dataran tinggi
        yang subur. Dimulai pada tahun 2018, kami terus berinovasi dan
        berkembang, memadukan tradisi kekeluargaan dengan teknologi modern.
      </div>
      <div className="font-nunito text-[#003CE9] text-xs md:text-lg lg:text-base xl:text-lg mt-5">
        Setiap buah yang kami hasilkan merupakan wujud komitmen kami untuk
        menyajikan kualitas terbaik, dari kebun hingga ke tangan Anda.
      </div>
      <div className="pt-8 justify-center md:justify-end block md:hidden">
        <Image
          src="/assets/decorations/heart.svg"
          alt="Heart decoration"
          width={80}
          height={80}
          className="w-12 sm:w-16 lg:w-20 h-auto"
        />
      </div>
    </div>
  </>
);

// --- KOMPONEN KONTEN INOVASI BARU ---
const InovasiContent = () => {
  return (
    <motion.div key="inovasi-content" {...revealAnimation}>
      <section className="w-full flex flex-col items-start pt-4 pb-16">
        <div className="w-full flex flex-col justify-start relative z-10 mb-8">
          <div className="flex flex-col items-start gap-2 w-full">
            <div className="text-center lg:text-left mb-2 md:mb-3">
              <div className="font-bricolage-grotesque-condensed text-[#003CE9] font-extrabold text-3xl md:text-5xl lg:text-5xl xl:text-6xl bg-[#B5FE28] px-2 py-0.5 md:px-4 md:py-2">
                INOVASI
              </div>
            </div>
            <div className="text-center lg:text-left mb-2 md:mb-3">
              <div className="font-bricolage-grotesque-condensed text-[#003CE9] font-extrabold text-3xl md:text-5xl lg:text-5xl xl:text-6xl bg-[#B5FE28] px-2 py-0.5 md:px-4 md:py-2">
                DALAM BUDIDAYA
              </div>
            </div>
            <div className="w-full lg:w-[40%] text-start mb-0 md:mb-5">
              <p className="font-nunito text-[#003CE9] text-xs md:text-lg">
                Di Tasty Fruit®, kami menerapkan praktik pertanian yang ramah
                lingkungan:
              </p>
            </div>
          </div>
        </div>

        {/* Grid Kartu Inovasi */}
        <div className="w-full">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {innovations.map((item) => (
              <BasicCard
                key={item.title}
                image={item.image}
                title={item.title}
                footerText={item.footerText} // Gunakan footerText
              />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};
// --- END KOMPONEN KONTEN INOVASI BARU ---

// --- Komponen Utama ---
export default function PerjalananKami() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isJourneyStarted, setIsJourneyStarted] = useState(false);
  const router = useRouter();

  const { width } = useWindowSize();
  const isTabletOrBelow = width ? width < 1024 : false;

  // Cek apakah sudah di konten inovasi (tahap akhir)
  const isFinalContent = currentIndex === journeyData.length;

  const currentJourney = journeyData[currentIndex];
  const effectiveLayout = currentJourney ? currentJourney.layout : null;

  const getNextLayoutB = () => {
    for (let i = currentIndex + 1; i < journeyData.length; i++) {
      if (journeyData[i].layout === "layout-b") {
        return journeyData[i];
      }
    }
    return null;
  };

  const getPrevLayoutB = () => {
    for (let i = currentIndex - 1; i >= 0; i--) {
      if (journeyData[i].layout === "layout-b") {
        return journeyData[i];
      }
    }
    return null;
  };

  const pairedLayoutBJourney =
    !isTabletOrBelow && currentJourney && currentJourney.layout === "layout-b"
      ? getNextLayoutB() || getPrevLayoutB()
      : null;

  const handleNext = () => {
    // LOGIKA PERBAIKAN: Jika di item terakhir, pindahkan currentIndex ke tahap Inovasi (index = length)
    if (currentIndex === journeyData.length - 1) {
      setCurrentIndex(journeyData.length);
      return;
    }

    // Logika navigasi awal mobile (ke item 2018)
    if (isTabletOrBelow && !isJourneyStarted) {
      setIsJourneyStarted(true);
      return;
    }

    // Logika navigasi desktop/tablet
    if (
      !isTabletOrBelow &&
      currentJourney.layout === "layout-b" &&
      getNextLayoutB()
    ) {
      setCurrentIndex((prevIndex) => prevIndex + 2);
    } else {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    // Jika di konten Inovasi, kembali ke item terakhir (2025)
    if (isFinalContent) {
      setCurrentIndex(journeyData.length - 1);
      return;
    }

    // Logic: Jika mobile dan di item pertama (0), kembali ke intro statis
    if (isTabletOrBelow && isJourneyStarted && currentIndex === 0) {
      setIsJourneyStarted(false);
      return;
    }
    if (currentIndex === 0) {
      return;
    }

    // Logic navigasi ganda untuk Layout B di desktop
    const currentJourney = journeyData[currentIndex];
    const prevJourney = journeyData[currentIndex - 1];
    if (
      !isTabletOrBelow &&
      currentJourney.layout === "layout-b" &&
      prevJourney &&
      prevJourney.layout === "layout-b"
    ) {
      setCurrentIndex((prevIndex) => prevIndex - 2);
    } else {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  // --- PERBAIKAN LOGIKA showNextButton ---
  // Tombol Next terlihat jika BELUM di tahap Inovasi
  const showNextButton = !isFinalContent;

  // Tombol Back terlihat jika sudah masuk Journey, atau di Final Content
  const showBackButton =
    isFinalContent || (isTabletOrBelow && isJourneyStarted) || currentIndex > 0;

  // Cleanup timeline line
  useEffect(() => {
    return () => {
      const existingLine = document.getElementById("timeline-line-2018");
      if (existingLine) existingLine.remove();
    };
  }, [currentIndex]);

  return (
    // Tambahkan overflow-x-hidden untuk mengatasi scrollbar vertikal di mobile
    <div className="overflow-x-hidden">
      <Container>
        <div className="relative w-full h-auto">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-start gap-2">
              <SectionBadge
                label="KISAH TASTY"
                className="text-xs md:text-2xl lg:text-xl px-1 py-0.5 md:px-2 md:py-0.5 mb-1"
              />
              {/* PERBAIKAN: Hanya tampilkan 'PERJALANAN KAMI' jika BUKAN Final Content */}
              {!isFinalContent && (
                <div className="font-bricolage-grotesque-condensed text-[#003CE9] font-extrabold text-2xl md:text-5xl xl:text-6xl bg-[#B5FE28] px-2 py-0.5">
                  PERJALANAN KAMI
                </div>
              )}
            </div>
          </div>

          <div className="relative w-full min-h-[200px]">
            {isTabletOrBelow && !isJourneyStarted ? (
              <motion.div key="intro" {...revealAnimation}>
                <StaticParagraphContent />
              </motion.div>
            ) : isFinalContent ? (
              // --- Tampilkan Komponen Inovasi di sini ---
              <InovasiContent />
            ) : (
              <>
                {/* Pastikan currentJourney ada sebelum mengakses layout */}
                {currentJourney && effectiveLayout === "layout-a" && (
                  <div className="relative w-full overflow-visible mt-6">
                    <div className="w-full flex flex-col lg:flex-row items-start relative z-10 overflow-visible">
                      <div className="w-full lg:w-1/2 flex flex-col justify-start items-center lg:items-start">
                        <div className="hidden lg:block">
                          <StaticParagraphContent />
                        </div>
                      </div>
                      <div className="w-full lg:w-1/2 flex flex-col justify-start overflow-visible">
                        <AnimatePresence mode="wait">
                          <motion.div key={currentIndex} {...revealAnimation}>
                            {/* Garis Timeline Layout A (2018) diubah menjadi Absolute */}
                            <div className="flex items-center relative">
                              {/* Garis Absolute (Menggantikan Fixed) */}
                              <div className="absolute top-3/8 h-2.5 w-[100vw] z-0">
                                <motion.div
                                  className="bg-[#003CE9] h-full"
                                  key="timeline-2018"
                                  initial={{ width: 0 }}
                                  animate={{ width: "100%" }}
                                  transition={{
                                    duration: 2,
                                    ease: "easeInOut",
                                  }}
                                />
                              </div>

                              {/* Konten Tahun */}
                              <div className="relative inline-block font-bricolage-grotesque-condensed text-[#B5FE28] font-extrabold text-4xl md:text-5xl bg-[#003BE2] px-2 py-0 z-10">
                                {currentJourney.year}
                              </div>
                            </div>

                            <JourneyTitle
                              title={currentJourney.title}
                              isMobile={isTabletOrBelow}
                              className="inline-block font-bricolage-grotesque-condensed text-[#003CE9] font-extrabold text-[22px] md:text-4xl lg:text-3xl xl:text-[40px] bg-[#B5FE28] px-2 py-0"
                            />
                            <div className="w-full">
                              <div className="font-nunito w-[70%] text-[#003CE9] text-xs md:text-lg lg:text-base xl:text-lg mt-[5em] lg:mt-5">
                                {currentJourney.description}
                              </div>
                            </div>
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                )}

                {currentJourney && effectiveLayout === "layout-b" && (
                  <div className="relative w-full mt-6">
                    <div className="absolute top-0 left-0 w-full h-[50px] overflow-visible">
                      <svg
                        width="100%"
                        height="50"
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] z-0"
                      >
                        <motion.line
                          x1="0"
                          y1="25"
                          x2="100%"
                          y2="25"
                          stroke="#003CE9"
                          strokeWidth="10"
                          key={currentIndex}
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, ease: "easeInOut" }}
                        />
                      </svg>
                    </div>
                    <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-4 items-start relative z-10">
                      <div className="w-full lg:w-1/2 flex flex-col justify-start">
                        <AnimatePresence mode="wait">
                          <motion.div key={currentIndex} {...revealAnimation}>
                            <JourneyContent
                              journey={currentJourney}
                              isMobile={isTabletOrBelow}
                            />
                          </motion.div>
                        </AnimatePresence>
                      </div>
                      <div className="w-full lg:w-1/2 flex flex-col justify-start">
                        <AnimatePresence mode="wait">
                          {pairedLayoutBJourney && (
                            <motion.div
                              key={`${currentIndex}-paired`}
                              {...revealAnimation}
                            >
                              <JourneyContent
                                journey={pairedLayoutBJourney}
                                isMobile={isTabletOrBelow}
                              />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                )}

                {currentJourney && effectiveLayout === "layout-c" && (
                  <div className="relative w-full mt-6">
                    <div className="absolute top-0 left-0 w-full h-[50px] overflow-visible">
                      <svg
                        width="100%"
                        height="50"
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] z-0"
                      >
                        <motion.line
                          x1="0"
                          y1="25"
                          x2={
                            currentIndex === journeyData.length - 1
                              ? isTabletOrBelow // Logic: mobile 10%, desktop 20%
                                ? "10%"
                                : "20%"
                              : "100%"
                          }
                          y2="25"
                          stroke="#003CE9"
                          strokeWidth="10"
                          key={currentIndex}
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, ease: "easeInOut" }}
                        />
                      </svg>
                    </div>

                    <div className="w-full flex justify-center relative z-10">
                      <div className="w-full lg:w-4/5 flex flex-col justify-start">
                        <AnimatePresence mode="wait">
                          <motion.div key={currentIndex} {...revealAnimation}>
                            {currentJourney.layout === "layout-b" &&
                            isTabletOrBelow ? (
                              <JourneyContent
                                journey={currentJourney}
                                isMobile={isTabletOrBelow}
                              />
                            ) : (
                              <LayoutCContent
                                journey={currentJourney}
                                isMobile={isTabletOrBelow}
                                isLastItem={
                                  currentIndex === journeyData.length - 1
                                }
                              />
                            )}
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </Container>

      <div className="fixed bottom-[15vh] md:bottom-16 left-0 w-full p-4 md:p-8 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
          {/* Previous Button */}
          <div className="flex justify-start">
            {showBackButton && (
              <motion.button
                onClick={handlePrev}
                className="bg-[#B5FE28] rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-[#003CE2] shadow-md transition-colors z-10"
                aria-label="Langkah sebelumnya"
                whileTap={{ scale: 0.75 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <Image
                  src={"/assets/ui/arrow-right-blue.svg"}
                  alt="Arrow Left"
                  width={20}
                  height={20}
                  className="rotate-180"
                />
              </motion.button>
            )}
          </div>

          {/* HEART DECORATION - PERBAIKAN DI SINI */}
          {isJourneyStarted && (
            <div
              // Tambahkan absolute positioning hanya jika tombol next tidak ada
              className={`flex justify-center md:hidden ${
                !showNextButton ? "absolute left-1/2 -translate-x-1/2" : ""
              }`}
            >
              <Image
                src="/assets/decorations/heart.svg"
                alt="Heart decoration"
                width={80}
                height={80}
                className="w-12 sm:w-16 lg:w-20 h-auto"
              />
            </div>
          )}

          {/* Next Button */}
          <div className="flex justify-end">
            {showNextButton && (
              <motion.button
                onClick={handleNext}
                className="bg-[#B5FE28] rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-[#003CE2] shadow-md transition-colors z-10"
                aria-label={
                  currentIndex === journeyData.length - 1
                    ? "Lihat Inovasi"
                    : "Langkah Berikutnya"
                }
                whileTap={{ scale: 0.75 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <Image
                  src={"/assets/ui/arrow-right-blue.svg"}
                  alt="Arrow Right"
                  width={20}
                  height={20}
                />
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

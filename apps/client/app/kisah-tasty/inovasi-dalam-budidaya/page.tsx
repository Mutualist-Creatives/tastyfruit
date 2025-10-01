import Container from "@/components/layout/container";
import SectionBadge from "@/components/ui/section-badge";
// --- PERUBAHAN 1: Impor komponen BasicCard ---
import BasicCard from "@/components/ui/basic-card";

// --- PERUBAHAN 2: Sesuaikan data agar cocok dengan props BasicCard ---
const innovations = [
  {
    image: "/assets/kisah-tasty/photo-2.jpg",
    title: "Sistem irigasi tetes",
    footerText: "Dengan air alami dari mata air pegunungan", // Menggunakan 'footerText'
    category: "Inovasi", // Tambahkan kategori
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

// --- PERUBAHAN 3: Hapus definisi komponen InnovationCard dari sini ---
// function InnovationCard(...) { ... } // HAPUS BLOK INI

export default function InovasiDalamBudidayaPage() {
  return (
    <Container>
      {/* Bagian Header yang sudah ada */}
      <section className="w-full flex items-center overflow-hidden">
        <div className="mx-auto w-full h-full">
          {/* ... (kode header tidak berubah) ... */}
          <div className="relative flex flex-col lg:flex-row-reverse lg:gap-10 items-start pb-4 lg:pb-0">
            <div className="w-full flex flex-col justify-start relative z-10">
              <div className="flex flex-col items-start gap-2 w-full">
                <SectionBadge
                  label="KISAH TASTY"
                  className="text-2xl sm:text-3xl lg:text-2xl px-2 py-0.5 mb-3"
                />
                <div className="text-center lg:text-left mb-2 md:mb-3">
                  <div className="font-bricolage-grotesque-condensed text-[#003CE9] font-extrabold text-5xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-6xl bg-[#B5FE28] px-3 py-1 md:px-4 md:py-2">
                    INOVASI
                  </div>
                </div>
                <div className="text-center lg:text-left mb-2 md:mb-3">
                  <div className="font-bricolage-grotesque-condensed text-[#003CE9] font-extrabold text-5xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-6xl bg-[#B5FE28] px-3 py-1 md:px-4 md:py-2">
                    DALAM BUDIDAYA
                  </div>
                </div>
                <div className="w-full lg:w-[40%] text-start mb-0 md:mb-5">
                  <p className="font-nunito text-[#003CE9] text-base md:text-lg">
                    Di Tasty Fruit®, kami menerapkan praktik pertanian yang
                    ramah lingkungan:
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Kartu Inovasi */}
      <section className="w-full">
        {/* --- PERUBAHAN 4: Gunakan BasicCard dan props yang sesuai --- */}
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
      </section>
    </Container>
  );
}

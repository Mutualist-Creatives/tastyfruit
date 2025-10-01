import Image from "next/image";
import Container from "@/components/layout/container";
import SectionBadge from "@/components/ui/section-badge";

export default function KomitmenTasty() {
  return (
    <>
      <Container>
        <section className="relative w-full h-auto">
          <div className="mx-auto">
            {/* Wrapper Utama untuk Judul dan Gambar */}
            <div className="flex flex-col md:flex-row justify-between items-center w-full gap-8 md:gap-4">
              {/* Blok Kiri: Konten Teks */}
              <div className="flex flex-col items-start gap-2 w-full md:w-auto">
                <SectionBadge
                  label="KOMITMEN TASTY"
                  className="text-base sm:text-3xl lg:text-2xl px-1.5 py-0 md:px-2 md:py-0.5"
                />
                <div className="flex flex-row items-center gap-4 sm:gap-9 mb-3">
                  <div className="font-bricolage-grotesque-condensed text-[#003CE9] font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-[56px] bg-[#B5FE28] px-1.5 py-0 md:px-3 md:py-1">
                    BRINGING
                  </div>
                  <div className="font-bricolage-grotesque-condensed text-white font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-[88px] bg-[#003BE2] px-2 py-0.5 md:px-4 md:py-1 mb-3 -rotate-3 -mt-0">
                    FRESHNESS
                  </div>
                </div>
                <div className="font-bricolage-grotesque-condensed text-[#003CE9] font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-[56px] bg-[#B5FE28] px-1.5 py-0 md:px-3 md:py-1 -mt-6 text-left">
                  THROUGH MINDFUL PLANTATION
                </div>
              </div>

              {/* Blok Kanan: Gambar Hati (HANYA MUNCUL DI MOBILE) */}
              <div className="flex md:hidden w-full md:w-auto justify-center md:justify-end">
                <Image
                  src="/assets/komitmen-tasty/volcanic-heart.svg"
                  alt="Volcanic Banana"
                  width={288}
                  height={288}
                  className="w-32 sm:w-48 h-auto"
                />
              </div>
            </div>

            {/* Konten di bawah header */}
            <div className="flex flex-col md:flex-row justify-between items-center w-full gap-6 md:gap-8 mt-2 md:mt-8">
              <div className="w-full md:w-[55%]">
                <div className="font-nunito text-[#003CE9] font-normal text-xs sm:text-lg mt-5">
                  Lahir dari dataran tinggi yang sejuk, Tasty Fruit® adalah
                  cerita tentang dedikasi dan cinta pada keluarga. Kami percaya,
                  buah terbaik adalah buah yang tumbuh dari hati. Selama
                  bertahun-tahun, kami merawat setiap pohon dengan penuh kasih
                  sayang, layaknya merawat keluarga sendiri.
                </div>
                <div className="font-nunito text-[#003CE9] font-normal text-xs sm:text-lg mt-5">
                  Dari tanah yang subur, setiap buah kami petik dengan tangan,
                  siap menjadi bagian dari momen berharga di meja makan Anda.
                  Inilah janji kami: menghadirkan kesegaran alami yang berakar
                  kuat pada nilai-nilai kekeluargaan dan rasa hormat yang
                  mendalam pada alam.
                </div>
              </div>
              {/* Gambar hati kedua, muncul di tablet ke atas */}
              <div className="hidden md:flex w-full md:w-[40%] justify-center items-center">
                <Image
                  src="/assets/komitmen-tasty/volcanic-heart.svg"
                  alt="Volcanic Banana"
                  width={288}
                  height={288}
                  className="w-64 lg:w-[18em] h-auto"
                />
              </div>
            </div>

            <div className="font-nunito text-[#003CE9] font-bold text-xl sm:text-2xl md:text-3xl mt-12 mb-6">
              Tasty Fruit®&apos;s three commitments:
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-[2em]">
              <div className="w-full lg:w-1/3">
                <div className="w-fit font-bricolage-grotesque-condensed text-[#B5FE28] font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl bg-[#003BE2] px-2 py-0.5 -mb-2">
                  QUALITY
                </div>
                <div className="font-nunito text-[#003CE9] font-normal text-xs sm:text-lg mt-5">
                  Di Tasty Fruit®, kualitas adalah prioritas utama kami. Kami
                  bertekad menyajikan buah paling segar dan lezat, dimulai dari
                  perawatan terbaik di setiap prosesnya. Mulai dari budidaya di
                  lingkungan ideal, panen yang hati-hati, hingga distribusi yang
                  cepat, kami pastikan kondisi optimal untuk kualitas yang tak
                  tertandingi.
                </div>
                <div className="font-nunito text-[#003CE9] font-normal text-xs sm:text-lg mt-5">
                  Kami memanfaatkan teknologi canggih untuk mempertahankan
                  kesegaran dan menyajikan buah dengan kualitas terbaik.
                </div>
              </div>
              <div className="w-full lg:w-1/3">
                <div className="w-fit font-bricolage-grotesque-condensed text-[#B5FE28] font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl bg-[#003BE2] px-2 py-0.5 -mb-2">
                  DURABILITY
                </div>
                <div className="font-nunito text-[#003CE9] font-normal text-xs sm:text-lg mt-5">
                  Buah segar harus dinikmati saat kondisi terbaik. Karena itu,
                  buah kami memiliki masa simpan yang lebih panjang berkat
                  praktik seperti budidaya di dataran tinggi dan pengemasan yang
                  cepat.
                </div>
                <div className="font-nunito text-[#003CE9] font-normal text-xs sm:text-lg mt-5">
                  Kami percaya setiap orang berhak mendapatkan kualitas, jadi
                  kami menawarkan produk dengan harga strategis yang
                  menyeimbangkan antara keterjangkauan dan kualitas terbaik.
                </div>
              </div>
              <div className="w-full lg:w-1/3">
                <div className="w-fit font-bricolage-grotesque-condensed text-[#B5FE28] font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl bg-[#003BE2] px-2 py-0.5 -mb-2">
                  SUSTAINABILITY
                </div>
                <div className="font-nunito text-[#003CE9] font-normal text-xs sm:text-lg mt-5">
                  Kami bertekad menciptakan masa depan di mana kita semua,
                  manusia dan alam, bisa hidup makmur. Oleh karena itu, kami
                  utamakan kesehatan lingkungan dan masyarakat sekitar melalui
                  praktik pertanian yang bersahabat dengan alam.
                </div>
                <div className="font-nunito text-[#003CE9] font-normal text-xs sm:text-lg mt-5">
                  Kami meyakini pentingnya merawat bumi, sehingga kami terus
                  berupaya mengurangi jejak lingkungan kami demi planet yang
                  lebih sehat untuk anak cucu.
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}

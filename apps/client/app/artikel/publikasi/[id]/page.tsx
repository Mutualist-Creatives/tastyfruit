import { notFound } from "next/navigation";
import { publikasiData } from "@/lib/publikasi-data";
import DOMPurify from "isomorphic-dompurify";
import Container from "@/components/layout/container";
// Ganti nama komponen ini agar sesuai dengan file yang Anda panggil
import ArtikelDetail from "@/components/artikel/publikasi-detail";

/**
 * Fungsi ini akan membuat halaman statis untuk setiap artikel saat proses build.
 */
export function generateStaticParams() {
  return publikasiData.map((artikel) => ({
    id: artikel.id,
  }));
}

/**
 * Komponen Halaman Detail Publikasi.
 */
export default async function PublikasiDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Cari artikel saat ini
  const artikel = publikasiData.find((p) => p.id === id);
  if (!artikel) {
    notFound(); // Tampilkan 404 jika tidak ditemukan
  }

  // Cari index dari artikel saat ini
  const currentIndex = publikasiData.findIndex((p) => p.id === id);

  // --- LOGIKA KUNCI YANG DIPERBAIKI ---

  // PERBAIKAN 2: Tambahkan logika untuk `prevArtikel`.
  // Jika ini bukan artikel pertama (index > 0), ambil artikel sebelumnya. Jika ya, hasilnya null.
  const prevArtikel = currentIndex > 0 ? publikasiData[currentIndex - 1] : null;

  // PERBAIKAN 3: Perbaiki logika `nextArtikel` agar tidak looping.
  // Jika ini bukan artikel terakhir, ambil artikel selanjutnya. Jika ya, hasilnya null.
  const nextArtikel =
    currentIndex < publikasiData.length - 1
      ? publikasiData[currentIndex + 1]
      : null;

  // --- Akhir Logika ---

  const sanitizedContent = DOMPurify.sanitize(artikel.content);

  return (
    <Container>
      {/* PERBAIKAN 4: Kirim `prevArtikel` sebagai props */}
      <ArtikelDetail // Pastikan nama komponen di sini (ArtikelDetail) sudah benar
        artikel={artikel}
        prevArtikel={prevArtikel}
        nextArtikel={nextArtikel}
        sanitizedContent={sanitizedContent}
      />
    </Container>
  );
}

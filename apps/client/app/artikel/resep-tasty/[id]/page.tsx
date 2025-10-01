import { notFound } from "next/navigation";
import { resepTastyData } from "@/lib/resep-tasty-data";
import Container from "@/components/layout/container";
import ResepDetail from "@/components/artikel/resep-detail";

/**
 * Fungsi ini akan membuat halaman statis untuk setiap resep saat proses build.
 */
export function generateStaticParams() {
  return resepTastyData.map((resep) => ({
    id: String(resep.id),
  }));
}

/**
 * Komponen Halaman Detail Resep.
 */
export default async function ResepDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Cari resep saat ini
  const resep = resepTastyData.find((p) => String(p.id) === id);
  if (!resep) {
    notFound(); // Tampilkan 404 jika tidak ditemukan
  }

  // Cari index dari resep saat ini
  const currentIndex = resepTastyData.findIndex((p) => String(p.id) === id);

  // --- LOGIKA KUNCI YANG DIPERBAIKI ---

  // Tambahkan logika untuk `prevResep`.
  // Jika ini bukan resep pertama (index > 0), ambil resep sebelumnya. Jika ya, hasilnya null.
  const prevResep = currentIndex > 0 ? resepTastyData[currentIndex - 1] : null;

  // Perbaiki logika `nextResep` agar tidak looping.
  // Jika ini bukan resep terakhir, ambil resep selanjutnya. Jika ya, hasilnya null.
  const nextResep =
    currentIndex < resepTastyData.length - 1
      ? resepTastyData[currentIndex + 1]
      : null;

  // --- Akhir Logika ---

  return (
    <Container>
      <ResepDetail resep={resep} prevResep={prevResep} nextResep={nextResep} />
    </Container>
  );
}

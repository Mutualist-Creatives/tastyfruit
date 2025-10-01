import { produkData } from "@/lib/produk-data";
import ProdukSection from "@/components/produk/produk-section";

export default function Produk() {
  return (
    <div className="relative w-full">
      {/* Menampilkan semua bagian produk */}
      {produkData.map((item) => (
        <ProdukSection key={item.id} item={item} />
      ))}
    </div>
  );
}

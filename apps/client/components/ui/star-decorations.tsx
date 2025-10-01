"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

/**
 * Interface untuk properti setiap bintang.
 * Ini mendefinisikan posisi, rotasi, dan ukuran.
 */
interface Star {
  top: string;
  left: string;
  rotation: number;
  size: number;
}

/**
 * Interface untuk props komponen StarDecorations.
 * @param {number} [seed=12345] - Angka unik untuk memastikan layout bintang yang "acak" tapi konsisten. Ganti seed untuk mendapatkan layout yang berbeda.
 * @param {number} [count=20] - Jumlah bintang yang akan digenerate.
 * @param {boolean} [randomRotate=true] - Jika true, setiap bintang akan memiliki rotasi acak.
 */
interface StarDecorationsProps {
  seed?: number;
  count?: number;
  randomRotate?: boolean;
}

/**
 * Fungsi pseudo-random number generator sederhana berbasis seed.
 * Ini penting agar posisi bintang tidak berubah setiap kali terjadi re-render.
 * @param {number} seed - Nilai awal untuk generator.
 */
const LCG = (seed: number) => () => {
  seed = (seed * 1664525 + 1013904223) % 4294967296;
  return seed / 4294967296;
};

/**
 * Komponen StarDecorations untuk menampilkan dekorasi bintang secara acak
 * di dalam parent container. Parent harus memiliki 'position: relative'.
 */
export default function StarDecorations({
  seed = 12345,
  count = 20,
  randomRotate = true,
}: StarDecorationsProps) {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const newStars: Star[] = [];
    const random = LCG(seed); // Inisialisasi generator dengan seed

    for (let i = 0; i < count; i++) {
      const top = `${random() * 100}%`;
      const left = `${random() * 100}%`;
      const rotation = randomRotate ? Math.floor(random() * 360) : 0;
      // Ukuran bintang dibuat acak antara 10px dan 35px untuk variasi
      const size = Math.floor(random() * 25) + 10;

      newStars.push({ top, left, rotation, size });
    }

    setStars(newStars);
  }, [seed, count, randomRotate]); // Efek ini hanya akan berjalan jika props berubah

  return (
    // Mengubah -z-10 menjadi z-50
    <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
      {stars.map((star, index) => (
        <Image
          key={index}
          src="/assets/decorations/star.svg"
          alt="Dekorasi Bintang"
          width={star.size}
          height={star.size}
          className="absolute"
          style={{
            top: star.top,
            left: star.left,
            transform: `rotate(${star.rotation}deg)`,
          }}
        />
      ))}
    </div>
  );
}

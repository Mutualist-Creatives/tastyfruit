// lib/resep-tasty-data.ts

// CHANGED: Ingredient interface now includes an optional 'note'
export interface Ingredient {
  name: string;
  amount: string;
  note?: string; // NEW: Optional 'note' property
}

// NEW: Interface for structured instructions
export interface InstructionStep {
  title: string;
  description: string;
}

// Updated main interface
export interface ResepTastyData {
  id: number;
  image: string;
  name: string;
  servings: string;
  time: string;
  author: string;
  ingredients: Ingredient[];
  instructions: InstructionStep[]; // CHANGED: Now an array of InstructionStep objects
}

export const resepTastyData: ResepTastyData[] = [
  {
    id: 1,
    image: "/assets/landing-page/what-to-cook/png/photo-3.png",
    name: "Banana Bread",
    servings: "6-8",
    time: "60 minutes",
    author: "John Doe",
    ingredients: [
      {
        name: "Pisang Matang",
        amount: "3 buah",
        note: "Lumatkan hingga halus",
      },
      { name: "Tepung Terigu", amount: "1 1/2 cangkir" },
      { name: "Gula", amount: "1 cangkir" },
      { name: "Telur", amount: "1 butir" },
      { name: "Mentega", amount: "1/3 cangkir", note: "Lelehkan" },
    ],
    instructions: [
      {
        title: "Panaskan Oven",
        description:
          "Siapkan oven di suhu 175°C dan olesi loyang roti dengan mentega dan tepung.",
      },
      {
        title: "Campurkan Bahan Basah",
        description:
          "Lumatkan pisang, lalu masukkan mentega cair, gula, telur, dan vanila. Aduk hingga rata.",
      },
      {
        title: "Campurkan Bahan Kering",
        description:
          "Di mangkuk terpisah, campurkan tepung terigu, baking soda, dan garam.",
      },
      {
        title: "Satukan Adonan",
        description:
          "Masukkan campuran kering ke dalam campuran pisang, aduk perlahan hingga tercampur. Jangan berlebihan.",
      },
      {
        title: "Panggang Roti",
        description:
          "Tuang adonan ke dalam loyang dan panggang selama 55-65 menit atau hingga matang sempurna.",
      },
    ],
  },
  {
    id: 2,
    image: "/assets/landing-page/what-to-cook/png/photo-2.png",
    name: "Banoffee Pie",
    servings: "4",
    time: "30 minutes",
    author: "Jane Smith",
    ingredients: [
      {
        name: "Biskuit (digestive)",
        amount: "250 gr",
        note: "Hancurkan hingga halus",
      },
      { name: "Mentega", amount: "100 gr", note: "Lelehkan" },
      { name: "Dulce de Leche", amount: "1 kaleng" },
      { name: "Pisang", amount: "3 buah", note: "Iris bulat" },
      { name: "Krim Kocok", amount: "300 ml" },
    ],
    instructions: [
      {
        title: "Siapkan Dasar Pie",
        description:
          "Hancurkan biskuit, campur dengan mentega leleh, lalu padatkan di dasar loyang. Dinginkan di kulkas.",
      },
      {
        title: "Beri Lapisan Karamel",
        description:
          "Oleskan lapisan tebal dulce de leche atau saus karamel di atas dasar biskuit yang sudah dingin.",
      },
      {
        title: "Susun Pisang",
        description:
          "Letakkan irisan pisang di atas lapisan karamel hingga seluruh permukaan tertutup.",
      },
      {
        title: "Tutup dengan Krim",
        description:
          "Kocok krim hingga kaku, lalu oleskan di atas lapisan pisang. Hias dengan serutan cokelat.",
      },
    ],
  },
  {
    id: 3,
    image: "/assets/landing-page/what-to-cook/png/photo-1.png",
    name: "Smoothie Bowl",
    servings: "1",
    time: "10 minutes",
    author: "Alex Johnson",
    ingredients: [
      { name: "Aneka Beri Beku", amount: "1 1/2 cangkir" },
      { name: "Pisang Beku", amount: "1 buah", note: "Potong-potong" },
      { name: "Yogurt", amount: "1/2 cangkir" },
      { name: "Topping (Granola, Buah)", amount: "Secukupnya" },
    ],
    instructions: [
      {
        title: "Blender Semua Bahan",
        description:
          "Masukkan aneka beri beku, potongan pisang beku, dan yogurt ke dalam blender.",
      },
      {
        title: "Haluskan hingga Kental",
        description:
          "Blender dengan kecepatan tinggi hingga adonan menjadi kental dan halus seperti es krim.",
      },
      {
        title: "Sajikan dan Hias",
        description:
          "Tuang smoothie ke dalam mangkuk, lalu hias dengan granola, irisan buah segar, atau topping favorit lainnya.",
      },
    ],
  },
  {
    id: 4,
    image: "/assets/landing-page/what-to-cook/png/photo-6.png",
    name: "Banana Oat Muffin",
    servings: "9",
    time: "35 minutes",
    author: "Maria Garcia",
    ingredients: [
      { name: "Tepung Terigu", amount: "1 1/2 cangkir" },
      { name: "Rolled Oats", amount: "1 cangkir" },
      { name: "Gula Merah", amount: "1/2 cangkir" },
      { name: "Pisang Matang", amount: "3 buah", note: "Lumatkan" },
      { name: "Minyak Sayur", amount: "1/2 cangkir" },
    ],
    instructions: [
      {
        title: "Siapkan Oven dan Bahan",
        description:
          "Panaskan oven hingga 200°C. Dalam mangkuk besar, campurkan bahan kering: tepung, oat, gula, baking powder, dan kayu manis.",
      },
      {
        title: "Campurkan Bahan Basah",
        description:
          "Di mangkuk lain, lumatkan pisang lalu campurkan dengan telur, susu, dan minyak sayur.",
      },
      {
        title: "Satukan Adonan",
        description:
          "Tuang campuran basah ke dalam campuran kering dan aduk perlahan hanya sampai tercampur.",
      },
      {
        title: "Panggang Muffin",
        description:
          "Isi cetakan muffin hingga 3/4 penuh dan panggang selama 20-25 menit atau hingga matang.",
      },
    ],
  },
  {
    id: 5,
    image: "/assets/landing-page/what-to-cook/png/photo-5.png",
    name: "Bana-berry Smoothie",
    servings: "2",
    time: "15 minutes",
    author: "Chris Lee",
    ingredients: [
      { name: "Pisang", amount: "1 buah", note: "Potong-potong" },
      { name: "Aneka Beri Beku", amount: "1 cangkir" },
      { name: "Yogurt", amount: "1 cangkir" },
      { name: "Susu", amount: "1/2 cangkir" },
    ],
    instructions: [
      {
        title: "Siapkan Bahan",
        description:
          "Masukkan potongan pisang, aneka beri beku (seperti stroberi dan blueberry), dan yogurt ke dalam blender.",
      },
      {
        title: "Tambahkan Cairan",
        description:
          "Tuangkan susu sedikit demi sedikit untuk membantu proses blender dan mencapai kekentalan yang diinginkan.",
      },
      {
        title: "Blender hingga Halus",
        description:
          "Nyalakan blender dengan kecepatan tinggi selama 1-2 menit hingga semua bahan tercampur sempurna dan halus.",
      },
      {
        title: "Sajikan Segera",
        description:
          "Tuang smoothie ke dalam gelas dan nikmati selagi dingin untuk kesegaran maksimal.",
      },
    ],
  },
  {
    id: 6,
    image: "/assets/landing-page/what-to-cook/png/photo-4.png",
    name: "Banana Biscoff Pie",
    servings: "8",
    time: "45 minutes",
    author: "Emily White",
    ingredients: [
      { name: "Biskuit Biscoff", amount: "250 gr", note: "Hancurkan" },
      { name: "Mentega", amount: "100 gr", note: "Lelehkan" },
      { name: "Biscoff Spread", amount: "1 jar" },
      { name: "Pisang", amount: "3 buah", note: "Iris bulat" },
      { name: "Krim Kocok", amount: "400 ml" },
    ],
    instructions: [
      {
        title: "Buat Dasar Pie",
        description:
          "Campurkan remah biskuit Biscoff dengan mentega cair, lalu tekan dan padatkan di dasar loyang. Dinginkan.",
      },
      {
        title: "Lapisi dengan Biscoff Spread",
        description:
          "Oleskan selai Biscoff (Biscoff spread) sebagai lapisan pertama di atas dasar biskuit yang sudah dingin.",
      },
      {
        title: "Susun Lapisan Pisang",
        description:
          "Atur irisan pisang secara merata di atas lapisan selai Biscoff hingga menutupi seluruh permukaan.",
      },
      {
        title: "Beri Topping Krim",
        description:
          "Tutup lapisan pisang dengan krim kocok. Hias dengan remah biskuit Biscoff dan dinginkan beberapa jam.",
      },
    ],
  },
];

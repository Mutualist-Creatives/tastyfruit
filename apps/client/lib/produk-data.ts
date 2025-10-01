// lib/produk-data.ts

export interface FruitType {
  name: string;
  slug: string;
  image: string;
  description: string;
}

export interface ProdukData {
  id: number;
  slug: string;
  description: string;
  layoutType: "layout-a" | "layout-b";
  fruit: string;
  characterSlug: string; // Relates to the character's slug
  gesture: string; // To store the chosen mascot gesture path
  fruitType: FruitType[];
  nutrition: {
    energy: string;
    totalFat: string;
    cholesterol: string;
    fiber: string;
    carbohydrates: string;
    protein: string;
    sodium: string;
    magnesium: string;
    potassium: string;
  };
  fruitCardType: "layout-a" | "layout-b";
  bgGradient?: string;
  fruitCardImage: string; // <<--- DATA TYPE BARU DITAMBAHKAN DI SINI
}

export const produkData: ProdukData[] = [
  {
    id: 1,
    slug: "pisang",
    description:
      "Pisang Tasty Fruit® memiliki rasa yang <b>manis</b>, dan <b>kesegaran yang terjamin</b>. Kenali jenis-jenis pisang kami dan pilih yang terbaik untukmu!",
    layoutType: "layout-a",
    fruit: "Pisang",
    characterSlug: "mr-tasty",
    gesture: "/assets/mascots/pisang/pisang-gesture-01.png",
    fruitType: [
      {
        name: "Tasty Fruit Volcana",
        slug: "tasty-fruit-volcana",
        image: "/assets/produk/pisang/Tasty Fruit Volcana.png",
        description:
          "Setiap kemasan Tasty Fruit® Volcana berisikan 4-5 pisang premium Grade A, hasil budidaya di dataran tinggi dengan tanah vulkanik yang kaya mineral. Kami menjamin setiap buah aman dikonsumsi dengan proses budidaya yang bebas residu pestisida.",
      },
      {
        name: "Tasty Fruit Pops",
        slug: "tasty-fruit-pops",
        image: "/assets/produk/pisang/Tasty Fruit Pops.png",
        description:
          "Tasty Fruit® Pops berisi tiga pisang Grade A berukuran kecil, ideal untuk camilan sehat. Pisang Tasty Fruit® dibudidayakan di dataran tinggi dengan tanah vulkanik, dijamin bebas residu pestisida, memberikan pisang dengan kualitas terbaik<br><br><b>Pop-sized</b> treats, oh-so-<b>sweet!</b>",
      },
      {
        name: "Tasty Fruit Twin",
        slug: "tasty-fruit-twin",
        image: "/assets/produk/pisang/Tasty Fruit Twin.png",
        description:
          "Dua pisang Cavendish premium dikemas dalam Tasty Fruit® Twin untuk konsumsi snack sehat Anda! Kami memastikan buah kami bebas residu pestisida dan ditumbuhkan di dataran tinggi dengan tanah vulkanik yang menghasilkan buah dengan tekstur dan rasa yang unik.",
      },
      {
        name: "Tasty Fruit Max",
        slug: "tasty-fruit-max",
        image: "/assets/produk/pisang/Tasty Fruit Max.png",
        description:
          "Tasty Fruit® Max berisikan tiga buah pisang Cavendish premium yang dibudidayakan secara etis di dataran tinggi dengan tanah vulkanik dan bebas residu pestisida, sebuah komitmen untuk menjaga keberlanjutan <br><br><b>Three</b>'s the charm, keeps you from <b>harm!</b>",
      },
      {
        name: "Tasty Fruit One",
        slug: "tasty-fruit-one",
        image: "/assets/produk/pisang/Tasty Fruit One.png",
        description:
          "Tinggal kupas, langsung hap! <br><br>Tasty Fruit® One adalah penyelamat yang hadir di saat-saat paling dibutuhkan. Satu pisang Cavendish premium ini bukan cuma praktis, tapi juga kaya energi dan nutrisi dari dataran tinggi. Dijamin bebas residu pestisida, bikin kamu siap hadapi hari tanpa drama!",
      },
    ],
    nutrition: {
      energy: "89 kcal",
      totalFat: "0.3g",
      cholesterol: "0mg",
      fiber: "2.6g",
      carbohydrates: "22",
      protein: "1.1g",
      sodium: "1mg",
      magnesium: "27mg",
      potassium: "358mg",
    },
    fruitCardType: "layout-a",
    bgGradient: "",
    fruitCardImage: "/assets/produk/pisang/pisang-card.png", // <<--- DATA BARU
  },
  {
    id: 2,
    slug: "melon",
    description:
      "<b>Manis lembut atau manis renyah?</b> <br><br>Tasty Fruit® memiliki dua melon yang istimewa dengan sensasi berbeda. Yuk, cari tahu dan pilih melon Tasty Fruit® yang sesuai dengan seleramu!",
    layoutType: "layout-b",
    fruit: "Melon",
    characterSlug: "oishi-maru",
    gesture: "/assets/mascots/melon/melon-gesture-03.png",
    fruitType: [
      {
        name: "Aurora Melon",
        slug: "aurora-melon",
        image: "/assets/produk/melon/Aurora Melon.png",
        description:
          "Tasty Fruit® Aurora melon terkenal dengan teksturnya yang renyah dan juicy. Dibudidayakan di dataran tinggi dengan tanah vulkanik, melon ini memiliki keseimbangan sempurna antara rasa manis dan keharuman yang alami. ",
      },
      {
        name: "Fujisawa Melon",
        slug: "fujisawa-melon",
        image: "/assets/produk/melon/Fujisawa Melon.png",
        description:
          "Tasty Fruit® Fujisawa Melon adalah hasil dari keseimbangan sempurna antara alam dan budidaya yang presisi. Melon kami memiliki tekstur yang renyah dan rasa manis yang terukur dengan baik, bukan kebetulan, melainkan perpaduan dari tanah vulkanik dataran tinggi dan perawatan buah ahli dan dari hati. ",
      },
    ],
    nutrition: {
      energy: "34 kcal",
      totalFat: "0.2g",
      cholesterol: "0mg",
      fiber: "0.9g",
      carbohydrates: "8.2g",
      protein: "0.8g",
      sodium: "16mg",
      magnesium: "12mg",
      potassium: "267mg",
    },
    fruitCardType: "layout-b",
    bgGradient: "#B5FE28",
    fruitCardImage: "/assets/produk/melon/melon-card.png", // <<--- DATA BARU
  },
  {
    id: 3,
    slug: "alpukat",
    description:
      "Alpukat Hass Tasty Fruit® memiliki <b>tekstur lembut</b> dan <b>rasa gurih</b> yang segar. Cari tahu dan rasakan alpukat haas yang tak tertandingi!",
    layoutType: "layout-a",
    fruit: "Alpukat",
    characterSlug: "nami",
    gesture: "/assets/mascots/alpukat/alpukat-gesture-03.png",
    fruitType: [
      {
        name: "Hass Avocado",
        slug: "hass-avocado",
        image: "/assets/produk/alpukat/Hass Avocado.png",
        description:
          "Tasty Fruit® Alpukat Hass Grade A adalah pilihan terbaik untuk melengkapi menu sehat Anda. Dibudidayakan secara cermat di dataran tinggi dengan tanah vulkanik, alpukat ini kaya akan lemak tak jenuh tunggal yang baik bagi tubuh.",
      },
    ],
    nutrition: {
      energy: "160 kcal",
      totalFat: "14.7g",
      cholesterol: "0mg",
      fiber: "6.7g",
      carbohydrates: "8.5g",
      protein: "2g",
      sodium: "7mg",
      magnesium: "29mg",
      potassium: "485mg",
    },
    fruitCardType: "layout-b",
    bgGradient: "",
    fruitCardImage: "/assets/produk/alpukat/alpukat-card.png", // <<--- DATA BARU
  },
];

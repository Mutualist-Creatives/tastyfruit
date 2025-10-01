// app/lib/characterData.ts

// 1. Define the type for a single character object for type-safety
export type funFactEntry = {
  introduction: string;
  description: string;
};

export type Skill = {
  name: string;
  description: string;
  value: number;
};

export type FlipCardEntry = {
  name: string;
  nickname: string;
  description: string;
  borderColor: string;
  bgColor: string;
  rarity: string; // e.g., "Common", "Rare", "Epic", "Legendary"
  skills: Skill[]; // exactly 3 entries preferred
  kcal: number; // per 100g
  pictureBgColor?: string;
  image: string; // New field for flip card image
};

export type Character = {
  name: string;
  slug: string;
  growingPlace: string;
  species: string;
  characteristic: string;
  harvestTime: string;
  introduction: string;
  description: string;
  tabsColor: string[];
  cardColor: string;
  primaryColor: string;
  secondaryColor: string;
  tertiaryColor: string;
  pictureBgColor: string;
  imageHolderColor: string;
  image: string;
  mascotCardImage: string;
  gestures: string[]; // Added gestures property
  flipCard: FlipCardEntry[];
  funFact: funFactEntry[];
};

// 2. The complete and updated character data array
export const characterData: Character[] = [
  {
    name: "MR. TASTY",
    slug: "mr-tasty",
    growingPlace: "Sukabumi",
    characteristic: "Antusias",
    harvestTime: "Sepanjang tahun",
    species: "Musa Acuminata",
    introduction: "Pernah lihat pisang yang seenergik ini? Meet Mr. Tasty!",
    description:
      "Dengan energi yang membara, Mr. Tasty siap bikin kalian terpana bukan cuma karena pesonanya, tapi juga karena rasa yang memanjakan selera!",
    tabsColor: ["#FFE600", "#FC6C00", "#308249", "#003CE9"],
    cardColor: "#003CE9",
    primaryColor: "#9CFF00",
    secondaryColor: "#003CE9",
    tertiaryColor: "#9CFF00",
    pictureBgColor: "#FF00B7",
    imageHolderColor: "green",
    image: "/assets/tasty-universe/mascots/png/mr-tasty.png",
    mascotCardImage:
      "/assets/landing-page/tasty-universe/mascots-card/mr-tasty.png",
    gestures: [
      "/assets/mascots/pisang/pisang-gesture-01.png",
      "/assets/mascots/pisang/pisang-gesture-02.png",
      "/assets/mascots/pisang/pisang-gesture-03.png",
    ],
    flipCard: [
      {
        name: "MR. TASTY",
        nickname: "The Energetic Banana",
        description: "Maskot energik dengan rasa manis yang menyenangkan.",
        rarity: "Legendary",
        borderColor: "#003BE2",
        bgColor: "#B5FE28",
        skills: [
          {
            name: "Healthy Carbs",
            description: "Karbohidrat sehat.",
            value: 85,
          },
          { name: "Potassium", description: "Tinggi kalium.", value: 90 },
          { name: "Fiber", description: "Kaya serat.", value: 70 },
        ],
        kcal: 160,
        image: "/assets/tasty-universe/mascots/flip-card/png/mr-tasty.png",
      },
    ],
    funFact: [
      {
        introduction: "Pisang bisa ngambang di air!",
        description:
          "Kalau kamu ceburin ke air, dia ngambang santai. Mungkin lagi latihan gaya bebas...",
      },
    ],
  },
  {
    name: "ENDES",
    slug: "endes",
    growingPlace: "Meksiko & Peru",
    species: "Psidium Guajava",
    characteristic: "Friendly",
    harvestTime: "Setiap bulan",
    introduction: "Ini dia Endes si Jambu!",
    description:
      "Paling jago bikin suasana, ia datang dengan sejuta pesona rasa yang bikin ngiler, dan dijamin bikin kunjunganmu jadi happy dan penuh kelezatan!",
    tabsColor: ["#FF00B7", "#308249", "#003CE9", "#FFE600"],
    cardColor: "#9CFF00",
    primaryColor: "#003CE9",
    secondaryColor: "#9CFF00",
    tertiaryColor: "#003CE9",
    pictureBgColor: "#003CE9",
    imageHolderColor: "pink",
    image: "/assets/tasty-universe/mascots/png/endes.png",
    mascotCardImage:
      "/assets/landing-page/tasty-universe/mascots-card/endes.png",
    gestures: [
      "/assets/mascots/jambu_biji/jambu_biji-gesture-01.png",
      "/assets/mascots/jambu_biji/jambu_biji-gesture-02.png",
      "/assets/mascots/jambu_biji/jambu_biji-gesture-03.png",
    ],
    flipCard: [
      {
        name: "ENDES",
        nickname: "Friendly Guava",
        description: "Jambu bersahabat yang menghangatkan suasana.",
        rarity: "Uncommon",
        borderColor: "#B5FE28",
        bgColor: "#003BE2",
        skills: [
          { name: "Potassium", description: "Tinggi kalium.", value: 80 },
          { name: "Vitamin C", description: "Sumber vitamin C.", value: 95 },
          { name: "Fiber", description: "Kaya serat.", value: 75 },
        ],
        kcal: 68,
        image: "/assets/tasty-universe/mascots/flip-card/png/endes.png",
      },
    ],
    funFact: [
      {
        introduction: "Super Fruit!",
        description:
          "Jambu disebut super fruit karena vitamin C dan seratnya yang tinggi.",
      },
    ],
  },
  {
    name: "LIZZIE",
    slug: "lizzie",
    growingPlace: "Mediterania",
    species: "Vitis Vinifera",
    characteristic: "Joyful",
    harvestTime: "Musim panas",
    introduction: "Hey hey Lizzie!",
    description:
      "Si anggur yang super joyful ini memiliki antusiasme yang sangat menular! Lizzie si anggur siap untuk mewarnai harimu dengan ledakan rasa yang menggugah selera.",
    tabsColor: ["#7240A3", "#308249", "#FF00B7"],
    cardColor: "#00C563",
    primaryColor: "#9CFF00",
    secondaryColor: "#003CE9",
    tertiaryColor: "#003CE9",
    pictureBgColor: "#9CFF00",
    imageHolderColor: "blue",
    image: "/assets/tasty-universe/mascots/png/lizzie.png",
    mascotCardImage:
      "/assets/landing-page/tasty-universe/mascots-card/lizzie.png",
    gestures: [
      "/assets/mascots/anggur/anggur-gesture-01.png",
      "/assets/mascots/anggur/anggur-gesture-02.png",
      "/assets/mascots/anggur/anggur-gesture-03.png",
    ],
    flipCard: [
      {
        name: "LIZZIE",
        nickname: "Joyful Grape",
        description: "Anggur ceria dengan rasa menyegarkan.",
        rarity: "Common",
        borderColor: "#B5FE28",
        bgColor: "#FFE600",
        skills: [
          { name: "Potassium", description: "Tinggi kalium.", value: 88 },
          { name: "Vitamin B", description: "Sumber vitamin B.", value: 85 },
          { name: "Fiber", description: "Kaya serat.", value: 72 },
        ],
        kcal: 69,
        image: "/assets/tasty-universe/mascots/flip-card/png/lizzie.png",
      },
    ],
    funFact: [
      {
        introduction: "Buahnya nenek moyang?",
        description:
          "Anggur adalah salah satu buah pertama yang dibudidayakan manusia!",
      },
    ],
  },
  {
    name: "OISHI-MARU",
    slug: "oishi-maru",
    growingPlace: "Jepang",
    species: "Cucumis Melo",
    characteristic: "Percaya diri",
    harvestTime: "Musim panas",
    introduction: "Konnichiwa, Oishi-Maru!",
    description:
      "Bayangin, ada melon yang saking pedenya, rasanya bisa sempurna by default! Murni lezat dan bulatnya itu lho, bikin gemas!",
    tabsColor: ["#9CFF00", "#FC6C00", "#003CE9", "#FFE600"],
    cardColor: "#9CFF00",
    primaryColor: "#003CE9",
    secondaryColor: "#9CFF00",
    tertiaryColor: "#003CE9",
    pictureBgColor: "#003CE9",
    imageHolderColor: "pink",
    image: "/assets/tasty-universe/mascots/png/oishi-maru.png",
    mascotCardImage:
      "/assets/landing-page/tasty-universe/mascots-card/oishi-maru.png",
    gestures: [
      "/assets/mascots/melon/melon-gesture-01.png",
      "/assets/mascots/melon/melon-gesture-02.png",
      "/assets/mascots/melon/melon-gesture-03.png",
    ],
    flipCard: [
      {
        name: "OISHI-MARU",
        nickname: "Confident Melon",
        description: "Melon pede dengan rasa default sempurna.",
        rarity: "Rare",
        borderColor: "#003BE2",
        bgColor: "#FC6C00",
        skills: [
          { name: "Antioxidant", description: "Kaya antioksidan.", value: 78 },
          { name: "Magnesium", description: "Sumber magnesium.", value: 85 },
          { name: "Fiber", description: "Tinggi serat.", value: 82 },
        ],
        kcal: 60,
        image: "/assets/tasty-universe/mascots/flip-card/png/oishi-maru.png",
      },
    ],
    funFact: [
      {
        introduction: "Isinya air...?",
        description:
          "90% kandungan melon adalah air, makanya bisa mencegah dehidrasi!",
      },
    ],
  },
  {
    name: "MATT",
    slug: "matt",
    growingPlace: "Korea",
    species: "Fragaria Ananassa",
    characteristic: "Witty",
    harvestTime: "Musim gugur",
    introduction: "Annyeong, Matt!",
    description:
      "Si Matt ini punya karakter ngejreng dan rasa yang bikin kamu mikir, 'Ini gokil banget!'. Tiap gigitannya itu lho, ledakan rasa yang bikin seru!",
    tabsColor: ["#EC2024", "#FC6C00", "#308249", "#003CE9"],
    cardColor: "#00C563",
    primaryColor: "#9CFF00",
    secondaryColor: "#003CE9",
    tertiaryColor: "#003CE9",
    pictureBgColor: "#9CFF00",
    imageHolderColor: "blue",
    image: "/assets/tasty-universe/mascots/png/matt.png",
    mascotCardImage:
      "/assets/landing-page/tasty-universe/mascots-card/matt.png",
    gestures: [
      "/assets/mascots/stroberi/stroberi-gesture-01.png",
      "/assets/mascots/stroberi/stroberi-gesture-02.png",
      "/assets/mascots/stroberi/stroberi-gesture-03.png",
    ],
    flipCard: [
      {
        name: "MATT",
        nickname: "Witty Strawberry",
        description: "Stroberi berkarakter kuat dengan rasa ngejreng.",
        rarity: "Common",
        borderColor: "#B5FE28",
        bgColor: "#FFE600",
        skills: [
          { name: "Potassium", description: "Tinggi kalium.", value: 86 },
          { name: "Vitamin C", description: "Sumber vitamin C.", value: 90 },
          { name: "Fiber", description: "Kaya serat.", value: 88 },
        ],
        kcal: 45,
        image: "/assets/tasty-universe/mascots/flip-card/png/matt.png",
      },
    ],
    funFact: [
      {
        introduction: "Beda sendiri~",
        description:
          "Stroberi jadi satu-satunya buah yang memiliki biji di bagian luar!",
      },
    ],
  },
  {
    name: "NAMI",
    slug: "nami",
    growingPlace: "Meksiko",
    species: "Persea Americana",
    characteristic: "Energik",
    harvestTime: "Sepanjang tahun",
    introduction: "Eh, ada Nami si alpukat Hass!",
    description:
      "Nami menyebarkan semangat dan energi, membuktikan kalau makan sehat itu bisa bikin badan tetap aktif dan ceria. (Pokoknya, yang hijau-hijau bikin semangat tumbuh lagi!)",
    tabsColor: ["#308249", "#003CE9", "#FFE600"],
    cardColor: "#003CE9",
    primaryColor: "#9CFF00",
    secondaryColor: "#003CE9",
    tertiaryColor: "#9CFF00",
    pictureBgColor: "#FF00B7",
    imageHolderColor: "green",
    image: "/assets/tasty-universe/mascots/png/nami.png",
    mascotCardImage:
      "/assets/landing-page/tasty-universe/mascots-card/nami.png",
    gestures: [
      "/assets/mascots/alpukat/alpukat-gesture-01.png",
      "/assets/mascots/alpukat/alpukat-gesture-02.png",
      "/assets/mascots/alpukat/alpukat-gesture-03.png",
    ],
    flipCard: [
      {
        name: "NAMI",
        nickname: "Energetic Avocado",
        description: "Alpukat aktif penuh energi.",
        rarity: "Uncommon",
        borderColor: "#B5FE28",
        bgColor: "#FFE600",
        skills: [
          { name: "Potassium", description: "Tinggi kalium.", value: 90 },
          { name: "Vitamin K", description: "Sumber vitamin K.", value: 85 },
          { name: "Fiber", description: "Kaya serat.", value: 85 },
        ],
        kcal: 240,
        image: "/assets/tasty-universe/mascots/flip-card/png/nami.png",
      },
    ],
    funFact: [
      {
        introduction: "Alligator Pear?",
        description:
          "Alpukat dulu disebut sebagai ‘Alligator Pear’ karena permukaan kulitnya kasar.",
      },
    ],
  },
  {
    name: "MISHKU",
    slug: "mishku",
    growingPlace: "Sukabumi",
    species: "Pitahaya",
    characteristic: "Ceria",
    harvestTime: "Musim panas",
    introduction: "Inilah Mishku si buah naga~",
    description:
      "Misinya mulia banget: menyebarkan senyuman manis dan good vibes yang bikin nagih, satu gigitan penuh semangat dibarengi keceriaan yang tiada habisnya!",
    tabsColor: ["#FF00B7", "#287041", "#003CE9", "#FFE600"],
    cardColor: "#003CE9",
    primaryColor: "#9CFF00",
    secondaryColor: "#003CE9",
    tertiaryColor: "#9CFF00",
    pictureBgColor: "#FF00B7",
    imageHolderColor: "green",
    image: "/assets/tasty-universe/mascots/png/mishku.png",
    mascotCardImage:
      "/assets/landing-page/tasty-universe/mascots-card/mishku.png",
    gestures: [
      "/assets/mascots/buah_naga/buah_naga-gesture-01.png",
      "/assets/mascots/buah_naga/buah_naga-gesture-02.png",
      "/assets/mascots/buah_naga/buah_naga-gesture-03.png",
    ],
    flipCard: [
      {
        name: "MISHKU",
        nickname: "Cheerful Dragon Fruit",
        description: "Buah naga yang menebar senyuman.",
        rarity: "Rare",
        borderColor: "#003BE2",
        bgColor: "#FFE600",
        skills: [
          { name: "Magnesium", description: "Sumber magnesium.", value: 85 },
          { name: "Vitamin C", description: "Tinggi vitamin C.", value: 80 },
          { name: "Fiber", description: "Kaya serat.", value: 70 },
        ],
        kcal: 60,
        image: "/assets/tasty-universe/mascots/flip-card/png/mishku.png",
      },
    ],
    funFact: [
      {
        introduction: "Aslinya kaktus...",
        description:
          "Buah naga tumbuh di tanaman kaktus. Iya, kaktus! Ga boong. Beneran.",
      },
    ],
  },
  {
    name: "KEKO",
    slug: "keko",
    growingPlace: "Asia Tenggara",
    species: "Citrus Sinensis",
    characteristic: "Bubbly",
    harvestTime: "Musim gugur",
    introduction: "Halo Keko!",
    description:
      "Jeruk yang satu ini segernya lebih nampol dari es jeruk pas cuaca lagi panas-panasnya! Udah penuh vit. C, seger lagi. Kurang apalagi coba?",
    tabsColor: ["#FFE600", "#FC6C00", "#308249"],
    cardColor: "#9CFF00",
    primaryColor: "#003CE9",
    secondaryColor: "#9CFF00",
    tertiaryColor: "#003CE9",
    pictureBgColor: "#003CE9",
    imageHolderColor: "pink",
    image: "/assets/tasty-universe/mascots/png/keko.png",
    mascotCardImage:
      "/assets/landing-page/tasty-universe/mascots-card/keko.png",
    gestures: [
      "/assets/mascots/jeruk/jeruk-gesture-01.png",
      "/assets/mascots/jeruk/jeruk-gesture-02.png",
      "/assets/mascots/jeruk/jeruk-gesture-03.png",
    ],
    flipCard: [
      {
        name: "KEKO",
        nickname: "Bubbly Orange",
        description: "Jeruk segar yang bersahabat.",
        rarity: "Common",
        borderColor: "#B5FE28",
        bgColor: "#FFE600",
        skills: [
          { name: "Antioxidant", description: "Kaya antioksidan.", value: 85 },
          { name: "Vitamin C", description: "Tinggi vitamin C.", value: 95 },
          { name: "Fiber", description: "Sumber serat.", value: 80 },
        ],
        kcal: 69,
        image: "/assets/tasty-universe/mascots/flip-card/png/keko.png",
      },
    ],
    funFact: [
      {
        introduction: "Obat lelah",
        description:
          "Jeruk bisa membantu mengurangi kelelahan setelah olahraga berat!",
      },
    ],
  },
  {
    name: "AROI",
    slug: "aroi",
    growingPlace: "Amerika",
    species: "Carica Papaya",
    characteristic: "Playful",
    harvestTime: "Sepanjang tahun",
    introduction: "Siap-siap!",
    description:
      "Ini dia Aroi si pepaya yang playful, membawa daya tarik yang semanis rasanya. Setiap gigitannya adalah undangan untuk menikmati keseruan yang tak terlupakan!",
    tabsColor: ["#FC6C00", "#308249", "#FF00B7"],
    cardColor: "#00C563",
    primaryColor: "#9CFF00",
    secondaryColor: "#003CE9",
    tertiaryColor: "#003CE9",
    pictureBgColor: "#9CFF00",
    imageHolderColor: "blue",
    image: "/assets/tasty-universe/mascots/png/aroi.png",
    mascotCardImage:
      "/assets/landing-page/tasty-universe/mascots-card/aroi.png",
    gestures: [
      "/assets/mascots/pepaya/pepaya-gesture-01.png",
      "/assets/mascots/pepaya/pepaya-gesture-02.png",
      "/assets/mascots/pepaya/pepaya-gesture-03.png",
    ],
    flipCard: [
      {
        name: "AROI",
        nickname: "Playful Papaya",
        description: "Pepaya manis yang playful.",
        rarity: "Common",
        borderColor: "#B5FE28",
        bgColor: "#003BE2",
        skills: [
          {
            name: "Vitamin A & C",
            description: "Sumber vitamin A & C.",
            value: 82,
          },
          { name: "Antioxidant", description: "Kaya antioksidan.", value: 85 },
          { name: "Fiber", description: "Tinggi serat.", value: 75 },
        ],
        kcal: 43,
        image: "/assets/tasty-universe/mascots/flip-card/png/aroi.png",
      },
    ],
    funFact: [
      {
        introduction: "Bukan dari pohon?!",
        description:
          "Ternyata pepaya bukan pohon, tapi herba! The more you know...",
      },
    ],
  },
];

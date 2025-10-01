// Shared Types untuk TastyFruit Monorepo

// Product Types
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
  characterSlug: string;
  gesture: string;
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
  fruitCardImage: string;
}

// Publication Types
export interface PublikasiData {
  id: string;
  image: string;
  title: string;
  date: string;
  category: "Event" | "Aktivitas" | "Produk" | "Informasi";
  content: string;
  author: string;
}

// Recipe Types
export interface ResepData {
  id: number;
  title: string;
  description: string;
  image: string;
  ingredients: string[];
  instructions: string[];
  prepTime: string;
  cookTime: string;
  servings: number;
}

// Character Types
export interface CharacterData {
  slug: string;
  name: string;
  description: string;
  image: string;
  personality: string[];
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

// Dashboard Stats Types
export interface DashboardStats {
  totalProduk: number;
  totalPublikasi: number;
  totalResep: number;
  totalUsers?: number;
}

// Form Types
export interface ContactForm {
  name: string;
  email: string;
  message: string;
  phone?: string;
}

// Navigation Types
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

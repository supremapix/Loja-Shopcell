export interface Product {
  id: number | string;
  name: string;
  category: string;
  brand?: string;
  desc?: string;
  rating?: number;
  reviewsCount?: number | string;
  image: string;
  badges?: string[];
  isHeroDestaque?: boolean;
  price?: number;
  priceFormatted?: string;
  installments?: string;
  slug?: string;
  color?: string;
}

export interface CategoryHighlight {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  features: string[];
  badge: string;
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
  avatar: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Differential {
  icon: string;
  title: string;
  description: string;
}

export interface CartProduct {
  id: string | number;
  slug?: string;
  name: string;
  category?: string;
  brand?: string;
  desc?: string;
  image: string;
  price?: number;
  priceFormatted?: string;
  installments?: string;
  color?: string;
  badges?: string[];
}

export interface CartItem {
  product: CartProduct;
  quantity: number;
}

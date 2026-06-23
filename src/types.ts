export interface Product {
  id: number;
  name: string;
  brand: 'Redmi' | 'POCO' | 'Xiaomi' | 'Tablet' | 'Fone';
  desc: string;
  rating: number;
  reviewsCount: number | string;
  priceDe?: number;
  priceAt: number;
  parcelas: string;
  image: string;
  link: string;
  badges: string[];
  isHeroDestaque?: boolean;
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

export interface CartItem {
  product: Product;
  quantity: number;
}

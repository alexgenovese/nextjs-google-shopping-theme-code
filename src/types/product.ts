export interface Product {
  id: number;
  title: string;
  price: number;
  rating: number;
  image: string;
  store: string;
  freeShipping?: boolean;
  description: string;
  features: string[];
  specifications: Record<string, string>;
}

export interface PriceOption {
  store: string;
  price: number;
  shipping: number;
  isPromotion?: boolean;
  originalPrice?: number;
}
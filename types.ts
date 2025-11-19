
export enum ProductCategory {
  SWEETS = 'Sweets',
  PICKLES = 'Pickles',
  SNACKS = 'Snacks',
  STAPLES = 'Kitchen Staples',
}

export interface ProductVariant {
  weight: string;
  price: number;
}

export interface Product {
  id: number;
  name: string;
  teluguName: string;
  description: string;
  category: ProductCategory;
  image: string;
  variants: ProductVariant[];
  rating: number;
  reviewCount: number;
}

export interface CartItem {
  productId: number;
  variantWeight: string;
  quantity: number;
}

export interface Toast {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info';
}
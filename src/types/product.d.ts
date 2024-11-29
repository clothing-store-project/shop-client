export type Color = {
  id: number;
  value: string;
}

export type Size = {
  id: number;
  value: string;
}

export type Product = {
  id: number;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  sizes: Size[];
  colors: Color[];
}

export interface ProductImage {
  id: number
  src: string
  alt: string
}

export interface RelatedProduct {
  id: number
  name: string
  price: number
  originalPrice: number
  discount: number
  image: string
  colors: string[]
}
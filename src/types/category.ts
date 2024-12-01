import type {Product} from "~/types/product";

export type ProductCategory = {
  id: number
  slug: string
  banner: string
  products: Product[]
}
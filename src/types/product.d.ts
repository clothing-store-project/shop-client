export type Color = {
  id: number;
  label: string;
  swatch: Swatch;
}

export type Size = {
  id: number;
  label: string;
}

// export type Product = {
//   id: number;
//   sku: string;
//   name: string;
//   slug: string;
//   price: number;
//   originalPrice?: number;
//   discount?: number;
//   image: string;
//   sizes: Size[];
//   colors: Color[];
// }

// export type ProductDetail = {
//   id: number
//   sku: string
//   name: string
//   slug: string
//   tag: {
//     id: number
//     name: string
//     value: string
//   }
//   attributes: [
//     {
//       id: number
//       name: string
//       value: string
//     }
//   ]
//   options: [
//     {
//       id: number
//       name: string
//       price: number
//       originalPrice?: number
//       quantity: number
//       values: [
//         {
//           id: number
//           value: string
//         }
//       ]
//     }
//   ],
//   // price: number;
//   // originalPrice?: number;
//   // discount?: number;
//   // images: string[];
//   // sizes: Size[];
//   // colors: Color[];
//   description: string;
// }

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


export type Stock = {
  is_in_stock: boolean;
  quantity: number;
};

export type Category = {
  category_id: number;
  name: string;
  position: number;
};

export type MediaGallery = {
  path: string;
  pos: number;
};

export type Swatch = {
  swatch_link: string;
  type: number;
};

export type ConfigurableOptionValue = {
  id: number;
  label: string;
  swatch?: Swatch;
};

export type ConfigurableOption = {
  attribute_code: string;
  label: string;
  values: ConfigurableOptionValue[];
};

export type ConfigurableChild = {
  id: number;
  name: string;
  sku: string;
  price: number;
  regular_price: number;
  is_pre_order: boolean;
  stock: Stock;
  image: string;
  thumbnail: string;
  size: Size;
  color: Color;
  media_gallery: MediaGallery[];
};

export type ProductDetail = {
  id: number;
  name: string;
  description?: string;
  short_description: string;
  materials:string;
  instructions:string;
  price: number;
  regular_price: number;
  status: number;
  slug: string;
  season: string;
  stock: Stock;
  category: Category[];
  media_gallery: MediaGallery[];
  configurable_options: ConfigurableOption[];
  configurable_children: ConfigurableChild[];
};

export type Product = {
  id: number;
  name: string;
  price: number;
  regular_price: number;
  status: number;
  slug: string;
  season: string;
  stock: Stock;
  media_gallery: MediaGallery[];
  configurable_options: ConfigurableOption[];
}
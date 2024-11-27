<template>
  <div class="mx-auto px-4 py-12 xl:w-10/12 w-full">
    <!-- Product Grid -->
    <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-2 gap-6 w-auto">
      <div
          v-for="product in products"
          :key="product.id"
          class="group relative rounded-3xl transition ease-in-out delay-150 animate__fadeInUp"
      >
        <ProductItem
            :product="product"
            @add-to-cart="addToCart"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

import type {Product} from "~/types/product";

const products = ref<Product[]>([
  {
    id: 1,
    name: 'Quần nỉ bé trai in họa tiết cổ tứi',
    slug: 'quan-ni-be-trai-in-hoa-tiet-co-tui-1',
    price: 199000,
    originalPrice: 299000,
    discount: 33,
    image: 'https://canifa.com/img/1517/2000/resize/3/t/3tw23w005-sa855-110-1-u.webp',
    sizes: [
      {id: 1, value: '98'},
      {id: 2, value: '104'},
      {id: 3, value: '110'},
      {id: 4, value: '116'},
      {id: 5, value: '122'},
      {id: 6, value: '128'},
    ],
    colors: [
      {id: 1, value: 'https://media.canifa.com/attribute/swatch/images/sb128.webp'},
      {id: 2, value: 'https://media.canifa.com/attribute/swatch/images/sp189.webp'}
    ]
  },
  {
    id: 2,
    name: 'Quần nỉ bé trai in họa tiết cổ tứi',
    slug: 'quan-ni-be-trai-in-hoa-tiet-co-tui-2',
    price: 199000,
    originalPrice: 299000,
    discount: 33,
    image: 'https://canifa.com/img/1517/2000/resize/2/b/2bp24w014-sg305-2.webp',
    sizes: [
      {id: 1, value: '98'},
      {id: 2, value: '104'},
      {id: 3, value: '110'},
      {id: 4, value: '116'},
      {id: 5, value: '122'},
      {id: 6, value: '128'},
    ],
    colors: [
      {id: 1, value: 'https://media.canifa.com/attribute/swatch/images/sb128.webp'},
      {id: 2, value: 'https://media.canifa.com/attribute/swatch/images/sp189.webp'}
    ]
  },
  {
    id: 3,
    name: 'Quần nỉ bé trai in họa tiết cổ tứi',
    slug: 'quan-ni-be-trai-in-hoa-tiet-co-tui-3',
    price: 199000,
    originalPrice: 299000,
    discount: 33,
    image: 'https://canifa.com/img/1517/2000/resize/3/t/3tw23w005-sa855-110-1-u.webp',
    sizes: [
      {id: 1, value: '98'},
      {id: 2, value: '104'},
      {id: 3, value: '110'},
      {id: 4, value: '116'},
      {id: 5, value: '122'},
      {id: 6, value: '128'},
    ],
    colors: [
      {id: 1, value: 'https://media.canifa.com/attribute/swatch/images/sb128.webp'},
      {id: 2, value: 'https://media.canifa.com/attribute/swatch/images/sp189.webp'}
    ]
  },
  {
    id: 4,
    name: 'Quần nỉ bé trai in họa tiết cổ tứi',
    slug: 'quan-ni-be-trai-in-hoa-tiet-co-tui-4',
    price: 199000,
    originalPrice: 299000,
    discount: 33,
    image: 'https://canifa.com/img/1517/2000/resize/3/t/3tw23w005-sa855-110-1-u.webp',
    sizes: [
      {id: 1, value: '98'},
      {id: 2, value: '104'},
      {id: 3, value: '110'},
      {id: 4, value: '116'},
      {id: 5, value: '122'},
      {id: 6, value: '128'},
    ],
    colors: [
      {id: 1, value: 'https://media.canifa.com/attribute/swatch/images/sb128.webp'},
      {id: 2, value: 'https://media.canifa.com/attribute/swatch/images/sp189.webp'}
    ]
  },
  {
    id: 5,
    name: 'Quần nỉ bé trai in họa tiết cổ tứi',
    slug: 'quan-ni-be-trai-in-hoa-tiet-co-tui-5',
    price: 199000,
    originalPrice: 299000,
    discount: 33,
    image: 'https://canifa.com/img/1517/2000/resize/3/t/3tw23w005-sa855-110-1-u.webp',
    sizes: [
      {id: 1, value: '98'},
      {id: 2, value: '104'},
      {id: 3, value: '110'},
      {id: 4, value: '116'},
      {id: 5, value: '122'},
      {id: 6, value: '128'},
    ],
    colors: [
      {id: 1, value: 'https://media.canifa.com/attribute/swatch/images/sb128.webp'},
      {id: 2, value: 'https://media.canifa.com/attribute/swatch/images/sp189.webp'}
    ]
  },
  {
    id: 6,
    name: 'Quần nỉ bé trai in họa tiết cổ tứi',
    slug: 'quan-ni-be-trai-in-hoa-tiet-co-tui-6',
    price: 199000,
    originalPrice: 299000,
    discount: 33,
    image: 'https://canifa.com/img/1517/2000/resize/2/b/2bp24w014-sg305-2.webp',
    sizes: [
      {id: 1, value: '98'},
      {id: 2, value: '104'},
      {id: 3, value: '110'},
      {id: 4, value: '116'},
      {id: 5, value: '122'},
      {id: 6, value: '128'},
    ],
    colors: [
      {id: 1, value: 'https://media.canifa.com/attribute/swatch/images/sb128.webp'},
      {id: 2, value: 'https://media.canifa.com/attribute/swatch/images/sp189.webp'}
    ]
  },
  {
    id: 7,
    name: 'Quần nỉ bé trai in họa tiết cổ tứi',
    slug: 'quan-ni-be-trai-in-hoa-tiet-co-tui-7',
    price: 199000,
    originalPrice: 299000,
    discount: 33,
    image: 'https://canifa.com/img/1517/2000/resize/3/t/3tw23w005-sa855-110-1-u.webp',
    sizes: [
      {id: 1, value: '98'},
      {id: 2, value: '104'},
      {id: 3, value: '110'},
      {id: 4, value: '116'},
      {id: 5, value: '122'},
      {id: 6, value: '128'},
    ],
    colors: [
      {id: 1, value: 'https://media.canifa.com/attribute/swatch/images/sb128.webp'},
      {id: 2, value: 'https://media.canifa.com/attribute/swatch/images/sp189.webp'}
    ]
  },
  {
    id: 8,
    name: 'Quần nỉ bé trai in họa tiết cổ tứi',
    slug: 'quan-ni-be-trai-in-hoa-tiet-co-tui-8',
    price: 199000,
    originalPrice: 299000,
    discount: 33,
    image: 'https://canifa.com/img/1517/2000/resize/3/t/3tw23w005-sa855-110-1-u.webp',
    sizes: [
      {id: 1, value: '98'},
      {id: 2, value: '104'},
      {id: 3, value: '110'},
      {id: 4, value: '116'},
      {id: 5, value: '122'},
      {id: 6, value: '128'},
    ],
    colors: [
      {id: 1, value: 'https://media.canifa.com/attribute/swatch/images/sb128.webp'},
      {id: 2, value: 'https://media.canifa.com/attribute/swatch/images/sp189.webp'}
    ]
  },
])

const addToCart = (product: Product) => {
  console.log('Add to cart', product)
}
</script>
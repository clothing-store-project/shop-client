<script lang="ts" setup>
import type {Product, ProductDetail} from "~/types/product";
import {ProductData} from "~/data/productData";

const product = ref<ProductDetail>({
  id: 123,
  name: "Áo thun nam",
  description: "Áo thun nam chất lượng cao, thoáng mát, dễ chịu.",
  short_description: "Áo nỉ dài tay dáng regular, thiết kế đơn giản, mặc thoải mái và dễ kết hợp với nhiều loại trang phục.\n" + "Chất liệu 100% polyester.",
  materials: '100% polyester',
  instructions: 'Giặt máy ở nhiệt độ thường.\n' + 'Không sử dụng chất tẩy.\n' + 'Phơi trong bóng râm.',
  price: 200000,
  regular_price: 200000,
  status: 1,
  slug: "ao-thun-nam",
  stock: {
    is_in_stock: true,
    quantity: 50
  },
  season: 'Summer',
  category: [
    {
      category_id: 1,
      name: "Áo",
      position: 1
    },
    {
      category_id: 2,
      name: "Nam",
      position: 2
    }
  ],
  media_gallery: [
    {
      path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sk010-xl-1-u.webp",
      pos: 1,
    },
    {
      path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sk010-xl-1-u.webp",
      pos: 2
    }
  ],
  configurable_options: [
    {
      attribute_code: "color",
      label: "Màu sắc",
      values: [
        {
          id: 1,
          label: "Đỏ",
          swatch: {
            swatch_link: "https://media.canifa.com/attribute/swatch/images/sa476.webp",
            type: 1
          }
        },
        {
          id: 2,
          label: "Xanh",
          swatch: {
            swatch_link: "https://media.canifa.com/attribute/swatch/images/sl302.webp",
            type: 1
          }
        }
      ]
    },
    {
      attribute_code: "size",
      label: "Kích cỡ",
      values: [
        {
          id: 1,
          label: "M"
        },
        {
          id: 2,
          label: "L"
        }
      ]
    }
  ],
  configurable_children: [
    {
      id: 1,
      name: "Áo thun nam - Đỏ - M",
      sku: "ATN-001-RD-M",
      price: 170000,
      regular_price: 180000,
      is_pre_order: false,
      stock: {
        is_in_stock: true,
        quantity: 30
      },
      image: "https://example.com/images/product-variant-red-m.jpg",
      thumbnail: "https://example.com/images/product-variant-red-m-thumb.jpg",
      size: {
        id: 1,
        label: "M"
      },
      color: {
        id: 1,
        label: "Đỏ",
        swatch: {
          swatch_link: "https://example.com/images/color-swatch-red.jpg",
          type: 1
        }
      },
      media_gallery: [
        {
          path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sk010-xl-2.webp",
          pos: 1
        },
        {
          path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sk010-xl-2.webp",
          pos: 2,
        }
      ]
    },
    {
      id: 2,
      name: "Áo thun nam - Xanh - L",
      sku: "ATN-001-BL-L",
      price: 170000,
      regular_price: 180000,
      is_pre_order: false,
      stock: {
        is_in_stock: true,
        quantity: 20
      },
      image: "https://example.com/images/product-variant-blue-l.jpg",
      thumbnail: "https://example.com/images/product-variant-blue-l-thumb.jpg",
      size: {
        id: 2,
        label: "L"
      },
      color: {
        id: 2,
        label: "Xanh",
        swatch: {
          swatch_link: "https://example.com/images/color-swatch-blue.jpg",
          type: 1
        }
      },
      media_gallery: [
        {
          path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-1-u.webp",
          pos: 1
        },
        {
          path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-2.webp",
          pos: 2
        }
      ]
    },
    {
      id: 3,
      name: "Áo thun nam - Đỏ - L",
      sku: "ATN-001-RD-L",
      price: 170000,
      regular_price: 180000,
      is_pre_order: false,
      stock: {
        is_in_stock: true,
        quantity: 20
      },
      image: "https://example.com/images/product-variant-blue-l.jpg",
      thumbnail: "https://example.com/images/product-variant-blue-l-thumb.jpg",
      size: {
        id: 2,
        label: "L"
      },
      color: {
        id: 1,
        label: "Đỏ",
        swatch: {
          swatch_link: "https://example.com/images/color-swatch-blue.jpg",
          type: 1
        }
      },
      media_gallery: [
        {
          path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-1-u.webp",
          pos: 1
        },
        {
          path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-2.webp",
          pos: 2
        }
      ]
    },
    {
      id: 4,
      name: "Áo thun nam - Xanh - M",
      sku: "ATN-001-BL-M",
      price: 170000,
      regular_price: 180000,
      is_pre_order: false,
      stock: {
        is_in_stock: true,
        quantity: 20
      },
      image: "https://example.com/images/product-variant-blue-l.jpg",
      thumbnail: "https://example.com/images/product-variant-blue-l-thumb.jpg",
      size: {
        id: 1,
        label: "M"
      },
      color: {
        id: 2,
        label: "Xanh",
        swatch: {
          swatch_link: "https://example.com/images/color-swatch-blue.jpg",
          type: 1
        }
      },
      media_gallery: [
        {
          path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-1-u.webp",
          pos: 1
        },
        {
          path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-2.webp",
          pos: 2
        }
      ]
    }
  ]
})
const suggestedProducts = ref<Product[]>(ProductData)
const addToCart = (product: ProductDetail) => {
  console.log('cart', product)
}

useSeoMeta({
  title: product.value.name,
  ogTitle: product.value.name,
  description: product.value.short_description,
  ogDescription: product.value.short_description,
  ogImage: product.value.media_gallery[0].path
})

const isMobile = useCheckDeviceIsMobile()
const isProductLayout = useState('deviceLayout').value === 'product'
definePageMeta({
  layout: false,
});
</script>

<template>
  <UiProductDetail
      v-if="!isMobile && !isProductLayout"
      :product="product"
      :suggestedProducts="suggestedProducts"
      @add-to-cart="addToCart"
  />
  <UiProductDetailMobile
      v-else
      :product="product"
      :suggestedProducts="suggestedProducts"
      @add-to-cart="addToCart"
  />
</template>

<style lang="scss" scoped>
:deep(.el-input__inner) {
  height: 2.5rem;
}
</style>
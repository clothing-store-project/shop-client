<template>
  <div class="mx-auto px-4 py-12 lg:w-9/12 w-full">
    <!-- Header and Category Filters -->
    <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 w-full lg:w-auto">
      <h2 class="text-3xl font-bold">Most Popular Products</h2>
      <div class="bg-gray-100 rounded-full p-1 w-full lg:w-auto">
        <div class="flex overflow-x-auto space-x-2">
          <button
              v-for="category in categories"
              :key="category"
              @click="activeCategory = category"
              :class="[
              'px-6 py-2 rounded-full transition-colors',
              activeCategory === category
                ? 'bg-black text-white'
                : 'hover:bg-gray-200'
            ]"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </div>

    <!-- Product Grid -->
    <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-2 gap-6 w-auto">
      <div
          v-for="product in filteredProducts"
          :key="product.id"
          class="group relative rounded-3xl transition ease-in-out delay-150 animate__fadeInUp"
      >
        <ProductCard
            :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const categories: string[] = ['ALL', 'Dresses', 'Tops', 'Outerwear', 'Jacket']
const activeCategory = ref<string>('ALL')

const products = [
  {
    id: 1,
    name: 'Cozy Knit Cardigan Sweater',
    price: '80',
    category: 'Tops',
    image: 'https://pet-project-shop.github.io/template/images/shop/product/1.png',
    tag: 'GET 20 % OFF'
  },
  {
    id: 2,
    name: 'Sophisticated Swagger Suit',
    price: '80',
    category: 'Outerwear',
    image: 'https://pet-project-shop.github.io/template/images/shop/product/1.png'
  },
  {
    id: 3,
    name: 'Classic Denim Skinny Jeans',
    price: '80',
    category: 'Dresses',
    image: 'https://pet-project-shop.github.io/template/images/shop/product/1.png',
    tag: 'GET 20 % OFF'
  },
  {
    id: 4,
    name: 'Athletic Mesh Sports Leggings',
    price: '80',
    category: 'Tops',
    image: 'https://pet-project-shop.github.io/template/images/shop/product/1.png',
    tag: 'GET 20 % OFF'
  },
  {
    id: 5,
    name: 'Urban Style Jacket',
    price: '80',
    category: 'Jacket',
    image: 'https://pet-project-shop.github.io/template/images/shop/product/1.png',
    tag: 'GET 20 % OFF'
  },
  {
    id: 6,
    name: 'Elegant Evening Dress',
    price: '80',
    category: 'Dresses',
    image: 'https://pet-project-shop.github.io/template/images/shop/product/1.png',
    tag: 'GET 20 % OFF'
  },
  {
    id: 7,
    name: 'Casual Denim Jacket',
    price: '80',
    category: 'Jacket',
    image: 'https://pet-project-shop.github.io/template/images/shop/product/1.png',
    tag: 'GET 20 % OFF'
  },
  {
    id: 8,
    name: 'Summer Floral Dress',
    price: '80',
    category: 'Dresses',
    image: 'https://pet-project-shop.github.io/template/images/shop/product/1.png',
    tag: 'GET 20 % OFF'
  }
]

const filteredProducts = computed(() => {
  if (activeCategory.value === 'ALL') {
    return products
  }
  return products.filter(product => product.category === activeCategory.value)
})
</script>
<script lang="ts" setup>
import {Heart, ShoppingCart, Eye} from 'lucide-vue-next'

defineProps({
  product: Object,
})
</script>

<template>
  <!-- Discount Badge -->
  <div class="absolute top-4 left-4 z-10">
          <span class="bg-white px-4 py-1 rounded-full text-sm font-medium">
            GET 20% OFF
          </span>
  </div>

  <!-- Action Buttons -->
  <div class="absolute top-4 right-4 z-10 flex flex-col gap-3">
    <button
        class="icon p-3 bg-[rgba(0,0,0,0.3)] rounded-full hover:bg-gray-100 transition-colors shadow-[0px_15px_15px_0px_rgba(0,0,0,0.05)] child:text-white">
      <Heart class="w-5 h-5 text-white hover:text-slate-900"/>
    </button>
    <button
        class="icon p-3 bg-[rgba(0,0,0,0.3)] rounded-full hover:bg-gray-100 transition-colors shadow-[0px_15px_15px_0px_rgba(0,0,0,0.05)] ">
      <ShoppingCart class="w-5 h-5 text-white"/>
    </button>
  </div>

  <!-- Product Image -->
  <div class="aspect-[3/4] rounded-2xl overflow-hidden mb-4 relative group">
    <img
        :alt="product.name"
        :src="product.image"
        class="w-full h-full object-cover transition-transform group-hover:-translate-y-5 group-hover:rounded-2xl"
    />
    <div class="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity">
      <button class="bg-black text-white px-8 py-2 rounded-full hover:bg-black/90 hidden md:block">
        QUICK VIEW
      </button>
      <button class="bg-white text-black px-8 py-1.5 rounded-full group-hover:bg-slate-900 block md:hidden">
        <Eye class="group-hover:text-white" />
      </button>
    </div>
  </div>
  <!-- Product Info -->
  <div class="flex gap-2 justify-items-center items-center m-0">
    <h3 class="font-medium flex-1 text-sm md:text-xl">{{ product.name }}</h3>
    <p class="text-sm md:text-xl font-bold">${{ product.price }}</p>
  </div>
</template>
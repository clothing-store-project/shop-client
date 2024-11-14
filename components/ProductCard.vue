<script lang="ts" setup>
import {Eye, Heart, ShoppingCart} from 'lucide-vue-next'

defineProps({
  product: Object,
})
</script>

<template>
  <!-- Discount Badge -->
  <div v-if="product.tag" class="absolute md:top-4 top-2 md:left-4 left-2 z-2">
      <span class="bg-white px-1 py-1 md:px-4 md:py-1 lg:px-5 lg:py-2 rounded-full md:text-sm text-xs font-medium">
        {{ product.tag }}
      </span>
  </div>
  <!-- Product Image -->
  <div class="aspect-[3/4] rounded-2xl overflow-hidden mb-4 relative group">
    <img
        :alt="product.name"
        :src="product.image"
        class="w-full h-full object-cover animate-fade-up transition-transform duration-200 group-hover:-translate-y-4 group-hover:rounded-2xl"
    />
    <div class="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity">
      <button class="bg-black text-white px-8 py-2 rounded-full hover:bg-black/90 hidden md:block">
          ADD TO CART
      </button>
      <button class="bg-white text-black px-8 py-1.5 rounded-full group-hover:bg-slate-900 block md:hidden">
        <ShoppingCart class="group-hover:text-white"/>
      </button>
    </div>
  </div>
  <!-- Product Info -->
  <NuxtLink to="#" class="flex gap-2 justify-items-center items-center m-0 cursor-pointer">
    <h3 class="font-medium flex-1 text-sm md:text-xl">{{ product.name }}</h3>
    <p class="text-sm md:text-xl font-bold">${{ product.price }}</p>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.icon {
  &:hover {
    .icon-group {
      @apply text-slate-900;
    }
  }
}
</style>
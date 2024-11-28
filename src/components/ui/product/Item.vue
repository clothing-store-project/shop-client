<template>
  <div class="group relative flex flex-col">
    <!-- Sale Badge -->
    <div v-if="product.discount" class="absolute top-2 right-2 z-10">
      <div class="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
        -{{ product.discount }}%
      </div>
    </div>

    <!-- Product Image and Add to Cart Button -->
    <div class="relative overflow-hidden rounded-lg bg-gray-100 mb-4 group">
      <img
          :alt="product.name"
          :src="product.image"
          class=" w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
      />
      <!-- Add to Cart Button -->
      <div
          v-if="!isMobile"
          class="absolute inset-0 flex items-end justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t">
        <div
            class="py-3 flex-col gap-2 w-full  bg-[rgba(250,250,250,0.85)] text-[#333f48] text-xs font-semibold rounded-sm flex items-center justify-center invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200"
            style="right: 8px; bottom: 8px; left: 8px; z-index: 2;"
        >
          <span>Thêm nhanh vào giỏ</span>
          <div
              class="grid grid-cols-6 gap-2 items-center px-2 w-full"
          >
            <button
                v-for="size in product.sizes"
                :key="size.id"
                :class="[
            selectedSize === size.id
              ? 'border-black bg-black text-white'
              : 'border-gray-200 hover:border-gray-300'
          ]"
                class=" rounded border text-center transition-all duration-200 bg-white py-1"
                @click="selectSize(size.id)"
            >
              {{ size.value }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Product Details -->
    <div class="flex flex-col cursor-pointer">
      <!-- Color Variants -->
      <div class="flex gap-2 mb-3 border-black px-2 py-2 bg-white">
        <button
            v-for="color in product.colors"
            :key="color.id"
            :aria-label="`Select ${color.value} color`"
            :class="color.id === selectColor ? 'border-black' : 'border-gray-200'"
            :style="`background-image: url(${color.value})`"
            class="w-6 h-6 rounded-full border-2 transition-all duration-200  bg-beige"
            @click="handleSelectColor(color.id)"
        />
      </div>

      <!-- Product Name -->
      <h3 class="text-sm font-medium text-gray-900 mb-2">
        {{ product.name }}
      </h3>

      <!-- Price -->
      <div class="flex items-center gap-2">
        <span class="text-lg font-bold text-gray-900">
          {{ useFormatNumber(product.price) }}
        </span>
        <span v-if="product.originalPrice" class="text-sm text-gray-500 line-through">
          {{ useFormatNumber(product.originalPrice) }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import type {Product} from "~/types/product";

const props = defineProps<{
  product: Product;
  isMobile: boolean;
}>();

const emit = defineEmits<{
  (e: 'add-to-cart', product: Product & { selectedSize: number,selectColor:number }): void
}>();

const selectedSize = ref(0);
const selectColor = ref(props.product.colors[0].id);

const handleSelectColor = (colorId: number) => {
  selectColor.value = colorId;
};


const selectSize = (size: number) => {
  selectedSize.value = size;
  addToCart();
};

const addToCart = () => {
  if (selectedSize.value) {
    emit('add-to-cart', {
      ...props.product,
      selectedSize: selectedSize.value,
      selectColor: selectColor.value
    });
    selectedSize.value = 0;
  }
};
</script>


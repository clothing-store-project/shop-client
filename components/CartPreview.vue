<script lang="ts" setup>
import type {CartItem} from "~/types/cart";

defineProps({
  isOpen: Boolean,
  items: Array as PropType<CartItem[]>,
  subtotal: Number
})

defineEmits<{
  (e: 'close'): void,
  (e: 'removeItem', id: number): void
}>()
</script>

<template>
  <Transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-300"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
  >
    <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50" @click="$emit('close')"></div>
  </Transition>

  <Transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="opacity-0 translate-x-full"
      enter-to-class="opacity-100 translate-x-0"
      leave-active-class="transition ease-in duration-300"
      leave-from-class="opacity-100 translate-x-0"
      leave-to-class="opacity-0 translate-x-full"
  >
    <div v-if="isOpen" class="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-lg p-6 overflow-y-auto">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold">Shopping Cart</h2>
        <button aria-label="Close cart" class="text-gray-500 hover:text-black focus:outline-none"
                @click="$emit('close')">
          <span class="font-bold text-4xl"> &times;</span>
        </button>
      </div>

      <div class="space-y-6">
        <div v-for="item in items" :key="item.id" class="flex gap-4">
          <img :alt="item.name" :src="item.image" class="w-20 h-20 rounded-lg object-cover"/>
          <div class="flex-1">
            <h3 class="font-medium">{{ item.name }}</h3>
            <div class="flex gap-2">
              <div>
                <span class="font-medium text-gray-500">Size: </span>
                <span class="font-medium">{{ item.size }}</span>
              </div>
              <div>
                <span class="font-medium text-gray-500">Color: </span>
                <span class="font-medium">{{ item.color }}</span>
              </div>
            </div>
            <div class="flex items-center gap-2 mt-2">
              <el-input-number v-model="item.quantity" :max="10" :min="1" size="small"/>
            </div>
          </div>
          <div class="flex flex-col items-end gap-2">
            <button
                aria-label="Remove item"
                class="p-1 rounded-full hover:bg-gray-100"
                @click="$emit('removeItem', Number(item.id))"
            >
              <span class="font-bold text-xl"> &times;</span>
            </button>
            <span class="font-medium">${{ item.price.toFixed(2) }}</span>
          </div>
        </div>
      </div>

      <div class="mt-6 pt-6 border-t">
        <div class="flex justify-between mb-4">
          <span class="font-medium">Subtotal:</span>
          <span class="font-medium">${{ subtotal.toFixed(2) }}</span>
        </div>
        <div class="space-y-3">
          <button
              class="w-full py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            Checkout
          </button>
          <button
              class="w-full py-2 px-4 bg-black text-white rounded-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
            View Cart
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>
<script lang="ts" setup>
import type {CartItem} from "~/types/cart";
import {useCartStore} from "~/stores/cart";
import {Bell} from "@element-plus/icons-vue";

defineProps({
  isOpen: Boolean,
})

defineEmits<{
  (e: 'close'): void,
}>()

const promoCode = ref('')
const cartStore = useCartStore()
const cartItems = ref<CartItem[]>(cartStore.cartItems)
const product = ref<CartItem | null>()

const subtotal = computed(() => {
  return cartItems.value?.reduce((total, item) => total + (item.price * item.quantity), 0)
})

const saveMoney = computed(() => {
  return cartItems.value?.reduce((total, item) => total + ((item.regular_price - item.price) * item.quantity), 0)
})

const freeShippingThreshold = 599000
const remainingForFreeShipping = computed(() => {
  return Math.max(0, freeShippingThreshold - subtotal.value)
})

const activeDropdown = ref<CartItem | null>()

const toggleDropdown = (item: CartItem) => {
  activeDropdown.value = activeDropdown.value === item ? null : item
}

const closeDropdown = () => {
  activeDropdown.value = null
}

const isShowAdjustItem = ref<boolean>(false)

const adjustItem = (cartItem: CartItem) => {
  product.value = cartItems.value.find((item) => item.id === cartItem.id && item.selected_size.id === cartItem.selected_size.id && item.selected_color.id === cartItem.selected_color.id);
  closeDropdown()
  isShowAdjustItem.value = true
}

const removeItem = (cartItem: CartItem) => {
  cartStore.removeCartItem(cartItem)
  closeDropdown()
}

// Close dropdown when clicking outside
const handleGlobalClick = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  if (!target.closest('.more-button') && !target.closest('.dropdown-menu')) {
    closeDropdown()
  }
}

onMounted(() => {
  document.addEventListener('click', handleGlobalClick)
})

onUnmounted(() => {
  document.removeEventListener('click', handleGlobalClick)
})

const updateQuantity = (item: CartItem, change: number) => {
  cartStore.updateProductQuantity(item, change)
}
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
    <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 z-100" @click="$emit('close')"></div>
  </Transition>

  <Transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="opacity-0 translate-x-full"
      enter-to-class="opacity-100 translate-x-0"
      leave-active-class="transition ease-in duration-300"
      leave-from-class="opacity-100 translate-x-0"
      leave-to-class="opacity-0 translate-x-full"
  >
    <div v-if="isOpen" class="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-lg p-6 overflow-y-auto z-100">
      <div class="flex items-center justify-between p-4 border-b">
        <h2 class="text-lg font-medium">{{ $t('general.cart') }} ({{ cartItems.length }})</h2>
        <button
            class="text-gray-400 hover:text-gray-500"
            @click="$emit('close')"
        >
          <Icon class="w-6 h-6" name="lucide:x"/>
        </button>
      </div>

      <!-- Free Shipping Progress -->
      <div v-if="cartItems.length>0" class="bg-red-50 text-red-600 p-3 text-sm flex items-center w-full">
        <el-icon class="mr-2">
          <Bell/>
        </el-icon>
        <span>Mua thêm {{ useFormatNumber(remainingForFreeShipping) }} để được miễn phí vận chuyển.</span>
      </div>

      <!-- Cart Items -->
      <div class="flex-1 overflow-y-auto">
        <el-scrollbar height="70vh">
          <div
              v-for="item in cartItems"
              :key="item.id"
              :class="{ 'border-b-0': cartItems.indexOf(item) === cartItems.length - 1 }"
              class="p-4 border-b relative"
          >
            <div class="flex gap-4">
              <img
                  :alt="item.name"
                  class="w-20 h-20 object-cover rounded-lg"
                  src="https://canifa.com/img/210/300/resize/2/t/2tl24w005-pg118-122-1-u.webp"
              />
              <div class="flex-1">
                <div class="flex justify-between">
                  <div>
                    <h3 class="font-medium">{{ item.name }}</h3>
                    <div class="text-sm text-gray-500 mt-1">
                      {{ item.selected_size.label }} | {{ item.selected_color.label }}
                    </div>
                  </div>
                  <button class="text-gray-400 hover:text-gray-500" @click.stop="toggleDropdown(item)">
                    <Icon class="w-5 h-5" name="lucide:more-vertical"/>
                  </button>
                </div>

                <div class="flex items-center justify-between mt-4">
                  <div class="flex flex-col gap-2">
                    <div class="space-x-1">
                      <span class="font-medium">{{ useFormatNumber(item.price) }}</span>
                      <div v-if="item.price<item.regular_price" class="flex gap-2">
                         <span class="text-sm text-gray-500 line-through">
                        {{ useFormatNumber(item.regular_price) }}
                      </span>
                        <span class="text-red-500 text-sm">
                          -{{
                            Math.ceil((item.regular_price - item.price) / item.regular_price * 100)
                          }}%
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="flex items-center gap-3 border-1">
                    <button
                        :disabled="item.quantity <= 1"
                        class="w-8 h-8 border flex items-center justify-center hover:bg-gray-50"
                        @click="updateQuantity(item, -1)"
                    >
                      <ElIconMinus class="w-4 h-4"/>
                    </button>
                    <span class="w-8 text-center">{{ item.quantity }}</span>
                    <button
                        class="w-8 h-8 border flex items-center justify-center hover:bg-gray-50"
                        @click="updateQuantity(item, 1)"
                    >
                      <ElIconPlus class="w-4 h-4"/>
                    </button>
                  </div>

                  <Transition name="fade">
                    <div
                        v-if="activeDropdown === item"
                        class="absolute right-4 top-12 w-64 bg-white shadow-lg rounded-lg border py-1 z-10 dropdown-menu"
                    >
                      <button
                          class="w-full px-4 py-2 text-left flex items-center gap-3 hover:bg-gray-50"
                          @click="adjustItem(item)"
                      >
                        <Icon class="w-4 h-4" name="lucide:align-vertical-distribute-center"/>
                        <span class="text-sm">{{ $t('component.cart.edit') }}</span>
                      </button>
                      <button
                          class="w-full px-4 py-2 text-left flex items-center gap-3 hover:bg-gray-50 text-red-500"
                          @click="removeItem(item)"
                      >
                        <Icon class="w-4 h-4" name="lucide:trash"/>
                        <span class="text-sm">{{ $t('component.cart.delete') }}</span>
                      </button>
                    </div>
                  </Transition>
                </div>
              </div>
            </div>
          </div>
        </el-scrollbar>
      </div>
      <!-- Footer -->
      <div class="absolute bottom-0 right-0 border-t p-4 w-full space-y-4">
        <!-- Promo Code -->
        <div class="flex items-center gap-2">
          <div class="flex-1">
            <el-input
                v-model="promoCode"
                :placeholder="$t('component.cart.coupon')"
                class="w-full"
            >
              <template #prefix>
                <div class="text-gray-400">
                  <svg fill="none" height="20" viewBox="0 0 20 20" width="20">
                    <path
                        d="M16.666 9.16667V7.5C16.666 6.83333 16.1327 6.25 15.416 6.25H4.58268C3.86602 6.25 3.33268 6.83333 3.33268 7.5V9.16667C4.16602 9.16667 4.99935 9.91667 4.99935 10.8333C4.99935 11.75 4.16602 12.5 3.33268 12.5V14.1667C3.33268 14.8333 3.86602 15.4167 4.58268 15.4167H15.416C16.1327 15.4167 16.666 14.8333 16.666 14.1667V12.5C15.8327 12.5 14.9994 11.75 14.9994 10.8333C14.9994 9.91667 15.8327 9.16667 16.666 9.16667Z"
                        stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    <path d="M7.5 10L12.5 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="1.5"/>
                  </svg>
                </div>
              </template>
              <template #suffix>
                <Icon class="w-4 h-4 text-gray-400" name="lucide:chevron-right"/>
              </template>
            </el-input>
          </div>
        </div>

        <!-- Order Summary -->
        <div class="flex items-center justify-between text-sm">
          <span>{{ $t('component.cart.total') }}</span>
          <div class="text-right">
            <div class="font-medium">{{ useFormatNumber(subtotal) }}</div>
            <div v-if="saveMoney !== 0" class="text-primary text-xs">
              ({{ $t('component.cart.save') }} {{ useFormatNumber(saveMoney) }})
            </div>
          </div>
        </div>

        <!-- Checkout Button -->
        <el-button class="w-full" size="large" type="primary">
          {{ $t('component.cart.checkout') }}
        </el-button>
      </div>
    </div>
  </Transition>
  <LazyUiCartPreviewEdit
      v-if="product"
      :isOpenPopup="isShowAdjustItem"
      :product="product"
      @close-popup="()=>{
        isShowAdjustItem = false
        product = null
      }"
  />
</template>
<script lang="ts" setup>
import type {CartItem} from "~/types/cart";
import {useCartStore} from "~/stores/cart";
import {ProductData} from "~/data/productData";
import type {Product} from "~/types/product";

const recommendations = ref<Product[]>(ProductData)
const cartStore = useCartStore()
const cartItems = ref<CartItem[]>(cartStore.cartItems)
const product = ref<CartItem | null>()
const isShowAdjustItem = ref<boolean>(false)
const activeDropdown = ref<CartItem | null>()
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

const toggleDropdown = (item: CartItem) => {
  activeDropdown.value = activeDropdown.value === item ? null : item
}

const closeDropdown = () => {
  activeDropdown.value = null
}

const adjustItem = (cartItem: CartItem) => {
  product.value = cartItems.value.find((item) => item.id === cartItem.id && item.selected_size.id === cartItem.selected_size.id && item.selected_color.id === cartItem.selected_color.id);
  closeDropdown()
  isShowAdjustItem.value = true
}
const removeItem = (cartItem: CartItem) => {
  cartStore.removeCartItem(cartItem)
  closeDropdown()
}
const updateQuantity = (item: CartItem, change: number) => {
  cartStore.updateProductQuantity(item, change)
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


</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <div class="sticky top-0 left-0 right-0 bg-white z-50">
      <div class="flex items-center p-4 border-b">
        <el-button link @click="$router.back()">
          <ElIconArrowLeft class="w-5 h-5"/>
        </el-button>
        <h1 class="text-lg font-medium flex-1 text-center">Giỏ hàng ({{ cartItems.length }})</h1>
      </div>
      <!-- Free shipping notification -->
      <div v-if="remainingForFreeShipping>0" class="bg-red-50 text-red-600 p-3 text-sm flex items-center">
        <ElIconBell class="mr-2 w-5 h-5"/>
        <span>Mua thêm {{ useFormatNumber(remainingForFreeShipping) }} để được miễn phí vận chuyển.</span>
      </div>
    </div>

    <div v-if="cartItems.length===0" class="p-4 border-b relative">
      <p class="text-center">Không có sản phẩm </p>
    </div>

    <div
        v-for="item in cartItems"
        v-else
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
                <span class="text-red-500 text-sm">-{{
                    Math.ceil((item.regular_price - item.price) / item.regular_price * 100)
                  }}%</span>
              </div>
              <span class="text-sm text-gray-500 line-through">
                        {{ useFormatNumber(item.regular_price) }}
                      </span>
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

    <!-- Recommendations -->
    <div class="bg-white p-4 mb-48">
      <div class="flex justify-between items-center mb-4">
        <h2 class="font-medium">{{ $t('general.u_may_also_like') }}</h2>
        <el-button class="text-red-600" link>
          {{ $t('component.view_all')}}
          <ElIconDArrowRight class="w-4 h-4 ml-1 text-red-500"/>
        </el-button>
      </div>
      <UiProductList :is-loading="false" :products="recommendations"/>
    </div>

    <!-- Fixed bottom section -->
    <div class="fixed bottom-15 left-0 right-0 bg-white border-t z-52">
      <div class="p-4">
        <div class="flex items-center gap-2 mb-4">
          <ElIconTicket class="w-5 h-5" />
          <span class="text-gray-600">Mã ưu đãi</span>
          <el-button class="ml-auto" link>
            Chọn hoặc nhập mã
            <ElIconArrowRight class="w-5 h-5 ml-1"/>
          </el-button>
        </div>
        <div class="flex justify-between items-center mb-4">
          <span class="font-medium">Tạm tính</span>
          <div>
            <div class="font-medium text-right">{{ useFormatNumber(subtotal) }}</div>
            <div class="text-red-600 text-sm text-right">(Tiết kiệm {{ useFormatNumber(saveMoney) }})</div>
          </div>
        </div>
        <NuxtLinkLocale
            class="w-full h-12"
            to="/checkout"
        >
          <button
              :class="cartItems.length === 0 ? 'bg-red-400' : ''"
              class="w-full h-12 bg-red-600 text-white"
          >
            {{ $t('general.checkout') }}
          </button>
        </NuxtLinkLocale>
      </div>
    </div>
  </div>

  <UiCartPopupMobile
      v-if="product"
      :is-adjust="true"
      :is-show="isShowAdjustItem"
      :product="product"
      @close-popup="()=>isShowAdjustItem = false"
  />
</template>


<script lang="ts" setup>
import {ref} from 'vue'
import {ArrowLeft, ArrowRight, Bell, Ticket} from '@element-plus/icons-vue'
import type {CartItem} from "~/types/cart";
import {useCartStore} from "~/stores/cart";
import {ProductData} from "~/data/productData";
import type {Color, MediaGallery, Product} from "~/types/product";
import type {DrawerProps} from "element-plus";

const recommendations = ref<Product[]>(ProductData)
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

const direction = ref<DrawerProps['direction']>('btt');
// const drawer = ref<boolean>(false);

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
  console.log(item, change)
  cartStore.updateProductQuantity(item, change)
}
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <div class="sticky top-0 left-0 right-0 bg-white z-50">
      <div class="flex items-center p-4 border-b">
        <el-button link @click="$router.back()">
          <el-icon>
            <ArrowLeft/>
          </el-icon>
        </el-button>
        <h1 class="text-lg font-medium flex-1 text-center">Giỏ hàng ({{ cartItems.length }})</h1>
      </div>
      <!-- Free shipping notification -->
      <div v-if="remainingForFreeShipping>0" class="bg-red-50 text-red-600 p-3 text-sm flex items-center">
        <el-icon class="mr-2">
          <Bell/>
        </el-icon>
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
    <div class="bg-white p-4 mb-4">
      <div class="flex justify-between items-center mb-4">
        <h2 class="font-medium">Có thể bạn sẽ thích</h2>
        <el-button class="text-red-600" link>
          Xem tất cả
          <el-icon class="ml-1">
            <ArrowRight/>
          </el-icon>
        </el-button>
      </div>
      <UiProductList :is-loading="false" :products="recommendations"/>
    </div>

    <!-- Fixed bottom section -->
    <div class="fixed bottom-15 left-0 right-0 bg-white border-t z-52">
      <div class="p-4">
        <div class="flex items-center gap-2 mb-4">
          <el-icon>
            <Ticket/>
          </el-icon>
          <span class="text-gray-600">Mã ưu đãi</span>
          <el-button class="ml-auto" link>
            Chọn hoặc nhập mã
            <el-icon class="ml-1">
              <ArrowRight/>
            </el-icon>
          </el-button>
        </div>
        <div class="flex justify-between items-center mb-4">
          <span class="font-medium">Tạm tính</span>
          <div>
            <div class="font-medium text-right">{{ useFormatNumber(subtotal) }}</div>
            <div class="text-red-600 text-sm text-right">(Tiết kiệm {{ useFormatNumber(saveMoney) }})</div>
          </div>
        </div>
        <button
            :class="cartItems.length === 0 ? 'bg-red-400' : ''"
            class="w-full h-12 bg-red-600 text-white"
        >
          Thanh toán
        </button>
      </div>
    </div>
  </div>

  <el-drawer
      v-model="isShowAdjustItem"
      :direction="direction"
      :size="'65%'"
      destroy-on-close
  >
    <template #header>
      <h3 class="text-md font-bold text-center mx-auto">Chọn màu sắc và kích thước</h3>
    </template>
    <div class="flex gap-2 mb-4 overflow-x-auto no-scrollbar">
      <img
          v-for="(image, index) in allImages"
          :key="index"
          :alt="product.name"
          :src="(image as MediaGallery).path"
          class="w-30 h-30 object-cover rounded-md flex-shrink-0"
      />
    </div>
    <div class="mb-4 flex justify-between">
      <h3 class="text-base font-medium text-gray-900">{{ product.name }}</h3>
      <p class="text-sm text-gray-500">Mã: {{ selectedSku }}</p>
    </div>

    <!-- Price -->
    <div class="flex justify-between items-center">
      <div class="flex flex-col gap-2 mb-4">
        <div>
        <span v-if="product.regular_price" class="text-md text-gray-500 line-through">
          {{ useFormatNumber(product.regular_price) }}
        </span>
          <span v-if="productDiscount" class="text-xs text-red-600 font-bold">
          -{{ productDiscount }}%
        </span>
        </div>
        <span class="text-xl font-bold">{{ useFormatNumber(product.price) }}</span>
      </div>
      <div
          class="flex gap-1 items-center justify-items-center"
          @click="navigateTo(`/product/${product.slug}`)"
      >
        <span class="my-auto text-sm">Xem chi tiết</span>
        <ElIconDArrowRight class="w-4 h-4 flex my-auto text-red-600"/>
      </div>
    </div>

    <!-- Color Selection -->
    <div class="mb-4">
      <p class="text-sm text-gray-700 mb-2">{{ $t('general.color') + ': ' + selectedColor.label }}</p>
      <div class="flex gap-2">
        <button
            v-for="color in colors"
            :key="color.id"
            :aria-label="`Select ${color.label} color`"
            :class="color.id === selectedColor.id ? 'border-black' : 'border-gray-200'"
            class="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 transition-all duration-200  bg-beige"
            @click="handleSelectColor(color as Color)"
        >
          <img :src="color.swatch.swatch_link" alt="color" class="w-6 h-6 md:w-8 md:h-8 rounded-full mx-auto"/>
        </button>
      </div>
    </div>

    <!-- Size Selection -->
    <div class="mb-6">
      <p class="text-sm text-gray-700 mb-2">{{ $t('general.size') + ': ' + selectedSize.label }}</p>
      <div class="grid grid-cols-5 gap-2">
        <button
            v-for="size in sizes"
            :key="size.id"
            :class="[
              selectedSize === size && availableSizes.some(item => item.id === selectedSize.id)
                ? 'border-red-500 bg-red-50 text-red-500'
                : ' text-gray-700',
              availableSizes.some(item => item.id === size.id)
                ? 'border-gray-500'
                : 'border-gray-200'
            ]"
            class="py-2 px-3 rounded border text-sm transition-all duration-200"
            @click="availableSizes.find((item)=>item.id===size.id)?selectSize(size):null"
        >
          <span
              :class="[
              availableSizes.find((item)=>item.id===size.id) ? 'text-black' : 'line-through text-gray-400 '
          ]"
          >{{ size.label }}</span>
        </button>
      </div>
    </div>
    <div class="fixed bottom-0 left-0 w-full h-12">
      <button
          class="w-full h-12 bg-red-500 text-white font-semibold text-md"
          @click="addToCart"
      >
        {{ $t('general.add_to_cart') }}
      </button>
    </div>
  </el-drawer>
</template>


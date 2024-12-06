<script lang="ts" setup>
import type {CartItem} from "~/types/cart";
import {CartData} from "~/data/cartData";
import type {Color, Size} from "~/types/product";

defineProps({
  isOpen: Boolean,
})

defineEmits<{
  (e: 'close'): void,
}>()

const promoCode = ref('')

const cartItems = ref<CartItem[]>(CartData)

const product = ref<CartItem | null>({
  id: 1,
  name: "Áo thun nam",
  price: 179000,
  regular_price: 200000,
  status: 1,
  slug: "ao-thun-nam",
  stock: {
    is_in_stock: true,
    quantity: 50
  },
  season: 'Summer',
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
  ],
  selected_size: {
    "id": 1,
    "label": "M"
  },
  selected_color: {
    "id": 1,
    "label": "Đỏ",
    "swatch": {
      "swatch_link": "https://media.canifa.com/attribute/swatch/images/sa476.webp",
      "type": 1
    }
  },
  quantity: 1
})
const selectedColor = ref<Color>(product.value.configurable_children[0].color)
const selectedSize = ref<Size>(product.value.configurable_children[0].size)

const allImages = computed(() => {
  const uniqueImages = new Set<string>();
  product.value.configurable_children.forEach(child => {
    child.media_gallery.forEach(media => {
      uniqueImages.add(media.path);
    });
  });
  return Array.from(uniqueImages);
});
const colors = computed(() => product.value.configurable_options.find(option => option.attribute_code === 'color')?.values || []);
const sizes = computed(() => product.value.configurable_options.find(option => option.attribute_code === 'size')?.values || []);
const selectedSku = computed(() => {
  const child = product.value.configurable_children.find(
      (child) => child.color.id === selectedColor.value.id && child.size.id === selectedSize.value.id
  )
  return child ? child.sku : ''
})

const subtotal = computed(() => {
  return cartItems.value.reduce((total, item) => total + (item.price * item.quantity), 0)
})

const freeShippingThreshold = 599000
const remainingForFreeShipping = computed(() => {
  return Math.max(0, freeShippingThreshold - subtotal.value)
})

const activeDropdown = ref<number | null>(null)

const toggleDropdown = (itemId: number) => {
  activeDropdown.value = activeDropdown.value === itemId ? null : itemId
}

const closeDropdown = () => {
  activeDropdown.value = null
}

const isShowAdjustItem = ref(false)


const updateCart = () => {
  // Implementation for updating cart
  isShowAdjustItem.value = false
}
const adjustItem = (itemId: number) => {
  // Implementation for adjusting item

  product.value = cartItems.value.find(item => item.id === itemId)
  isShowAdjustItem.value = true
  closeDropdown()
}

const removeItem = (itemId: number) => {
  cartItems.value = cartItems.value.filter(item => item.id !== itemId)
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

const updateQuantity = (itemId: number, change: number) => {
  const item = cartItems.value.find(item => item.id === itemId)
  if (item) {
    const newQuantity = item.quantity + change
    if (newQuantity > 0) {
      item.quantity = newQuantity
    }
  }
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
        <h2 class="text-lg font-medium">Giỏ hàng ({{ cartItems.length }})</h2>
        <button
            class="text-gray-400 hover:text-gray-500"
            @click="$emit('close')"
        >
          <Icon class="w-6 h-6" name="lucide:x"/>
        </button>
      </div>

      <!-- Free Shipping Progress -->
      <!--      <div v-if="remainingForFreeShipping > 0" class="p-4 bg-primary/5 flex items-start gap-2">-->
      <!--&lt;!&ndash;        <div class="w-4 h-4 rounded-full bg-primary/20 flex-shrink-0 mt-0.5"/>&ndash;&gt;-->
      <!--        <p class="text-sm">-->
      <!--          Mua thêm {{ remainingForFreeShipping.toLocaleString() }} đ để được freeship.-->
      <!--        </p>-->
      <!--      </div>-->

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
                  <button class="text-gray-400 hover:text-gray-500" @click.stop="toggleDropdown(item.id)">
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
                        @click="updateQuantity(item.id, -1)"
                    >
                      <ElIconMinus class="w-4 h-4"/>
                    </button>
                    <span class="w-8 text-center">{{ item.quantity }}</span>
                    <button
                        class="w-8 h-8 border flex items-center justify-center hover:bg-gray-50"
                        @click="updateQuantity(item.id, 1)"
                    >
                      <ElIconPlus class="w-4 h-4"/>
                    </button>
                  </div>

                  <Transition name="fade">
                    <div
                        v-if="activeDropdown === item.id"
                        class="absolute right-4 top-12 w-64 bg-white shadow-lg rounded-lg border py-1 z-10 dropdown-menu"
                    >
                      <button
                          class="w-full px-4 py-2 text-left flex items-center gap-3 hover:bg-gray-50"
                          @click="adjustItem(item.id)"
                      >
                        <Icon class="w-4 h-4" name="lucide:align-vertical-distribute-center"/>
                        <span class="text-sm">Điều chỉnh màu sắc, số lượng</span>
                      </button>
                      <button
                          class="w-full px-4 py-2 text-left flex items-center gap-3 hover:bg-gray-50 text-red-500"
                          @click="removeItem(item.id)"
                      >
                        <Icon class="w-4 h-4" name="lucide:trash"/>
                        <span class="text-sm">Xóa sản phẩm khỏi giỏ hàng</span>
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
                class="w-full"
                placeholder="Mã ưu đãi"
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
          <span>Tạm tính</span>
          <div class="text-right">
            <div class="font-medium">{{ subtotal.toLocaleString() }} đ</div>
            <div v-if="remainingForFreeShipping === 0" class="text-primary text-xs">
              (Tiết kiệm {{ (89700).toLocaleString() }} đ)
            </div>
          </div>
        </div>

        <!-- Checkout Button -->
        <el-button class="w-full" size="large" type="primary">
          Thanh toán
        </el-button>
      </div>
    </div>
  </Transition>

  <UiCartPreviewEdit
      :isOpen="isShowAdjustItem"
      @close="isShowAdjustItem = false"
  />
  <el-dialog
      v-model="isShowAdjustItem"
      title="Điều chỉnh sản phẩm"
  >
    <!-- Content -->
    <div class="p-6">
      <div class="flex gap-6">
        <!-- Product Image -->
        <div class="w-1/2 ">
          <img
              :alt="product.name"
              :src="allImages[0]"
              class="w-full max-h-[30rem] object-cover rounded-lg"
          />
        </div>

        <!-- Product Details -->
        <div class="flex-1 space-y-4">
          <div>
            <h2 class="font-bold text-2xl">{{ product.name }}</h2>
            <p class="text-sm text-gray-500">Sku: {{ selectedSku }}</p>
          </div>

          <div class="flex flex-col gap-2">
            <span class="text-2xl font-bold">{{ useFormatNumber(product.price) }}</span>
            <div class="space-x-2">
              <span class="text-sm text-gray-500 line-through">
                  {{ useFormatNumber(product.regular_price) }}
                </span>
              <span class="text-red-500 text-sm font-bold">-{{
                  Math.ceil((product.regular_price - product.price) / product.regular_price * 100)
                }}%</span>
            </div>
          </div>

          <!-- Color Selection -->
          <div class="space-y-2">
            <div class="flex items-center gap-2">
              <p class="text-sm font-bold">Màu sắc:</p>
              <p class="text-sm">{{ selectedColor.label }}</p>
            </div>
            <div class="flex gap-2">
              <button
                  v-for="color in colors"
                  :key="color.id"
                  :class="[{ 'ring-2 ring-[#f62f30] ring-offset-2 ': selectedColor.id === color.id }]"
                  class="w-8 h-8 rounded-full transition-transform hover:scale-110"
                  @click="()=>{selectedColor = color as Color}">
                <img :src="color.swatch.swatch_link" alt="color" class="w-8 h-8 rounded-full"/>
              </button>
            </div>
          </div>

          <!-- Size Selection -->
          <div class="space-y-2">
            <div class="flex items-center gap-2">
              <p class="text-sm font-bold">Kích cỡ:</p>
              <p class="text-sm">{{ selectedSize.label }}</p>
            </div>
            <div class="flex flex-wrap gap-2">
              <button
                  v-for="size in sizes"
                  :key="size.id"
                  :class="selectedSize.id === size.id ? 'border-[#f62f30] text-[#f62f30]' : 'border-gray-300'"
                  class="min-w-[48px] h-12 border rounded-md flex items-center justify-center"
                  @click="() => { selectedSize = size }"
              >
                {{ size.label }}
              </button>
            </div>
          </div>

          <div class="border-t">
            <button class="w-full h-10 text-md font-bold text-white bg-[#f62f30]" @click="updateCart">
              Cập nhật vào giỏ hàng
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->

  </el-dialog>
</template>
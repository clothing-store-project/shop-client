<script lang="ts" setup>
import type {CartItem} from "~/types/cart";

const router = useRouter()

const isMobileMenuOpen = ref<boolean>(false)
const isCartVisible = ref<boolean>(false)
const isSearchVisible = ref<boolean>(false)

const toggleCart = () => {
  isCartVisible.value = !isCartVisible.value
}

const items = ref<CartItem[]>([
  {
    id: 1,
    name: 'Sophisticated Swagger Suit',
    price: 50.00,
    quantity: 1,
    image: 'https://pet-project-shop.github.io/template/images/shop/shop-cart/pic1.jpg',
    color: 'Black',
    size: 'M'
  },
  {
    id: 2,
    name: 'Cozy Knit Cardigan Sweater',
    price: 40.00,
    quantity: 1,
    image: 'https://pet-project-shop.github.io/template/images/shop/shop-cart/pic1.jpg',
    color: 'Black',
    size: 'M'
  },
  {
    id: 3,
    name: 'Athletic Mesh Sports Leggings',
    price: 65.00,
    quantity: 1,
    image: 'https://pet-project-shop.github.io/template/images/shop/shop-cart/pic1.jpg',
    color: 'Black',
    size: 'M'
  }
])


const removeItem = (id: number) => {
  items.value = items.value.filter(item => item.id !== id)
}

const subtotal = computed(() => {
  return items.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
})


const cartCount = computed(() => {
  return items.value.reduce((sum, item) => sum + item.quantity, 0)
})
</script>

<template>
  <Icon name="lucide:circle-chevron-left" class="h-6 w-6" @click="(() => {router.back()})"/>
  <slot/>
  <div class="flex gap-2">
    <div class="flex items-center space-x-4">
      <div class="flex flex-1 max-w-md rounded-3xl" @click="isSearchVisible = true">
        <Icon class="text-gray-700 h-6 w-6" name="lucide:search"/>
      </div>

      <div class="flex flex-col items-center text-gray-700 cursor-pointer hover:text-red-600 relative"
           @click="isCartVisible=true">
        <el-icon :size="22" class="text-xl mb-0.5">
          <LazyElIconShoppingBag/>
        </el-icon>
        <span
            v-if="cartCount >= 0"
            class="absolute -top-1 -right-2 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center"
        >
          {{ cartCount }}
        </span>
      </div>
    </div>
  </div>

  <SearchPreview
      :isOpen="isSearchVisible"
      @close="isSearchVisible = false"
  />

  <CartPreview
      :isOpen="isCartVisible"
      :items="items"
      :subtotal="subtotal"
      @close="toggleCart"
      @removeItem="removeItem"
  />
</template>

<style lang="scss" scoped>

</style>
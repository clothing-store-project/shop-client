<script lang="ts" setup>

const router = useRouter()

const isCartVisible = ref<boolean>(false)
const isSearchVisible = ref<boolean>(false)

const toggleCart = () => {
  isCartVisible.value = !isCartVisible.value
}
const cartStore = useCartStore()
const cartCount = computed(() => cartStore.cartItems.length)
</script>

<template>
  <Icon class="h-6 w-6" name="lucide:circle-chevron-left" @click="(() => {router.back()})"/>
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

  <UiCartPreview
      :isOpen="isCartVisible"
      @close="toggleCart"
  />
</template>

<style lang="scss" scoped>

</style>
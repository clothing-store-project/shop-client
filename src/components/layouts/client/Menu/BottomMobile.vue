<script lang="ts" setup>
const route = useRoute()
const routes = [
  {
    path: '/',
    label: 'Trang chủ',
    icon: 'House'
  },
  {
    path: '#',
    label: 'Sản phẩm',
    icon: 'Present'
  },
  {
    path: '/cart',
    label: 'Giỏ hàng',
    icon: 'ShoppingBag'
  },
  {
    path: '/account',
    label: 'Tài khoản',
    icon: 'User'
  }
];
const cartStore = useCartStore()
const cartCount = computed(() => cartStore.cartItems.length)
const isRouteActive = (path: string) => {
  if (path === '/') {
    return route.path === path;
  }
  return route.path.includes(path);
}
</script>

<template>
  <nav class="sticky bottom-0 z-50 left-0 right-0 bg-white border-t border-gray-200 py-2 px-4">
    <div class="max-w-screen-xl mx-auto">
      <ul class="flex justify-between items-center">
        <li v-for="(link, index) in routes" :key="index" class="flex-1">
          <p

              :class="{ 'router-link-active': isRouteActive(link.path) }"
              class="menu-item flex flex-col items-center gap-1 text-gray-500 hover:text-primary-500 focus:outline-none relative"
              @click="navigateTo(link.path)"
          >
            <IconComponent :name="link.icon" :size="24" class="icon"/>
            <span class="text-xs">{{ link.label }}</span>
            <span
                v-if="link.path === '/cart' && cartCount > 0"
                class="absolute -top-1 right-6 bg-red-600 text-white text-xs rounded-full text-center  w-4 h-4 my-auto p-0"
            >
              {{ cartCount }}
            </span>
          </p>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.router-link-active {
  .el-icon {
    color: #ff0000;
  }
}
</style>
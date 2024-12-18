<script setup lang="ts">
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

              @click="navigateTo(link.path)"
              class="menu-item flex flex-col items-center gap-1 text-gray-500 hover:text-primary-500 focus:outline-none"
              :class="{ 'router-link-active': isRouteActive(link.path) }"
          >
            <IconComponent class="icon" :name="link.icon" :size="24"/>
            <span class="text-xs">{{ link.label }}</span>
          </p>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.router-link-active {
  .el-icon {
    color: #ff0000;
  }
}
</style>
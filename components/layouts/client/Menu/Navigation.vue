<script lang="ts" setup>
import {mainNavItems, megaMenu} from '~/data/navigationData'
import {Bars3Icon} from '@heroicons/vue/24/outline'
import type {CartItem} from "~/types/cart";
import {CircleUser} from 'lucide-vue-next';
import {countdown} from "~/composables/countdown";

const {days, hours} = countdown(new Date('2024-12-31T23:59:59'));

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

</script>

<template>
  <nav class="bg-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 justify-between items-center">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img alt="Pixio" class="h-8 w-auto" src="~/assets/images/logo.svg"/>
          </div>
          <el-menu
              :default-active="'1'"
              :ellipsis="false"
              menu-trigger="hover"
              mode="horizontal"
              popper-class="mega-menu"
          >
            <template v-for="(item,index) in mainNavItems" :key="item.name">
              <el-sub-menu
                  v-if="item.hasMega"
                  :index="index+'m'"
                  class="group inline-flex items-center rounded-md p-0 text-base font-medium text-gray-700 !hover:text-pink-500 !hover:bg-transparent"
              >
                <template #title>
                  <span class="group-hover:text-pink-500 group-hover:bg-transparent">{{ item.name }}</span>
                  <span v-if="item.isNew"
                        class="ml-2 inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
                  NEW
                </span>
                </template>
                <template #default>
                  <el-menu-item-group v-for="(data,index) in megaMenu" :key="index">
                    <h3 class="text-base font-medium text-gray-900">{{ data.sectionName }}</h3>
                    <ul class="mt-4 space-y-3">
                      <li v-for="item in data.data" :key="item.name">
                        <NuxtLink :href="item.href" class="text-sm text-gray-500 hover:text-pink-500">
                          {{ item.name }}
                        </NuxtLink>
                      </li>
                    </ul>
                  </el-menu-item-group>

                  <el-menu-item-group class="bg-gray-50 p-6 rounded-lg">
                    <div class="text-base font-medium text-gray-900">Deal of the month</div>
                    <p class="mt-3 text-sm text-gray-500">
                      Yes! Send me exclusive offers, personalized, and unique gift ideas, tips for shopping
                    </p>
                    <div class="mt-4 grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div class="text-2xl font-bold text-gray-900">{{ days }}</div>
                        <div class="text-xs text-gray-500">DAYS</div>
                      </div>
                      <div>
                        <div class="text-2xl font-bold text-gray-900">{{ hours }}</div>
                        <div class="text-xs text-gray-500">HOURS</div>
                      </div>
                    </div>
                    <NuxtLink
                        class="mt-6 block w-full rounded-md bg-gray-900 px-4 py-2 text-center text-sm font-medium text-white hover:bg-gray-800"
                        href="#"
                    >
                      View All Products
                    </NuxtLink>
                  </el-menu-item-group>
                </template>
              </el-sub-menu>
              <el-menu-item
                  v-else
                  :index="index+'m'"
                  class="group inline-flex items-center rounded-md p-0 text-base font-medium text-gray-700 !hover:text-pink-500 !hover:bg-transparent"

              >
                <span>{{ item.name }}</span>
                <span v-if="item.isNew"
                      class="ml-2 inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
                  NEW
                </span>
              </el-menu-item>
            </template>
          </el-menu>
        </div>
        <div class="flex items-center space-x-4">
          <el-tooltip
              class="box-item"
              content="Search"
              effect="dark"
              placement="bottom"
          >
            <button
                class="hidden md:block text-gray-700 hover:text-pink-500"
                @click="isSearchVisible = true"
            >
              <span class="sr-only">Search</span>
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                   xmlns="http://www.w3.org/2000/svg">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-linejoin="round"
                      stroke-width="2"/>
              </svg>
            </button>
          </el-tooltip>
          <el-tooltip
              class="box-item"
              content="Account"
              effect="dark"
              placement="bottom"
          >
            <a class="hidden md:block text-gray-700 hover:text-pink-500" href="#">
              <CircleUser/>
            </a>
          </el-tooltip>
          <el-tooltip
              class="box-item"
              content="Cart"
              effect="dark"
              placement="bottom"
          >
            <button class="text-gray-700 hover:text-pink-500 relative" @click="toggleCart">
              <span class="sr-only">Cart</span>
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                   xmlns="http://www.w3.org/2000/svg">
                <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" stroke-linecap="round" stroke-linejoin="round"
                      stroke-width="2"/>
              </svg>
              <span
                  class="absolute -top-2 -right-2 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-pink-500 rounded-full">{{
                  items.length
                }}</span>
            </button>
          </el-tooltip>
          <button
              class="md:hidden p-2 text-gray-700 hover:text-pink-500"
              @click="isMobileMenuOpen = true"
          >
            <Bars3Icon class="h-6 w-6"/>
          </button>
        </div>
      </div>
    </div>
  </nav>

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
  <LayoutsClientMenuMobileMenu
      :is-open="isMobileMenuOpen"
      @close="isMobileMenuOpen = false"
  />
</template>

<style lang="scss" scoped>
.el-menu {
  border-bottom: 0;
}

:deep(.el-menu-item) {
  transition: none;
  &.is-active{
    border: none;
    background-color: transparent;
  }
  &:not(.is-disabled):focus {
    background-color: transparent;
  }
}

:deep(.el-menu--popup) {
  display: flex;
}

@media screen and (max-width: 768px) {
  .el-menu {
    display: none;
  }
}
</style>
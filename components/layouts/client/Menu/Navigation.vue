<script lang="ts" setup>
import {Menu} from '@headlessui/vue'
import NavItem from './NavItem.vue'
import MegaMenu from './MegaMenu.vue'
import {mainNavItems} from '~/data/navigationData'
import {Bars3Icon} from '@heroicons/vue/24/outline'
import type {CartItem} from "~/types/cart";

const isMobileMenuOpen = ref(false)
const isCartVisible = ref(false)
const isSearchVisible = ref(false)

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


const removeItem = (id:number) => {
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
          <div class="hidden md:ml-6 md:flex md:space-x-2">
            <template v-for="item in mainNavItems" :key="item.name">
              <Menu v-if="item.hasMega" as="div" class="relative"
                    @mouseover="
                      $el.setAttribute('data-headlessui-state', 'open');
                    "
                    @mouseleave="
                      $el.setAttribute('data-headlessui-state', '');
                    "
              >
                <NavItem v-bind="item"/>
                <MegaMenu/>
              </Menu>
              <NavItem v-else v-bind="item"/>
            </template>
          </div>
        </div>
        <div class="flex items-center space-x-4">
          <a class="hidden md:block text-gray-700 hover:text-pink-500" href="#">
            Login / Register
          </a>
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
          <button class="text-gray-700 hover:text-pink-500 relative" @click="toggleCart">
            <span class="sr-only">Cart</span>
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg">
              <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2"/>
            </svg>
            <span
                class="absolute -top-2 -right-2 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-pink-500 rounded-full">{{ items.length }}</span>
          </button>
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
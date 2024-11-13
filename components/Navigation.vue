<script setup lang="ts">
import { Menu } from '@headlessui/vue'
import NavItem from './NavItem.vue'
import MegaMenu from './MegaMenu.vue'
import { mainNavItems } from '~/data/navigationData'
import { Bars3Icon } from '@heroicons/vue/24/outline'

const isMobileMenuOpen = ref(false)
</script>

<template>
  <nav class="bg-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 justify-between items-center">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img src="~/assets/images/logo.svg" alt="Pixio" class="h-8 w-auto" />
          </div>
          <div class="hidden md:ml-6 md:flex md:space-x-2">
            <template v-for="item in mainNavItems" :key="item.name">
              <Menu v-if="item.hasMega" as="div" class="relative">
                <NavItem v-bind="item" />
                <MegaMenu />
              </Menu>
              <NavItem v-else v-bind="item" />
            </template>
          </div>
        </div>
        <div class="flex items-center space-x-4">
          <a href="#" class="hidden md:block text-gray-700 hover:text-pink-500">
            Login / Register
          </a>
          <button class="text-gray-700 hover:text-pink-500">
            <span class="sr-only">Search</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button class="text-gray-700 hover:text-pink-500 relative">
            <span class="sr-only">Favorites</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
          <button class="text-gray-700 hover:text-pink-500 relative">
            <span class="sr-only">Cart</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span class="absolute -top-2 -right-2 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-pink-500 rounded-full">0</span>
          </button>
          <button
              class="md:hidden p-2 text-gray-700 hover:text-pink-500"
              @click="isMobileMenuOpen = true"
          >
            <Bars3Icon class="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  </nav>

  <MobileMenu
      :is-open="isMobileMenuOpen"
      @close="isMobileMenuOpen = false"
  />
</template>
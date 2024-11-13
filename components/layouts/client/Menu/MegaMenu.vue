<script setup lang="ts">
import { MenuItems } from '@headlessui/vue'
import { shopStructure, productStructure, shopPages } from '~/data/navigationData'
</script>

<template>
  <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-1"
  >
    <MenuItems class="absolute left-1/2 z-10 mt-3 w-screen max-w-7xl -translate-x-1/5 transform px-4">
      <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
        <div class="relative grid grid-cols-4 gap-6 bg-white px-5 py-6">
          <div>
            <h3 class="text-base font-medium text-gray-900">Shop Structure</h3>
            <ul class="mt-4 space-y-3">
              <li v-for="item in shopStructure" :key="item.name">
                <a :href="item.href" class="text-sm text-gray-500 hover:text-pink-500">
                  {{ item.name }}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-base font-medium text-gray-900">Product Structure</h3>
            <ul class="mt-4 space-y-3">
              <li v-for="item in productStructure" :key="item.name">
                <a :href="item.href" class="text-sm text-gray-500 hover:text-pink-500">
                  {{ item.name }}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-base font-medium text-gray-900">Shop Pages</h3>
            <ul class="mt-4 space-y-3">
              <li v-for="item in shopPages" :key="item.name" class="flex">
                <a :href="item.href" class="text-sm text-gray-500 hover:text-pink-500">
                  {{ item.name }}
                </a>
                <span v-if="item.isNew" class="ml-2 inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
                  NEW
                </span>
              </li>
            </ul>
          </div>

          <div class="bg-gray-50 p-6 rounded-lg">
            <div class="text-base font-medium text-gray-900">Deal of the month</div>
            <p class="mt-3 text-sm text-gray-500">
              Yes! Send me exclusive offers, personalized, and unique gift ideas, tips for shopping
            </p>
            <div class="mt-4 grid grid-cols-2 gap-4 text-center">
              <div>
                <div class="text-2xl font-bold text-gray-900">30</div>
                <div class="text-xs text-gray-500">DAYS</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-gray-900">14</div>
                <div class="text-xs text-gray-500">HOURS</div>
              </div>
            </div>
            <a
                href="#"
                class="mt-6 block w-full rounded-md bg-gray-900 px-4 py-2 text-center text-sm font-medium text-white hover:bg-gray-800"
            >
              View All Products
            </a>
          </div>
        </div>
      </div>
    </MenuItems>
  </transition>
</template>
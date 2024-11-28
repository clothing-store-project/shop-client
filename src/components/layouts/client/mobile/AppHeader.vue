<script setup lang="ts">
import type {MenuMobile} from "~/types/menu";
import {LazyElIconSearch} from "#components";

const isScrolled = ref<boolean>(false)
const isSearchVisible = ref<boolean>(false)
const search = ref<string>('')
const onScroll = () => {
  isScrolled.value = window.scrollY > 0;
}

const menus = ref<MenuMobile[]>([
  {name: 'BLACK NOVEMBER', path: '/black-november'},
  {name: 'NAM', path: '/nam'},
  {name: 'NỮ', path: '/nu'},
  {name: 'BÉ TRAI', path: '/be-trai'},
  {name: 'BÉ GÁI', path: '/be-gai'},
])

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="sticky w-full top-0 z-50 bg-white">
    <div
        :class="[
        'transition-all duration-300',
       isScrolled ? '-translate-y-full hidden' : 'translate-y-0'
      ]"
    >
      <div class="bg-[#EE1C25] text-white py-2 px-4 text-center">
        <p class="text-sm font-medium">BLACK NOVEMBER GIẢM TỐI 50%</p>
      </div>
      <div class="px-4 py-3 flex items-center justify-between">
        <div class="flex items-center">
          <img src="../../../../assets/images/logo.svg" alt="CANIFA" class="h-8"/>
          <div class="ml-1 bg-black text-white text-[10px] px-2 py-1 rounded">
            BLACK FRIDAY
          </div>
        </div>

        <div class="flex items-center space-x-4">
          <el-icon>
            <LazyElIconSearch
                @click="isSearchVisible = true"
            />
          </el-icon>
          <el-icon>
            <LazyElIconChatDotRound/>
          </el-icon>
          <el-icon>
            <LazyElIconBell/>
          </el-icon>
        </div>
      </div>
    </div>

    <div :class="['bg-white transition-shadow duration-300', isScrolled ? 'shadow-md' : '']">
      <div v-if="isScrolled" class="px-4 py-3 flex items-center justify-between border-b">
        <div class="flex-1 max-w-md">
          <div class="relative">
            <el-input
                :prefix-icon="LazyElIconSearch"
                v-model="search"
                placeholder="Tìm kiếm sản phẩm"
                class="w-full"
            />
          </div>
        </div>
        <div class="flex items-center space-x-4 ml-4">
            <el-icon>
              <LazyElIconChatDotRound/>
            </el-icon>
            <el-icon>
              <LazyElIconBell/>
            </el-icon>
        </div>
      </div>

      <div class="overflow-x-auto scrollbar-hide">
        <div class="flex whitespace-nowrap px-4 py-2 space-x-6 text-sm font-medium">
          <NuxtLinkLocale
              v-for="item in menus"
              :key="item.path"
              :to="item.path" class="text-gray-900"
          >
            {{ item.name }}
          </NuxtLinkLocale>
        </div>
      </div>
    </div>

    <div
        class="bg-gray-900 text-[#FFB800] py-2 px-4 text-center text-sm"
        :class="[ isScrolled ?'hidden':'']"
    >
      <p>Miễn phí vận chuyển cho đơn hàng 599.000đ</p>
    </div>
  </header>
  
  <SearchPreview
      :isOpen="isSearchVisible"
      @close="isSearchVisible = false"
  />
</template>


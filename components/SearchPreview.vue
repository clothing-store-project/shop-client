<template>
  <transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
      name="fade"
  >
    <div v-if="isOpen" class="fixed inset-0 z-50 overflow-y-auto border-x-blue-400">
      <div class="mx-auto px-4 py-6 bg-red-50">
        <!-- Header with close button -->
        <div class="flex justify-end mb-6">
          <button class="p-2 hover:bg-gray-100 rounded-full" @click="$emit('close')">
            <XIcon class="w-6 h-6"/>
          </button>
        </div>

        <!-- Search Header -->
        <div class="flex gap-4 mb-6">
          <div class="relative flex-[2] pb-2 flex items-center w-full">
            <input
                v-model="searchQuery"
                class="w-full border-b focus:outline-none focus:border-black rounded-2xl py-2 px-2"
                placeholder="Search Product"
                type="text"
            />
            <SearchIcon class="my-auto w-6 h-6 absolute right-3"/>
          </div>
        </div>

        <!-- Quick Search Tags -->
        <div class="mb-8">
          <p class="text-sm text-gray-600 mb-2">Quick Search:</p>
          <div class="flex gap-4 flex-wrap">
            <button
                v-for="tag in quickSearchTags"
                :key="tag"
                class="px-4 py-1 rounded-full border hover:bg-gray-50"
            >
              {{ tag }}
            </button>
          </div>
        </div>

        <!-- Recommended Products Carousel -->
        <div class="mb-8">
          <h3 class="text-xl font-medium mb-6">You May Also Like</h3>
          <swiper
              :autoplay="{
              delay: 1000,
              disableOnInteraction: true,
            }"
              :breakpoints="{
              '640': {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              '768': {
                slidesPerView: 4,
                spaceBetween: 24,
              },
              '1024': {
                slidesPerView: 6,
                spaceBetween: 24,
              },
            }"
              :loop="true"
              :modules="modules"
              :slides-per-view="2"
              :space-between="16"
          >
            <swiper-slide v-for="product in products" :key="product.id">
              <div class="group cursor-pointer">
                <div class="aspect-[3/4] rounded-lg overflow-hidden mb-3">
                  <img
                      :alt="product.name"
                      :src="product.image"
                      class="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <h4 class="font-medium">{{ product.name }}</h4>
                <div class="flex justify-between items-center">
                  <p class="text-sm">${{ product.price.toFixed(2) }}</p>
                  <button
                      class="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-100 rounded-full transition-opacity">
                    <PlusIcon class="w-4 h-4"/>
                  </button>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import {ChevronDownIcon, PlusIcon, SearchIcon, XIcon} from 'lucide-vue-next'
import {Swiper, SwiperSlide} from 'swiper/vue'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {Autoplay, Pagination} from 'swiper/modules';

defineProps({
  isOpen: Boolean,
})

defineEmits<{
  (e: 'close'): void
}>()

const modules = ref([Autoplay, Pagination])

const searchQuery = ref('')

const quickSearchTags = ['Clothes', 'UrbanSkirt', 'VelvetGown', 'LushShorts']

const products = [
  {
    id: 1,
    name: 'SilkBliss Dress',
    price: 60.00,
    image: 'https://pet-project-shop.github.io/template/images/shop/product/2.png'
  },
  {
    id: 2,
    name: 'SilkBliss Dress',
    price: 40.00,
    image: 'https://pet-project-shop.github.io/template/images/shop/product/2.png'
  },
  {
    id: 3,
    name: 'GlamPants',
    price: 30.00,
    image: 'https://pet-project-shop.github.io/template/images/shop/product/2.png'
  },
  {
    id: 4,
    name: 'ComfyLeggings',
    price: 35.00,
    image: 'https://pet-project-shop.github.io/template/images/shop/product/2.png'
  },
  {
    id: 5,
    name: 'ClassicCapri',
    price: 20.00,
    image: 'https://pet-project-shop.github.io/template/images/shop/product/2.png'
  },
  {
    id: 6,
    name: 'DapperCoat',
    price: 70.00,
    image: 'https://pet-project-shop.github.io/template/images/shop/product/2.png'
  },
  {
    id: 7,
    name: 'DapperCoat',
    price: 70.00,
    image: 'https://pet-project-shop.github.io/template/images/shop/product/2.png'
  },
  {
    id: 8,
    name: 'DapperCoat',
    price: 70.00,
    image: 'https://pet-project-shop.github.io/template/images/shop/product/2.png'
  }
]

</script>

<style scoped>
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: #000;
}

:deep(.swiper-pagination-bullet-active) {
  background: #000;
}
</style>
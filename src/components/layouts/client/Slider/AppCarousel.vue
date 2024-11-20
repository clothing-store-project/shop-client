<script lang="ts" setup>
import {PlusIcon} from "lucide-vue-next";
import {Swiper, SwiperSlide} from 'swiper/vue'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {Autoplay, Pagination} from 'swiper/modules';

const modules = ref([Autoplay, Pagination])

defineProps({
  products: Array<{
    id: number;
    name: string;
    price: number;
    image: string;
  }>
})

</script>

<template>
  <div class="mb-8">
    <h3 class="text-xl font-medium mb-6">{{ $t('general.category') }}</h3>
    <swiper
        :autoplay="{
          delay: 1500,
          disableOnInteraction: false,
        } as any"
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
</template>

<style lang="scss" scoped>

</style>
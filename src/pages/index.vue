<script lang="ts" setup>
import type {Product} from "~/types/product";
import {ProductData} from "~/data/productData";
import {Navigation, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import type {NavigationOptions} from "swiper/types";

const banner = ref([
  {
    id: 1,
    src: 'https://media.canifa.com/Simiconnector/BannerSlider/a/o/aolen_topbanner_desktop-13.11.webp',
    alt: 'Squirrel',
  },
  {
    id: 2,
    src: 'https://media.canifa.com/Simiconnector/BannerSlider/c/y/cyber_topbanner_desktop-01.12.webp',
    alt: 'Sky',
  },
  {
    id: 3,
    src: 'https://media.canifa.com/Simiconnector/BannerSlider/a/o/aolen_topbanner_desktop-13.11.webp',
    alt: 'Bird',
  },
  {
    id: 4,
    src: 'https://media.canifa.com/Simiconnector/BannerSlider/c/y/cyber_topbanner_desktop-01.12.webp',
    alt: 'Planet',
  },
])
const navigationOption = ref<NavigationOptions>({enabled: true});
const products = ref<Product[]>(ProductData)
const category = ref([
  {
    id: 1,
    name: 'Quần nỉ',
    slug: 'quan-ni',
    image: 'https://media.canifa.com/Simiconnector/doni_homepage_desktop-18.11.webp',
    banner: 'https://media.canifa.com/Simiconnector/doni_homepage_desktop-18.11.webp',
    products: products
  },
  {
    id: 2,
    name: 'Áo khoác',
    slug: 'ao-khoac',
    image: 'https://media.canifa.com/Simiconnector/aokhoac_homepage_desktop-18.11.webp',
    banner: 'https://media.canifa.com/Simiconnector/aokhoac_homepage_desktop-18.11.webp',
    products: products
  }
])
</script>

<template>
  <swiper
      :loop="true"
      :modules="[Pagination, Navigation]"
      :navigation="navigationOption as any"
      :pagination="{
      dynamicBullets: true ,
    } as any"
      :style="{
              '--swiper-navigation-color': '#fff',
              '--swiper-pagination-color': '#fff',
              '--swiper-navigation-size': '15px',
            }"
  >
    <swiper-slide v-for="item in banner" :key="item.id">
      <img :alt="item.alt" :src="item.src" class="w-full object-cover" loading="lazy">
    </swiper-slide>
  </swiper>
  <UiCategoryList
      :category="category"
      class="container md:max-w-screen-lg  xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto"
  />
  <div class="container md:max-w-screen-lg  xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto m-auto">
    <UiProductList
        :category="category"
        :is-loading="false"
        :products="products"
    />
  </div>
</template>

<style lang="scss" scoped>

</style>
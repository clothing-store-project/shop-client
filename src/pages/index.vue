<script lang="ts" setup>
import type {Product} from "~/types/product";
import {ProductData} from "~/data/productData";

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

const slideHeight = ref<string>('38rem')

const setHeight = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  if (width > 1200) {
    slideHeight.value = `${width * 0.325}px`;
  } else if (width > 1024) {
    slideHeight.value = `${height * 0.425}px`;
  } else if (width > 768) {
    slideHeight.value = `${height * 0.225}px`;
  } else if (width > 538) {
    slideHeight.value = `${height * 0.28}px`;
  } else if (width > 389) {
    slideHeight.value = `${height * 0.15}px`;
  } else {
    slideHeight.value = `${height * 0.16}px`;
  }
};

onMounted(() => {
  setHeight();
  window.addEventListener('resize', setHeight);
})
onUnmounted(() => {
  window.removeEventListener('resize', setHeight);
})

watch(() => window.innerWidth, setHeight);

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
  <el-carousel :height="slideHeight" arrow="always" motion-blur>
    <el-carousel-item v-for="item in banner" :key="item.id">
      <img :alt="item.alt" :src="item.src" class="w-full object-cover" loading="lazy">
    </el-carousel-item>
  </el-carousel>
  <UiCategoryList :category="category"/>
  <div class="max-w-screen-2xl m-auto">
    <UiProductList
        :category="category"
        :products="products"
        :is-loading="false"
    />
  </div>
</template>

<style lang="scss" scoped>

</style>
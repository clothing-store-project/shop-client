<script lang="ts" setup>
import type {Product} from "~/types/product";

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

const products = ref<Product[]>([
  {
    id: 1,
    name: 'Quần nỉ bé trai in họa tiết cổ tứi',
    slug: 'quan-ni-be-trai-in-hoa-tiet-co-tui-1',
    price: 199000,
    originalPrice: 299000,
    discount: 33,
    image: 'https://canifa.com/img/1517/2000/resize/3/t/3tw23w005-sa855-110-1-u.webp',
    sizes: [
      {id: 1, value: '98'},
      {id: 2, value: '104'},
      {id: 3, value: '110'},
      {id: 4, value: '116'},
      {id: 5, value: '122'},
      {id: 6, value: '128'},
    ],
    colors: [
      {id: 1, value: 'https://media.canifa.com/attribute/swatch/images/sb128.webp'},
      {id: 2, value: 'https://media.canifa.com/attribute/swatch/images/sp189.webp'}
    ]
  },
  {
    id: 2,
    name: 'Quần nỉ bé trai in họa tiết cổ tứi',
    slug: 'quan-ni-be-trai-in-hoa-tiet-co-tui-2',
    price: 199000,
    originalPrice: 299000,
    discount: 33,
    image: 'https://canifa.com/img/1517/2000/resize/2/b/2bp24w014-sg305-2.webp',
    sizes: [
      {id: 1, value: '98'},
      {id: 2, value: '104'},
      {id: 3, value: '110'},
      {id: 4, value: '116'},
      {id: 5, value: '122'},
      {id: 6, value: '128'},
    ],
    colors: [
      {id: 1, value: 'https://media.canifa.com/attribute/swatch/images/sb128.webp'},
      {id: 2, value: 'https://media.canifa.com/attribute/swatch/images/sp189.webp'}
    ]
  },
  {
    id: 3,
    name: 'Quần nỉ bé trai in họa tiết cổ tứi',
    slug: 'quan-ni-be-trai-in-hoa-tiet-co-tui-3',
    price: 199000,
    originalPrice: 299000,
    discount: 33,
    image: 'https://canifa.com/img/1517/2000/resize/3/t/3tw23w005-sa855-110-1-u.webp',
    sizes: [
      {id: 1, value: '98'},
      {id: 2, value: '104'},
      {id: 3, value: '110'},
      {id: 4, value: '116'},
      {id: 5, value: '122'},
      {id: 6, value: '128'},
    ],
    colors: [
      {id: 1, value: 'https://media.canifa.com/attribute/swatch/images/sb128.webp'},
      {id: 2, value: 'https://media.canifa.com/attribute/swatch/images/sp189.webp'}
    ]
  },
  {
    id: 4,
    name: 'Quần nỉ bé trai in họa tiết cổ tứi',
    slug: 'quan-ni-be-trai-in-hoa-tiet-co-tui-4',
    price: 199000,
    originalPrice: 299000,
    discount: 33,
    image: 'https://canifa.com/img/1517/2000/resize/3/t/3tw23w005-sa855-110-1-u.webp',
    sizes: [
      {id: 1, value: '98'},
      {id: 2, value: '104'},
      {id: 3, value: '110'},
      {id: 4, value: '116'},
      {id: 5, value: '122'},
      {id: 6, value: '128'},
    ],
    colors: [
      {id: 1, value: 'https://media.canifa.com/attribute/swatch/images/sb128.webp'},
      {id: 2, value: 'https://media.canifa.com/attribute/swatch/images/sp189.webp'}
    ]
  },
  {
    id: 5,
    name: 'Quần nỉ bé trai in họa tiết cổ tứi',
    slug: 'quan-ni-be-trai-in-hoa-tiet-co-tui-5',
    price: 199000,
    originalPrice: 299000,
    discount: 33,
    image: 'https://canifa.com/img/1517/2000/resize/3/t/3tw23w005-sa855-110-1-u.webp',
    sizes: [
      {id: 1, value: '98'},
      {id: 2, value: '104'},
      {id: 3, value: '110'},
      {id: 4, value: '116'},
      {id: 5, value: '122'},
      {id: 6, value: '128'},
    ],
    colors: [
      {id: 1, value: 'https://media.canifa.com/attribute/swatch/images/sb128.webp'},
      {id: 2, value: 'https://media.canifa.com/attribute/swatch/images/sp189.webp'}
    ]
  },
  {
    id: 6,
    name: 'Quần nỉ bé trai in họa tiết cổ tứi',
    slug: 'quan-ni-be-trai-in-hoa-tiet-co-tui-6',
    price: 199000,
    originalPrice: 299000,
    discount: 33,
    image: 'https://canifa.com/img/1517/2000/resize/2/b/2bp24w014-sg305-2.webp',
    sizes: [
      {id: 1, value: '98'},
      {id: 2, value: '104'},
      {id: 3, value: '110'},
      {id: 4, value: '116'},
      {id: 5, value: '122'},
      {id: 6, value: '128'},
    ],
    colors: [
      {id: 1, value: 'https://media.canifa.com/attribute/swatch/images/sb128.webp'},
      {id: 2, value: 'https://media.canifa.com/attribute/swatch/images/sp189.webp'}
    ]
  },
  {
    id: 7,
    name: 'Quần nỉ bé trai in họa tiết cổ tứi',
    slug: 'quan-ni-be-trai-in-hoa-tiet-co-tui-7',
    price: 199000,
    originalPrice: 299000,
    discount: 33,
    image: 'https://canifa.com/img/1517/2000/resize/3/t/3tw23w005-sa855-110-1-u.webp',
    sizes: [
      {id: 1, value: '98'},
      {id: 2, value: '104'},
      {id: 3, value: '110'},
      {id: 4, value: '116'},
      {id: 5, value: '122'},
      {id: 6, value: '128'},
    ],
    colors: [
      {id: 1, value: 'https://media.canifa.com/attribute/swatch/images/sb128.webp'},
      {id: 2, value: 'https://media.canifa.com/attribute/swatch/images/sp189.webp'}
    ]
  },
  {
    id: 8,
    name: 'Quần nỉ bé trai in họa tiết cổ tứi',
    slug: 'quan-ni-be-trai-in-hoa-tiet-co-tui-8',
    price: 199000,
    originalPrice: 299000,
    discount: 33,
    image: 'https://canifa.com/img/1517/2000/resize/3/t/3tw23w005-sa855-110-1-u.webp',
    sizes: [
      {id: 1, value: '98'},
      {id: 2, value: '104'},
      {id: 3, value: '110'},
      {id: 4, value: '116'},
      {id: 5, value: '122'},
      {id: 6, value: '128'},
    ],
    colors: [
      {id: 1, value: 'https://media.canifa.com/attribute/swatch/images/sb128.webp'},
      {id: 2, value: 'https://media.canifa.com/attribute/swatch/images/sp189.webp'}
    ]
  },
])
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
    />
  </div>
</template>

<style lang="scss" scoped>

</style>
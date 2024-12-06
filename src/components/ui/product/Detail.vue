<script lang="ts" setup>
import type {Color, Product, ProductDetail, Size} from "~/types/product";
import {Navigation, Pagination, Thumbs} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import type {NavigationOptions} from "swiper/types";
import type {CartItem} from "~/types/cart";

const props = defineProps<{
  product: ProductDetail,
  suggestedProducts: Product[]
}>()

const emit = defineEmits<{
  (e: 'add-to-cart', product: CartItem): void
}>();

const shippingInfo = [
  {
    icon: 'lucide:package',
    title: 'Thanh toán khi nhận hàng (COD)',
    description: 'Giao hàng toàn quốc.'
  },
  {
    icon: 'lucide:truck',
    title: 'Miễn phí giao hàng',
    description: 'Với đơn hàng trên 599.000 đ.'
  },
  {
    icon: 'lucide:refresh-cw',
    title: 'Đổi hàng miễn phí',
    description: 'Trong 30 ngày kể từ ngày mua.'
  }
]

const containerRef = ref(null);
const containerRef1 = ref(null);
const thumbsSwiper = ref(null);
const isShowSizeGuide = ref<boolean>(false);
const activeTabName = ref<string>('first')
const navigationOption = ref<NavigationOptions>({enabled: true});
const selectedColor = ref<Color>(props.product.configurable_children[0].color)
const selectedSize = ref<Size>(props.product.configurable_children[0].size)

const allImages = computed(() => {
  const uniqueImages = new Set<string>();
  props.product.configurable_children.forEach(child => {
    child.media_gallery.forEach(media => {
      uniqueImages.add(media.path);
    });
  });
  return Array.from(uniqueImages);
});
const colors = computed(() => props.product.configurable_options.find(option => option.attribute_code === 'color')?.values || []);
const sizes = computed(() => props.product.configurable_options.find(option => option.attribute_code === 'size')?.values || []);
const selectedSku = computed(() => {
  const child = props.product.configurable_children.find(
      (child) => child.color.id === selectedColor.value.id && child.size.id === selectedSize.value.id
  )
  return child ? child.sku : ''
})

const addToCart = () => {
  if (selectedSize.value && selectedColor.value) {
    const { short_description, materials, instructions, description, ...productDetails } = props.product;
    emit('add-to-cart', {
      ...productDetails,
      selected_color: selectedColor.value,
      selected_size: selectedSize.value,
      quantity:1
    });
  }
};

const setThumbsSwiper = (swiper: any) => {
  thumbsSwiper.value = swiper;
};
</script>

<template>
  <div class="container md:max-w-screen-lg  xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto  py-8">
    <div
        class="flex flex-col md:flex-row gap-8 md:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl container mx-auto">
      <!-- Image Gallery with Slider (Left Column) -->
      <div class="w-full flex h-[50rem] gap-4 justify-end  max-w-[40rem] xl:max-w-[50rem]">
        <swiper
            ref="containerRef"
            :loop="true"
            :modules="[Thumbs,Pagination,Navigation]"
            :navigation="navigationOption as any"
            :pagination="{ type: 'fraction'} as any"
            :slides-per-view="1"
            :space-between="5"
            :style="{
              '--swiper-navigation-color': '#fff',
              '--swiper-pagination-color': '#fff',
            }"
            :thumbs="{ swiper: thumbsSwiper }"
        >
          <swiper-slide
              v-for="(image, index) in allImages"
              :key="index"
              class="w-[30rem] h-full main-image"
          >
            <img
                :alt="product.name"
                :src="image"
                class="w-full h-full object-cover rounded-lg"
            />
          </swiper-slide>
        </swiper>
        <swiper
            ref="containerRef1"
            :direction="'vertical'"
            :loop="true"
            :modules="[Thumbs]"
            :slides-per-view="5"
            :space-between="5"
            class="m-0 w-96"
            watch-slides-progress
            @swiper="setThumbsSwiper"
        >
          <swiper-slide
              v-for="(image, index) in allImages"
              :key="index"
              class="!w-auto h-22 flex-shrink-0 rounded-lg  transition-all mx-1 my-1 thumb-image"
          >
            <img
                :alt="`${product.name} thumbnail ${index + 1}`"
                :src="image"
                class="w-full h-full object-cover rounded-lg"
            />
          </swiper-slide>
        </swiper>
      </div>
      <!-- Product Info -->
      <div class="w-full space-y-6">
        <div class="space-y-2">
          <h1 class="text-2xl font-semibold">{{ product.name }}</h1>
          <p class="text-sm text-gray-600">Mã sp: {{ selectedSku }}</p>
        </div>

        <p class="text-xl font-bold text-primary">{{ product.price.toLocaleString() }} đ</p>

        <!-- Promotional Banner -->
        <div class="rounded-lg">
          <img
              alt="Promotional Banner"
              class="w-full h-auto"
              src="https://media.canifa.com/attribute/swatch/d/e/desktop.webp"
          />
        </div>

        <!-- Color Selection -->
        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <p class="text-sm">Màu sắc: {{ selectedColor.label }}</p>

          </div>
          <div class="flex gap-2">
            <button
                v-for="color in colors"
                :key="color.id"
                :class="[{ 'ring-2 ring-primary ring-offset-2': selectedColor.id === color.id }]"
                class="w-8 h-8 rounded-full transition-transform hover:scale-110"
                @click="()=>{selectedColor = color as Color}">
              <img :src="color.swatch.swatch_link" alt="color" class="w-8 h-8 rounded-full"/>
            </button>
          </div>
        </div>

        <!-- Size Selection -->
        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <p class="text-sm">Kích cỡ</p>
            <el-link class="text-sm hover:!color-[#f62f30]" type="primary" @click="isShowSizeGuide=true">
              Gợi ý tìm size
              <Icon class="w-4 h-4" name="lucide:chevron-right"/>
            </el-link>
          </div>
          <div class="flex gap-2">
            <div class="flex space-x-2">
              <button
                  v-for="size in sizes"
                  :key="size.id"
                  :class="selectedSize.id === size.id ? 'border-red-500 text-red-500' : 'border-gray-300'"
                  class="min-w-[48px] h-12 border rounded-md flex items-center justify-center"
                  @click="() => { selectedSize = size }"
              >
                {{ size.label }}
              </button>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex gap-4">
          <button class="flex-1 bg-[#f62f30] h-10 text-white" @click="addToCart">
            Thêm vào giỏ
          </button>
        </div>

        <!-- Description -->
        <div class="pt-4">
          <el-collapse v-if="product.short_description">
            <el-collapse-item name="description" title="Mô tả">
              <div class="text-sm text-gray-600 whitespace-pre-line">{{ product.short_description }}</div>
            </el-collapse-item>
          </el-collapse>
          <el-collapse v-if="product.materials">
            <el-collapse-item name="description" title="Chất liệu">
              <div class="text-sm text-gray-600 whitespace-pre-line">{{ product.materials }}</div>
            </el-collapse-item>
          </el-collapse>
          <el-collapse v-if="product.instructions">
            <el-collapse-item name="description" title="Hướng dẫn sử dụng">
              <div class="text-sm text-gray-600 whitespace-pre-line">{{ product.instructions }}</div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
      <div
          v-for="info in shippingInfo"
          :key="info.title"
          :class="[info.title === shippingInfo[shippingInfo.length - 1].title ? 'border-none' : '']"
          class="flex gap-4 p-4 md:border-r border-gray-200 "
      >
        <div class="w-10 h-10 bg-[#f62f3010] flex items-center justify-center rounded-md">
          <Icon
              :name="info.icon"
              class="w-7 h-7 text-primary shrink-0 color-[#f62f30]"
          />
        </div>
        <div>
          <h3 class="font-medium">{{ info.title }}</h3>
          <p class="text-sm text-gray-600">{{ info.description }}</p>
        </div>
      </div>
    </div>
    <div class="mt-16">
      <h2 class="text-xl font-semibold mb-6">Gợi ý mua cùng</h2>
      <UiProductList
          :is-loading="false"
          :products="suggestedProducts"
          class="px-0"
      />
    </div>
  </div>

  <el-dialog
      v-model="isShowSizeGuide"
      align-center
      title="Gợi ý tìm size"
  >
    <el-tabs v-model="activeTabName">
      <el-tab-pane label="Nam" name="first">
        <el-scrollbar height="30rem">
          <img alt="" class="w-full h-full" loading="lazy" src="~/assets/images/sizes/size_nam.png"/>
        </el-scrollbar>
      </el-tab-pane>
      <el-tab-pane label="Nữ" name="second">
        <el-scrollbar height="30rem">
          <img alt="" class="w-full h-full" loading="lazy" src="~/assets/images/sizes/size_nudesktop.png"/>
        </el-scrollbar>
      </el-tab-pane>
      <el-tab-pane label="Trẻ em" name="third">
        <el-scrollbar height="30rem">
          <img alt="" class="w-full h-full" loading="lazy" src="~/assets/images/sizes/size_treem.png"/>
        </el-scrollbar>
      </el-tab-pane>
      <el-tab-pane label="Phụ kiện" name="fourth">
        <el-scrollbar height="30rem">
          <img alt="" class="w-full h-full" loading="lazy" src="~/assets/images/sizes/size_phukien.png"/>
        </el-scrollbar>
      </el-tab-pane>
    </el-tabs>
  </el-dialog>
</template>

<style lang="scss" scoped>
.thumb-image {
  border: 2px solid transparent;

  &.swiper-slide-thumb-active {
    border-color: #f62f30;
  }
}
</style>


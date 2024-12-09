<script lang="ts" setup>
import type {Color, Product, Size} from "~/types/product";
import type {CartItem} from "~/types/cart";

const props = defineProps<{
  product: Product;
  isMobile: boolean;
  isLoading: boolean
}>();

const emit = defineEmits<{
  (e: 'add-to-cart', product: CartItem): void
}>();

const productDiscount = computed(() => Math.ceil((props.product.regular_price - props.product.price) / props.product.regular_price * 100));
const colors = computed(() => props.product.configurable_options.find(option => option.attribute_code === 'color')?.values as Color[] || []);
const sizes = computed(() => props.product.configurable_options.find(option => option.attribute_code === 'size')?.values || []);
const allImages = computed(() => props.product.configurable_children.map(child => child.media_gallery.find(media => media.pos === 1)).filter(Boolean));
const imageSelect = ref(allImages.value[0]);
const selectedColor = ref<Color>(props.product.configurable_children[0].color)
const selectedSize = ref<Size>(props.product.configurable_children[0].size)

const selectSize = (size: Size) => {
  selectedSize.value = size;
  addToCart();
};

const handleSelectColor = (color: Color) => {
  selectedColor.value = color;
  const variant = props.product.configurable_children.find(child => child.color.id === color.id);
  if (variant) {
    imageSelect.value = variant.media_gallery.find(media => media.pos === 1) || {path: '', pos: 0};
  }
};

const addToCart = () => {
  if (selectedSize.value && selectedColor.value) {
    emit('add-to-cart', {
      ...props.product,
      selected_color: selectedColor.value,
      selected_size: selectedSize.value,
      quantity: 1
    });
  }
};
</script>

<template>
  <el-skeleton :loading="isLoading" animated>
    <template #template>
      <el-skeleton-item class="!h-[13rem] md:!h-[15rem] lg:!h-[25rem]" variant="image"/>
      <div class="p-4">
        <el-skeleton-item variant="h3"/>
        <div class="flex items-center gap-2 mt-2 h-1 justify-between">
          <el-skeleton-item class="mr-1" variant="text"/>
          <el-skeleton-item variant="text"/>
        </div>
      </div>
    </template>
    <template #default>
      <div
          class="group relative flex flex-col max-h-[40rem]"
      >
        <!-- Sale Badge -->
        <div v-if="productDiscount!==0" class="absolute top-2 right-2 z-10">
          <div class="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
            -{{ productDiscount }}%
          </div>
        </div>
        <!-- Product Image and Add to Cart Button -->
        <div class="relative overflow-hidden rounded-lg bg-gray-100 mb-4 group max-h-[30rem]">
          <img
              :src="imageSelect.path"
              alt="product image"
              class=" w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
          />

          <!-- Add to Cart Button -->
          <div
              v-if="!isMobile"
              class="absolute inset-0 flex items-end justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t">
            <div
                class="py-3 flex-col gap-2 w-full  bg-[rgba(250,250,250,0.85)] text-[#333f48] text-xs font-semibold rounded-sm flex items-center justify-center invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200"
                style="right: 8px; bottom: 8px; left: 8px; z-index: 2;"
            >
              <span>Thêm nhanh vào giỏ</span>
              <div
                  class="grid grid-cols-6 gap-2 items-center px-2 w-full"
              >
                <button
                    v-for="size in sizes"
                    :key="size.id"
                    :class="[
            selectedSize.id === size.id
              ? 'border-black bg-black'
              : 'border-gray-200 hover:border-gray-300'
          ]"
                    class=" rounded border text-center transition-all duration-200 bg-white py-1"
                    @click="selectSize(size)"
                >
                  {{ size.label }}
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Product Details -->
        <div class="flex flex-col cursor-pointer">
          <!-- Color Variants -->
          <div class="flex gap-2 mb-2 border-black px-2  bg-white">
            <button
                v-for="color in colors"
                :key="color.id"
                :aria-label="`Select ${color.label} color`"
                :class="color.id === selectedColor.id ? 'border-black' : 'border-gray-200'"
                class="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 transition-all duration-200  bg-beige"
                @click="handleSelectColor(color as Color)"
            >
              <img :src="color.swatch.swatch_link" alt="color" class="w-6 h-6 md:w-8 md:h-8 rounded-full mx-auto"/>
            </button>
          </div>
          <!-- Product Name -->
          <NuxtLinkLocale
              :to="'/product/'+product.slug"
              class="text-sm md:text-lg font-medium text-gray-900 mb-1"
          >
            {{ product.name }}
          </NuxtLinkLocale>

          <!-- Price -->
          <NuxtLinkLocale
              :to="'/product/'+product.slug"
              class="flex items-center gap-2"
          >
        <span class="text-md md:text-lg font-bold text-gray-900">
          {{ useFormatNumber(product.price) }}
        </span>
            <span v-if="product.regular_price" class="text-sm text-gray-500 line-through">
          {{ useFormatNumber(product.regular_price) }}
        </span>
          </NuxtLinkLocale>
        </div>
      </div>
    </template>
  </el-skeleton>
</template>


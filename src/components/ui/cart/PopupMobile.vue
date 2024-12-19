<script lang="ts" setup>
import type {Color, MediaGallery, Product, Size} from "~/types/product";
import type {DrawerProps} from "element-plus";
import type {CartItem} from "~/types/cart";
import {getProductProperty} from "~/utils";

const props = defineProps<{
  product: Product | CartItem;
  isShow: boolean;
  isAdjust?: boolean;
}>();

const emit = defineEmits<{
  (e: 'close-popup'): void,
}>();

const direction = ref<DrawerProps['direction']>('btt');
const {colors, sizes, productDiscount} = getProductProperty(props.product);
const allImages = computed(() => props.product.configurable_children.map(child => child.media_gallery.find(media => media.pos === 1)).filter(Boolean));
const imageSelect = ref(allImages.value[0]);
const selectedColor = ref<Color>(props.product.configurable_children[0].color)
const selectedSize = ref<Size>(props.product.configurable_children[0].size)
const selectedSku = computed(() => {
  const child = props.product.configurable_children.find(
      (child) => child.color.id === selectedColor.value.id && child.size.id === selectedSize.value.id
  )
  return child ? child.sku : ''
})

const availableSizes = computed(() => {
  return props.product.configurable_children
      .filter(child => child.color.id === selectedColor.value.id && child.stock.is_in_stock)
      .map(child => child.size);
});

const selectSize = (size: Size) => {
  selectedSize.value = size;
};

const handleSelectColor = (color: Color) => {
  selectedColor.value = color;
  const variant = props.product.configurable_children.find(child => child.color.id === color.id);
  if (variant) {
    imageSelect.value = variant.media_gallery.find(media => media.pos === 1) || {path: '', pos: 0};
  }
};

const cartStore = useCartStore();

const handleUpdateCart = () => {
  if (!selectedSize.value || !selectedColor.value || !availableSizes.value.find(item => item.id === selectedSize.value.id)) {
    return;
  }

  const cartItem = {
    ...props.product as CartItem,
    selected_color: selectedColor.value,
    selected_size: selectedSize.value,
  };

  if (props.isAdjust) {
    cartStore.updateCartItem(cartItem);
    ElNotification({
      title: 'Thông báo',
      message: 'Sản phẩm đã được cập nhật vào giỏ hàng',
      type: 'success'
    });
  } else {
    cartStore.addProductToCart({
      ...cartItem,
      quantity: 1,
    });
    ElNotification({
      title: 'Thông báo',
      message: 'Sản phẩm đã được thêm vào giỏ hàng',
      type: 'success'
    });
  }
};
</script>

<template>
  <el-drawer
      :direction="direction"
      :model-value="isShow"
      :size="'65%'"
      destroy-on-close
      @close="emit('close-popup')"
  >
    <template #header>
      <h3 class="text-md font-bold text-center mx-auto">Chọn màu sắc và kích thước</h3>
    </template>
    <div class="flex gap-2 mb-4 overflow-x-auto no-scrollbar">
      <img
          v-for="(image, index) in allImages"
          :key="index"
          :alt="product.name"
          :src="(image as MediaGallery).path"
          class="w-30 h-30 object-cover rounded-md flex-shrink-0"
      />
    </div>
    <div class="mb-4 flex justify-between">
      <h3 class="text-base font-medium text-gray-900">{{ product.name }}</h3>
      <p class="text-sm text-gray-500">Mã: {{ selectedSku }}</p>
    </div>

    <!-- Price -->
    <div class="flex justify-between items-center">
      <div class="flex flex-col gap-2 mb-4">
        <div>
        <span v-if="product.regular_price" class="text-md text-gray-500 line-through">
          {{ useFormatNumber(product.regular_price) }}
        </span>
          <span v-if="productDiscount" class="text-xs text-red-600 font-bold">
          -{{ productDiscount }}%
        </span>
        </div>
        <span class="text-xl font-bold">{{ useFormatNumber(product.price) }}</span>
      </div>
      <div
          class="flex gap-1 items-center justify-items-center"
          @click="navigateTo(`/product/${product.slug}`)"
      >
        <span class="my-auto text-sm">Xem chi tiết</span>
        <ElIconDArrowRight class="w-4 h-4 flex my-auto text-red-600"/>
      </div>
    </div>

    <!-- Color Selection -->
    <div class="mb-4">
      <p class="text-sm text-gray-700 mb-2">{{ $t('general.color') + ': ' + selectedColor.label }}</p>
      <div class="flex gap-2">
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
    </div>

    <!-- Size Selection -->
    <div class="mb-6">
      <p class="text-sm text-gray-700 mb-2">{{ $t('general.size') + ': ' + selectedSize.label }}</p>
      <div class="grid grid-cols-5 gap-2">
        <button
            v-for="size in sizes"
            :key="size.id"
            :class="[
              selectedSize === size && availableSizes.some(item => item.id === selectedSize.id)
                ? 'border-red-500  text-red-500'
                : ' text-gray-700',
              availableSizes.some(item => item.id === size.id)
                ? 'border-gray-500'
                : 'border-gray-200'
            ]"
            class="py-2 px-3 rounded border text-sm transition-all duration-200"
            @click="availableSizes.find((item)=>item.id===size.id)?selectSize(size):null"
        >
           <span
               :class="[
               availableSizes.find((item)=>item.id===size.id) ? 'text-black' : 'line-through text-gray-400 ',
               selectedSize === size && availableSizes.some(item => item.id === selectedSize.id)
               ? 'border-red-500  text-red-500': ' text-gray-700',
            ]"
           >{{ size.label }}</span>
        </button>
      </div>
    </div>
    <div class="fixed bottom-0 left-0 w-full h-12">
      <button
          class="w-full h-12 bg-red-500 text-white font-semibold text-md"
          @click="handleUpdateCart"
      >
        {{ isAdjust ? $t('general.update_cart') : $t('general.add_to_cart') }}
      </button>
    </div>
  </el-drawer>
</template>
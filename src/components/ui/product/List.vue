<script lang="ts" setup>
import type {Product} from "~/types/product";
import type {ProductCategory} from "~/types/category";
import type {CartItem} from "~/types/cart";

const isMobile = useCheckDeviceIsMobile();
const cartStore = useCartStore();
const addToCart = (product: CartItem) => {
  cartStore.addProductToCart(product);
}

defineProps({
  products: {
    type: Object as PropType<Product[]>,
    required: true
  },
  category: {
    type: Array as PropType<ProductCategory[]>,
    required: false
  },
  isLoading: {
    type: Boolean as PropType<boolean>,
    required: true
  }
})
</script>

<template>
  <div v-if="!category" class="mx-auto px-4 w-full">
    <!-- Product Grid -->
    <div class="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-6 w-auto">
      <div
          v-for="product in products"
          :key="product.id"
          class="group relative rounded-3xl transition ease-in-out delay-150 animate__fadeInUp"
      >
        <UiProductItem
            :is-loading="isLoading"
            :is-mobile="isMobile"
            :product="product"
            @add-to-cart="addToCart"
        />
      </div>
    </div>
  </div>
  <template v-else>
    <div v-for="item in category" :key="item.id" class="mx-auto px-4 w-full">
      <NuxtLinkLocale :to="item.slug">
        <img
            :src="item.banner" alt="banner"
            class="object-cover my-4 cursor-pointer"
        />
      </NuxtLinkLocale>
      <!-- Product Grid -->
      <div class="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-6 w-auto">
        <div
            v-for="product in item.products"
            :key="product.id"
            class="group relative rounded-3xl transition ease-in-out delay-150 animate__fadeInUp"
        >
          <UiProductItem
              :is-loading="isLoading"
              :is-mobile="isMobile"
              :product="product"
              @add-to-cart="addToCart"
          />
        </div>
      </div>
      <NuxtLinkLocale
          :to="item.slug"
          class="border-[#ef3224] border w-50 h-10 mx-auto color-[#ef3224] flex justify-center items-center my-5 font-bold rounded-lg cursor-pointer"
      >
        {{ $t('general.explore') }}
      </NuxtLinkLocale>
    </div>
  </template>
</template>
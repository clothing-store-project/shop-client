<script lang="ts" setup>
import type {Product} from "~/types/product";
import type {ProductCategory} from "~/types/category";

const isMobile = useCheckDeviceIsMobile();

const addToCart = (product: Product) => {
  console.log('Add to cart', product)
}

defineProps({
  products: {
    type: Object as PropType<Product[]>,
    required: true
  },
  category: {
    type: Array as PropType<ProductCategory[]>,
    required: false
  }
})
</script>

<template>
  <div class="mx-auto px-4 w-full" v-if="!category">
    <!-- Product Grid -->
    <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-4 gap-6 w-auto">
      <div
          v-for="product in products"
          :key="product.id"
          class="group relative rounded-3xl transition ease-in-out delay-150 animate__fadeInUp"
      >
        <UiProductItem
            :product="product"
            @add-to-cart="addToCart"
            :is-mobile="isMobile"
        />
      </div>
    </div>
  </div>
  <template v-else>
    <div class="mx-auto px-4 w-full" v-for="item in category" :key="item.id">
      <img
          @clink="$router.push(item.slug)"
          :src="item.banner" alt="banner"
          class="object-cover my-4"
      />
      <!-- Product Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-4 gap-6 w-auto">
        <div
            v-for="product in item.products"
            :key="product.id"
            class="group relative rounded-3xl transition ease-in-out delay-150 animate__fadeInUp"
        >
          <UiProductItem
              :product="product"
              @add-to-cart="addToCart"
              :is-mobile="isMobile"
          />
        </div>
      </div>
      <NuxtLinkLocale
          :to="item.slug"
          class="border-[#ef3224] border  w-50 h-10 mx-auto color-[#ef3224] flex justify-center items-center my-5 font-bold rounded-lg"
      >
        Xem thêm
      </NuxtLinkLocale>
    </div>
  </template>
</template>
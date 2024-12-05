<script lang="ts" setup>
import type {Product} from "~/types/product";
import {ProductData} from "~/data/productData";

const route = useRoute()
const {t} = useI18n()

const products = ref<Product[]>(ProductData)

const selectedFilter = ref(t('filter.latest'))

const isFilterOpen = ref<boolean>(false)

const price = ref<number[]>([
  Number(route.query.min) || 0,
  Number(route.query.max) || 500
])
const selectedColors = ref<number[]>(route.query.color ? JSON.parse(route.query.color as string) : [1])
const selectedSizes = ref<number[]>(route.query.sizes ? JSON.parse(route.query.sizes as string) : [1])

const payload = ref({
  min: price.value[0],
  max: price.value[1],
  colors: selectedColors.value,
  sizes: selectedSizes.value,
})

watch(() => route.query, (newQuery) => {
  console.log(newQuery);
  price.value = [
    Number(newQuery.min) || 0,
    Number(newQuery.max) || 500
  ];
  selectedColors.value = newQuery.color ? JSON.parse(newQuery.color as string) : [1];
  selectedSizes.value = newQuery.sizes ? JSON.parse(newQuery.sizes as string) : [1];
  payload.value = {
    min: price.value[0],
    max: price.value[1],
    colors: selectedColors.value,
    sizes: selectedSizes.value,
  };
  fetchProducts()
});

const fetchProducts = async () => {
  try {
    // api get data here

  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

onMounted(() => {
  fetchProducts();
});

</script>

<template>
  <div class="max-w-7xl mx-auto">
    <div class="sticky top-0 left-0 right-0 bg-white z-50">
      <div class="py-2 px-4 text-center items-center flex justify-between">
        <LayoutsClientCategoryHeaderMobile>
          <template v-slot:default>
            <div class="font-bold text-lg">{{ $t('page.category.title', {value: route.params.category.at(-1)}) }}</div>
          </template>
        </LayoutsClientCategoryHeaderMobile>
      </div>
      <div class="flex items-center border-b border-t mx-auto border-gray-200 my-4">
        <div class="my-4 flex justify-center items-center text-center h-full w-1/3">
          <span class="text-sm text-gray-600">4 sản phẩm</span>
        </div>

        <div class="my-4 flex justify-center items-center h-full w-1/3" @click="isFilterOpen = true">
          <ElButton class="flex items-center space-x-2" >
            <Icon name="lucide:list" class="mr-2"/>
            <span>{{ $t('general.filter') }}</span>
          </ElButton>
        </div>

        <el-select
            v-model="selectedFilter"
            :teleported="false"
            class=" text-gray-700 focus:outline-none"
            size="large"
            style="width: 140px"
        >
          <el-option :value="$t('filter.latest')">{{ $t('filter.latest') }}</el-option>
          <el-option :value="$t('filter.popularity')">{{ $t('filter.popularity') }}</el-option>
          <el-option :value="$t('filter.average_rating')">{{ $t('filter.average_rating') }}</el-option>
          <el-option :value="$t('filter.price_low_to_high')">{{ $t('filter.price_low_to_high') }}</el-option>
          <el-option :value="$t('filter.price_high_to_low')">{{ $t('filter.price_high_to_low') }}</el-option>
        </el-select>
      </div>

    </div>
    <UiProductList
        :is-loading="false"
        :products="products"
        class="mt-2"
    />
  </div>
  <UiCategoryFilterMobile
      :isOpen="isFilterOpen"
      @close="isFilterOpen = false"
  />
</template>

<style lang="scss" scoped>

</style>
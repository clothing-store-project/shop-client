<script lang="ts" setup>
import type {Product} from "~/types/product";
import {ProductData} from "~/data/productData";

const route = useRoute()
const {t} = useI18n()

const products = ref<Product[]>(ProductData)

const selectedFilter = ref(t('filter.latest'))

const isFilterOpen = ref<boolean>(false)

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

        <div class="my-4 flex justify-center items-center h-full w-1/3">
          <ElButton class="flex items-center space-x-2" @click="isFilterOpen = true">
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
  <LayoutsClientFilterDetail
      :isOpen="isFilterOpen"
      @close="(() => isFilterOpen = !isFilterOpen)"
  />
</template>

<style lang="scss" scoped>

</style>
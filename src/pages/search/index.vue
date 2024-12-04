<script lang="ts" setup>
import {colors} from "~/data/colorData"
import {sizes} from "~/data/sizeData"
import type {Product} from "~/types/product";
import {ProductData} from "~/data/productData";

const {t} = useI18n()
useSeoMeta({
  title: t('page.search.title'),
  description: t('page.search.description'),
  ogImage: 'https://example.com/image.png',
  ogTitle: t('page.search.title'),
  ogType: 'website',
})

useHead({
  htmlAttrs: {
    lang: 'vn'
  }
})

const router = useRouter()
const route = useRoute()

const isMobileFilterOpen = ref<boolean>(true)

const searchQuery = ref(route.query.q || '')
const price = ref<number[]>([
  Number(route.query.min) || 0,
  Number(route.query.max) || 500
])
const minPrice = computed(() => price.value[0])
const maxPrice = computed(() => price.value[1])

const selectedColors = ref<number[]>(route.query.color ? JSON.parse(route.query.color as string) : [1])
const selectedSizes = ref<number[]>(route.query.sizes ? JSON.parse(route.query.sizes as string) : [1])
const selectedFilter = ref(t('filter.latest'))
const layout = ref('grid')

const payload = ref({
  q: searchQuery.value,
  min: price.value[0],
  max: price.value[1],
  colors: selectedColors.value,
  sizes: selectedSizes.value,
  filter: selectedFilter.value,
})

const activeNames = ref(['1', '2', '3'])

const toggleColorSelection = (colorId: number) => {
  const index = selectedColors.value.indexOf(colorId);
  if (index === -1) {
    selectedColors.value.push(colorId);
  } else {
    selectedColors.value.splice(index, 1);
  }
}

const toggleSizeSelection = (sizeId: number) => {
  const index = selectedSizes.value.indexOf(sizeId);
  if (index === -1) {
    selectedSizes.value.push(sizeId);
  } else {
    selectedSizes.value.splice(index, 1);
  }
}

const updateQueryParams = (newQueryParams = {}) => {
  const query = {
    q: searchQuery.value,
    min: price.value[0],
    max: price.value[1],
    colors: JSON.stringify(selectedColors.value),
    sizes: JSON.stringify(selectedSizes.value),
    ...newQueryParams
  };

  router.push({query});
  payload.value = {
    ...query,
    filter: selectedFilter.value,
    colors: selectedColors.value,
    sizes: selectedSizes.value
  };
}

const toggleFilter = () => {
  if (window.innerWidth < 640) {
    isMobileFilterOpen.value = !isMobileFilterOpen.value
  }
}

const resetFilters = () => {
  searchQuery.value = ''
  price.value = [0, 500]
  selectedColors.value = [1]
  selectedSizes.value = [1]
  updateQueryParams({
    searchQuery: '',
    price: [0, 500],
    selectedColors: [1],
    selectedSizes: [1]
  })
}

const products = ref<Product[]>(ProductData)

const setLayout = (newLayout: string) => {
  layout.value = newLayout
}

const checkScreenSize = () => {
  isMobileFilterOpen.value = window.innerWidth >= 640;
}

onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
  console.log('route.query', route.query)
  // use fetch to get products
})

watch(() => route.query, (newParams) => {
  console.log('newParams', newParams)
})
</script>

<template>
  <div class="px-4 py-12 flex flex-col md:flex-row w-full">
    <!-- Filter aside -->
    <div class="w-full md:w-1/5 md:sticky top-2 mb-4 px-4 sm:px-6 lg:px-8">
      <aside>
        <div class="flex gap-4 mb-6">
          <button
              class="text-gray-500 hover:text-pink-500 focus:outline-none"
              @click="toggleFilter"
          >
            <Icon name="lucide:sliders-horizontal"/>
          </button>
          <span class="pl-3">{{ $t('general.filter') }}</span>
        </div>

        <!--Filter content-->
        <div
            v-show="isMobileFilterOpen"
            class="transition-all duration-300 ease-in-out"
        >
          <!--Keyword search-->
          <div class="flex gap-4 mb-6">
            <div class="relative flex-[2] pb-2 flex items-center w-full">
              <Icon class="my-auto w-4 h-4 absolute left-3 cursor-pointer"
                    name="lucide:circle-x"
                    @click="searchQuery = ''"
              />
              <input
                  v-model="searchQuery"
                  class="w-full border-b focus:outline-none rounded-2xl py-2 px-2 pl-10"
                  placeholder="Search Product"
                  @keyup.enter.prevent="updateQueryParams"
              />
              <Icon class="my-auto w-6 h-6 absolute right-3 cursor-pointer"
                    name="lucide:search"
                    @click="updateQueryParams"
              />
            </div>
          </div>

          <el-collapse v-model="activeNames" class="gap-4 mb-6">
            <!--Select price range-->
            <el-collapse-item name="1">
              <template #title>
                <h6 class="text-base">{{ $t('general.price') }}</h6>
              </template>
              <div class="flex items-center space-x-4">
                <el-slider
                    v-model="price"
                    :max="500"
                    class="text-black black px-3"
                    range
                />
              </div>
              <div class="flex justify-between mt-2 text-sm">
                <span>Min Price: ${{ minPrice }}</span>
                <span>Max Price: ${{ maxPrice }}</span>
              </div>
            </el-collapse-item>

            <!--Select color-->
            <el-collapse-item name="2">
              <template #title>
                <h6 class="text-base">{{ $t('general.color') }}</h6>
              </template>
              <div class="flex flex-wrap gap-2">
                <div
                    v-for="color in colors"
                    :class="{'border-1 border-black': selectedColors.indexOf(color.id) !== -1}"
                    class="w-10 h-10 rounded-full cursor-pointer flex justify-center items-center mt-2"
                    @click="toggleColorSelection(color.id)"
                >
                  <div
                      :style="{backgroundColor: color.hex}"
                      class="w-8 h-8 rounded-full border-1 border-black"
                  />
                </div>
              </div>
            </el-collapse-item>

            <!--Select size-->
            <el-collapse-item name="3">
              <template #title>
                <h6 class="text-base">{{ $t('general.size') }}</h6>
              </template>
              <div class="flex flex-wrap gap-4">
                <div
                    v-for="size in sizes"
                    :key="size.id"
                    :class="{'bg-black text-white': selectedSizes.indexOf(size.id) !== -1}"
                    class="w-10 h-10 rounded-full cursor-pointer mt-2 flex justify-center items-center border-1 border-black hover:border-gray-500 hover:text-gray-500"
                    @click="toggleSizeSelection(size.id)"
                >
                  {{ size.value }}
                </div>
              </div>
            </el-collapse-item>
          </el-collapse>

          <!--Clear all filters-->
          <div class="flex justify-start gap-4">
            <button
                class="w-20 h-10 px-8 py-2 bg-black text-white flex justify-center rounded-full hover:bg-pink-500"
                @click="resetFilters"
            >
              Reset
            </button>
            <button
                class="w-20 h-10 px-8 py-2 bg-pink-500  text-white flex justify-center rounded-full hover:bg-black"
                @click="updateQueryParams"
            >
              Submit
            </button>
          </div>
        </div>
      </aside>
    </div>
    <div class="w-full md:w-4/5">
      <div class="flex flex-col md:flex-row items-center mx-auto px-4 w-full">
        <!-- Results Display -->
        <div class="text-gray-700 sm-list">
          Showing 1–5 Of 50 Results
        </div>

        <div class="flex ml-auto sm-dropdown">
          <!-- Sort and Filter Dropdowns -->
          <div class=" flex items-center">
            <el-select
                v-model="selectedFilter"
                class="mx-3 my-1 rounded-md text-gray-700 focus:outline-none focus:border-gray-500"
                focus=""
                size="large"
                style="width: 240px"
            >
              <el-option :value="$t('filter.latest')">{{ $t('filter.latest') }}</el-option>
              <el-option :value="$t('filter.popularity')">{{ $t('filter.popularity') }}</el-option>
              <el-option :value="$t('filter.average_rating')">{{ $t('filter.average_rating') }}</el-option>
              <el-option :value="$t('filter.price_low_to_high')">{{ $t('filter.price_low_to_high') }}</el-option>
              <el-option :value="$t('filter.price_high_to_low')">{{ $t('filter.price_high_to_low') }}</el-option>
            </el-select>
          </div>
        </div>
      </div>

      <UiProductList
          :products="products"
          :is-loading="false"
          class="mt-2"
      />

      <div class="flex justify-center mx-auto px-4 md:justify-end w-full">
        <el-pagination
            :page-size="10"
            :total="50"
            background
            class="sm-pagination"
            layout="total, prev, pager, next"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.el-collapse {
  border-top: none;

  .el-collapse-item__header {
    border-bottom: none;
  }
}

@media screen and (max-width: 640px) {
  .sm-dropdown {
    margin: 0.5rem 0;
    width: 100%;
    justify-content: space-between;
  }

  .sm-list {
    margin: 0.5rem 0;
    width: 100%;
  }

  .sm-pagination {
    :deep(.el-pagination__total) {
      display: none;
    }

    :deep(.btn-prev) {
      margin-left: 0;
    }
  }
}
</style>

<script lang="ts" setup>
import {CircleX, SearchIcon, SlidersHorizontal} from 'lucide-vue-next'
import {colors} from "~/data/colorData"
import {sizes} from "~/data/sizeData"

const {t} = useI18n()
useSeoMeta({
  title: t('page.search.title'),
  description: t('page.search.description')
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
const selectedFilter = ref('latest')
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

// const categories = [
//   {id: 0, name: 'All', quantity: 100},
//   {id: 1, name: 'Dresses', quantity: 20},
//   {id: 2, name: 'Tops', quantity: 30},
//   {id: 3, name: 'Outerwear', quantity: 10},
//   {id: 4, name: 'Jacket', quantity: 40},
// ]
//
// const tags = [
//   {id: 1, name: 'All'},
//   {id: 2, name: 'Dresses'},
//   {id: 3, name: 'Tops'},
//   {id: 4, name: 'Outerwear'},
//   {id: 5, name: 'Jacket'},
// ]
//
// const toggleCategorySelection = (categoryId: number) => {
//   if (categoryId === 0) {
//     selectedCategories.value = [0];
//   } else {
//     const index = selectedCategories.value.indexOf(categoryId);
//     if (index === -1) {
//       selectedCategories.value = selectedCategories.value.filter(id => id !== 0);
//       selectedCategories.value.push(categoryId);
//     } else {
//       selectedCategories.value.splice(index, 1);
//     }
//     if (selectedCategories.value.length === 0) {
//       selectedCategories.value = [0];
//     }
//   }
// }

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

const products = [
  {
    id: 1,
    name: 'SilkBliss Dress',
    price: 60.00,
    image: 'https://pet-project-shop.github.io/template/images/shop/product/2.png'
  },
  {
    id: 2,
    name: 'SilkBliss Dress',
    price: 40.00,
    image: 'https://pet-project-shop.github.io/template/images/shop/product/2.png'
  },
  {
    id: 3,
    name: 'GlamPants',
    price: 30.00,
    image: 'https://pet-project-shop.github.io/template/images/shop/product/2.png'
  },
  {
    id: 4,
    name: 'ComfyLeggings',
    price: 35.00,
    image: 'https://pet-project-shop.github.io/template/images/shop/product/2.png'
  },
  {
    id: 5,
    name: 'ClassicCapri',
    price: 20.00,
    image: 'https://pet-project-shop.github.io/template/images/shop/product/2.png'
  },
  {
    id: 6,
    name: 'DapperCoat',
    price: 70.00,
    image: 'https://pet-project-shop.github.io/template/images/shop/product/2.png'
  },
  {
    id: 7,
    name: 'DapperCoat',
    price: 70.00,
    image: 'https://pet-project-shop.github.io/template/images/shop/product/2.png'
  },
  {
    id: 8,
    name: 'DapperCoat',
    price: 70.00,
    image: 'https://pet-project-shop.github.io/template/images/shop/product/2.png'
  },
]

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
    <div class="w-full md:w-1/5 md:sticky top-2 mb-8 px-4 sm:px-6 lg:px-8">
      <aside>
        <div class="flex gap-4 mb-6">
          <button
              class="text-gray-500 hover:text-pink-500 focus:outline-none"
              @click="toggleFilter"
          >
            <SlidersHorizontal/>
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
              <CircleX
                  class="my-auto w-4 h-4 absolute left-3 cursor-pointer"
                  @click="searchQuery = ''"
              />
              <input
                  v-model="searchQuery"
                  class="w-full border-b focus:outline-none rounded-2xl py-2 px-2 pl-10"
                  placeholder="Search Product"
                  @keyup.enter.prevent="updateQueryParams"
              />
              <SearchIcon
                  class="my-auto w-6 h-6 absolute right-3 cursor-pointer"
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
                    class="text-black black pl-2 pr-2.5"
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
    <div class="w-full md:w-4/5 px-4 sm:px-6 lg:px-8">
      <div>
        <div class="flex flex-col md:flex-row items-center pb-4">
          <!-- Results Display -->
          <div class="text-gray-700 sm-list">
            Showing 1–5 Of 50 Results
          </div>

          <div class="flex ml-auto sm-dropdown">
            <!-- Sort and Filter Dropdowns -->
            <div class="flex">
              <div class="relative">
                <select
                    v-model="selectedFilter"
                    class="mx-3 my-1 rounded-md text-gray-700 focus:outline-none focus:border-gray-500"
                >
                  <option value="latest">{{ $t('filter.latest') }}</option>
                  <option value="popularity">{{ $t('filter.popularity') }}</option>
                  <option value="avarage_rating">{{ $t('filter.average_rating') }}</option>
                  <option value="price_low_to_high">{{ $t('filter.price_low_to_high') }}</option>
                  <option value="price_high_to_low">{{ $t('filter.price_high_to_low') }}</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div v-for="product in products">
          <ProductCard
              :key="product.id"
              :product="product"
          />
        </div>
      </div>

      <div class="flex justify-center sm:justify-end mt-15 sm:w-auto">
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
    ::v-deep(.el-pagination__total) {
      display: none;
    }

    ::v-deep(.btn-prev) {
      margin-left: 0;
    }
  }
}
</style>

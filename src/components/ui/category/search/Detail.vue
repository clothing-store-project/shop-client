<script lang="ts" setup>
import {colors} from "~/data/colorData";
import {sizes} from "~/data/sizeData";
import type {Product} from "~/types/product";
import {ProductData} from "~/data/productData";

defineProps<{
  category: string | string[]
}>()

const router = useRouter()
const route = useRoute()
const {t} = useI18n()

const price = ref<number[]>([
  Number(route.query.min) || 0,
  Number(route.query.max) || 500
])
const minPrice = computed(() => price.value[0])
const maxPrice = computed(() => price.value[1])

const selectedColors = ref<number[]>(route.query.color ? JSON.parse(route.query.color as string) : [1])
const selectedSizes = ref<number[]>(route.query.sizes ? JSON.parse(route.query.sizes as string) : [1])
const selectedCategory = ref<string>(route.params.category.at(-1))
const selectedFilter = ref(t('filter.latest'))

const products = ref<Product[]>(ProductData)

const payload = ref({
  min: price.value[0],
  max: price.value[1],
  colors: selectedColors.value,
  sizes: selectedSizes.value,
  category: selectedCategory.value,
  filter: selectedFilter.value
})

const activeNames = ref(['0', '1', '2', '3'])

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
    min: price.value[0],
    max: price.value[1],
    colors: JSON.stringify(selectedColors.value),
    sizes: JSON.stringify(selectedSizes.value),
    category: selectedCategory.value,
    ...newQueryParams
  };

  router.push({query});
  payload.value = {
    ...query,
    colors: selectedColors.value,
    sizes: selectedSizes.value,
    category: selectedCategory.value,
    filter: selectedFilter.value
  };
}

const resetFilters = () => {
  price.value = [0, 500]
  selectedColors.value = [1]
  selectedSizes.value = [1]
  selectedCategory.value = route.params.category.at(-1)
  selectedFilter.value = t('filter.latest')
  updateQueryParams({
    price: [0, 500],
    selectedColors: [1],
    selectedSizes: [1],
    category: selectedCategory.value,
    filter: selectedFilter.value
  })
}

const menuItems = ref([
  { id: 1, label: 'Áo nỉ & Áo Hoodie', href: 'nam/ao-ni-ao-hoodie' },
  { id: 2, label: 'Áo khoác', href: 'nam/ao-khoac' },
  { id: 3, label: 'Áo/ Quần giữ nhiệt', href: 'nam/ao-quan-giu-nhiet' },
  { id: 4, label: 'Áo len', href: 'nam/ao-len' },
  { id: 5, label: 'Quần nỉ', href: 'nam/quan-ni' },
  { id: 6, label: 'Quần áo mặc nhà/ Đồ ngủ', href: 'nu/quan-ao-mac-nha-do-ngu' },
  { id: 7, label: 'Bộ nỉ/ Bộ quần áo', href: 'nu/bo-ni-bo-quan-ao' },
  { id: 8, label: 'Quần dài & Quần Jean', href: 'nu/quan-dai-quan-jean' },
  { id: 9, label: 'Quần áo thể thao', href: 'nam/quan-ao-the-thao' },
  { id: 10, label: 'Áo polo', href: 'nam/ao-polo' },
  { id: 11, label: 'Áo sơ mi', href: 'nam/ao-so-mi' },
  { id: 12, label: 'Áo chống nắng', href: 'hang-moi-ve/ao-chong-nang' },
  { id: 13, label: 'Quần soóc/ Quần short', href: 'nam/quan-short' },
  { id: 14, label: 'Đồ lót', href: 'hang-moi-ve/do-lot' },
  { id: 15, label: 'Tất/Vớ', href: 'hang-moi-ve/tat-vo' }
])

onMounted(() => {
  // add logic get product here
})
</script>

<template>
  <div class="max-w-screen-2xl container mx-auto px-4 py-8 flex-col">
    <el-breadcrumb separator="|">
      <el-breadcrumb-item class="text-base" :to="{ path: '/' }">{{ $t('general.home') }}</el-breadcrumb-item>
      <el-breadcrumb-item
          v-for="(cat, index) in Array.isArray(category) ? category : [category]"
          :key="index"
          :to="{ path: '/' + (Array.isArray(category) ? category.slice(0, index + 1).join('/') : category) }"
          class="text-base"
      >
        {{ cat }}
      </el-breadcrumb-item>
    </el-breadcrumb>
    <div class="w-full top-2 my-8 flex">
      <aside class="w-full md:w-1/4 md:sticky">
        <!--Filter content-->
        <div class="transition-all duration-300 ease-in-out">
          <el-collapse v-model="activeNames" class="gap-4 mb-6">
            <el-collapse-item name="0">
              <template #title>
                <h6 class="text-base">{{ $t('page.category.list') }}</h6>
              </template>
              <div v-for="(item, index) in menuItems" :key="index" class="mb-2 flex items-center text-center">
                <NuxtLinkLocale
                    :to="`/${item.href}`"
                    active-class="text-red-500"
                    class="text-base text-center"
                >
                  <Icon name="lucide:play" v-if="route.path.includes(item.href)"/>
                  {{ item.label }}
                </NuxtLinkLocale>
              </div>
            </el-collapse-item>
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
      <main class="w-full md:w-3/4">
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
            class="mt-2"
            :is-loading="false"
        />

        <div class="flex justify-center mx-auto px-4 mt-8 md:justify-end w-full">
          <el-pagination
              :page-size="10"
              :total="50"
              background
              class="sm-pagination"
              layout="total, prev, pager, next"
          />
        </div>
      </main>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
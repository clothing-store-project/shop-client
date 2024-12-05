<script lang="ts" setup>
import type {Product} from "~/types/product";
import {ProductData} from "~/data/productData";

defineProps({
  isOpen: Boolean,
})

const emits = defineEmits<{
  (e: 'close'): void
}>()

const router = useRouter()
const searchQuery = ref('')

const searchResults = ref<Product[]>([])
const searchResultNames = ref(new Set<string>())
const products = ref<Product[]>(ProductData)

const isMobile = useCheckDeviceIsMobile();

const getData = () => {
  const results = products.value.filter((product: Product) => product.name.toLowerCase().includes(searchQuery.value.toLowerCase()))
  searchResults.value = results
  searchResultNames.value = new Set(results.map(product => product.name))

  return results
}

const viewAll = () => {
  // route to search page
  emits('close')
  router.push({path: '/search', query: {q: searchQuery.value || ''}});
};

const filterSearch = useDebounce(getData, 1000)

const close = () => {
  searchQuery.value = ''
  emits('close')
}

</script>

<template>
  <transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
      name="fade"
  >
    <div v-if="isOpen" class="fixed inset-0 z-50 overflow-y-auto border-x-blue-400">
      <div class="mx-auto px-4 py-6 bg-white h-screen">
        <!-- Header with close button -->
        <div class="flex justify-end mb-6">
          <button class="p-2 hover:bg-gray-100 rounded-full" @click="close">
            <Icon name="lucide:circle-x" class="w-6 h-6"/>
          </button>
        </div>

        <!-- Search Header -->
        <div class="flex gap-4 mb-6">
          <div class="relative flex-[2] pb-2 flex items-center w-full">
            <Icon name="lucide:circle-x"
                  class="my-auto w-5 h-5 absolute left-3 cursor-pointer"
                  @click="searchQuery = ''"
            />
            <input
                v-model="searchQuery"
                class="w-full border focus:outline-none rounded-2xl py-2 px-2 pl-10"
                placeholder="Search Product"
                @input="filterSearch"
                @keyup.enter.prevent="viewAll"
            />
            <Icon name="lucide:search"
                  class="my-auto w-6 h-6 absolute right-3 cursor-pointer"
                  @click="viewAll"
            />
          </div>
        </div>

        <!-- Search Results -->
        <div v-if="searchResults.length > 0 && searchQuery !== ''" class="mb-8">
          <div class="flex flex-col gap-4 w-auto mb-2">
            <div
                v-for="name in searchResultNames"
                :key="name"
                class="group relative rounded-3xl transition ease-in-out delay-150 animate__fadeInUp"
            >
              <div class="group relative rounded-3xl transition ease-in-out delay-150 animate__fadeInUp cursor-pointer">
                <span class="font-normal">{{ name }}</span>
              </div>
            </div>

            <!-- Result search -->
            <h3 class="text-xl font-medium mb-6">{{ $t('general.search_result') }}</h3>
            <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 md:grid-cols-5 gap-4 w-auto">
              <div
                  v-for="product in searchResults.slice(0, 6)"
                  :key="product.id"
                  class="group relative rounded-3xl transition ease-in-out delay-150 animate__fadeInUp"
              >
                <div
                    class="group relative rounded-3xl transition ease-in-out delay-150 animate__fadeInUp cursor-pointer">
                  <UiProductItem
                      :product="product"
                      :isMobile="isMobile"
                      :is-loading="false"
                  />
                </div>
              </div>
            </div>
            <div class="flex justify-center items-center w-full pt-2">
              <button class="w-60 h-10 px-8 py-2 bg-black text-white rounded-full hover:bg-pink-500" @click="viewAll">
                {{ $t('general.view_all') }}
              </button>
            </div>
          </div>
        </div>
        <div v-if="searchResults.length === 0 && searchQuery" class="mb-8 flex justify-center align-center">
          <p class="text-lg text-gray-600">{{ $t('general.no_result') }}</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
</style>
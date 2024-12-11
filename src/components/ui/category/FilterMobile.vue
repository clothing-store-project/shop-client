<script lang="ts" setup>
import {colors} from "~/data/colorData";
import {sizes} from "~/data/sizeData";

const activeNames = ref(['1', '2', '3'])
const route = useRoute()
const router = useRouter()

defineProps({
  isOpen: Boolean,
})

const emits = defineEmits<{
  (e: 'close'): void,
}>()

const price = ref<number[]>([
  Number(route.query.min) || 0,
  Number(route.query.max) || 500
])
const minPrice = computed(() => price.value[0])
const maxPrice = computed(() => price.value[1])
const selectedColors = ref<number[]>(route.query.color ? JSON.parse(route.query.color as string) : [1])
const selectedSizes = ref<number[]>(route.query.sizes ? JSON.parse(route.query.sizes as string) : [1])

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
    ...newQueryParams
  };
  router.push({query});
  emits('close')
}

const resetFilters = () => {
  price.value = [0, 500]
  selectedColors.value = [1]
  selectedSizes.value = [1]
  updateQueryParams({
    price: [0, 500],
    selectedColors: [1],
    selectedSizes: [1],
  })
}

const close = () => {
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
    <div v-if="isOpen" class="fixed inset-0 z-50 overflow-y-auto mx-auto bg-white">
      <div class="transition-all duration-300 ease-in-out mx-2">
        <div class="flex justify-between items-center">
          <span class="mx-auto">{{ $t('general.filter') }}</span>
          <button class="p-2 hover:bg-gray-100 rounded-full items-center flex" @click="close">
            <Icon name="lucide:circle-x" class="w-6 h-6"/>
          </button>
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
        <div class="flex justify-center gap-4 fixed bottom-0 left-0 right-0 bg-white p-4">
          <el-button
              class="w-1/2 !h-[40px] !border-gray-300 !text-gray-700 hover:!bg-gray-50"
              @click="resetFilters"
          >
            {{ $t('general.reset') }}
          </el-button>

          <el-button
              type="primary"
              class="w-1/2 !h-[40px] !bg-[#f5a7a7] !border-[#f5a7a7] hover:!bg-[#f39595] hover:!border-[#f39595]"
              @click="updateQueryParams"
          >
            {{ $t('general.update') }}
          </el-button>
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>

</style>
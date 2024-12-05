<script lang="ts" setup>
import type {Color, Product, ProductDetail, Size} from "~/types/product";

const props = defineProps<{
  product: ProductDetail,
  suggestedProducts: Product[]
}>()

const emit = defineEmits<{
  (e: 'add-to-cart', product: ProductDetail & { selectedSize: Size, selectColor: Color }): void
}>();

const buttonContainerRef = ref<HTMLElement | null>(null)
const isSticky = ref<boolean>(false)
const isHeaderVisible = ref<boolean>(false)
const showShare = ref<boolean>(false)
const isShowSizeGuide = ref<boolean>(false)
const activeTabName = ref<string>('first')
const isLoading = ref<boolean>(false)
const currentImageIndex = ref<number>(0)
const selectedColor = ref<Color>(props.product.configurable_children[0].color)
const selectedSize = ref<Size>(props.product.configurable_children[0].size)

const router = useRouter()
const allImages = computed(() => {
  const uniqueImages = new Set<string>();
  props.product.configurable_children.forEach(child => {
    child.media_gallery.forEach(media => {
      uniqueImages.add(media.path);
    });
  });
  return Array.from(uniqueImages);
});
const colors = computed(() => props.product.configurable_options.find(option => option.attribute_code === 'color')?.values || []);
const sizes = computed(() => props.product.configurable_options.find(option => option.attribute_code === 'size')?.values || []);

const addToCart = () => {
  if (selectedSize.value && selectedColor.value) {
    emit('add-to-cart', {
      ...props.product,
      selectColor: selectedColor.value,
      selectedSize: selectedSize.value
    });
  }
};

const nextImage = () => {
  if (currentImageIndex.value < allImages.value.length - 1) {
    currentImageIndex.value++
  } else {
    currentImageIndex.value = 0
  }
}

const prevImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--
  } else {
    currentImageIndex.value = allImages.value.length - 1
  }
}

const setImage = (index: number) => {
  currentImageIndex.value = index
}

const goBack = () => {
  router.back()
}

const toggleShare = () => {
  showShare.value = !showShare.value
}
const toggleBookmark = () => {
  // Implement bookmark functionality
}
const onScroll = () => {
  isHeaderVisible.value = window.scrollY > 0
  isSticky.value = window.scrollY > buttonContainerRef.value!.offsetTop / 2
}

const selectedSku = computed(() => {
  const child = props.product.configurable_children.find(
      (child) => child.color.id === selectedColor.value.id && child.size.id === selectedSize.value.id
  )

  return child ? child.sku : ''
})

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <div class="max-w-7xl mx-auto">
    <div class="bg-[#EE1C25] text-white py-2 px-4 text-center">
      <p class="text-sm font-medium">BLACK NOVEMBER GIẢM TỐI 50%</p>
    </div>
    <div
        v-show="isHeaderVisible"
        class="fixed top-0 left-0 right-0 bg-white z-50 md:hidden"
    >
      <div class="flex items-center justify-between px-4 h-14">
        <button class="p-2 -ml-2" @click="goBack">
          <el-icon>
            <LazyElIconArrowLeft/>
          </el-icon>
        </button>
        <h2 class="text-sm font-medium truncate max-w-[200px]">
          {{ product.name }}
        </h2>
        <div class="flex items-center">
          <button class="p-2" @click="toggleShare">
            <el-icon>
              <LazyElIconShare/>
            </el-icon>
          </button>
          <button class="p-2" @click="toggleBookmark">
            <el-icon>
              <LazyElIconShoppingBag/>
            </el-icon>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Product Gallery -->
    <div class="relative md:hidden">
      <div class="relative  w-full h-full">
        <TransitionGroup name="slide">
          <img
              v-for="(image, index) in allImages"
              :key="index"
              v-touch:swipe.left="nextImage"
              v-touch:swipe.right="prevImage"
              :alt="product.name"
              :class="{ 'hidden': currentImageIndex !== index }"
              :src="image"
              class="relative top-0 left-0    object-cover transition-opacity duration-500"
          />
        </TransitionGroup>
        <button
            class="absolute left-4 top-10 -translate-y-1/2 bg-white rounded-full p-2"
            @click="goBack"
        >
          <el-icon :size="20">
            <LazyElIconArrowLeft/>
          </el-icon>
        </button>
        <div class="absolute right-4 top-10 flex flex-col gap-4">
          <button
              class="-translate-y-1/2 bg-white rounded-full p-2"
              @click="toggleBookmark"
          >
            <el-icon :size="20">
              <LazyElIconShoppingBag/>
            </el-icon>
          </button>
          <button
              class="-translate-y-1/2 bg-white rounded-full p-2"
              @click="toggleShare"
          >
            <el-icon :size="20">
              <LazyElIconShare/>
            </el-icon>
          </button>
        </div>
        <button
            class="absolute left-4 bottom-0 -translate-y-1/2 bg-white rounded-full p-2"
            @click="prevImage"
        >
          <el-icon>
            <LazyElIconArrowLeft/>
          </el-icon>
        </button>
        <button
            class="absolute right-4 bottom-0 -translate-y-1/2 bg-white rounded-full p-2"
            @click="nextImage"
        >
          <el-icon>
            <LazyElIconArrowRight/>
          </el-icon>
        </button>
      </div>

      <!-- Mobile Image Indicators -->
      <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        <button
            v-for="(_, index) in allImages"
            :key="index"
            :class="currentImageIndex === index ? 'bg-white' : 'bg-white/50'"
            class="w-2 h-2 rounded-full"
            @click="setImage(index)"
        />
      </div>
    </div>

    <!--     Desktop Product Gallery-->
    <div class="hidden md:block px-4 py-8 w-full">
      <nav class="flex items-center space-x-2 text-sm mb-8">
        <NuxtLink class="text-gray-500 hover:text-gray-700" to="/">Trang chủ</NuxtLink>
        <span class="text-gray-500">/</span>
        <NuxtLink class="text-gray-500 hover:text-gray-700" to="#">Nữ</NuxtLink>
        <span class="text-gray-500">/</span>
        <span class="text-gray-900">Áo nỉ</span>
      </nav>

      <div class="aspect-[3/4] relative overflow-hidden rounded-lg w-full h-full">
        <TransitionGroup name="slide">
          <img
              v-for="(image, index) in allImages"
              :key="index"
              :alt="product.name"
              :class="{ 'hidden': currentImageIndex !== index }"
              :src="image"
              class="relative top-0 left-0    object-cover transition-opacity duration-500"
          />
        </TransitionGroup>
        <button
            class="absolute left-4 top-1/2 -translate-y-1/2 bg-transparent rounded-full p-4"
            @click="prevImage"
        >
          <el-icon :size="30">
            <LazyElIconArrowLeft/>
          </el-icon>
        </button>
        <button
            class="absolute right-4 top-1/2 -translate-y-1/2 bg-transparent rounded-full p-4"
            @click="nextImage"
        >
          <el-icon :size="30">
            <LazyElIconArrowRight/>
          </el-icon>
        </button>

      </div>
      <el-scrollbar>
        <div class="my-4 mx-2 flex gap-4">
          <button
              v-for="(image, index) in allImages"
              :key="index"
              :class="{ 'ring-2 ring-red-500': currentImageIndex === index }"
              class="aspect-square rounded-lg overflow-hidden"
              @click="setImage(index)"
          >
            <img :src="image" alt="" class="w-full h-full object-cover"/>
          </button>
        </div>
      </el-scrollbar>
    </div>

    <!-- Product Info -->
    <div class="px-4 py-4 space-y-4">
      <div>
        <h1 class="text-lg md:text-2xl font-medium">{{ product.name }}</h1>
        <p class="text-gray-500 text-sm">Mã sp: {{ selectedSku }}</p>
      </div>

      <div class="flex items-baseline space-x-4">
        <span class="text-xl md:text-2xl font-bold">{{ useFormatNumber(product.price) }}</span>
        <span class="text-gray-500 line-through">{{ useFormatNumber(product.regular_price) }}</span>
        <span class="text-red-500">{{
            ((product.regular_price - product.price) / product.price * 100).toFixed(0)
          }}%</span>
      </div>

      <!-- Promotion Banner -->
      <div class="bg-gradient-to-r from-red-600 to-red-500 text-white p-3 rounded">
        <p class="font-medium">Nhập mã GIAM50</p>
        <p class="text-sm">Giảm thêm 50.000₫ cho hóa đơn từ 999K</p>
      </div>

      <!--       Color Selection-->
      <div>
        <div class="flex items-center justify-between mb-2">
          <span class="text-sm font-medium">Màu sắc: {{ selectedColor.label }}</span>
          <button class="text-blue-500 text-sm flex gap-1 items-center" @click="isShowSizeGuide=true">
            <el-icon>
              <LazyElIconQuestionFilled/>
            </el-icon>
            Gợi ý size
          </button>
        </div>
        <div class="flex space-x-2">
          <button
              v-for="color in colors"
              :key="color.id"
              :class="[selectedColor.id === color.id ? 'ring-red-500' : 'ring-transparent']"
              class="w-8 h-8 rounded-full ring-2 ring-offset-2"
              @click="()=>{selectedColor = color as Color}"
          >
            <img :src="color.swatch.swatch_link" alt="" class="w-full h-full object-cover rounded-full"/>
          </button>
        </div>
      </div>

      <!-- Size Selection -->
      <div>
        <span class="text-sm font-medium block mb-2">Kích cỡ:</span>
        <div class="flex space-x-2">
          <button
              v-for="size in sizes"
              :key="size.id"
              :class="selectedSize.id === size.id ? 'border-red-500 text-red-500' : 'border-gray-300'"
              class="min-w-[48px] h-12 border rounded-md flex items-center justify-center"
              @click="selectedSize = size"
          >
            {{ size.label }}
          </button>
        </div>
      </div>

      <!--       Action Buttons -->
      <div
          ref="buttonContainerRef"
          :class="[isSticky ? 'fixed' : '']"
          class=" bottom-0 left-0 right-0 bg-white border-t md:relative md:border-t-0 z-51"
      >
        <div class="grid gap-4">
          <button class="bg-[#dc2626] text-white py-3" @click="addToCart">Thêm vào giỏ</button>
        </div>
      </div>

      <!-- Product Description -->
      <el-collapse class="border-t border-b">
        <el-collapse-item name="1" title="Mô tả">
          <div class="text-sm text-gray-600 whitespace-pre-line">
            {{ product.short_description }}
          </div>
        </el-collapse-item>
        <el-collapse-item name="2" title="Chất liệu">
          <div class="text-sm text-gray-600 whitespace-pre-line">
            {{ product.materials }}
          </div>
        </el-collapse-item>
        <el-collapse-item name="3" title="Hướng dẫn sử dụng">
          <div class="text-sm text-gray-600 whitespace-pre-line">
            {{ product.instructions }}
          </div>
        </el-collapse-item>
      </el-collapse>

      <!-- Store Features -->
      <div class="space-y-4">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 flex items-center justify-center">
            <el-icon :size="30">
              <LazyElIconVan/>
            </el-icon>
          </div>
          <div>
            <h4 class="font-medium text-sm">Thanh toán khi nhận hàng (COD)</h4>
            <p class="text-xs text-gray-500">Giao hàng toàn quốc.</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 flex items-center justify-center">
            <el-icon size="30">
              <LazyElIconWallet/>
            </el-icon>
          </div>
          <div>
            <h4 class="font-medium text-sm">Miễn phí giao hàng</h4>
            <p class="text-xs text-gray-500">Với đơn hàng trên 599.000 đ</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 flex items-center justify-center">
            <el-icon size="30">
              <LazyElIconRefreshRight/>
            </el-icon>
          </div>
          <div>
            <h4 class="font-medium text-sm">Đổi hàng miễn phí</h4>
            <p class="text-xs text-gray-500">Trong 30 ngày kể từ ngày mua</p>
          </div>
        </div>
      </div>
    </div>
    <div class="space-y-4 mb-16">
      <h2 class="px-4 text-lg font-medium mb-4">Có thể bạn cũng thích</h2>
      <UiProductList
          :is-loading="isLoading"
          :products="suggestedProducts"
      />
    </div>

    <el-dialog
        v-model="showShare"
        :append-to-body="true"
        :modal="true"
        :show-close="true"
        custom-class="!rounded-t-xl md:!rounded-xl"
        title="Chia sẻ sản phẩm"
        width="90%"
    >
      <div class="flex flex-col space-y-4">
        <button class="flex items-center space-x-3 p-4 border rounded-lg">
          <el-icon class="text-xl">
            <LazyElIconMessage/>
          </el-icon>
          <span>Chia sẻ qua tin nhắn</span>
        </button>
        <button class="flex items-center space-x-3 p-4 border rounded-lg">
          <el-icon class="text-xl">
            <LazyElIconLink/>
          </el-icon>
          <span>Sao chép liên kết</span>
        </button>
      </div>
    </el-dialog>
  </div>

  <Transition
      enter-active-class="animate__animated animate__fadeInUp"
      leave-active-class="animate__animated animate__fadeOutDown"
  >
    <div v-if="isShowSizeGuide" class="fixed inset-0 bg-black bg-opacity-50 z-51">
      <div class="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl h-[80vh] overflow-hidden flex flex-col">
        <div class="flex items-center justify-between p-4 border-b">
          <div class="w-6 h-6"></div>
          <h3 class="text-lg font-medium">Gợi ý tìm size</h3>
          <button class="text-gray-500 hover:text-gray-700" @click="isShowSizeGuide=false">
            <Icon class="w-6 h-6" name="lucide:x"/>
          </button>
        </div>
        <div class="flex-1 overflow-y-auto p-4">
          <el-tabs v-model="activeTabName" class="h-[68vh]">
            <el-tab-pane label="Nam" name="first">
              <el-scrollbar height="40rem">
                <img alt="" class="w-full h-full" loading="lazy" src="~/assets/images/sizes/nammobile.png"/>
              </el-scrollbar>
            </el-tab-pane>
            <el-tab-pane label="Nữ" name="second">
              <el-scrollbar height="40rem">
                <img alt="" class="w-full h-full" loading="lazy" src="~/assets/images/sizes/nu_mobile.png"/>
              </el-scrollbar>
            </el-tab-pane>
            <el-tab-pane label="Trẻ em" name="third">
              <el-scrollbar height="40rem">
                <img alt="" class="w-full h-full" loading="lazy" src="~/assets/images/sizes/treemmb.png"/>
              </el-scrollbar>
            </el-tab-pane>
            <el-tab-pane label="Phụ kiện" name="fourth">
              <el-scrollbar height="40rem">
                <img alt="" class="w-full h-full" loading="lazy" src="~/assets/images/sizes/phukienmb.png"/>
              </el-scrollbar>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.el-icon {
  display: block;
}
</style>

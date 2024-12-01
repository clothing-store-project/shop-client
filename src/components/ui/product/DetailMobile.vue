<script lang="ts" setup>
import type {Product, ProductImage} from "~/types/product";

const images: ProductImage[] = [
  {
    id: 1,
    src: 'https://canifa.com/img/1000/1500/resize/6/t/6tw23w005-se257-1.webp',
    alt: 'Áo nỉ nữ basic cổ tròn - Hình 1'
  },
  {
    id: 2,
    src: 'https://canifa.com/img/1000/1500/resize/6/t/6tw23w005-se257-2.webp',
    alt: 'Áo nỉ nữ basic cổ tròn - Hình 2'
  },
  {
    id: 3,
    src: 'https://canifa.com/img/1000/1500/resize/6/t/6tw23w005-se257-3.webp',
    alt: 'Áo nỉ nữ basic cổ tròn - Hình 3'
  },
  {
    id: 4,
    src: 'https://canifa.com/img/1000/1500/resize/6/t/6tw23w005-se257-m-1-u.webp',
    alt: 'Áo nỉ nữ basic cổ tròn - Hình 4'
  },
]

const colors = [
  {id: 1, code: 'SP072', name: 'Beige', class: 'bg-[#E8D8C7]'},
  {id: 2, code: 'SP073', name: 'Green', class: 'bg-emerald-500'},
  {id: 3, code: 'SP074', name: 'Black', class: 'bg-black'},
  {id: 4, code: 'SP075', name: 'Purple', class: 'bg-purple-300'},
]

const sizes = [
  {id: 1, name: 'S'},
  {id: 2, name: 'M'},
  {id: 3, name: 'L'},
  {id: 4, name: 'XL'}
]

const product = ref({
  id: 1,
  name: 'Áo nỉ nữ basic cổ tròn',
  sku: '6TW23W005',
  short_description:'Áo nỉ nữ basic cổ tròn mẫu mới',
  price: 99000,
  originalPrice: 249000,
  discount: 60,
  sizes: sizes,
  images: images,
  colors: colors
})

const selectedSize = ref(product.value.sizes[0].id)
const selectedColor = ref(product.value.colors[0])
const currentImageIndex = ref(0)

const relatedProducts = ref<Product[]>([
  {
    id: 1,
    name: 'Quần nỉ bé trai in họa tiết cổ tứi',
    slug: 'quan-ni-be-trai-in-hoa-tiet-co-tui-1',
    price: 199000,
    originalPrice: 299000,
    discount: 33,
    image: 'https://canifa.com/img/1517/2000/resize/3/t/3tw23w005-sa855-110-1-u.webp',
    sizes: [
      {id: 1, value: '98'},
      {id: 2, value: '104'},
      {id: 3, value: '110'},
      {id: 4, value: '116'},
      {id: 5, value: '122'},
      {id: 6, value: '128'},
    ],
    colors: [
      {id: 1, value: 'https://media.canifa.com/attribute/swatch/images/sb128.webp'},
      {id: 2, value: 'https://media.canifa.com/attribute/swatch/images/sp189.webp'}
    ]
  },
  {
    id: 2,
    name: 'Quần nỉ bé trai in họa tiết cổ tứi',
    slug: 'quan-ni-be-trai-in-hoa-tiet-co-tui-2',
    price: 199000,
    originalPrice: 299000,
    discount: 33,
    image: 'https://canifa.com/img/1517/2000/resize/2/b/2bp24w014-sg305-2.webp',
    sizes: [
      {id: 1, value: '98'},
      {id: 2, value: '104'},
      {id: 3, value: '110'},
      {id: 4, value: '116'},
      {id: 5, value: '122'},
      {id: 6, value: '128'},
    ],
    colors: [
      {id: 1, value: 'https://media.canifa.com/attribute/swatch/images/sb128.webp'},
      {id: 2, value: 'https://media.canifa.com/attribute/swatch/images/sp189.webp'}
    ]
  },
  {
    id: 3,
    name: 'Quần nỉ bé trai in họa tiết cổ tứi',
    slug: 'quan-ni-be-trai-in-hoa-tiet-co-tui-3',
    price: 199000,
    originalPrice: 299000,
    discount: 33,
    image: 'https://canifa.com/img/1517/2000/resize/3/t/3tw23w005-sa855-110-1-u.webp',
    sizes: [
      {id: 1, value: '98'},
      {id: 2, value: '104'},
      {id: 3, value: '110'},
      {id: 4, value: '116'},
      {id: 5, value: '122'},
      {id: 6, value: '128'},
    ],
    colors: [
      {id: 1, value: 'https://media.canifa.com/attribute/swatch/images/sb128.webp'},
      {id: 2, value: 'https://media.canifa.com/attribute/swatch/images/sp189.webp'}
    ]
  },
  {
    id: 4,
    name: 'Quần nỉ bé trai in họa tiết cổ tứi',
    slug: 'quan-ni-be-trai-in-hoa-tiet-co-tui-4',
    price: 199000,
    originalPrice: 299000,
    discount: 33,
    image: 'https://canifa.com/img/1517/2000/resize/3/t/3tw23w005-sa855-110-1-u.webp',
    sizes: [
      {id: 1, value: '98'},
      {id: 2, value: '104'},
      {id: 3, value: '110'},
      {id: 4, value: '116'},
      {id: 5, value: '122'},
      {id: 6, value: '128'},
    ],
    colors: [
      {id: 1, value: 'https://media.canifa.com/attribute/swatch/images/sb128.webp'},
      {id: 2, value: 'https://media.canifa.com/attribute/swatch/images/sp189.webp'}
    ]
  },
  {
    id: 5,
    name: 'Quần nỉ bé trai in họa tiết cổ tứi',
    slug: 'quan-ni-be-trai-in-hoa-tiet-co-tui-5',
    price: 199000,
    originalPrice: 299000,
    discount: 33,
    image: 'https://canifa.com/img/1517/2000/resize/3/t/3tw23w005-sa855-110-1-u.webp',
    sizes: [
      {id: 1, value: '98'},
      {id: 2, value: '104'},
      {id: 3, value: '110'},
      {id: 4, value: '116'},
      {id: 5, value: '122'},
      {id: 6, value: '128'},
    ],
    colors: [
      {id: 1, value: 'https://media.canifa.com/attribute/swatch/images/sb128.webp'},
      {id: 2, value: 'https://media.canifa.com/attribute/swatch/images/sp189.webp'}
    ]
  },
  {
    id: 6,
    name: 'Quần nỉ bé trai in họa tiết cổ tứi',
    slug: 'quan-ni-be-trai-in-hoa-tiet-co-tui-6',
    price: 199000,
    originalPrice: 299000,
    discount: 33,
    image: 'https://canifa.com/img/1517/2000/resize/2/b/2bp24w014-sg305-2.webp',
    sizes: [
      {id: 1, value: '98'},
      {id: 2, value: '104'},
      {id: 3, value: '110'},
      {id: 4, value: '116'},
      {id: 5, value: '122'},
      {id: 6, value: '128'},
    ],
    colors: [
      {id: 1, value: 'https://media.canifa.com/attribute/swatch/images/sb128.webp'},
      {id: 2, value: 'https://media.canifa.com/attribute/swatch/images/sp189.webp'}
    ]
  },
  {
    id: 7,
    name: 'Quần nỉ bé trai in họa tiết cổ tứi',
    slug: 'quan-ni-be-trai-in-hoa-tiet-co-tui-7',
    price: 199000,
    originalPrice: 299000,
    discount: 33,
    image: 'https://canifa.com/img/1517/2000/resize/3/t/3tw23w005-sa855-110-1-u.webp',
    sizes: [
      {id: 1, value: '98'},
      {id: 2, value: '104'},
      {id: 3, value: '110'},
      {id: 4, value: '116'},
      {id: 5, value: '122'},
      {id: 6, value: '128'},
    ],
    colors: [
      {id: 1, value: 'https://media.canifa.com/attribute/swatch/images/sb128.webp'},
      {id: 2, value: 'https://media.canifa.com/attribute/swatch/images/sp189.webp'}
    ]
  },
  {
    id: 8,
    name: 'Quần nỉ bé trai in họa tiết cổ tứi',
    slug: 'quan-ni-be-trai-in-hoa-tiet-co-tui-8',
    price: 199000,
    originalPrice: 299000,
    discount: 33,
    image: 'https://canifa.com/img/1517/2000/resize/3/t/3tw23w005-sa855-110-1-u.webp',
    sizes: [
      {id: 1, value: '98'},
      {id: 2, value: '104'},
      {id: 3, value: '110'},
      {id: 4, value: '116'},
      {id: 5, value: '122'},
      {id: 6, value: '128'},
    ],
    colors: [
      {id: 1, value: 'https://media.canifa.com/attribute/swatch/images/sb128.webp'},
      {id: 2, value: 'https://media.canifa.com/attribute/swatch/images/sp189.webp'}
    ]
  },
])

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % images.length
}

const prevImage = () => {
  currentImageIndex.value = (currentImageIndex.value - 1 + images.length) % images.length
}

const setImage = (index: number) => {
  currentImageIndex.value = index
}

const buttonContainerRef = ref<HTMLElement | null>(null)
const isSticky = ref(false)
const isHeaderVisible = ref(false)
const showShare = ref(false)

const router = useRouter()
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
useSeoMeta({
  title: product.value.name,
  ogTitle: product.value.name,
  description: product.value.short_description,
  ogDescription: product.value.short_description,
  ogImage: product.value.images[0].src
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
      <div class="relative overflow-hidden w-full">
        <img
            :alt="images[currentImageIndex].alt"
            :src="images[currentImageIndex].src"
        />
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
            class="absolute left-4 bottom-0 -translate-y-1/2 bg-transparent rounded-full p-2"
            @click="prevImage"
        >
          <el-icon>
            <LazyElIconArrowLeft/>
          </el-icon>
        </button>
        <button
            class="absolute right-4 bottom-0 -translate-y-1/2 bg-transparent rounded-full p-2"
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
            v-for="(_, index) in images"
            :key="index"
            :class="currentImageIndex === index ? 'bg-white' : 'bg-white/50'"
            class="w-2 h-2 rounded-full"
            @click="setImage(index)"
        />
      </div>
    </div>

    <!-- Desktop Product Gallery -->
    <div class="hidden md:block px-4 py-8 w-full">
      <nav class="flex items-center space-x-2 text-sm mb-8">
        <NuxtLink class="text-gray-500 hover:text-gray-700" to="/">Trang chủ</NuxtLink>
        <span class="text-gray-500">/</span>
        <NuxtLink class="text-gray-500 hover:text-gray-700" to="#">Nữ</NuxtLink>
        <span class="text-gray-500">/</span>
        <span class="text-gray-900">Áo nỉ</span>
      </nav>

      <div class="aspect-[3/4] relative overflow-hidden rounded-lg w-full h-full">
        <img
            :alt="images[currentImageIndex].alt"
            :src="images[currentImageIndex].src"
            class="w-full h-full object-cover"
        />
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
      <div class="mt-4 grid grid-cols-4 gap-4">
        <button
            v-for="(image, index) in images"
            :key="image.id"
            :class="{ 'ring-2 ring-red-500': currentImageIndex === index }"
            class="aspect-square rounded-lg overflow-hidden"
            @click="setImage(index)"
        >
          <img :alt="image.alt" :src="image.src" class="w-full h-full object-cover"/>
        </button>
      </div>
    </div>

    <!-- Product Info -->
    <div class="px-4 py-4 space-y-4">
      <div>
        <h1 class="text-lg md:text-2xl font-medium">{{ product.name }}</h1>
        <p class="text-gray-500 text-sm">Mã sp: {{ product.sku }}</p>
      </div>

      <div class="flex items-baseline space-x-4">
        <span class="text-xl md:text-2xl font-bold">{{ useFormatNumber(product.price) }}</span>
        <span class="text-gray-500 line-through">{{ useFormatNumber(product.originalPrice) }}</span>
        <span class="text-red-500">{{
            ((product.originalPrice - product.price) / product.originalPrice * 100).toFixed(0)
          }}%</span>
      </div>

      <!-- Promotion Banner -->
      <div class="bg-gradient-to-r from-red-600 to-red-500 text-white p-3 rounded">
        <p class="font-medium">Nhập mã GIAM50</p>
        <p class="text-sm">Giảm thêm 50.000₫ cho hóa đơn từ 999K</p>
      </div>

      <!-- Color Selection -->
      <div>
        <div class="flex items-center justify-between mb-2">
          <span class="text-sm font-medium">Màu sắc: {{ selectedColor.name }}</span>
          <button class="text-blue-500 text-sm flex gap-1 items-center">
            <el-icon>
              <LazyElIconQuestionFilled/>
            </el-icon>
            Gợi ý size
          </button>
        </div>
        <div class="flex space-x-2">
          <button
              v-for="color in product.colors"
              :key="color.code"
              :class="[
              color.class,
              selectedColor.id === color.id ? 'ring-red-500' : 'ring-transparent'
            ]"
              class="w-8 h-8 rounded-full ring-2 ring-offset-2"
              @click="selectedColor = color"
          />
        </div>
      </div>

      <!-- Size Selection -->
      <div>
        <span class="text-sm font-medium block mb-2">Kích cỡ:</span>
        <div class="flex space-x-2">
          <button
              v-for="size in product.sizes"
              :key="size.id"
              :class="selectedSize === size.id ? 'border-red-500 text-red-500' : 'border-gray-300'"
              class="min-w-[48px] h-12 border rounded-md flex items-center justify-center"
              @click="selectedSize = size.id"
          >
            {{ size.name }}
          </button>
        </div>
      </div>

      <!-- Action Buttons -->
      <div
          ref="buttonContainerRef"
          :class="[isSticky ? 'fixed' : '']"
          class=" bottom-0 left-0 right-0 bg-white border-t md:relative md:border-t-0 z-51"
      >
        <div class="grid gap-4">
          <button class="bg-[#dc2626] text-white py-3">Thêm vào giỏ</button>
        </div>
      </div>

      <!-- Product Description -->
      <el-collapse class="border-t border-b">
        <el-collapse-item name="1" title="Mô tả">
          <div class="text-sm text-gray-600 space-y-2">
            <p>Áo nỉ dài tay dáng regular, thiết kế đơn giản, mặc thoải mái và dễ kết hợp với nhiều loại trang phục.</p>
            <p>Chất liệu 100% polyester.</p>
          </div>
        </el-collapse-item>
        <el-collapse-item name="2" title="Chất liệu">
          <div class="text-sm text-gray-600">
            <p>100% polyester</p>
          </div>
        </el-collapse-item>
        <el-collapse-item name="3" title="Hướng dẫn sử dụng">
          <div class="text-sm text-gray-600">
            <p>Giặt máy ở nhiệt độ thường.</p>
            <p>Không sử dụng chất tẩy.</p>
            <p>Phơi trong bóng râm.</p>
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

      <!-- Related Products -->
    </div>
    <div class="px-4 py-4 space-y-4 mb-12">
      <h2 class="text-lg font-medium mb-4">Có thể bạn cũng thích</h2>
      <UiProductList :products="relatedProducts"/>
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
</template>

<style lang="scss" scoped>
.el-icon {
  display: block;
}
</style>

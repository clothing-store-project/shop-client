<script lang="ts" setup>
import type {Color, ProductDetail, Size} from "~/types/product";

const product = ref<ProductDetail>({
      id: 123,
      name: "Áo thun nam",
      description: "Áo thun nam chất lượng cao, thoáng mát, dễ chịu.",
      short_description: "Áo thun nam chất liệu cotton.",
      materials: 'Cotton',
      instructions: 'Giặt tay',
      price: 200000,
      regular_price: 200000,
      status: 1,
      slug: "ao-thun-nam",
      stock: {
        is_in_stock: true,
        quantity: 50
      },
      season: 'Summer',
      category: [
        {
          category_id: 1,
          name: "Áo",
          position: 1
        },
        {
          category_id: 2,
          name: "Nam",
          position: 2
        }
      ],
      media_gallery: [
        {
          path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sk010-xl-1-u.webp",
          pos: 1,
        },
        {
          path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sk010-xl-1-u.webp",
          pos: 2
        }
      ],
      configurable_options: [
        {
          attribute_code: "color",
          label: "Màu sắc",
          values: [
            {
              id: 1,
              label: "Đỏ",
              swatch: {
                swatch_link: "https://media.canifa.com/attribute/swatch/images/sa476.webp",
                type: 1
              }
            },
            {
              id: 2,
              label: "Xanh",
              swatch: {
                swatch_link: "https://media.canifa.com/attribute/swatch/images/sl302.webp",
                type: 1
              }
            }
          ]
        },
        {
          attribute_code: "size",
          label: "Kích cỡ",
          values: [
            {
              id: 1,
              label: "M"
            },
            {
              id: 2,
              label: "L"
            }
          ]
        }
      ],
      configurable_children: [
        {
          id: 1,
          name: "Áo thun nam - Đỏ - M",
          sku: "ATN-001-RD-M",
          price: 170000,
          regular_price: 180000,
          is_pre_order: false,
          stock: {
            is_in_stock: true,
            quantity: 30
          },
          image: "https://example.com/images/product-variant-red-m.jpg",
          thumbnail: "https://example.com/images/product-variant-red-m-thumb.jpg",
          size: {
            id: 1,
            label: "M"
          },
          color: {
            id: 1,
            label: "Đỏ",
            swatch: {
              swatch_link: "https://example.com/images/color-swatch-red.jpg",
              type: 1
            }
          },
          media_gallery: [
            {
              path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sk010-xl-2.webp",
              pos: 1
            },
            {
              path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sk010-xl-2.webp",
              pos: 2,
            }
          ]
        },
        {
          id: 2,
          name: "Áo thun nam - Xanh - L",
          sku: "ATN-001-BL-L",
          price: 170000,
          regular_price: 180000,
          is_pre_order: false,
          stock: {
            is_in_stock: true,
            quantity: 20
          },
          image: "https://example.com/images/product-variant-blue-l.jpg",
          thumbnail: "https://example.com/images/product-variant-blue-l-thumb.jpg",
          size: {
            id: 2,
            label: "L"
          },
          color: {
            id: 2,
            label: "Xanh",
            swatch: {
              swatch_link: "https://example.com/images/color-swatch-blue.jpg",
              type: 1
            }
          },
          media_gallery: [
            {
              path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-1-u.webp",
              pos: 1
            },
            {
              path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-2.webp",
              pos: 2
            }
          ]
        },
        {
          id: 3,
          name: "Áo thun nam - Đỏ - L",
          sku: "ATN-001-RD-L",
          price: 170000,
          regular_price: 180000,
          is_pre_order: false,
          stock: {
            is_in_stock: true,
            quantity: 20
          },
          image: "https://example.com/images/product-variant-blue-l.jpg",
          thumbnail: "https://example.com/images/product-variant-blue-l-thumb.jpg",
          size: {
            id: 2,
            label: "L"
          },
          color: {
            id: 1,
            label: "Đỏ",
            swatch: {
              swatch_link: "https://example.com/images/color-swatch-blue.jpg",
              type: 1
            }
          },
          media_gallery: [
            {
              path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-1-u.webp",
              pos: 1
            },
            {
              path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-2.webp",
              pos: 2
            }
          ]
        },
        {
          id: 4,
          name: "Áo thun nam - Xanh - M",
          sku: "ATN-001-BL-M",
          price: 170000,
          regular_price: 180000,
          is_pre_order: false,
          stock: {
            is_in_stock: true,
            quantity: 20
          },
          image: "https://example.com/images/product-variant-blue-l.jpg",
          thumbnail: "https://example.com/images/product-variant-blue-l-thumb.jpg",
          size: {
            id: 1,
            label: "M"
          },
          color: {
            id: 2,
            label: "Xanh",
            swatch: {
              swatch_link: "https://example.com/images/color-swatch-blue.jpg",
              type: 1
            }
          },
          media_gallery: [
            {
              path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-1-u.webp",
              pos: 1
            },
            {
              path: "https://canifa.com/img/1517/2000/resize/8/t/8ts25a001-sl302-xl-2.webp",
              pos: 2
            }
          ]
        }
      ]
    }
)
// const selectedSize = ref(product.value.sizes[0].id)
// const selectedColor = ref(product.value.colors[0])

// const relatedProducts = ref<Product[]>([
//   {
//     id: 1,
//     name: 'Quần nỉ bé trai in họa tiết cổ tứi',
//     slug: 'quan-ni-be-trai-in-hoa-tiet-co-tui-1',
//     sku: 'BTS25A001',
//     price: 199000,
//     originalPrice: 299000,
//     discount: 33,
//     image: 'https://canifa.com/img/1517/2000/resize/3/t/3tw23w005-sa855-110-1-u.webp',
//     sizes: [
//       {id: 1, value: '98'},
//       {id: 2, value: '104'},
//       {id: 3, value: '110'},
//       {id: 4, value: '116'},
//       {id: 5, value: '122'},
//       {id: 6, value: '128'},
//     ],
//     colors: [
//       {id: 1, name: 'Xanh', value: 'https://media.canifa.com/attribute/swatch/images/sb128.webp'},
//       {id: 2, name: 'Xanh', value: 'https://media.canifa.com/attribute/swatch/images/sp189.webp'}
//     ]
//   },
//   {
//     id: 2,
//     name: 'Quần nỉ bé trai in họa tiết cổ tứi',
//     slug: 'quan-ni-be-trai-in-hoa-tiet-co-tui-2',
//     sku: 'BTS25A001',
//     price: 199000,
//     originalPrice: 299000,
//     discount: 33,
//     image: 'https://canifa.com/img/1517/2000/resize/2/b/2bp24w014-sg305-2.webp',
//     sizes: [
//       {id: 1, value: '98'},
//       {id: 2, value: '104'},
//       {id: 3, value: '110'},
//       {id: 4, value: '116'},
//       {id: 5, value: '122'},
//       {id: 6, value: '128'},
//     ],
//     colors: [
//       {id: 1, name: 'Xanh', value: 'https://media.canifa.com/attribute/swatch/images/sb128.webp'},
//       {id: 2, name: 'Xanh', value: 'https://media.canifa.com/attribute/swatch/images/sp189.webp'}
//     ]
//   },
//   {
//     id: 3,
//     name: 'Quần nỉ bé trai in họa tiết cổ tứi',
//     slug: 'quan-ni-be-trai-in-hoa-tiet-co-tui-3',
//     sku: 'BTS25A001',
//     price: 199000,
//     originalPrice: 299000,
//     discount: 33,
//     image: 'https://canifa.com/img/1517/2000/resize/3/t/3tw23w005-sa855-110-1-u.webp',
//     sizes: [
//       {id: 1, value: '98'},
//       {id: 2, value: '104'},
//       {id: 3, value: '110'},
//       {id: 4, value: '116'},
//       {id: 5, value: '122'},
//       {id: 6, value: '128'},
//     ],
//     colors: [
//       {id: 1, name: 'Xanh', value: 'https://media.canifa.com/attribute/swatch/images/sb128.webp'},
//       {id: 2, name: 'Xanh', value: 'https://media.canifa.com/attribute/swatch/images/sp189.webp'}
//     ]
//   },
//   {
//     id: 4,
//     name: 'Quần nỉ bé trai in họa tiết cổ tứi',
//     slug: 'quan-ni-be-trai-in-hoa-tiet-co-tui-4',
//     sku: 'BTS25A001',
//     price: 199000,
//     originalPrice: 299000,
//     discount: 33,
//     image: 'https://canifa.com/img/1517/2000/resize/3/t/3tw23w005-sa855-110-1-u.webp',
//     sizes: [
//       {id: 1, value: '98'},
//       {id: 2, value: '104'},
//       {id: 3, value: '110'},
//       {id: 4, value: '116'},
//       {id: 5, value: '122'},
//       {id: 6, value: '128'},
//     ],
//     colors: [
//       {id: 1, name: 'Xanh', value: 'https://media.canifa.com/attribute/swatch/images/sb128.webp'},
//       {id: 2, name: 'Xanh', value: 'https://media.canifa.com/attribute/swatch/images/sp189.webp'}
//     ]
//   },
//   {
//     id: 5,
//     name: 'Quần nỉ bé trai in họa tiết cổ tứi',
//     slug: 'quan-ni-be-trai-in-hoa-tiet-co-tui-5',
//     sku: 'BTS25A001',
//     price: 199000,
//     originalPrice: 299000,
//     discount: 33,
//     image: 'https://canifa.com/img/1517/2000/resize/3/t/3tw23w005-sa855-110-1-u.webp',
//     sizes: [
//       {id: 1, value: '98'},
//       {id: 2, value: '104'},
//       {id: 3, value: '110'},
//       {id: 4, value: '116'},
//       {id: 5, value: '122'},
//       {id: 6, value: '128'},
//     ],
//     colors: [
//       {id: 1, name: 'Xanh', value: 'https://media.canifa.com/attribute/swatch/images/sb128.webp'},
//       {id: 2, name: 'Xanh', value: 'https://media.canifa.com/attribute/swatch/images/sp189.webp'}
//     ]
//   },
//   {
//     id: 6,
//     name: 'Quần nỉ bé trai in họa tiết cổ tứi',
//     slug: 'quan-ni-be-trai-in-hoa-tiet-co-tui-6',
//     sku: 'BTS25A001',
//     price: 199000,
//     originalPrice: 299000,
//     discount: 33,
//     image: 'https://canifa.com/img/1517/2000/resize/2/b/2bp24w014-sg305-2.webp',
//     sizes: [
//       {id: 1, value: '98'},
//       {id: 2, value: '104'},
//       {id: 3, value: '110'},
//       {id: 4, value: '116'},
//       {id: 5, value: '122'},
//       {id: 6, value: '128'},
//     ],
//     colors: [
//       {id: 1, name: 'Xanh', value: 'https://media.canifa.com/attribute/swatch/images/sb128.webp'},
//       {id: 2, name: 'Xanh', value: 'https://media.canifa.com/attribute/swatch/images/sp189.webp'}
//     ]
//   },
//   {
//     id: 7,
//     name: 'Quần nỉ bé trai in họa tiết cổ tứi',
//     slug: 'quan-ni-be-trai-in-hoa-tiet-co-tui-7',
//     sku: 'BTS25A001',
//     price: 199000,
//     originalPrice: 299000,
//     discount: 33,
//     image: 'https://canifa.com/img/1517/2000/resize/3/t/3tw23w005-sa855-110-1-u.webp',
//     sizes: [
//       {id: 1, value: '98'},
//       {id: 2, value: '104'},
//       {id: 3, value: '110'},
//       {id: 4, value: '116'},
//       {id: 5, value: '122'},
//       {id: 6, value: '128'},
//     ],
//     colors: [
//       {id: 1, name: 'Xanh', value: 'https://media.canifa.com/attribute/swatch/images/sb128.webp'},
//       {id: 2, name: 'Xanh', value: 'https://media.canifa.com/attribute/swatch/images/sp189.webp'}
//     ]
//   },
//   {
//     id: 8,
//     name: 'Quần nỉ bé trai in họa tiết cổ tứi',
//     slug: 'quan-ni-be-trai-in-hoa-tiet-co-tui-8',
//     sku: 'BTS25A001',
//     price: 199000,
//     originalPrice: 299000,
//     discount: 33,
//     image: 'https://canifa.com/img/1517/2000/resize/3/t/3tw23w005-sa855-110-1-u.webp',
//     sizes: [
//       {id: 1, value: '98'},
//       {id: 2, value: '104'},
//       {id: 3, value: '110'},
//       {id: 4, value: '116'},
//       {id: 5, value: '122'},
//       {id: 6, value: '128'},
//     ],
//     colors: [
//       {id: 1, name: 'Xanh', value: 'https://media.canifa.com/attribute/swatch/images/sb128.webp'},
//       {id: 2, name: 'Xanh', value: 'https://media.canifa.com/attribute/swatch/images/sp189.webp'}
//     ]
//   },
// ])

const currentImageIndex = ref(0)
const allImages = computed(() => {
  const mainImages = product.value.media_gallery.map(media => media.path)
  const variantImages = product.value.configurable_children.flatMap(child => child.media_gallery.map(media => media.path))
  return [...mainImages, ...variantImages]
})

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
// useSeoMeta({
//   title: product.value.name,
//   ogTitle: product.value.name,
//   description: product.value.short_description,
//   ogDescription: product.value.short_description,
//   ogImage: product.value.images[0].src
// })
const colors = computed(() => product.value.configurable_options.find(option => option.attribute_code === 'color')?.values || []);
const sizes = computed(() => product.value.configurable_options.find(option => option.attribute_code === 'size')?.values || []);

const selectedColor = ref<Color>(product.value.configurable_children[0].color)
const selectedSize = ref<Size>(product.value.configurable_children[0].size)
const selectedSku = computed(() => {
  const child = product.value.configurable_children.find(
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
          <button class="text-blue-500 text-sm flex gap-1 items-center">
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
    <!--    <div class="px-4 py-4 space-y-4 mb-12">-->
    <!--      <h2 class="text-lg font-medium mb-4">Có thể bạn cũng thích</h2>-->
    <!--      <UiProductList :products="relatedProducts"/>-->
    <!--    </div>-->

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

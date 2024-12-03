<script lang="ts" setup>
import {ElScrollbar} from "element-plus";
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

const scrollbarRef = ref<InstanceType<typeof ElScrollbar>>()
const innerRef = ref<HTMLDivElement>()
const handleScroll = ({scrollTop}) => {
  console.log(scrollTop)
}
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div class="flex flex-col md:flex-row gap-8">
      <!-- Image Gallery with Slider (Left Column) -->
      <div class="w-full md:w-1/2 md:sticky   flex h-[40rem] gap-4">
        <div class="aspect-square overflow-hidden rounded-lg relative group">
          <div class="relative w-full h-full">
            <TransitionGroup name="slide">
              <img
                  v-for="(image, index) in allImages"
                  :key="index"
                  :alt="product.name"
                  :class="{ 'opacity-0': currentImageIndex !== index }"
                  :src="image"
                  class="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500"
              />
            </TransitionGroup>
          </div>

          <!-- Navigation Arrows -->
          <button
              class="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity flex"
              @click="prevImage"
          >
            <Icon class="w-6 h-6" name="lucide:chevron-left"/>
          </button>
          <button
              class="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity flex"
              @click="nextImage"
          >
            <Icon class="w-6 h-6" name="lucide:chevron-right"/>
          </button>
        </div>

        <!-- Thumbnails -->
        <el-scrollbar ref="scrollbarRef" class="flex flex-col gap-2 w-25" height="40rem" @scroll="handleScroll">
          <button
              v-for="(image, index) in allImages"
              :key="index"
              ref="innerRef"
              :class="{ 'ring-2 ring-primary ring-offset-2': currentImageIndex === index }"
              class="w-20 h-20 flex-shrink-0 rounded-lg  transition-all mx-1 my-1"
              @click="setImage(index)"
          >
            <img
                :alt="`${product.name} thumbnail ${index + 1}`"
                :src="image"
                class="w-full h-full object-cover rounded-lg"
            />
          </button>
        </el-scrollbar>
      </div>

      <!-- Product Info -->
      <div class="w-full md:w-1/2 space-y-6">
        <div class="space-y-2">
          <h1 class="text-2xl font-semibold">{{ product.name }}</h1>
          <p class="text-sm text-gray-600">Mã sp: {{ selectedSku }}</p>
        </div>

        <p class="text-xl font-bold text-primary">{{ product.price.toLocaleString() }} đ</p>

        <!-- Promotional Banner -->
        <div class="rounded-lg">
          <img
              alt="Promotional Banner"
              class="w-full h-auto"
              src="https://media.canifa.com/attribute/swatch/d/e/desktop.webp"
          />
        </div>

        <!-- Color Selection -->
        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <p class="text-sm">Màu sắc: {{ selectedColor.label }}</p>

          </div>
          <div class="flex gap-2">
            <button
                v-for="color in colors"
                :key="color.id"
                :class="[{ 'ring-2 ring-primary ring-offset-2': selectedColor.id === color.id }]"
                class="w-8 h-8 rounded-full transition-transform hover:scale-110"
                @click="()=>{selectedColor = color as Color}">
              <img :src="color.swatch.swatch_link" alt="color" class="w-8 h-8 rounded-full"/>
            </button>
          </div>
        </div>

        <!-- Size Selection -->
        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <p class="text-sm">Kích cỡ</p>
            <el-link class="text-sm" type="primary">
              Gợi ý tìm size
              <Icon class="w-4 h-4" name="lucide:chevron-right"/>
            </el-link>
          </div>
          <div class="flex gap-2">
            <div class="flex space-x-2">

              <button
                  v-for="size in sizes"
                  :key="size.id"
                  :class="selectedSize.id === size.id ? 'border-red-500 text-red-500' : 'border-gray-300'"
                  class="min-w-[48px] h-12 border rounded-md flex items-center justify-center"
                  @click="() => { selectedSize = size }"
              >
                {{ size.label }}
              </button>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex gap-4">
          <button class="flex-1 bg-[#f62f30] h-10 text-white">
            Thêm vào giỏ
          </button>
        </div>

        <!-- Description -->
        <div class="pt-4">
          <el-collapse>
            <el-collapse-item name="description" title="Mô tả">
              <p>{{ 'Áo phòng nam' }}</p>
            </el-collapse-item>
          </el-collapse>
          <el-collapse>
            <el-collapse-item name="description" title="Mô tả">
              <p>{{ 'Áo phòng nam' }}</p>
            </el-collapse-item>
          </el-collapse>
          <el-collapse>
            <el-collapse-item name="description" title="Mô tả">
              <p>{{ 'Áo phòng nam' }}</p>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>


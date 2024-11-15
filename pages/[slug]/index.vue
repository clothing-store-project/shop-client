<script lang="ts" setup>
import {MinusIcon, PlusIcon} from 'lucide-vue-next'
import type {FormInstance, FormRules} from "element-plus";
import type {Rating} from "~/types/rating";

const route = useRoute()

const product = ref({
  id: 1,
  slug: 'regular-collar-women-regular-fit-jacket',
  name: 'Regular Collar Women Regular Fit Jacket',
  price: 125.75,
  originalPrice: 132.17,
  categories: 'Dresses',
  tag: 'SALE 20% OFF',
  short_description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  sku: 'PRT584E63A',
  rating: 3.5,
  rate_count: 5,
  reviews: 5,
  images: [
    'https://pet-project-shop.github.io/template/images/products/product-detail4/lady.png',
    'https://pet-project-shop.github.io/template/images/products/product-detail4/lady-2.png',
    'https://pet-project-shop.github.io/template/images/products/product-detail4/lady-3.png'
  ],
  colors: [
    {
      name: 'Yellow',
      value: '#cdb935'
    },
    {
      name: 'White',
      value: '#FFFFFF'
    },
    {
      name: 'Red',
      value: '#FF0000'
    },
    {
      name: 'Blue',
      value: '#0000FF'
    }
  ],
  sizes: ['S', 'M', 'L']
})
const selectedImage = ref(product.value.images[0])
const quantity = ref(1)
// Selectors
const selectedSize = ref('M')
const ratingError = ref<boolean>(false)
const selectedColor = ref(product.value.colors[0])

const activeTab = ref('description')

// Reviews
const reviews = ref([
  {
    id: 1,
    name: 'John Doe',
    avatar: 'https://pet-project-shop.github.io/template/images/profile2.jpg',
    date: 'May 20, 2023',
    rating: 5,
    comment: 'Great product! The fit is perfect and the quality is excellent. Highly recommended!'
  },
  {
    id: 2,
    name: 'Jane Smith',
    avatar: 'https://pet-project-shop.github.io/template/images/profile2.jpg',
    date: 'May 18, 2023',
    rating: 4,
    comment: 'Nice jacket, but the color is slightly different from what I expected. Still, it\'s comfortable and stylish.'
  }
])

const rating = ref<number>(0)
const ruleFormRef = ref<FormInstance>()

const ruleForm = reactive<Rating>({
  author: '',
  email: '',
  comment: ''
})

const {t} = useI18n()

const rules = reactive<FormRules<Rating>>({
  author: [
    {required: true, message: t('validate.name.required'), trigger: 'blur'},
    {min: 3, message: t('validate.name.min', {value: 3}), trigger: 'blur'},
    {max: 255, message: t('validate.name.max', {value: 255}), trigger: 'blur'}
  ],
  email: [
    {required: true, message: t('validate.email.required'), trigger: 'blur'},
    {type: 'email', message: t('validate.email.email'), trigger: 'blur'},
    {max: 255, message: t('validate.email.max', {value: 255}), trigger: 'blur'}
  ],
  comment: [
    {required: true, message: t('validate.comment.required'), trigger: 'blur'},
    {min: 10, message: t('validate.comment.min',{value:10}), trigger: 'blur'},
    {max: 500, message: t('validate.comment.max',{value:500}), trigger: 'blur'}
  ]
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return

  await formEl.validate(async (valid: boolean) => {
    if (rating.value === 0) {
      ratingError.value = true
      return
    }

    if (!valid) return
    reviews.value.push({
      id: reviews.value.length + 1,
      name: ruleForm.author,
      avatar: 'https://pet-project-shop.github.io/template/images/profile2.jpg',
      date: new Date().toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'}),
      rating: rating.value,
      comment: ruleForm.comment
    })

    formEl.resetFields()
    rating.value = 0
    ratingError.value = false
  })
}

// Methods
const addToCart = () => {
  console.log('Added to cart:', {
    quantity: quantity.value,
    size: selectedSize.value,
    color: selectedColor.value
  })
}

watch(() => rating.value, () => {
  ratingError.value = false
})

</script>

<template>
  <!-- Breadcrumb -->
  <div class="container mx-auto px-4 py-4">
    <div class="flex items-center space-x-2 text-sm">
      <NuxtLinkLocale class="text-gray-500 hover:text-black" to="/">{{ $t('general.home') }}</NuxtLinkLocale>
      <span class="text-gray-400">/</span>
      <NuxtLinkLocale class="text-gray-500 hover:text-black" to="#">{{ product.categories }}</NuxtLinkLocale>
      <span class="text-gray-400">/</span>
      <span class="text-gray-900">{{ product.name }}</span>
    </div>
  </div>

  <!-- Product Section -->
  <main class="container mx-auto px-4 py-8">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Product Images -->
      <div class="space-y-4">
        <div class="relative">
          <img
              :src="selectedImage"
              alt="Product Image"
              class="w-full rounded-lg"
          />
          <span class="absolute top-4 right-4 bg-black text-white px-3 py-1 text-sm">
              {{ product.tag }}
          </span>
        </div>
        <div class="flex space-x-4">
          <button
              v-for="(image, index) in product.images"
              :key="index"
              :class="{ 'border-black': selectedImage === image }"
              class="w-20 h-20 rounded-lg border overflow-hidden"
              @click="selectedImage = image"
          >
            <img :src="image" alt="Thumbnail" class="w-full h-full object-cover"/>
          </button>
        </div>
      </div>

      <!-- Product Details -->
      <div class="space-y-6">
        <h1 class="text-3xl font-bold">{{ product.name }}</h1>

        <div class="flex items-center space-x-2">
          <div class="flex">
            <el-rate
                v-model="product.rating"
                :score-template="$t('general.rate_count', { value:product.rating,count: product.rate_count })"
                disabled
                show-score
                size="large"
                text-color="#4b5563"
            />
          </div>
        </div>

        <p class="text-gray-600">{{ product.short_description }}</p>

        <div class="flex items-center space-x-2">
          <span class="text-2xl font-bold">${{ product.price.toFixed(2) }}</span>
          <span class="text-gray-500 line-through">${{ product.originalPrice.toFixed(2) }}</span>
        </div>

        <!-- Size Selector -->
        <div class="space-y-2">
          <label class="block text-sm font-medium">{{ $t('general.size') }}: {{ selectedSize }}</label>
          <div class="flex space-x-2">
            <button
                v-for="size in product.sizes"
                :key="size"
                :class="selectedSize === size ? 'border-black bg-black text-white' : 'border-gray-300'"
                class="w-10 h-10 rounded-full border flex items-center justify-center"
                @click="selectedSize = size"
            >
              {{ size }}
            </button>
          </div>
        </div>

        <!-- Color Selector -->
        <div class="space-y-2">
          <label class="block text-sm font-medium">{{ $t('general.color') }}: {{ selectedColor.name }}</label>
          <div class="flex space-x-2">
            <button
                v-for="color in product.colors"
                :key="color.name"
                :class="{
                  'border-black': selectedColor.name === color.name,
                  'border-transparent': selectedColor.name !== color.name
                }"
                class="w-10 h-10 rounded-full border-2"
                @click="selectedColor = color"
            >
                <span
                    :style="{ backgroundColor: color.value }"
                    class="block w-full h-full rounded-full border-2"
                ></span>
            </button>
          </div>
        </div>

        <!-- Quantity Selector -->
        <div class="space-y-2">
          <label class="text-sm font-medium">{{ $t('general.quantity') }}</label>
          <div class="flex items-center border rounded-full w-36">
            <button
                class="w-8 h-8 flex items-center justify-center"
                @click="quantity > 1 && quantity--"
            >
              <MinusIcon class="h-4 w-4"/>
            </button>
            <span class="w-20 text-center">{{ quantity }}</span>
            <button
                class="w-8 h-8 flex items-center justify-center"
                @click="quantity++"
            >
              <PlusIcon class="h-4 w-4"/>
            </button>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex space-x-4">
          <button
              class="flex w-44 text-center justify-center bg-black text-white py-3 rounded-full hover:bg-gray-800 transition-colors"
              @click="addToCart"
          >
            {{ $t('general.add_to_cart') }}
          </button>
        </div>

        <!-- Product Info -->
        <div class="space-y-4 pt-6 border-t">
          <div class="flex">
            <span class="font-medium w-30">{{ $t('general.sku') }}:</span>
            <span class="text-gray-600">{{ product.sku }}</span>
          </div>
          <div class="flex">
            <span class="font-medium w-30">{{ $t('general.categories') }}:</span>
            <div class="flex-1 flex-wrap gap-2">
              <NuxtLink
                  class="text-gray-600 hover:text-black"
                  to="#"
              >
                {{ product.categories }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Tabs -->
    <div class="mt-16">
      <el-tabs v-model="activeTab" class="demo-tabs">
        <el-tab-pane :label="$t('general.description')" class="prose max-w-none" name="description">
          <div v-html="product.description"/>
        </el-tab-pane>
        <el-tab-pane :label="$t('general.reviews')" class="space-y-8" name="reviews">
          <h2 class="text-2xl font-bold">{{ $t('general.customer_reviews') }}</h2>

          <!-- Review List -->
          <div v-if="reviews.length > 0" class="space-y-6">
            <div v-for="review in reviews" :key="review.id" class="border-b pb-6">
              <div class="flex items-center justify-between mb-2">
                <div class="flex items-center space-x-2">
                  <img :alt="review.name" :src="review.avatar" class="w-10 h-10 rounded-full"/>
                  <div>
                    <h3 class="font-medium">{{ review.name }}</h3>
                    <p class="text-sm text-gray-500">{{ review.date }}</p>
                  </div>
                </div>
                <div class="flex">
                  <el-rate v-model="review.rating" disabled/>
                </div>
              </div>
              <p class="text-gray-700">{{ review.comment }}</p>
            </div>
          </div>
          <p v-else class="text-gray-600">{{ $t('general.no_reviews') }}</p>

          <!-- Review Form -->
          <div class=" mx-auto p-6">
            <h2 class="text-2xl font-bold mb-4">{{ $t('general.comments') }}</h2>

            <el-form
                ref="ruleFormRef"
                :model="ruleForm"
                :rules="rules"
                class="space-y-6"
                label-position="top"
                require-asterisk-position="right"
            >
              <!-- Rating Section -->
              <div class="space-y-2">
                <el-form-item :label="$t('general.rating')" label-position="left" required class="flex space-x-1">
                  <el-rate v-model="rating"/>
                  <div
                      v-if="ratingError"
                      class="el-form-item__error"
                  >
                    {{ $t('validate.rating.required') }}
                  </div>
                </el-form-item>
              </div>

              <!-- Author and Email Fields -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <el-form-item :label="$t('general.name')" prop="author">
                  <el-input
                      v-model="ruleForm.author"
                      :placeholder="$t('general.name')"
                      type="text"
                  />
                </el-form-item>

                <el-form-item :label="$t('general.email')" prop="email">
                  <el-input
                      v-model="ruleForm.email"
                      :placeholder="$t('general.email')"
                      type="email"
                  />
                </el-form-item>
              </div>

              <!-- Comment Textarea -->
              <el-form-item :label="$t('general.comment')" prop="comment">
                <el-input
                    v-model="ruleForm.comment"
                    :placeholder="$t('general.comments')"
                    :rows="6"
                    type="textarea"
                />
              </el-form-item>

              <!-- Submit Button -->
              <button
                  class="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                  type="button"
                  @click="submitForm(ruleFormRef)"
              >
                {{ $t('general.submit') }}
              </button>
            </el-form>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </main>
</template>

<style lang="scss" scoped>
:deep(.el-input__inner) {
  height: 2.5rem;
}
</style>
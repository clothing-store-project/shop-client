<script lang="ts" setup>
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
    'https://pet-project-shop.github.io/template/images/products/product-detail4/lady-3.png',
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
const selectedSize = ref(product.value.sizes[0])

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

// Methods
const addToCart = () => {
  console.log('Added to cart:', {
    quantity: quantity.value,
    size: selectedSize.value,
    color: selectedColor.value
  })
}

useSeoMeta({
  title: product.value.name,
  description: product.value.short_description,
  ogImage: product.value.images[0]
})

const isMobile = useCheckDeviceIsMobile()
const isProductLayout = useState('deviceLayout').value === 'product'
definePageMeta({
  layout: false,
});
</script>

<template>
  <UiProductDetail v-if="!isMobile && !isProductLayout"/>
  <UiProductDetailMobile v-else/>
</template>

<style lang="scss" scoped>
:deep(.el-input__inner) {
  height: 2.5rem;
}
</style>
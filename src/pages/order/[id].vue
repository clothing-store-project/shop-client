<script lang="ts" setup>
import type {Order} from "~/types/order"

const {t} = useI18n()
useSeoMeta({
  title: t('page.order.detail'),
  description: t('page.order.detail')
})

useHead({
  htmlAttrs: {
    lang: 'vn'
  }
})

const activeTab = ref<string>('details')

const order = ref<Order>({
  id: '17493',
  phone: '567-890-1234',
  province: {
    id: 1,
    name: 'Abc'
  },
  district: {
    id: 1,
    name: 'Abcd',
    province_id: 1
  },
  commune: {
    id: 1,
    name: 'Abcde',
    district_id: 1
  },
  address: '202 Maple St',
  shipping_fee: 25.00,
  tax: 10.00,
  tax_amount: 32.00,
  total_quantity: 2,
  total_amount: 377.00,
  status: 'DELIVERED',
  payment_method: 'Credit Card',
  payment_status: 'Paid',
  reference_code: '#502TR872W2',
  created_at: '2024-04-04T18:00:00Z',
  orderDetail: [
    {
      product: {
        name: 'Collar Casual Shirt',
        image: 'https://pixio.scriptlelo.com/vue/demo/assets/pic1-dEtYnfuM.png',
      },
      variation: {
        price: 150,
        price_sale: 120,
        attribute: [
          {
            name: 'Color',
            value: 'Red',
          },
          {
            name: 'Size',
            value: 'XL',
          }
        ]
      }
    },
    {
      product: {
        name: 'Collar Casual',
        image: 'https://pixio.scriptlelo.com/vue/demo/assets/pic1-dEtYnfuM.png',
      },
      variation: {
        price: 250,
        price_sale: 200,
        attribute: [
          {
            name: 'Color',
            value: 'Blue',
          },
          {
            name: 'Size',
            value: 'L',
          }
        ]
      }
    }
  ]
})

function getStatusClass(status: string): string {
  switch (status) {
    case 'IN PROGRESS':
      return 'bg-blue-500';
    case 'CANCELED':
      return 'bg-red-500';
    case 'DELAYED':
      return 'bg-yellow-500';
    case 'DELIVERED':
      return 'bg-green-500';
    default:
      return '';
  }
}

onMounted(() => {
  // Write logic get orders detail here
})
</script>

<template>
  <div class="mx-auto px-4 py-12 lg:w-9/12 w-full flex flex-col md:flex-row">
    <LazyLayoutsClientProfileNavbar/>
    <!-- Main Content -->
    <main class="w-full md:w-3/4 top-2 mb-8 px-4 sm:px-6 lg:px-8">
      <el-card class="order-details-card md:flex">
        <!-- Order Header -->
        <div class="flex items-start gap-6 mb-8">
          <div
              v-for="(detail,index) in order.orderDetail"
              :key="index"
              class="w-24 h-24 bg-gray-50 rounded-lg overflow-hidden hidden md:block"
          >
            <img
                :alt="detail.product.name"
                :src="detail.product.image"
                class="w-full h-full object-cover"
            />
          </div>
          <div class="flex-1">
            <div class="items-center gap-3 mb-2">
              <span
                  :class="getStatusClass(order.status)"
                  class="text-white p-2 rounded-md"
              >
                {{ order.status }}
              </span>
              <h2 class="text-xl font-semibold mt-3">{{ $t('general.dashboard.orders') }} {{
                  order.reference_code
                }}</h2>
            </div>
          </div>
        </div>

        <!-- Order Info Grid -->
        <div class="md:grid grid-cols-2 gap-8 mb-8">
          <div class="mb-4 md:mb-0">
            <h3 class="text-gray-500 mb-1">{{ $t('page.order.item') }}</h3>
            <p class="font-medium">{{ order.total_quantity }}</p>
          </div>
          <div class="mb-4 md:mb-0">
            <h3 class="text-gray-500 mb-1">{{ $t('page.order.start_time') }}</h3>
            <p class="font-medium">
              {{
                new Date(order.created_at).toLocaleString('en-GB', {
                  timeZone: 'Asia/Ho_Chi_Minh',
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  second: '2-digit'
                })
              }}
            </p>
          </div>
          <div class="mb-4 md:mb-0">
            <h3 class="text-gray-500 mb-1">{{ $t('general.dashboard.address') }}</h3>
            <p class="font-medium">{{ order.address }}</p>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="md:flex mb-8 list-button">
          <el-button class="!bg-black mb-2 md:mb-0" type="primary">
            Export Details
          </el-button>
          <el-button class="mb-2 ml-0 md:mb-0" plain>
            Request Confirmation
          </el-button>
          <el-button plain type="danger">
            Cancel Order
          </el-button>
        </div>

        <!-- Tabs -->
        <el-tabs v-model="activeTab" class="order-tabs">
          <el-tab-pane :label="$t('page.order.history')" name="history">
            <!-- Timeline -->
            <el-timeline>
              <!-- Shipped Status 1 -->
              <el-timeline-item
                  :hollow="false"
                  class="ml-2"
                  size="large"
                  timestamp="08/04/2024 5:23pm"
                  type="success"
              >
                <div class="space-y-2">
                  <h3 class="text-lg font-semibold">Product Shipped</h3>
                  <div class="space-y-1 text-sm text-gray-600">
                    <p>
                      <span class="font-medium">Courier Service:</span>
                      <span class="text-primary-600">UPS, R. Gosling</span>
                    </p>
                    <p>
                      <span class="font-medium">Estimated Delivery Date:</span>
                      09/04/2024
                    </p>
                  </div>
                </div>
              </el-timeline-item>

              <!-- Shipped Status 2 -->
              <el-timeline-item
                  class="ml-2"
                  size="large"
                  timestamp="08/04/2024 5:23pm"
                  type="primary"
              >
                <div class="space-y-2">
                  <h3 class="text-lg font-semibold">Product Shipped</h3>
                  <div class="space-y-1 text-sm text-gray-600">
                    <p>
                      <span class="font-medium">Tracking Number:</span>
                      3409-4216-8759
                    </p>
                    <p>
                      <span class="font-medium">Warehouse:</span>
                      <span class="text-primary-600">Top Shirt 12b</span>
                    </p>
                  </div>
                </div>
              </el-timeline-item>

              <!-- Packaging Status -->
              <el-timeline-item
                  class="ml-2"
                  size="large"
                  timestamp="09/04/2024 4:34pm"
                  type="info"
              >
                <div class="space-y-2">
                  <h3 class="text-lg font-semibold">Product Packaging</h3>
                </div>
              </el-timeline-item>

              <!-- Order Placed -->
              <el-timeline-item
                  class="ml-2"
                  size="large"
                  timestamp="10/04/2024 2:36pm"
                  type="info"
              >
                <div class="space-y-2">
                  <h3 class="text-lg font-semibold">Order Placed</h3>
                </div>
              </el-timeline-item>
            </el-timeline>
          </el-tab-pane>
          <el-tab-pane :label="$t('page.order.detail')" name="details">
            <div class="pt-6">
              <div
                  v-for="(detail,index) in order.orderDetail"
                  :key="index"
                  class="flex flex-col sm:flex-row items-start gap-2 mb-6"
              >
                <div class="w-20 h-20 bg-gray-50 rounded-lg overflow-hidden">
                  <img
                      :alt="detail.product.name"
                      :src="detail.product.image"
                      class="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 class="text-lg font-semibold mb-2">{{ detail.product.name }}</h3>
                  <div class="space-y-1">
                    <p class="text-sm">
                      <span class="text-gray-500">Price:</span>
                      <span class="ml-2">${{ detail.variation.price }}</span>
                    </p>
                    <p
                        v-for="(attribute,index) in detail.variation.attribute"
                        :key="index"
                        class="text-sm text-gray-500">
                      <span class="text-gray-500">{{ attribute.name }}</span>
                      <span class="ml-2">{{ attribute.value }}</span>
                    </p>

                  </div>
                </div>
              </div>

              <!-- Order Summary -->
              <div class="border-t pt-6 space-y-4">
                <div class="flex justify-between">
                  <span class="text-gray-600">Total Price</span>
                  <span class="font-medium">+ ${{ order.total_amount - order.tax_amount - order.shipping_fee }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Shipping Fee</span>
                  <span class="font-medium">+ ${{ order.shipping_fee }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Tax</span>
                  <span class="font-medium">+ ${{ order.tax_amount }}</span>
                </div>
                <div class="flex justify-between font-semibold text-lg">
                  <span>Order Total</span>
                  <span>${{ order.total_amount }}</span>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane :label="$t('page.order.shipping')" name="shipping">
            Porem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.order-details-card :deep(.el-card__body) {
  padding: 2rem;
}

.order-tabs :deep(.el-tabs__nav-wrap::after) {
  height: 1px;
  background-color: #e5e7eb;
}

.order-tabs :deep(.el-tabs__active-bar) {
  background-color: #ef4444;
  height: 3px;
}

.order-tabs :deep(.el-tabs__item) {
  font-size: 0.875rem;
}

.order-tabs :deep(.el-tabs__item.is-active) {
  color: #ef4444;
  font-weight: 600;
}

.order-tabs :deep(.el-tabs__item:hover) {
  color: #ef4444;
}

@media (max-width: 640px) {
  .list-button {
    flex-direction: column;

    .el-button {
      margin-left: 0;
    }
  }
}
</style>
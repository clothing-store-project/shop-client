<script lang="ts" setup>
import {usePaymentData} from "~/data/paymentData";
import {useCartStore} from "~/stores/cart";
import type {CartItem} from "~/types/cart";
import type {Address} from "~/types/address";

const {payments} = usePaymentData();
const cartStore = useCartStore()
const cartItems = ref<CartItem[]>(cartStore.cartItems)
const shippingMethod = ref('standard')
const paymentMethod = ref<number>(0)
const addressDialogVisible = ref(false)
const updateAddress = (newAddress) => {
  address.value = newAddress
  addressDialogVisible.value = false
}
watch(() => shippingMethod.value, (value) => {
  console.log(value)
})

const totalAmount = computed(() => {
  return cartItems.value?.reduce((total, item) => total + (item.regular_price * item.quantity), 0)
})

const subtotal = computed(() => {
  return cartItems.value?.reduce((total, item) => total + (item.price * item.quantity), 0)
})

const saveMoney = computed(() => {
  return cartItems.value?.reduce((total, item) => total + ((item.regular_price - item.price) * item.quantity), 0)
})

const freeShippingThreshold = 599000
const shippingFee = 30000 // phí vận chuyển cố định
const remainingForFreeShipping = computed(() => {
  return Math.max(0, freeShippingThreshold - subtotal.value)
})
const shippingCost = computed(() => {
  return remainingForFreeShipping.value > 0 ? shippingFee : 0
})

const address = ref<Address>({
  id: 1,
  address: 'số 1 trường công giải, Quận Cầu Giấy, Hà Nội',
  name: 'Nguyễn Văn A',
  province: 1,
  district: 1,
  commune: 1,
  phone: '0988888888',
  type: 1,
  isDefault: true
})
</script>

<template>
  <div class="h-full pt-8 overflow-x-auto">
    <div
        class="flex flex-col lg:flex-row gap-5 md:max-w-screen-sm lg:max-w-screen-lg 2xl:max-w-screen-2xl mx-auto justify-center  overflow-x-auto">
      <!-- Left Column -->
      <div class="w-2/3">
        <!-- Delivery Options -->
        <div class="mb-8 shadow-sm border-1 rounded-md">
          <h2 class="flex items-center gap-2 text-lg font-medium my-4 ml-4">
            <Icon class="w-6 h-6" name="lucide:map-pinned"/>
            {{ $t('page.checkout.option') }}
          </h2>

          <div class="flex items-center border-1 rounded-lg mt-4 mx-4">
            <input checked class="ml-4 w-5 h-5" type="radio">
            <div class="p-4 w-full">
              <div class="flex items-start justify-between mb-2">
                <div class="font-medium">{{ $t('page.checkout.place_order') }}</div>
              </div>
              <div class="text-sm text-gray-500 mb-4">
                <span>Cập nhật thông tin giao hàng để xem chi phí và thời gian giao hàng.</span><br/>
                <span>Thời gian giao hàng tùy thuộc vào điều kiện của đơn vị vận chuyển   </span><br/>
                <span>Dự kiến giao hàng 2 - 5 ngày.</span>
              </div>
            </div>
          </div>

          <div class="flex justify-between items-start p-4 mt-4">
            <div>
              <div class="flex items-center gap-2 mb-1">
                <span class="font-medium">{{ address.name }}</span>
                <span class="text-gray-500">|</span>
                <span>{{ address.phone }}</span>
              </div>
              <div class="text-gray-600 mb-1">{{ address.address }}</div>
              <el-tag
                  v-if="address.type"
                  effect="dark"
                  size="large"
                  type="primary"
              >
                {{ $t('page.address.company') }}
              </el-tag>
              <el-tag
                  v-else
                  effect="dark"
                  size="large"
                  type="success"
              >
                {{ $t('page.address.home') }}
              </el-tag>
            </div>
            <el-button
                class="!text-gray-500 flex"
                link
                type="primary"
                @click="addressDialogVisible = true"
            >
              <Icon class="w-6 h-6 mr-2" name="lucide:square-pen"/>
              {{ $t('general.change') }}
            </el-button>
          </div>
        </div>

        <!-- Shipping Method -->
        <div class="mb-8 shadow-sm rounded-md border-1">
          <h2 class="flex items-center gap-2 text-lg font-medium my-4 ml-4">
            <Icon class="w-6 h-6" name="lucide:truck"/>
            {{ $t('page.checkout.shipping_method') }}
          </h2>

          <span v-if="remainingForFreeShipping > 0" class="text-sm text-orange-500 mb-4 ml-4">
            Mua thêm {{ useFormatNumber(remainingForFreeShipping) }} để được miễn phí vận chuyển
          </span>
          <span v-else class="text-sm text-green-500 mb-4 ml-4">
            Bạn được miễn phí vận chuyển
          </span>

          <div class="flex p-4 gap-4 w-full">
            <div class="flex gap-2 cursor-pointer border py-4 rounded-lg w-full items-center"
                 @click="shippingMethod='standard'">
              <input v-model="shippingMethod" class="m-4 w-5 h-5" name="shippingMethod" type="radio"
                     value="standard"/>
              <div class="flex items-start justify-between w-full mx-4">
                <div>
                  <div class="font-medium mb-1">Giao tiêu chuẩn 2-5 ngày</div>
                  <div class="text-sm text-gray-500">
                    <span>Thời gian giao hàng tùy thuộc vào điều kiện của đơn vị vận chuyển.</span><br/>
                    <span>Dự kiến giao hàng 2-5 ngày</span>
                  </div>
                  <div class="flex gap-4 mt-3">
                    <img alt="Shipping 1" class="w-5rem md:w-[15rem] object-cover"
                         src="~/assets/images/shipping/img.png"/>
                  </div>
                </div>
                <div v-if="remainingForFreeShipping > 0" class="font-medium">{{ useFormatNumber(shippingCost) }}</div>
                <div v-else class="font-medium">{{ useFormatNumber(0) }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="my-8 shadow-sm rounded-md border-1">
          <h2 class="flex items-center gap-2 text-lg font-medium mt-4 ml-4">
            <Icon class="w-6 h-6" name="lucide:wallet"/>
            {{ $t('page.checkout.payment_method') }}
          </h2>

          <div v-for="payment in payments" :key="payment.id"
               class="cursor-pointer m-4 flex gap-4 items-center border-1 py-2 rounded-lg"
               @click="paymentMethod=payment.id">
            <input v-model="paymentMethod" :value="payment.id" class="ml-4 w-4 h-4" name="paymentMethod"
                   type="radio"/>
            <img :alt="payment.name" :src="payment.image"
                 class="w-[2rem] object-cover"/>
            <span>{{ payment.name }}</span>
          </div>
        </div>

        <div class="my-4 shadow-sm border-1">
          <h2 class="flex items-center gap-2 text-lg font-medium mt-4 ml-4">
            <Icon class="w-6 h-6" name="lucide:shopping-bag"/>
            Sản phẩm
          </h2>

          <div
              v-for="item in cartItems"
              v-if="cartItems.length > 0"
              :key="item.id"
              class="p-4 border-b relative"
          >
            <div class="flex gap-4">
              <img
                  :alt="item.name"
                  class="w-20 h-20 object-cover rounded-lg"
                  src="https://canifa.com/img/210/300/resize/2/t/2tl24w005-pg118-122-1-u.webp"
              />
              <div class="flex-1">
                <div class="flex justify-between">
                  <div>
                    <h3 class="font-medium">{{ item.name }}</h3>
                    <div class="text-sm text-gray-500 mt-1">
                      {{ item.selected_size.label }} | {{ item.selected_color.label }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex justify-end mr-8">
                <span>X {{
                    item.quantity
                  }}</span>
              </div>
              <div class="flex justify-between flex-col">
                <span class="font-medium justify-end flex">{{ useFormatNumber(item.price * item.quantity) }}</span>
                <div class="space-x-4">
                    <span class="text-red-500 text-sm">-{{
                        Math.ceil((item.regular_price - item.price) / item.regular_price * 100)
                      }}%</span>
                  <span class="text-sm text-gray-500 line-through">
                      {{ useFormatNumber(item.regular_price * item.quantity) }}
                    </span>
                </div>
              </div>
            </div>
          </div>
          <span v-else class="text-center p-4">Chưa có sản phẩm để thanh toán</span>
        </div>
      </div>

      <!-- Right Column - Order Summary -->
      <div class="w-1/3">
        <div class="shadow-sm rounded-md border-1 p-6 fixed">
          <div class="mb-6 w-full">
            <div class="flex items-center justify-between mb-4 md:gap-12 lg:gap-20">
              <span class="text-lg font-medium">Mã ưu đãi</span>
              <el-button class="!text-red-500 items-center" link type="primary">
                Chọn hoặc nhập mã
                <Icon class="w-4 h-4 ml-2" name="lucide:chevron-right"/>
              </el-button>
            </div>
          </div>

          <div class="border-t pt-6 w-full">
            <h3 class="text-lg font-medium mb-4">Chi tiết đơn hàng</h3>
            <div class="space-y-3 mb-4">
              <div class="flex justify-between">
                <span class="text-gray-600">Giá trị đơn hàng</span>
                <span>{{ useFormatNumber(totalAmount) }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Chiết khấu</span>
                <span class="text-red-500">-{{ useFormatNumber(saveMoney) }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Phí giao hàng</span>
                <span>{{ useFormatNumber(shippingCost) }}</span>
              </div>
            </div>

            <div class="border-t pt-4 mb-6">
              <div class="flex justify-between items-center mb-1">
                <span class="font-medium">Tổng tiền thanh toán</span>
                <span class="text-xl font-medium">{{ useFormatNumber(subtotal + shippingCost) }}</span>
              </div>
              <div class="text-sm text-gray-500 text-right">(Đã bao gồm thuế VAT)</div>
            </div>

            <el-button
                :disabled="cartItems.length === 0 || shippingMethod === '' || paymentMethod === 0"
                class="!h-12 w-full checkout-btn !border-0 pb-4 !text-lg !text-white bg-red-300"
            >
              {{ $t('general.checkout') }}
            </el-button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <UiAddressDialogDetail
      :isOpenPopup="addressDialogVisible"
      :address="address"
      @close-popup="()=>{
        addressDialogVisible = false
      }"
  />
</template>

<style lang="scss" scoped>
input[type='radio'] {
  accent-color: red;
}

.checkout-btn {
  background-color: #f62f30;
  &.is-disabled {
    background-color: #fca5a5 ;
  }
}
</style>
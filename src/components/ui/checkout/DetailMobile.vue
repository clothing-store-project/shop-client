<script lang="ts" setup>
import {usePaymentData} from "~/data/paymentData";
import {useCartStore} from "~/stores/cart";
import type {CartItem} from "~/types/cart";
import type {Address} from "~/types/address";
import type {Coupon} from "~/types/coupon";

const {payments} = usePaymentData();
const cartStore = useCartStore()
const cartItems = ref<CartItem[]>(cartStore.cartItems)
const shippingMethod = ref('standard')
const paymentMethod = ref<number>(0)
const addressDialogVisible = ref(false)
const couponDialogVisible = ref(false)
const updateAddress = (newAddress: Address) => {
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
  if (cartItems.value.length > 0) {
    return remainingForFreeShipping.value > 0 ? shippingFee : 0
  }

  return 0
})
const couponDiscount = computed(() => {
  if (!coupon.value.id) return 0

  return coupon.value?.type === 'percentage'
      ? subtotal.value * coupon.value.value / 100
      : coupon.value?.value
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

//Coupon
const coupon = ref<Coupon>({} as Coupon)

const toggleCoupon = (appliedCoupon: Coupon) => {
  if (coupon.value !== appliedCoupon) {
    coupon.value = appliedCoupon
  } else {
    coupon.value = {} as Coupon
  }
}

const addCoupon = (addCoupon: Coupon) => {
  coupon.value = addCoupon
}
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <div class="sticky top-0 left-0 right-0 bg-white z-50">
      <div class="flex items-center p-4 border-b">
        <el-button link @click="$router.back()">
          <ElIconArrowLeft class="w-5 h-5"/>
        </el-button>
        <h1 class="text-lg font-medium flex-1 text-center">{{ $t('general.checkout') }}</h1>
      </div>
    </div>

    <div class="pb-4 shadow-sm border-1 bg-white rounded-md">
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
      <div class="flex justify-between items-start p-4 m-4 bg-[#F9F9F9]">
        <div>
          <div class="flex flex-col gap-2 mb-2">
            <span class="font-medium">{{ address.name }}</span>
            <span>{{ address.phone }}</span>
          </div>
          <div class="text-gray-600 mb-2 whitespace-pre-line w-2/3">{{ address.address }}</div>
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
            class="!text-gray-500"
            link
            type="primary"
            @click="addressDialogVisible = true"
        >
          <Icon class="w-6 h-6 mr-2" name="lucide:square-pen"/>
        </el-button>
      </div>
    </div>

    <!-- Shipping Method -->
    <div class="shadow-sm rounded-md border-1 my-4 bg-white">
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

    <div class="my-4 shadow-sm rounded-md border-1">
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
      <span v-else class="flex justify-center text-center p-4">Chưa có sản phẩm để thanh toán</span>
    </div>

    <div class="shadow-sm my-4 p-4 border-1">
      <div class="mb-6 w-full">
        <div class="flex items-center justify-between mb-4 md:gap-12 lg:gap-20">
          <ElIconTicket class="w-5 h-5"/>
          <span class="ml-2 font-bold">Mã ưu đãi</span>
          <el-button
              class="ml-auto"
              link
              type="primary"
              @click="couponDialogVisible = true"
          >
            Chọn hoặc nhập mã
            <ElIconArrowRight class="w-5 h-5 ml-1"/>
          </el-button>
        </div>
        <div v-if="coupon && coupon.id"
             class="border-1 border-[#63B1BC] bg-[#e0eff2] flex justify-around items-center w-full py-4">
          <div class="flex  flex-col">
            <span class="font-bold">{{ coupon.code }}</span>
            <span>{{ coupon.description }}</span>
          </div>
          <div class="flex justify-center w-6 h-6 rounded-full items-center border-1 border-gray-400 bg-[#63b1bc]">
            <Icon class="w-4 h-4 text-white" name="lucide:check"/>
          </div>
        </div>
      </div>
    </div>

    <div class="shadow-sm rounded-md border-1 mb-48 p-6">
      <div class="pt-4 w-full">
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
          <div v-if="coupon && coupon.id" class="flex justify-between">
            <span class="text-gray-600">Ưu đãi</span>
            <span class="text-red-500">-{{ useFormatNumber(couponDiscount) }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-600">Phí giao hàng</span>
            <span>{{ useFormatNumber(shippingCost) }}</span>
          </div>
        </div>
      </div>
    </div>

    <div v-if="!addressDialogVisible && !couponDialogVisible" class="fixed bottom-0 left-0 right-0 bg-white border-t z-52">
      <div class="p-4">
        <div class="flex justify-between items-center mb-2">
          <span class="font-medium">Tổng tiền thanh toán</span>
          <div class="font-medium text-right">{{ useFormatNumber(subtotal) }}</div>
        </div>
        <div class="mb-4">Đã bao gồm thuế VAT</div>
        <button
            :class="cartItems.length === 0 ? 'bg-red-400' : ''"
            class="w-full h-12 bg-red-600 text-white"
        >
          {{ $t('general.checkout') }}
        </button>
      </div>
    </div>
  </div>

  <UiAddressDialogDetailMobile
      :address="address"
      :isOpenPopup="addressDialogVisible"
      @close-popup="()=>{
        addressDialogVisible = !addressDialogVisible
      }"
      @update-address="updateAddress"
  />
  <UiCouponListMobile
      :isOpen="couponDialogVisible"
      :applyCoupon="coupon"
      @close-popup="couponDialogVisible = !couponDialogVisible"
      @toggle-coupon="toggleCoupon"
      @add-coupon="addCoupon"
  />
</template>

<style scoped lang="scss">
input[type='radio'] {
  accent-color: red;
}
</style>
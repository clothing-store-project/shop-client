<script lang="ts" setup>
import {usePaymentData} from "~/data/paymentData";

const {payments} = usePaymentData();
const shippingMethod = ref('standard')
const paymentMethod = ref<number>(0)
const handleChangeAddress = () => {
  console.log('Change address clicked')
}
watch(() => shippingMethod.value, (value) => {
  console.log(value)
})
</script>

<template>
  <div class="h-full pt-8 overflow-x-auto">
    <div
        class="flex flex-col lg:flex-row gap-5 md:max-w-screen-sm lg:max-w-screen-lg 2xl:max-w-screen-2xl mx-auto justify-center  overflow-x-auto">
      <!-- Left Column -->
      <div class="w-2/3">
        <!-- Delivery Options -->
        <div class="mb-8 shadow-md border-2">
          <h2 class="flex items-center gap-2 text-lg font-medium !my-8 ml-4">
            <Icon class="w-6 h-6" name="lucide:map-pinned"/>
            {{ $t('page.checkout.option') }}
          </h2>

          <div class="flex items-center border-2 mt-4 mx-4">
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

          <div class="flex justify-between items-start p-4 mt-8">
            <div>
              <div class="flex items-center gap-2 mb-1">
                <span class="font-medium">Nguyễn Văn A</span>
                <span class="text-gray-500">|</span>
                <span>0988888888</span>
              </div>
              <div class="text-gray-600 mb-1">số 1 trường công giải, Quận Cầu Giấy, Hà Nội</div>
              <el-tag class="!bg-gray-100 !border-gray-200 !text-gray-600" size="large">
                VĂN PHÒNG
              </el-tag>
            </div>
            <el-button
                class="!text-gray-500 flex"
                link
                type="primary"
                @click="handleChangeAddress"
            >
              <Icon class="w-6 h-6 mr-2" name="lucide:square-pen"/>
              Thay đổi
            </el-button>
          </div>
        </div>

        <!-- Shipping Method -->
        <div class="mb-8 shadow-md border-2">
          <h2 class="flex items-center gap-2 text-lg font-medium my-8 ml-4">
            <Icon class="w-6 h-6" name="lucide:truck"/>
            {{ $t('page.checkout.shipping_method') }}
          </h2>

          <div class="text-sm text-orange-500 mb-4 ml-8">
            Mua thêm 350.000 đ để được miễn phí vận chuyển
          </div>

          <div class="flex p-4 gap-4 w-full">
            <div class="flex gap-2 cursor-pointer border pt-4 pr-4 rounded-lg w-full" @click="shippingMethod='standard'">
              <input v-model="shippingMethod" class="ml-4 w-5 h-5" name="shippingMethod" type="radio"
                     value="standard"/>
              <div class="flex items-start justify-between w-full ml-4">
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
                <div class="font-medium">20.000 đ</div>
              </div>
            </div>
          </div>
        </div>

        <div class="my-8 shadow-md border-2">
          <h2 class="flex items-center gap-2 text-lg font-medium mt-8 ml-4">
            <Icon class="w-6 h-6" name="lucide:wallet"/>
            {{ $t('page.checkout.payment_method') }}
          </h2>

          <div v-for="payment in payments" :key="payment.id">
            <div class="flex m-4 gap-4 w-full items-center" @click="paymentMethod=payment.id">
              <input v-model="paymentMethod" :value="payment.id" class="ml-4 w-4 h-4" name="paymentMethod"
                     type="radio"/>
              <img :alt="payment.name" :src="payment.image"
                   class="w-[4rem] object-cover"/>
              <span>{{ payment.name }}</span>
            </div>
          </div>
        </div>

        <div class="my-8 shadow-md border-2">
          <h2 class="flex items-center gap-2 text-lg font-medium mt-8 ml-4">
            <Icon class="w-6 h-6" name="lucide:shopping-bag"/>
            Sản phẩm
          </h2>

<!--          <div v-for="payment in payments" :key="payment.id">-->
<!--            <div class="flex m-4 gap-4 w-full items-center" @click="paymentMethod=payment.id">-->
<!--              <input v-model="paymentMethod" :value="payment.id" class="ml-4 w-4 h-4" name="paymentMethod"-->
<!--                     type="radio"/>-->
<!--              <img :alt="payment.name" :src="payment.image"-->
<!--                   class="w-[5rem] object-cover"/>-->
<!--              <span>{{ payment.name }}</span>-->
<!--            </div>-->
<!--          </div>-->
        </div>
      </div>

      <!-- Right Column - Order Summary -->
      <div class="w-1/3">
        <div class="shadow-md rounded-md border-2 p-6 fixed ">
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
                <span>599.000 đ</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Chiết khấu</span>
                <span class="text-red-500">-350.000 đ</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Phí giao hàng</span>
                <span>20.000 đ</span>
              </div>
            </div>

            <div class="border-t pt-4 mb-6">
              <div class="flex justify-between items-center mb-1">
                <span class="font-medium">Tổng tiền thanh toán</span>
                <span class="text-xl font-medium">269.000 đ</span>
              </div>
              <div class="text-sm text-gray-500 text-right">(Đã bao gồm thuế VAT)</div>
            </div>

            <el-button class="!h-12 w-full !bg-red-500 !border-0 pb-4 !text-lg !text-white">
              Thanh toán
            </el-button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
input[type='radio'] {
  accent-color: red;
}
</style>
<!--<script setup lang="ts">-->
<!--import { computed } from 'vue'-->
<!--interface Props {-->
<!--selected?: boolean-->
<!--title: string-->
<!--description: string-->
<!--disabled?: boolean-->
<!--}-->
<!--const props = withDefaults(defineProps<Props>(), {-->
<!--selected: false,-->
<!--disabled: false-->
<!--})-->
<!--const emit = defineEmits<{-->
<!--(e: 'select'): void-->
<!--}>()-->
<!--</script>-->
<!--<template>-->
<!--  <div-->
<!--      class="border rounded-lg transition-colors"-->
<!--      :class="[-->
<!--      selected ? 'border-primary bg-primary/5' : 'border-gray-200',-->
<!--      disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:border-primary/50'-->
<!--    ]"-->
<!--      @click="!disabled && emit('select')"-->
<!--  >-->
<!--    <div class="p-4 flex gap-3">-->
<!--      <div-->
<!--          class="w-5 h-5 rounded-full border-2 flex-shrink-0 mt-0.5 transition-colors"-->
<!--          :class="[-->
<!--          selected ? 'border-primary' : 'border-gray-300',-->
<!--          disabled ? 'border-gray-200' : ''-->
<!--        ]"-->
<!--      >-->
<!--        <div-->
<!--            v-if="selected"-->
<!--            class="w-full h-full rounded-full bg-primary transform scale-50"-->
<!--        />-->
<!--      </div>-->
<!--      <div>-->
<!--        <h3 class="font-medium text-gray-900">{{ title }}</h3>-->
<!--        <p class="text-sm text-gray-500 mt-1">{{ description }}</p>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->
<script lang="ts" setup>
const shippingMethod = ref('standard')

const handleChangeAddress = () => {
  console.log('Change address clicked')
}
</script>

<template>
  <div class="container md:max-w-screen-lg  xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto py-8">
    <div class="flex flex-col lg:flex-row gap-4 w-full">
      <!-- Left Column -->
      <div class="w-2/3">
        <!-- Delivery Options -->
        <div class="mb-8 shadow-lg">
          <h2 class="flex items-center gap-2 text-lg font-medium !my-8 ml-8">
            <Icon class="w-6 h-6" name="lucide:map-pinned"/>
            Tùy chọn giao hàng
          </h2>

          <div class="flex border-2 mt-4 mx-4">
            <input checked class="ml-4" type="radio">
            <div class="p-4 w-full">
              <div class="flex items-start justify-between mb-2">
                <div class="font-medium">Giao đến địa chỉ</div>
              </div>
              <div class="text-sm text-gray-500 mb-4">
                Cập nhật thông tin giao hàng để xem chi phí và thời gian giao hàng.<br/>
                Thời gian giao hàng tùy thuộc vào điều kiện của đơn vị vận chuyển<br/>
                Dự kiến giao hàng 2 - 5 ngày.
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
        <div class="mb-8 shadow-lg">
          <h2 class="flex items-center gap-2 text-lg font-medium my-8 ml-8">
            <Icon class="w-6 h-6" name="lucide:truck"/>
            Phương thức vận chuyển
          </h2>

          <div class="text-sm text-orange-500 mb-4">
            Mua thêm 350.000 đ để được miễn phí vận chuyển
          </div>

          <el-radio-group v-model="shippingMethod" style="display: flex">
<!--<template #default>-->
  <div class="flex m-4 gap-4 flex-col">

    <!--              <template v-slot:default>-->
    <div class="flex items-center cursor-pointer border rounded-lg p-4" @click="shippingMethod='standard'">
      <el-radio label="" value="standard" class="!m-0"/>
<!--      <input name="shippingMethod" class="ml-4" type="radio">-->
      <!--                  <div class="flex items-start justify-between">-->
      <div>
        <div class="font-medium mb-1">Giao tiêu chuẩn 2-5 ngày</div>
        <div class="text-sm text-gray-500">
          Thời gian giao hàng tùy thuộc vào điều kiện của đơn vị vận chuyển. Dự kiến giao hàng 2-5 ngày
        </div>
        <div class="flex gap-4 mt-3">
          <img alt="Shipping 1" src="~/assets/images/shipping/img.png"/>
        </div>
      </div>
      <div class="font-medium color-red">20.000 đ</div>
      <!--                  </div>-->
    </div>
    <!--              </template>-->
    <!--            </el-radio>-->


    <!--              fffff-->
    <!--              <template v-slot:default>-->
    <div class="flex items-center cursor-pointer border rounded-lg p-4" @click="shippingMethod='standard1'">
      <el-radio label="" value="standard1" class="!m-0"/>
<!--      <input name="shippingMethod" class="ml-4" type="radio">-->
      <div class="flex items-start justify-between">
        <div>
          <div class="font-medium mb-1">Giao tiêu chuẩn 2-5 ngày</div>
          <div class="text-sm text-gray-500">
            Thời gian giao hàng tùy thuộc vào điều kiện của đơn vị vận chuyển. Dự kiến giao hàng 2-5 ngày
          </div>
          <div class="flex gap-4 mt-3">
            <img alt="Shipping 1" src="~/assets/images/shipping/img.png"/>
          </div>
        </div>
        <div class="font-medium">20.000 đ</div>
      </div>
    </div>
    <!--              </template>-->
    <!--            </el-radio>-->

  </div>
<!--</template>-->
          </el-radio-group>
        </div>
      </div>

      <!-- Right Column - Order Summary -->
      <div class="w-1/3">
        <div class="bg-gray-50 rounded-lg p-6">
          <div class="mb-6">
            <div class="flex items-center justify-between mb-4">
              <span class="text-lg font-medium">Mã ưu đãi</span>
              <el-button class="!text-blue-500" link type="primary">
                Chọn hoặc nhập mã
                <!--                <ChevronRight class="w-4 h-4" />-->
              </el-button>
            </div>
          </div>

          <div class="border-t pt-6">
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

            <el-button class="w-full !bg-blue-500" type="primary">
              Thanh toán
            </el-button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>

</style>
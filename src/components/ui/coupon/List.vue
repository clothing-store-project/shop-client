<script lang="ts" setup>
import type {Coupon} from "~/types/coupon";

const props = defineProps({
  isOpen: Boolean
})

const emit = defineEmits<{
  (e: 'close-popup'): void,
  (e: 'add-coupon'): void,
}>()

const handleOutsideClick = (event: MouseEvent) => {
  if (event.target === event.currentTarget) {
    emit('close-popup')
  }
}

const coupons = ref<Coupon[]>([
  {
    id: 1,
    name: 'Coupon 1',
    code: 'CODE1',
    type: 'percentage',
    value: 10,
    minOrder: 100,
    maxDiscount: 50,
    description: '10% off on orders over $100',
    expired: '2023-12-31',
    status: 'active'
  },
  {
    id: 2,
    name: 'Coupon 2',
    code: 'CODE2',
    type: 'fixed',
    value: 20,
    minOrder: 200,
    maxDiscount: 100,
    description: '$20 off on orders over $200',
    expired: '2023-12-31',
    status: 'active'
  },
  {
    id: 3,
    name: 'Coupon 3',
    code: 'CODE3',
    type: 'percentage',
    value: 15,
    minOrder: 150,
    maxDiscount: 75,
    description: '15% off on orders over $150',
    expired: '2023-12-31',
    status: 'active'
  },
  {
    id: 4,
    name: 'Coupon 4',
    code: 'CODE4',
    type: 'fixed',
    value: 30,
    minOrder: 300,
    maxDiscount: 150,
    description: '$30 off on orders over $300',
    expired: '2023-12-31',
    status: 'active'
  },
  {
    id: 5,
    name: 'Coupon 5',
    code: 'CODE5',
    type: 'percentage',
    value: 20,
    minOrder: 250,
    maxDiscount: 100,
    description: '20% off on orders over $250',
    expired: '2023-12-31',
    status: 'active'
  }
])
</script>

<template>
  <Transition name="fade">
    <div
        v-if="isOpen"
        class="fixed inset-0 bg-black bg-opacity-50 z-999 flex items-center justify-center p-4 overflow-y-auto"
        @click="handleOutsideClick"
    >
      <div
          class="bg-white rounded-lg overflow-hidden flex flex-col w-1/4"
          @click.stop
      >
        <!-- Header -->
        <div class="flex items-center justify-between p-4 shrink-0">
          <h2 class="text-lg font-medium">Mã giảm giá</h2>
          <button
              class="text-gray-400 hover:text-gray-500"
              @click="$emit('close-popup')"
          >
            <Icon class="w-6 h-6" name="lucide:x"/>
          </button>
        </div>

        <div class="p-4">
          <div class="flex gap-2 mb-6">
            <el-input
                v-model="voucherCode"
                placeholder="Nhập mã ưu đãi"
                type="text"
            />
            <el-button
                type="primary"
                @click="applyVoucher">
              Sử dụng
            </el-button>
          </div>

          <el-scrollbar max-height="55vh">
            <div v-for="coupon in coupons" :key="coupon.id">
              <!--              <div class="border rounded-lg p-4 pt-6">-->
              <!--                <div class="flex justify-between items-start">-->
              <!--                  <div>-->
              <!--                    <h3 class="text-lg font-bold mb-1">Voucher 80K</h3>-->
              <!--                    <p class="text-sm text-gray-600 mb-2">-->
              <!--                      Giảm 80k cho đơn Online đầu tiên từ 399K-->
              <!--                    </p>-->
              <!--                    <div class="text-sm text-gray-500">-->
              <!--                      HSD: 2024-12-31-->
              <!--                    </div>-->
              <!--                    <div class="mt-2">-->
              <!--                      <button-->
              <!--                          @click="toggleTerms('voucher80k')"-->
              <!--                          class="text-sm text-gray-600 hover:text-gray-800"-->
              <!--                      >-->
              <!--                        Điều kiện-->
              <!--                      </button>-->
              <!--                    </div>-->
              <!--                  </div>-->
              <!--                  <button-->
              <!--                      @click="selectVoucher('BANMOI80')"-->
              <!--                      class="bg-white border-2 border-cyan-500 rounded-full p-2 hover:bg-cyan-50 transition-colors"-->
              <!--                      :class="{ 'bg-cyan-50': selectedVoucher === 'BANMOI80' }"-->
              <!--                  >-->
              <!--                    <div v-if="selectedVoucher === 'BANMOI80'" class="w-4 h-4 rounded-full bg-cyan-500"></div>-->
              <!--                    <div v-else class="w-4 h-4"></div>-->
              <!--                  </button>-->
              <!--                </div>-->
              <!--                <div v-if="openTerms === 'voucher80k'" class="mt-3 pt-3 border-t text-sm text-gray-600">-->
              <!--                  <p>Áp dụng cho đơn hàng đầu tiên</p>-->
              <!--                  <p>Giá trị đơn hàng tối thiểu 399K</p>-->
              <!--                </div>-->
              <!--              </div>-->
            </div>
          </el-scrollbar>

          <div class="p-4 bg-white shrink-0 flex justify-between w-full">
            <el-button
                class="w-full my-4 !bg-[#dd4b39] !border-[#dd4b39] hover:!bg-[#c9301c] hover:!border-[#c9301c]"
                type="danger"
            >
              Tiếp tục
            </el-button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>

</style>
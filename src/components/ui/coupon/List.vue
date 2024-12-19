<script lang="ts" setup>
import type {Coupon} from "~/types/coupon";

const props = defineProps({
  isOpen: Boolean,
  applyCoupon: {
    type: Object as PropType<Coupon>,
    required: true,
    default: {} as Coupon
  }
})

const emit = defineEmits<{
  (e: 'close-popup'): void,
  (e: 'toggle-coupon', coupon: Coupon): void,
  (e: 'apply-coupon', coupon: Coupon): void,
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
    value: 20000,
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
    value: 30000,
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

const voucherCode = ref('')

const toggleCoupon = (coupon: Coupon) => {
  emit('toggle-coupon', coupon)
}

const applyVoucher = () => {
  if (!voucherCode.value) {
    ElMessage({
      message: 'Hãy nhập mã coupon',
      type: 'error',
    });
    return
  }
  // add logic find coupon by code
  // Handle add coupon
  //emit('add-coupon', coupon)
}

const couponDetailVisible = ref(false)
const viewCoupon = ref<Coupon>({} as Coupon)
const handleViewCoupon = (coupon: Coupon) => {
  viewCoupon.value = coupon
  couponDetailVisible.value = true
  emit('close-popup')
}

const addCoupon = (coupon: Coupon) => {
  emit('apply-coupon', coupon)
}
</script>

<template>
  <Transition name="fade">
    <div
        v-if="isOpen"
        class="fixed inset-0 bg-black bg-opacity-50 z-999 flex items-center justify-center p-8 overflow-y-auto"
        @click="handleOutsideClick"
    >
      <div
          class="bg-white rounded-lg overflow-hidden flex flex-col w-2/7 min-w-[35rem] p-2"
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
        </div>
        <el-scrollbar max-height="58vh">
          <div
              v-for="coupon in coupons"
              :key="coupon.id"
              class="rounded-lg pt-4 px-4 flex justify-between min-h-[10rem]"
          >
            <div
                :class="[ applyCoupon && applyCoupon.id && coupon.id === applyCoupon.id ? 'border-[#63B1BC] bg-[#e0eff2]' : 'border-[#e5e7eb] bg-white']"
                class="border border-r-0 p-4 w-13/20 shadow-lg cursor-pointer"
                @click="handleViewCoupon(coupon)"
            >
              <h3 class="text-lg font-bold mb-1">{{ coupon.name }}</h3>
              <p class="text-sm text-gray-600 mb-2">
                {{ coupon.description }}
              </p>
              <el-tag
                  :color="applyCoupon && applyCoupon.id && coupon.id === applyCoupon.id ? 'white' : '#e0eff2'"
                  class="!text-[#63B1BC] font-bold"
                  type="primary"
              >
                {{ coupon.code }}
              </el-tag>
              <div class="flex justify-between mt-2">
                <div class="text-sm text-gray-500">
                  HSD: {{ coupon.expired }}
                </div>
                <button
                    class="text-sm text-gray-600 hover:text-gray-800"
                >
                  Điều kiện
                </button>
              </div>
            </div>
            <div
                :class="[ applyCoupon && applyCoupon.id && coupon.id === applyCoupon.id ? 'voucher-item-info-active' : 'voucher-item-info']"
                class="border-[#e5e7eb] border-l-0 border-r-0 voucher-item-info relative flex-1 w-1/20"
            >
              <div
                  :class="[ applyCoupon && applyCoupon.id && coupon.id === applyCoupon.id ? 'bg-[#e0eff2]' : 'bg-white']"
                  class="absolute inset-0 flex flex-col justify-center items-center pointer-events-none"
              >
                <div
                    :class="[ applyCoupon && applyCoupon.id && coupon.id === applyCoupon.id ? 'border-[#63B1BC]' : 'border-[#e5e7eb]']"
                    class="h-full border-l my-[0.75rem] border-dashed"
                />
              </div>
            </div>
            <div
                :class="[ applyCoupon && applyCoupon.id && coupon.id === applyCoupon.id ? 'border-[#63B1BC] bg-[#e0eff2]' : 'border-[#e5e7eb] bg-white']"
                class="p-2 border border-l-0 h-full w-3/10 justify-center items-center flex min-h-[10rem] shadow-lg cursor-pointer"
                @click="toggleCoupon(coupon)"
            >
              <div v-if="applyCoupon && applyCoupon.id && coupon === applyCoupon"
                   class="flex justify-center w-6 h-6 rounded-full items-center border-1 border-gray-400 bg-[#63b1bc]">
                <Icon class="w-4 h-4 text-white" name="lucide:check"/>
              </div>
              <div v-else class="w-6 h-6 rounded-full flex items-center bg-[#e0eff2] justify-center">
                <Icon class="w-4 h-4 text-[#63B1BC]" name="lucide:plus"/>
              </div>
            </div>
          </div>
        </el-scrollbar>

        <div class="p-4 bg-white shrink-0 flex justify-between w-full">
          <el-button
              class="w-full my-4 !bg-[#dd4b39] !border-[#dd4b39] hover:!bg-[#c9301c] hover:!border-[#c9301c]"
              type="danger"
              @click="$emit('close-popup')"
          >
            Tiếp tục
          </el-button>
        </div>
      </div>
    </div>
  </Transition>
  <UiCouponDetail
      :isOpen="couponDetailVisible"
      :coupon="viewCoupon"
      @close-popup="()=>{
        couponDetailVisible = false
        $emit('close-popup')
      }"
      @add-coupon="addCoupon"
  />
</template>

<style lang="scss" scoped>
.voucher-item-info, .voucher-item-info-active {
  position: relative;
  border-radius: 0;
}

.voucher-item-info::before,
.voucher-item-info::after,
.voucher-item-info-active::before,
.voucher-item-info-active::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  height: 20px;
  border: 2px solid #e5e7eb;
  border-left: none;
  border-right: none;
  border-radius: 50%;
}

.voucher-item-info::before, .voucher-item-info-active::before {
  top: -0.75rem;
  border-top: none;
  border-bottom: 1px solid #e5e7eb;
  border-radius: 100%;
  background-color: white;
  z-index: 1;
}

.voucher-item-info-active::before {
  border-bottom: 1px solid #63B1BC;
}

.voucher-item-info::after, .voucher-item-info-active::after {
  bottom: -0.75rem;
  border-bottom: none;
  border-top: 1px solid #e5e7eb;
  border-radius: 100%;
  background-color: white;
  z-index: 1;
}

.voucher-item-info-active::after {
  border-top: 1px solid #63B1BC;
}
</style>
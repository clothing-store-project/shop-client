<script setup lang="ts">
import type {Coupon} from "~/types/coupon";

const props = defineProps({
  isOpen: Boolean,
  coupon: {
    type: Object as PropType<Coupon>,
    required: true,
    default: {} as Coupon
  }
})

const emit = defineEmits<{
  (e: 'close-popup'): void,
  (e: 'add-coupon', coupon: Coupon): void,
}>()

const handleOutsideClick = (event: MouseEvent) => {
  if (event.target === event.currentTarget) {
    emit('close-popup')
  }
}

const handleAddCoupon = (coupon: Coupon) => {
  emit('add-coupon', coupon)
  emit('close-popup')
}

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text).then(() => {
    ElMessage({
      message: 'Copied to clipboard successfully!',
      type: 'success',
    });
  }).catch(err => {
    ElMessage({
      message: 'Failed to copy text: ' + err,
      type: 'error',
    });
  });
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
          class="bg-white rounded-lg overflow-hidden flex flex-col w-4/7 min-w-[35rem] p-2"
          @click.stop
      >
        <!-- Header -->
        <div class="flex items-center justify-between p-4 shrink-0">
          <h2 class="text-lg font-medium">Chi tiết mã giảm giá</h2>
          <button
              class="text-gray-400 hover:text-gray-500"
              @click="$emit('close-popup')"
          >
            <Icon class="w-6 h-6" name="lucide:x"/>
          </button>
        </div>

        <!-- Content -->
        <div class="border-1 border-gray-200 flex flex-col space-y-4 items-center m-4 py-4 shrink-0">
          <span class="text-lg font-bold">{{ coupon.name }}</span>
          <div class="flex items-center">
            <span>{{ coupon.code }}</span>
            <Icon
                name = "lucide:copy"
                @click="copyToClipboard(coupon.code)"
                class="ml-2 cursor-pointer"
            />
          </div>

        </div>

        <div class="p-4 bg-white shrink-0 flex justify-between w-full">
          <el-button
              class="w-full my-4 !bg-[#dd4b39] !border-[#dd4b39] hover:!bg-[#c9301c] hover:!border-[#c9301c]"
              type="danger"
              @click="handleAddCoupon(coupon)"
          >
            Sử dụng
          </el-button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped lang="scss">

</style>
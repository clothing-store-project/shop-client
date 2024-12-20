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
  <div v-if="isOpen" class="min-h-screen h-full bg-white fixed inset-0 z-50">
    <!-- Header -->
    <div class="flex items-center justify-between p-4 shrink-0">
      <h2 class="text-lg font-medium">{{ $t('component.coupon.detail') }}</h2>
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

    <div class="fixed bottom-0 p-4 bg-white shrink-0 flex justify-between w-full">
      <el-button
          class="w-full my-4 !bg-[#dd4b39] !border-[#dd4b39] hover:!bg-[#c9301c] hover:!border-[#c9301c]"
          type="danger"
          @click="handleAddCoupon(coupon)"
      >
        {{ $t('general.use') }}
      </el-button>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
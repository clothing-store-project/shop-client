<script setup lang="ts">
import type {Review} from "~/types/review";

defineProps({
  reviews: Array as PropType<Review[]>
})
</script>

<template>
  <h2 class="text-2xl font-bold">{{ $t('general.customer_reviews') }}</h2>

  <!-- Review List -->
  <div v-if="reviews.length > 0" class="space-y-6">
    <div v-for="review in reviews" :key="review.id" class="border-b pb-6">
      <div class="flex items-center justify-between mb-2">
        <div class="flex items-center space-x-2">
          <img :alt="review.name" :src="review.avatar" class="w-10 h-10 rounded-full"/>
          <div>
            <h3 class="font-medium">{{ review.name }}</h3>
            <p class="text-sm text-gray-500">{{ review.date }}</p>
          </div>
        </div>
        <div class="flex">
          <el-rate v-model="review.rating" disabled/>
        </div>
      </div>
      <p class="text-gray-700">{{ review.comment }}</p>
    </div>
  </div>
  <p v-else class="text-gray-600">{{ $t('general.no_reviews') }}</p>
</template>

<style scoped lang="scss">

</style>
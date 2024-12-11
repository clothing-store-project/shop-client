<script lang="ts" setup>
const route = useRoute()
const currentStep = computed(() => {
  if (route.path === '/cart') return 1
  if (route.path === '/checkout') return 2
  return 3
})
</script>

<template>
  <nav class="bg-white sticky top-0 z-50  border-b-1 border-gray-200 h-auto">
    <div
        class="md:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl container mx-auto p-4 sm:px-6 lg:px-8 relative">
      <div class="flex h-16 justify-between items-center">
        <NuxtLinkLocale class="flex-shrink-0" to="/">
          <img alt="Pixio" class="h-8 w-auto" src="~/assets/images/logo.svg"/>
        </NuxtLinkLocale>

        <div class="mx-auto mt-4 flex justify-center">
          <el-steps
              :active="currentStep"
              align-center
              class="checkout-steps !text-xxl"
              finish-status="success"
              style="min-width: 800px"
          >
            <el-step
                :title="$t('general.cart')"
            >
              <template v-slot:icon>
                <Icon class="w-6 h-6" name="lucide:shopping-cart"/>
              </template>
            </el-step>
            <el-step
                :title="$t('general.checkout')"
            >
              <template v-slot:icon>
                <Icon class="w-6 h-6" name="lucide:credit-card"/>
              </template>
            </el-step>
            <el-step
                :title="$t('general.done')"
            >
              <template v-slot:icon>
                <Icon class="w-6 h-6" name="lucide:circle-check"/>
              </template>
            </el-step>
          </el-steps>
        </div>

        <NuxtLinkLocale class="flex-shrink-0 underline font-bold text-lg" to="/">
          {{ $t('page.checkout.continue_shopping') }}
        </NuxtLinkLocale>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.checkout-steps {
  :deep(.el-step__title) {
    font-size: 14px;
    color: #666;
  }

  :deep(.el-step__title.is-process) {
    color: #409EFF;
    font-weight: 500;
  }

  :deep(.el-step__head.is-process) {
    color: #409EFF;
    border-color: #409EFF;
  }

  :deep(.el-step__line) {
    background-color: #e5e7eb;
  }

  :deep(.el-step.is-horizontal .el-step__line) {
    height: 1px;
    top: 15px;
  }

  :deep(.el-step__icon) {
    width: 24px;
    height: 24px;
  }

  :deep(.el-step__icon-inner) {
    font-size: 14px;
  }
}

.custom-steps {
  :deep(.el-steps) {
    @apply flex justify-between;
  }

  :deep(.el-step) {
    @apply flex-1 max-w-[200px];
  }

  :deep(.el-step__main) {
    @apply max-w-full;
  }
}
</style>
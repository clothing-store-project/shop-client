<script lang="ts" setup>
const route = useRoute()
const {t} = useI18n()
const isMobile = useCheckDeviceIsMobile()

useSeoMeta({
  title: t('page.category.title', {value: route.params.category.at(-1)}),
  description: t('page.category.description', {value: route.params.category.at(-1)}),
  ogTitle: t('page.category.title', {value: route.params.category.at(-1)}),
  ogImage: 'https://example.com/image.png',
  ogType: 'website',
})
</script>

<template>
  <UiCategorySearchDetail
      v-if="!isMobile"
      :category="route.params.category"
  />
  <UiCategorySearchMobileDetail v-else/>
</template>

<style lang="scss" scoped>

</style>
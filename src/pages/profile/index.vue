<script lang="ts" setup>
const {t} = useI18n()
useSeoMeta({
  title: 'Thông tin cá nhân',
  description: t('page.order.description'),
  ogTitle: 'Thông tin cá nhân',
  ogImage: 'https://example.com/image.png',
  ogType: 'website',
})

useHead({
  htmlAttrs: {
    lang: 'vn'
  }
})

const isMobile = useCheckDeviceIsMobile()
</script>

<template>
  <UiProfileDetail v-if="!isMobile"/>
  <UiProfileDetailMobile v-else />
</template>

<style lang="scss" scoped>

</style>
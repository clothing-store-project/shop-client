<script setup lang="ts">
const {t} = useI18n()
const isMobile = useCheckDeviceIsMobile()
const isCheckoutLayout = useState('deviceLayout').value === 'checkout'
definePageMeta({
  layout: false,
});

useSeoMeta({
  title: t('page.checkout.title'),
  description: t('page.checkout.description'),
  ogTitle: t('page.checkout.title'),
  ogImage: 'https://example.com/image.png',
  ogType: 'website',
})

useHead({
  htmlAttrs: {
    lang: 'vn'
  }
})
</script>

<template>
  <UiCheckoutDetail
      v-if="!isMobile && isCheckoutLayout"
  />
  <UiCheckoutDetailMobile v-else/>
</template>

<style scoped lang="scss">

</style>
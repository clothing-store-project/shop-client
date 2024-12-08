<script lang="ts" setup>
const {t} = useI18n()
useSeoMeta({
  title: t('page.profile.title'),
  description: t('page.profile.description'),
  ogTitle: t('page.profile.title'),
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
  <UiProfileDetail />
</template>

<style lang="scss" scoped>

</style>
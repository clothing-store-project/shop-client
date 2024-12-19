<script lang="ts" setup>
import type {NuxtError} from '#app'

useSeoMeta({
  title: 'Page not found',
  description: 'We are sorry but this page could not be found.'
})

defineProps({
  error: {
    type: Object as PropType<NuxtError>,
    required: true
  }
})

useHead({
  htmlAttrs: {
    lang: 'en'
  }
})
</script>

<template>
  <UiError404 v-if="error.statusCode===404"/>
  <UiError500 v-else/>
</template>

<style scoped>

</style>
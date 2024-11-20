<script setup lang="ts">
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
  <div>
    <h1>Page not found</h1>
    <p>We are sorry but this page could not be found.</p>
  </div>
</template>

<style scoped>

</style>
<script setup lang="ts">
defineProps({
  isOpen: Boolean,
})

defineEmits<{
  (e: 'close'): void,
}>()
</script>

<template>
  <div class="max-w-7xl mx-auto">
    Hello
  </div>
</template>

<style scoped lang="scss">

</style>
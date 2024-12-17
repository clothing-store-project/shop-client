<script lang="ts" setup>
const isMobile = useCheckDeviceIsMobile()
const isProductLayout = useState('deviceLayout').value === 'no-layout'
definePageMeta({
  layout: false,
});
</script>

<template>
  <UiCartMobile v-if="isProductLayout"/>
  <LayoutsClientMenuBottomMobile />
</template>

<style lang="scss" scoped>

</style>
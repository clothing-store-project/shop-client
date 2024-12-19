<script lang="ts" setup>
const layout: Ref<'mobile' | 'default' | 'no-layout' | 'checkout' | false> = useState('deviceLayout', () => 'default');
</script>

<template>
  <NuxtLoadingIndicator/>
  <NuxtLayout :name="layout">
    <NuxtPage/>
  </NuxtLayout>
</template>

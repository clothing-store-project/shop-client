<script lang="ts" setup>
const layout: Ref<'mobile' | 'default' | false> = useState('deviceLayout', () => 'default');

onMounted(() => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  layout.value = isMobile ? 'mobile' : 'default';
});
</script>

<template>
  <NuxtLoadingIndicator/>
  <NuxtLayout :name="layout">
    <NuxtPage/>
  </NuxtLayout>
</template>

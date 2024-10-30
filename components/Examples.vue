<script setup lang="ts">
const timeValue = ref("");
const hello = () => ElMessage.info("hello world");
const helloSuccess = () => ElMessage.success("hello world");

const color = useColorMode();
const colorMode = computed({
  get: () => color.value === 'dark',
  set: () => (color.preference = (color.value === 'dark' ? 'light' : 'dark')),
});
</script>


<template>
  <ClientOnly>
    <el-switch v-model="colorMode" inline-prompt active-text="dark" inactive-text="light" size="large"></el-switch>
  </ClientOnly>

  <el-button :icon="ElIconView" class="m-4" @click="hello">Hello</el-button>
  <el-button class="m-4" type="primary" @click="hello">Hello</el-button>
  <el-button class="m-4" type="success" @click="helloSuccess">Hello</el-button>

  <el-date-picker
      v-model="timeValue"
      type="date"
      placeholder="Pick a day"
  />
</template>

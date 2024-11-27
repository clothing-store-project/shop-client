<script setup lang="ts">
</script>

<template>
  <el-container
      direction="vertical"
  >
    <LayoutsClientMobileHeader/>
    <div class="page-content">
      <slot/>
    </div>
    <LayoutsClientAppFooter/>
  </el-container>
</template>

<style scoped lang="scss">
.el-container {
  width: 100%;
}

.page-content {
  min-height: 100vh;
}
</style>
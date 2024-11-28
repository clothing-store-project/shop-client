<script setup lang="ts">
</script>

<template>
  <el-container
      direction="vertical"
  >
    <LayoutsClientMobileAppHeader/>
    <div class="page-content">
      <slot/>
    </div>
    <LayoutsClientMobileAppFooter/>
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
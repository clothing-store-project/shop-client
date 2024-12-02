<script setup lang="ts">
import 'animate.css'

const loading = ref(false)
</script>

<template>
  <div class="wrapper" v-if="loading">
    <div class="loader"/>
  </div>
  <el-container
      v-if="!loading"
      direction="vertical"
  >
    <LayoutsClientHeaderDesktop/>
    <div class="page-content">
      <slot/>
    </div>
    <el-backtop :right="30" :bottom="100" />
    <LayoutsClientFooterDesktop/>
  </el-container>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;

  .loader {
    width: fit-content;
    font-weight: bold;
    font-family: monospace;
    font-size: 30px;
    background: radial-gradient(circle closest-side, #000 94%, #0000) right/calc(200% - 1em) 100%;
    animation: l24 1s infinite alternate linear;
  }

  .loader::before {
    content: "Loading...";
    line-height: 1em;
    color: #0000;
    background: inherit;
    background-image: radial-gradient(circle closest-side, #fff 94%, #000);
    -webkit-background-clip: text;
    background-clip: text;
  }
}

.el-container {
  width: 100%;
}

.page-content {
  min-height: 100vh;
}

@keyframes l24 {
  100% {
    background-position: left
  }
}
</style>



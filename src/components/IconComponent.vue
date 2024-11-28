<script lang="ts" setup>
import {computed} from 'vue';
import * as allIcons from '@element-plus/icons-vue';

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  size: {
    type: [String, Number],
    required: false,
    default: ''
  },
  color: {
    type: String,
    required: false,
    default: ''
  }
});

type IconKeys = keyof typeof allIcons;

const iconComponent = computed(() => allIcons[props.name as IconKeys]);
</script>

<template>
  <el-icon
      :color="color"
      :size="size"
  >
    <component
        :is="iconComponent"
    />
  </el-icon>
</template>

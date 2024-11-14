<script lang="ts" setup>
import {MenuButton} from '@headlessui/vue'
import {ChevronDownIcon} from '@heroicons/vue/20/solid'

defineProps<{
  name: string
  href: string
  hasMega?: boolean
  isNew?: boolean
}>()
</script>

<template>
  <component
      :is="hasMega ? MenuButton : 'a'"
      :href="!hasMega ? href : undefined"
      class="group inline-flex items-center rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:text-pink-500"
  >
    <span>{{ name }}</span>
    <span v-if="isNew"
          class="ml-2 inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
      NEW
    </span>
    <ChevronDownIcon
        v-if="hasMega"
        aria-hidden="true"
        class="ml-2 h-5 w-5 transition-transform group-hover:rotate-180"
    />
  </component>
</template>
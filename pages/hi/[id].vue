<script setup lang="ts">
import {useUserStore} from '~/stores/user'

const route = useRoute()
const user = useUserStore()
const name = route.params.id
// const runtimeConfig = useRuntimeConfig()
// console.log(runtimeConfig.public.apiBase)
watchEffect(() => {
  user.setNewName(route.params.id as string)
})


const data1 = ref(null)
const test = async () => {
  const {data, error} = await useApiFetch('/todos/1')
  data1.value = data
}
</script>

<template>
  <div>
    <h3>Hi, {{ name }}!</h3>
    <p>{{ data1 }}</p>
    <button type="button" @click="test">Test</button>
  </div>
</template>

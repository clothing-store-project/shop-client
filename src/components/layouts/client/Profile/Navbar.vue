<script lang="ts" setup>
const logout = () => {
  //add logic logout here
}
</script>

<template>
  <aside class="md:sticky w-full md:w-1/4 top-2 mb-8 px-4 sm:px-6 lg:px-8 bg-white shadow-lg">
    <!-- Profile Section -->
    <div class="text-center mb-6 mt-8">
      <img
          alt="Profile"
          class="rounded-full w-20 h-20 mx-auto mb-4"
          src="https://pixio.scriptlelo.com/vue/demo/assets/profile4-DctnQtSO.jpg"
      />
      <h2 class="font-semibold text-gray-800 mb-1">Ronald M. Spino</h2>
    </div>

    <!-- Navigation -->
    <div class="space-y-2 mb-8 w-full">
      <NuxtLinkLocale
          active-class="bg-rose-50 text-rose-500"
          class="px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100 items-center flex gap-2"
          to="dashboard"
      >
        <Icon class="h-6 w-6" name="lucide:chart-no-axes-combined"/>
        {{ $t('general.dashboard.dashboard') }}
      </NuxtLinkLocale>
      <NuxtLinkLocale
          active-class="bg-rose-50 text-rose-500"
          class="px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100 items-center flex gap-2"
          to="/order"
      >
        <Icon class="h-6 w-6" name="lucide:shopping-cart"/>
        {{ $t('general.dashboard.orders') }}
      </NuxtLinkLocale>
      <NuxtLinkLocale
          active-class="bg-rose-50 text-rose-500"
          class="px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100 items-center flex gap-2"
          to="/profile"
      >
        <Icon class="h-6 w-6" name="lucide:user-round-pen"/>
        {{ $t('general.dashboard.profile') }}
      </NuxtLinkLocale>
      <NuxtLinkLocale
          active-class="bg-rose-50 text-rose-500"
          class="px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100 items-center flex gap-2"
          to="/address"
      >
        <Icon class="h-6 w-6" name="lucide:notebook"/>
        {{ $t('general.dashboard.address') }}
      </NuxtLinkLocale>
      <NuxtLinkLocale
          active-class="bg-rose-50 text-rose-500"
          class="px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100 items-center flex gap-2"
          to="/password"
      >
        <Icon class="h-6 w-6" name="lucide:lock"/>
        {{ $t('general.dashboard.password') }}
      </NuxtLinkLocale>
      <div
          class="px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100 items-center flex gap-2 cursor-pointer"
          @click="logout"
      >
        <Icon class="h-6 w-6" name="lucide:log-out"/>
        {{ $t('general.dashboard.log_out') }}
      </div>
    </div>
  </aside>
</template>

<style lang="scss" scoped>

</style>
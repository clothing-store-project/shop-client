<script lang="ts" setup>

</script>

<template>
  <aside class="hidden md:block md:sticky w-full md:w-1/4 top-2 mb-8 px-4 sm:px-6 lg:px-8 bg-white shadow-lg">
    <!-- Profile Section -->
    <div class="text-center mb-8 mt-8">
      <img
          alt="Profile"
          class="rounded-full w-20 h-20 mx-auto mb-4"
          src="https://pixio.scriptlelo.com/vue/demo/assets/profile4-DctnQtSO.jpg"
      />
      <h2 class="font-semibold text-gray-800 mb-1">Ronald M. Spino</h2>
      <p class="text-rose-500 text-sm">info@example.com</p>
    </div>

    <!-- Navigation -->
    <div class="space-y-6 mb-8">
      <div class="space-y-2">
        <h3 class="text-xs font-semibold text-gray-400 uppercase tracking-wider">
          {{ $t('general.dashboard.dashboard') }}
        </h3>
        <nav class="space-y-1">
          <NuxtLink
              to="/dashboard"
              active-class="bg-rose-50 text-rose-500"
              class="block px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100"
          >
            {{ $t('general.dashboard.dashboard')}}
          </NuxtLink>
          <NuxtLink
              to="/order"
              active-class="bg-rose-50 text-rose-500"
              class="block px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100"
          >
            {{ $t('general.dashboard.orders')}}
          </NuxtLink>
        </nav>
      </div>

      <div class="space-y-2">
        <h3 class="text-xs font-semibold text-gray-400 uppercase tracking-wider">
          {{ $t('general.dashboard.account_setting') }}
        </h3>
        <nav class="space-y-1">
          <NuxtLink
              to="/profile"
              active-class="bg-rose-50 text-rose-500"
              class="block px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100"
          >
            {{ $t('general.dashboard.profile') }}
          </NuxtLink>
          <NuxtLink
              to="/address"
              active-class="bg-rose-50 text-rose-500"
              class="block px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100"
          >
            {{ $t('general.dashboard.address') }}
          </NuxtLink>
        </nav>
      </div>
    </div>
  </aside>
</template>

<style lang="scss" scoped>

</style>
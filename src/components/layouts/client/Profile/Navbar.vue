<script lang="ts" setup>
import {Book, BrickWall, KeyRound, LogOut, ShoppingBag, UserRoundPen} from 'lucide-vue-next'

const router = useRouter()

const logOut = () => {
  //add logic logout here
}
</script>

<template>
  <aside class="md:sticky w-1/4 top-2 mb-8 px-4 sm:px-6 lg:px-8 bg-white shadow-lg">
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
    <div class="space-y-4 mb-8">
      <NuxtLinkLocale
          active-class="bg-rose-50 text-rose-500"
          class="px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100 flex gap-2"
          to="/dashboard"
      >
        <BrickWall/>
        {{ $t('general.dashboard.dashboard') }}
      </NuxtLinkLocale>
      <NuxtLinkLocale
          active-class="bg-rose-50 text-rose-500"
          class="px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100 flex gap-2"
          to="/order"
      >
        <ShoppingBag/>
        {{ $t('general.dashboard.orders') }}
      </NuxtLinkLocale>
      <NuxtLinkLocale
          active-class="bg-rose-50 text-rose-500"
          class="px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100 flex gap-2"
          to="/profile"
      >
        <UserRoundPen/>
        {{ $t('general.dashboard.profile') }}
      </NuxtLinkLocale>
      <NuxtLinkLocale
          active-class="bg-rose-50 text-rose-500"
          class="px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100 flex gap-2"
          to="/address"
      >
        <Book/>
        {{ $t('general.dashboard.address') }}
      </NuxtLinkLocale>
      <NuxtLinkLocale
          active-class="bg-rose-50 text-rose-500"
          class="px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100 flex gap-2"
          to="/password"
      >
        <KeyRound/>
        {{ $t('general.dashboard.password') }}
      </NuxtLinkLocale>
      <div
          class="px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100 flex gap-2 cursor-pointer"
          @click="logOut"
      >
        <LogOut/>
        {{ $t('general.dashboard.log_out') }}
      </div>
    </div>
  </aside>
</template>

<style lang="scss" scoped>

</style>
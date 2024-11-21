<script lang="ts" setup>
import {Clock, Heart, ShoppingCart} from 'lucide-vue-next'
const {t} = useI18n()

const stats = [
  {name: t('general.dashboard.total_orders'), value: '3658', icon: ShoppingCart},
  {name: t('general.dashboard.total_pending_orders'), value: '215', icon: Clock},
  {name: t('general.dashboard.total_cart_items'), value: '31576', icon: Heart},
]
</script>

<template>
  <div class="mx-auto px-4 py-12 lg:w-9/12 w-full flex flex-col md:flex-row">
    <!-- Sidebar -->
    <LayoutsClientProfileNavbar/>

    <!-- Main Content -->
    <main class="w-full md:w-3/4 top-2 mb-8 px-4 sm:px-6 lg:px-8">
      <div class="md:p-8">
        <!-- Welcome Section -->
        <div class="rounded-xl border border-gray-200 shadow-sm p-6 mb-6">
          <p class="text-gray-600">
            Hello John Doe (not John Doe?
            <a class="text-rose-500 hover:underline" href="#">Log out</a>)
          </p>
          <p class="text-gray-600 mt-2">
            From your account dashboard you can view your
            <a class="text-gray-800 hover:underline" href="#">recent orders</a>,
            manage your
            <a class="text-gray-800 hover:underline" href="#"
            > billing addresses</a
            >, and
            <a class="text-gray-800 hover:underline" href="#"
            >edit your password and account details</a
            >.
          </p>
        </div>

        <!-- Stats Grid -->
        <div class="rounded-xl grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div
              v-for="stat in stats"
              :key="stat.name"
              class="bg-white rounded-lg shadow-sm p-6 border border-gray-200 hover:bg-rose-500 logo"
          >
            <div class="flex items-center mb-4">
              <div
                  class="w-12 h-12 rounded-lg bg-rose-50 flex items-center justify-center"
              >
                <component
                    :is="stat.icon"
                    class="w-6 h-6 text-rose-500 "
                />
              </div>
            </div>
            <h3 class="text-gray-500 text-sm mb-2">{{ stat.name }}</h3>
            <p class="text-2xl font-bold text-gray-900">{{ stat.value }}</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.logo:hover {
  transition: ease-in 0.3s;
  h3, p {
    color: white;
  }
}
</style>

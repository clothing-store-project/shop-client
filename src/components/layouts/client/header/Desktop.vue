<script lang="ts" setup>
import {mainNavItems, megaMenu} from '~/data/navigationData'

const {days, hours} = useCountdown(new Date('2024-12-31T23:59:59'));

const isMobileMenuOpen = ref<boolean>(false)
const isCartVisible = ref<boolean>(false)
const isSearchVisible = ref<boolean>(false)
const cartStore = useCartStore()
const cartCount = computed(() => cartStore.cartItems.length)

const toggleCart = () => {
  isCartVisible.value = !isCartVisible.value
}


</script>

<template>
  <div class="top-banner">
    <img alt="banner" class="h-12 object-cover w-full" src="~/assets/images/blacknov_fixtop_desktop-29.11.webp"/>
  </div>
  <nav class="bg-white sticky top-0 z-50  border-b-1 border-gray-200">
    <div
        class="md:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl container mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div class="flex h-16 justify-between items-center">
        <NuxtLinkLocale class="flex-shrink-0" to="/">
          <img alt="Pixio" class="h-8 w-auto" src="~/assets/images/logo.svg"/>
        </NuxtLinkLocale>
        <div class="flex items-center">
          <el-menu
              :default-active="'1'"
              :ellipsis="false"
              menu-trigger="hover"
              mode="horizontal"
              popper-class="mega-menu"
          >
            <template v-for="(item,index) in mainNavItems" :key="item.name">
              <el-sub-menu
                  v-if="item.hasMega"
                  :index="index+'m'"
                  class="group inline-flex items-center rounded-md p-0 text-base font-medium text-gray-700 !hover:text-[#ef3224] !hover:bg-transparent"
              >
                <template #title>
                  <span class="group-hover:text-[#ef3224] group-hover:bg-transparent uppercase">{{ item.name }}</span>
                  <span v-if="item.isNew"
                        class="ml-2 inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
                  NEW
                </span>
                </template>
                <template #default>
                  <el-menu-item-group v-for="(data,index) in megaMenu" :key="index">
                    <h3 class="text-base font-medium text-gray-900 ">{{ data.sectionName }}</h3>
                    <ul class="mt-4 space-y-3">
                      <li v-for="item in data.data" :key="item.name">
                        <NuxtLinkLocale :to="item.href" class="text-sm text-gray-500 hover:text-[#ef3224]">
                          {{ item.name }}
                        </NuxtLinkLocale>
                      </li>
                    </ul>
                  </el-menu-item-group>

                  <el-menu-item-group class="bg-gray-50 p-6 rounded-lg">
                    <div class="text-base font-medium text-gray-900">Deal of the month</div>
                    <p class="mt-3 text-sm text-gray-500">
                      Yes! Send me exclusive offers, personalized, and unique gift ideas, tips for shopping
                    </p>
                    <div class="mt-4 grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div class="text-2xl font-bold text-gray-900">{{ days }}</div>
                        <div class="text-xs text-gray-500">DAYS</div>
                      </div>
                      <div>
                        <div class="text-2xl font-bold text-gray-900">{{ hours }}</div>
                        <div class="text-xs text-gray-500">HOURS</div>
                      </div>
                    </div>
                    <NuxtLinkLocale
                        class="mt-6 block w-full rounded-md bg-gray-900 px-4 py-2 text-center text-sm font-medium text-white hover:bg-gray-800"
                        to="#"
                    >
                      View All Products
                    </NuxtLinkLocale>
                  </el-menu-item-group>
                </template>
              </el-sub-menu>
              <el-menu-item
                  v-else
                  :index="index+'m'"
                  class="group uppercase inline-flex items-center rounded-md p-0 text-base font-medium text-gray-700 !hover:text-[#ef3224] !hover:bg-transparent"

              >
                <span>{{ item.name }}</span>
                <span v-if="item.isNew"
                      class="ml-2 inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
                  NEW
                </span>
              </el-menu-item>
            </template>
          </el-menu>
        </div>

        <div class="flex items-center space-x-8">
          <div class="hidden md:flex flex-1 max-w-md rounded-3xl" @click="isSearchVisible = true">
            <el-input
                :prefix-icon="ElIconSearch"
                class="!border-none"
                placeholder="Tìm kiếm"
            />
          </div>
          <NuxtLinkLocale class="hidden md:flex flex-col items-center text-gray-700 hover:text-red-600" to="/account">
            <el-icon :size="22" class="text-xl mb-0.5">
              <LazyElIconUser/>
            </el-icon>
            <span class="text-xs">Tài khoản</span>
          </NuxtLinkLocale>

          <div class="hidden md:flex flex-col items-center text-gray-700 cursor-pointer hover:text-red-600 relative"
               @click="isCartVisible=true">
            <el-icon :size="22" class="text-xl mb-0.5">
              <LazyElIconShoppingBag/>
            </el-icon>
            <span class="text-xs">Giỏ hàng</span>
            <span
                v-if="cartCount > 0"
                class="absolute -top-1 right-2 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center"
            >
              {{ cartCount }}
            </span>
          </div>
          <button
              class="md:hidden p-2 text-gray-700 hover:text-[#ef3224]"
              @click="isMobileMenuOpen = true"
          >
            <Icon class="h-6 w-6" name="lucide:align-justify"/>
          </button>
        </div>
      </div>
    </div>
  </nav>
  <SearchPreview
      :isOpen="isSearchVisible"
      @close="isSearchVisible = false"
  />

  <UiCartPreview
      :isOpen="isCartVisible"
      @close="toggleCart"
  />
  <LayoutsClientMenuMobileMenu
      :is-open="isMobileMenuOpen"
      @close="isMobileMenuOpen = false"
  />
</template>

<style lang="scss" scoped>
.el-menu {
  border-bottom: 0;
}

:deep(.el-menu-item) {
  transition: none;

  &.is-active {
    border: none;
    background-color: transparent;
  }

  &:not(.is-disabled):focus {
    background-color: transparent;
  }
}

:deep(.el-menu--popup) {
  display: flex;
}

@media screen and (max-width: 768px) {
  .el-menu {
    display: none;
  }
}
</style>



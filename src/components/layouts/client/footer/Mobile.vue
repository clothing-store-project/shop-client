<script lang="ts" setup>
const routes = [
  {
    path: '/',
    label: 'Trang chủ',
    icon: 'House'
  },
  {
    path: '#',
    label: 'Sản phẩm',
    icon: 'Present'
  },
  {
    path: '#',
    label: 'Giỏ hàng',
    icon: 'ShoppingBag'
  },
  {
    path: '#',
    label: 'Tài khoản',
    icon: 'User'
  }
];

const companyInfo = {
  name: 'CÔNG TY CỔ PHẦN ADFY',
  registration: {
    number: '2352523242',
    date: '23/09/2024'
  },
  mainOffice: {
    label: 'Số ĐKKD',
    address: 'Sở Kế hoạch và đầu tư Hà Nội'
  },
  headquarters: {
    label: 'Địa chỉ trụ sở',
    address: 'Tổ 28 Thành Thái, Dịch Vọng, Hà Nội, Việt Nam'
  },
  branch: {
    label: 'Địa chỉ liên hệ',
    address: 'Tổ 28 Thành Thái, Dịch Vọng, Hà Nội, Việt Nam'
  },
  contact: {
    phone: '+84-24 - 7222.2222',
    fax: '+84-24 - 6222.2222',
    email: 'contact@adfy.com'
  }
}
</script>

<template>
  <footer class="bg-white px-4 pt-8 border-t border-gray-200">
    <div class="max-w-screen-xl mx-auto space-y-6">
      <!-- Company Name -->
      <h3 class="font-bold text-lg">{{ companyInfo.name }}</h3>

      <!-- Registration Info -->
      <div class="space-y-2">
        <p>
          <span class="font-medium">Số ĐKKD:</span>
          {{ companyInfo.registration.number }}, ngày cấp: {{ companyInfo.registration.date }}
        </p>
        <p>
          <span class="font-medium">nơi cấp:</span>
          {{ companyInfo.mainOffice.address }}
        </p>
      </div>

      <!-- Addresses -->
      <div class="space-y-2">
        <p>
          <span class="font-medium">{{ companyInfo.headquarters.label }}:</span>
          {{ companyInfo.headquarters.address }}
        </p>
        <p>
          <span class="font-medium">{{ companyInfo.branch.label }}:</span>
          {{ companyInfo.branch.address }}
        </p>
      </div>

      <!-- Contact Info -->
      <div class="space-y-2">
        <p>
          <span class="font-medium">Số điện thoại:</span>
          {{ companyInfo.contact.phone }}
        </p>
        <p>
          <span class="font-medium">Fax:</span>
          {{ companyInfo.contact.fax }}
        </p>
        <p>
          <span class="font-medium">Địa chỉ email:</span>
          {{ companyInfo.contact.email }}
        </p>
      </div>

      <!-- Collapsible Sections -->
      <el-collapse>
        <el-collapse-item title="Thương hiệu">
          <div class="py-2">
            <ul class="space-y-2">
              <li>
                <NuxtLinkLocale class="text-gray-600 hover:text-primary-500" to="#">Về ADFY</NuxtLinkLocale>
              </li>
              <li>
                <NuxtLinkLocale class="text-gray-600 hover:text-primary-500" to="#">Tuyển dụng</NuxtLinkLocale>
              </li>
              <li>
                <NuxtLinkLocale class="text-gray-600 hover:text-primary-500" to="#">Liên hệ</NuxtLinkLocale>
              </li>
            </ul>
          </div>
        </el-collapse-item>

        <el-collapse-item title="Hỗ trợ">
          <div class="py-2">
            <ul class="space-y-2">
              <li>
                <NuxtLinkLocale class="text-gray-600 hover:text-primary-500" to="#">Hỏi đáp</NuxtLinkLocale>
              </li>
              <li>
                <NuxtLinkLocale class="text-gray-600 hover:text-primary-500" to="#">Chính sách vận chuyển
                </NuxtLinkLocale>
              </li>
              <li>
                <NuxtLinkLocale class="text-gray-600 hover:text-primary-500" to="#">Chính sách đổi trả
                </NuxtLinkLocale>
              </li>
              <li>
                <NuxtLinkLocale class="text-gray-600 hover:text-primary-500" to="#">Gợi ý tìm size
                </NuxtLinkLocale>
              </li>
              <li>
                <NuxtLinkLocale class="text-gray-600 hover:text-primary-500" to="#">Kiểm tra đơn hàng
                </NuxtLinkLocale>
              </li>
            </ul>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
    <el-text class="d-flex justify-center my-6">
      © 2021 ADFY. All rights reserved.
    </el-text>
  </footer>

  <nav class="sticky bottom-0 z-50 left-0 right-0 bg-white border-t border-gray-200 py-2 px-4">
    <div class="max-w-screen-xl mx-auto">
      <ul class="flex justify-between items-center">
        <li v-for="route in routes" :key="route.path" class="flex-1">
          <NuxtLinkLocale
              :to="route.path"
              class="menu-item flex flex-col items-center gap-1 text-gray-500 hover:text-primary-500 focus:outline-none"
          >
            <IconComponent class="icon" :name="route.icon" :size="24"/>
            <span class="text-xs">{{ route.label }}</span>
          </NuxtLinkLocale>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
:deep(.el-collapse) {
  @apply border-none;
}

:deep(.el-collapse-item__header) {
  @apply font-medium text-base;
}

:deep(.el-collapse-item__content) {
  @apply pb-2;
}

.el-text {
  @apply text-center;
  display: flex;
  justify-content: center;
  margin: 1rem 0;
}


.router-link-active {
  .el-icon {
    color: #ff0000;
  }
}

</style>

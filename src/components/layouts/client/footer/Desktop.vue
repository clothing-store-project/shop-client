<script lang="ts" setup>
const companyInfo = {
  name: 'CÔNG TY CỔ PHẦN ADFY',
  registration: {
    number: '8888888888',
    date: '23/09/2024'
  },
  mainOffice: {
    label: 'Số ĐKKD',
    address: 'Sở Kế hoạch và đầu tư Hà Nội'
  },
  headquarters: {
    label: 'Địa chỉ',
    address: 'Tổ 28 Thành Thái, Dịch Vọng, Hà Nội, Việt Nam'
  },
  contact: {
    phone: '+84-24 - 7222.2222',
    fax: '+84-24 - 6222.2222',
    email: 'contact@adfy.com'
  }
}

const brandLinks = [
  {title: 'Giới thiệu', href: '#'},
  {title: 'Tin tức', href: '#'},
  {title: 'Tuyển dụng', href: '#'},
  {title: 'Với công đồng', href: '#'},
  {title: 'Liên hệ', href: '#'}
]

const supportLinks = [
  {title: 'Hỏi đáp', href: '#'},
  {title: 'Chính sách KHTT', href: '#'},
  {title: 'Điều kiện - Điều khoản Chính sách KHTT', href: '#'},
  {title: 'Chính sách vận chuyển', href: '#'},
  {title: 'Gợi ý tìm size', href: '#'},
  {title: 'Kiểm tra đơn hàng', href: '#'},
  {title: 'Tra cứu điểm thẻ', href: '#'},
  {title: 'Chính sách bảo mật thông tin KH', href: '#'}
]
</script>

<template>
  <footer class="bg-white pt-12 pb-4">
    <div class="md:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div>
          <h3 class="font-medium text-base mb-4">{{ companyInfo.name }}</h3>
          <div class="space-y-2 text-sm text-gray-600">
            <p>
              <span class="font-medium">Số ĐKKD:</span>
              {{ companyInfo.registration.number }}, ngày cấp: {{ companyInfo.registration.date }}
            </p>
            <p>
              <span class="font-medium">Nơi cấp:</span>
              {{ companyInfo.mainOffice.address }}
            </p>
            <p>
              <span class="font-medium">{{ companyInfo.headquarters.label }}:</span>
              {{ companyInfo.headquarters.address }}
            </p>
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
          <div class="flex space-x-4 mt-4">
            <a class="text-gray-600 hover:text-red-600" href="#">
              <i class="fab fa-facebook-f text-xl"></i>
            </a>
            <a class="text-gray-600 hover:text-red-600" href="#">
              <i class="fab fa-instagram text-xl"></i>
            </a>
            <a class="text-gray-600 hover:text-red-600" href="#">
              <i class="fab fa-youtube text-xl"></i>
            </a>
            <a class="text-gray-600 hover:text-red-600" href="#">
              <i class="fab fa-tiktok text-xl"></i>
            </a>
          </div>
        </div>

        <!-- Brand Links -->
        <div>
          <h3 class="font-medium text-base mb-4">THƯƠNG HIỆU</h3>
          <ul class="space-y-2">
            <li v-for="link in brandLinks" :key="link.href">
              <NuxtLinkLocale :to="link.href" class="text-sm text-gray-600 hover:text-red-600 cursor-pointer">
                {{ link.title }}
              </NuxtLinkLocale>
            </li>
          </ul>
        </div>

        <!-- Support Links -->
        <div>
          <h3 class="font-medium text-base mb-4">HỖ TRỢ</h3>
          <ul class="space-y-2">
            <li v-for="link in supportLinks" :key="link.href">
              <NuxtLinkLocale :to="link.href" class="text-sm text-gray-600 hover:text-red-600 cursor-pointer">
                {{ link.title }}
              </NuxtLinkLocale>
            </li>
          </ul>
        </div>

        <!-- App Download -->
        <div>
          <h3 class="font-medium text-base mb-4">TẢI ỨNG DỤNG</h3>
          <div class="flex items-start space-x-4">
            <img alt="QR Code" class="w-24 h-24" src="https://canifa.com/assets/images/bancode.png"/>
            <div class="space-y-2">
              <a class="block" href="#">
                <img alt="Get it on Google Play" class="h-10" src="https://canifa.com/assets/images/googleplay.png"/>
              </a>
              <a class="block" href="#">
                <img alt="Download on App Store" class="h-10" src="https://canifa.com/assets/images/appstore.png"/>
              </a>
            </div>
          </div>

          <!-- Payment Methods -->
          <div class="mt-8">
            <h3 class="font-medium text-base mb-4">PHƯƠNG THỨC THANH TOÁN</h3>
            <img alt="" class="w-full object-contain" src="https://canifa.com/assets/images/pay.svg">
          </div>
        </div>
      </div>
    </div>
    <div class="mt-8 pt-4 border-t flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
      <p class="text-sm text-gray-600">© 2024 ADFY. All rights reserved.</p>
    </div>
  </footer>
</template>


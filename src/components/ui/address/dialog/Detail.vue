<script setup lang="ts">
import type {Address, Commune, District, Province} from "~/types/address";

const props = defineProps({
  isOpenPopup: Boolean,
  address: {
    type: Object as PropType<Address>,
    required: false
  },
})

const emit = defineEmits<{
  (e: 'close-popup'): void,
}>()

const handleOutsideClick = (event: MouseEvent) => {
  if (event.target === event.currentTarget) {
    emit('close-popup')
  }
}
const addresses = ref<Address[]>([
  {
    id: 1,
    address: 'số 1 trường công giải, Quận Cầu Giấy, Hà Nội',
    name: 'Nguyễn Văn A',
    province: 1,
    district: 1,
    commune: 1,
    phone: '0988888888',
    type: 1,
    isDefault: true
  },
  {
    id: 2,
    address: 'số 1 trường công giải, Quận Cầu Giấy, Hà Nội',
    name: 'Nguyễn Văn A',
    province: 1,
    district: 1,
    commune: 1,
    phone: '0988888888',
    type: 1,
    isDefault: false
  },
  {
    id: 3,
    address: 'số 1 trường công giải, Quận Cầu Giấy, Hà Nội',
    name: 'Nguyễn Văn A',
    province: 1,
    district: 1,
    commune: 1,
    phone: '0988888888',
    type: 1,
    isDefault: false
  },
  {
    id: 4,
    address: 'số 1 trường công giải, Quận Cầu Giấy, Hà Nội',
    name: 'Nguyễn Văn A',
    province: 1,
    district: 1,
    commune: 1,
    phone: '0988888888',
    type: 0,
    isDefault: false
  }
])
const provinces = ref<Province[]>([
  {
    id: 1,
    name: 'Hà Nội'
  },
  {
    id: 2,
    name: 'Hồ Chí Minh'
  },
  {
    id: 3,
    name: 'Đà Nẵng'
  },
  {
    id: 4,
    name: 'Hải Phòng'
  },
  {
    id: 5,
    name: 'Cần Thơ'
  }
])
const districts = ref<District[]>([
  {
    id: 1,
    name: 'Quận Cầu Giấy',
    provinceId: 1
  },
  {
    id: 2,
    name: 'Quận Ba Đình',
    provinceId: 1
  },
  {
    id: 3,
    name: 'Quận Hoàn Kiếm',
    provinceId: 1
  },
  {
    id: 4,
    name: 'Quận Thanh Xuân',
    provinceId: 1
  },
  {
    id: 5,
    name: 'Quận Hai Bà Trưng',
    provinceId: 1
  }
])
const communes = ref<Commune[]>([
  {
    id: 1,
    name: 'Phường Dịch Vọng',
    districtId: 1
  },
  {
    id: 2,
    name: 'Phường Dịch Vọng Hậu',
    districtId: 1
  },
  {
    id: 3,
    name: 'Phường Quan Hoa',
    districtId: 1
  },
  {
    id: 4,
    name: 'Phường Yên Hòa',
    districtId: 1
  },
  {
    id: 5,
    name: 'Phường Trung Hòa',
    districtId: 1
  }
])
</script>

<template>
  <Transition name="fade" class="w-full md:min-w-[450px]">
    <div
        v-if="isOpenPopup"
        class="fixed inset-0 bg-black bg-opacity-50 z-999 flex items-center justify-center p-4"
        @click="handleOutsideClick"
    >
      <div
          class="bg-white w-96 rounded-lg p-4"
          @click.stop
      >
        <!-- Header -->
        <div class="flex items-center justify-between p-4">
          <h2 class="text-lg font-medium">{{ $t('page.address.list') }}</h2>
          <button
              class="text-gray-400 hover:text-gray-500"
              @click="$emit('close-popup')"
          >
            <Icon class="w-6 h-6" name="lucide:x"/>
          </button>
        </div>

        <div class="flex flex-col gap-4">
          <div v-for="address in addresses" class="p-4 border-1 rounded-lg flex justify-between">
            <div class="items-center gap-2 mb-1">
              <span class="font-medium">{{ address.name }}</span><br/>
              <span>{{ address.phone }}</span>
              <div class="text-gray-600 mb-1">{{ address.address }}</div>
              <el-tag
                  v-if="address.type"
                  effect="dark"
                  size="large"
                  type="primary"
              >
                {{ $t('page.address.company') }}
              </el-tag>
              <el-tag
                  v-else
                  effect="dark"
                  size="large"
                  type="success"
              >
                {{ $t('page.address.home') }}
              </el-tag>
            </div>
            <el-button>
              Hello
            </el-button>
          </div>

        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped lang="scss">

</style>
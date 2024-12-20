<script lang="ts" setup>
import type {Address} from "~/types/address";

const props = defineProps({
  isOpenPopup: Boolean,
  address: {
    type: Object as PropType<Address>,
    required: false
  },
})

const emit = defineEmits<{
  (e: 'close-popup'): void,
  (e: 'update-address', address: Address): void,
}>()

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
    address: 'số 1 thành thái, Quận Cầu Giấy, Hà Nội',
    name: 'Hồ Thị Tứ',
    province: 1,
    district: 1,
    commune: 1,
    phone: '0988888888',
    type: 1,
    isDefault: false
  },
  {
    id: 4,
    address: 'C+ office thành thái, Quận Cầu Giấy, Hà Nội',
    name: 'Phạm Văn Ba',
    province: 1,
    district: 1,
    commune: 1,
    phone: '0988888888',
    type: 0,
    isDefault: false
  },
  {
    id: 5,
    address: 'Quận Cầu Giấy, Hà Nội',
    name: 'Trương Công Giải',
    province: 1,
    district: 1,
    commune: 1,
    phone: '0988888888',
    type: 0,
    isDefault: false
  },
  {
    id: 6,
    address: 'số 1 trường công giải',
    name: 'Nguyễn Văn B',
    province: 1,
    district: 1,
    commune: 1,
    phone: '0988888888',
    type: 0,
    isDefault: false
  }
])

const dialogVisible = ref(false)
const isNew = ref(false)
const dialogAddress = ref<Address>({} as Address)


const handleAddAddress = () => {
  isNew.value = true
  dialogAddress.value = {} as Address
  dialogVisible.value = true
  // Implement add address logic here
}

const handleEditAddress = (address: Address) => {
  isNew.value = false
  dialogAddress.value = address
  dialogVisible.value = true
  // Implement edit address logic here
}

const handleDialogConfirm = (address: Address, isNew: boolean) => {
  if (isNew) {
    // addAddress()
  } else {
    // updateAddress()
  }
  dialogAddress.value = {} as Address
  dialogVisible.value = false
}
</script>

<template>
  <div v-if="isOpenPopup" class="min-h-screen h-full bg-gray-50 fixed inset-0 z-50">
    <div
        class="bg-white rounded-lg overflow-hidden flex flex-col w-full"
        @click.stop
    >
      <!-- Header -->
      <div class="flex items-center justify-between p-4 shrink-0">
        <h2 class="text-lg font-medium mx-auto">{{ $t('page.address.list') }}</h2>
        <button
            class="text-gray-400 hover:text-gray-500"
            @click="$emit('close-popup')"
        >
          <Icon class="w-6 h-6" name="lucide:x"/>
        </button>
      </div>

      <!-- Content with scrollable area -->
      <el-scrollbar max-height="85vh">
        <div class="w-full grid grid-cols-1 gap-4 flex-grow overflow-y-auto px-4 pb-4">
          <div
              v-for="address in addresses"
              class="cursor-pointer p-4 border-1 rounded-lg flex justify-between mb-4"
              @click="!dialogVisible ? $emit('update-address', address) : null"

          >
            <div class="items-center gap-2 mb-1">
              <span class="font-medium">{{ address.name }}</span><br/>
              <span>{{ address.phone }}</span>
              <div class="text-gray-600 mb-2 w-2/3 whitespace-pre-line">{{ address.address }}</div>
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
            <el-button
                class="!hover:bg-red-200 hover:border-none"
                @click="handleEditAddress(address)"
            >
              <Icon name="lucide:square-pen"/>
            </el-button>
          </div>
        </div>
      </el-scrollbar>


      <!-- Footer -->
      <div v-if="!dialogVisible" class="fixed bottom-0 right-0 p-4 bg-white shrink-0 flex justify-between w-full">
        <el-button
            class="w-full my-4 !bg-[#dd4b39] !border-[#dd4b39] hover:!bg-[#c9301c] hover:!border-[#c9301c]"
            type="danger"
            @click="handleAddAddress"
        >
          <Icon class="mr-2" name="lucide:house-plus"/>
          {{ $t('page.address.add') }}
        </el-button>
      </div>
    </div>
  </div>
  <UiAddressFormMobile
      :dialog-address="dialogAddress"
      :is-new="isNew"
      :is-open="dialogVisible"
      @confirm="handleDialogConfirm"
      @close-popup="()=>{
        dialogVisible = false
      }"
  />
</template>

<style lang="scss" scoped>

</style>
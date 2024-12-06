<script lang="ts" setup>
import type {Address, Province, District, Commune} from "~/types/address";
import type {FormInstance, FormRules} from 'element-plus'
import type {Info} from "~/types/info";

const {t} = useI18n()
useSeoMeta({
  title: t('page.address.title'),
  description: t('page.address.description'),
  ogImage: 'https://example.com/image.png',
  ogTitle: t('page.address.title'),
  ogType: 'website',
})

useHead({
  htmlAttrs: {
    lang: 'vn'
  }
})

const ruleFormRef = ref<FormInstance>()
const dialogVisible = ref(false)
const isNew = ref(false)
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
  },
  {
    id: 5,
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

const address = ref<Address>({})

const rules = reactive<FormRules<Address>>({
  name: [
    {required: true, message: t('validate.name.required'), trigger: 'blur'},
    {min: 3, message: t('validate.name.min', {value: 3}), trigger: 'blur'},
    {max: 255, message: t('validate.name.max', {value: 255}), trigger: 'blur'},
  ],
  phone: [
    {required: true, message: t('validate.phone.required'), trigger: 'blur'},
    {pattern: /^(\+\d{1,3}[- ]?)?\d{10}$/, message: t('validate.phone.pattern'), trigger: 'blur'},
  ],
  province: [
    {required: true, message: t('validate.required', {value: t('general.province')}), trigger: 'blur'},
  ],
  district: [
    {required: true, message: t('validate.required', {value: t('general.district')}), trigger: 'blur'},
  ],
  commune: [
    {required: true, message: t('validate.required', {value: t('general.commune')}), trigger: 'blur'},
  ],
  address: [
    {required: true, message: t('validate.required', {value: t('general.address')}), trigger: 'blur'},
  ],
  type: [
    {required: true, message: t('validate.required', {value: t('page.address.type')}), trigger: 'blur'},
  ],
})

const handleEdit = (selectedAddress: Address) => {
  console.log('Edit address:', selectedAddress)
  isNew.value = false
  address.value = {...selectedAddress}
  dialogVisible.value = true
  // Implement edit logic here
}

const handleAddAddress = () => {
  console.log('Add new address')
  isNew.value = true
  dialogVisible.value = true
  // Implement add address logic here
}

const handleDelete = (selectedAddress: Address) => {
  console.log('Delete address:', selectedAddress)
  // Implement delete logic here
  // deleteAddress(selectedAddress)
}

const handleDialogCancel = () => {
  address.value = {} as Address

  dialogVisible.value = false
}

const handleDialogConfirm = (isNew: boolean) => {
  if (isNew) {
    // addAddress()
  } else {
    // updateAddress()
  }
  address.value = {} as Address
  dialogVisible.value = false
}

const addAddress = async () => {
  // Implement add address logic here
}

const updateAddress = async () => {
  // Implement update address logic here
}

const deleteAddress = async (selectedAddress: Address) => {
  // Implement delete address logic here
}

onMounted(() => {
  // add logic get user addresses here
})
</script>

<template>
  <div class="mx-auto px-4 py-12 lg:w-9/12 w-full flex flex-col md:flex-row">
    <LayoutsClientProfileNavbar/>
    <main class="mx-auto w-full md:w-3/4 top-2 mb-8 px-1 sm:px-6 lg:px-8 md:ml-10 bg-white shadow-lg">
      <div class="flex justify-between items-center px-4">
        <h2 class="text-xl font-medium my-6">{{ $t('page.address.list') }}</h2>
        <el-button
            class="my-4 !bg-[#dd4b39] !border-[#dd4b39] hover:!bg-[#c9301c] hover:!border-[#c9301c]"
            type="danger"
            @click="handleAddAddress"
        >
          <Icon class="mr-2" name="lucide:house-plus"/>
          {{ $t('page.address.add') }}
        </el-button>
      </div>


      <div v-if="addresses.length > 0" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 mb-8">
        <div v-for="address in addresses" :key="address.id" class="p-4">
          <el-card>
            <template #header>
              <div class="text-gray-800 flex justify-between header-custom">
                <h2 class="font-bold">{{ address.name }}</h2>
                <span v-if="address.isDefault === true" class="text-red-500">{{ $t('page.address.default') }}</span>
              </div>
            </template>
            <div class="text-gray-800 mb-2">{{ address.address }}</div>
            <div class="text-gray-800 mb-2">
              {{ address.phone }}
            </div>
            <div v-if="address.type">
              <el-tag
                  effect="dark"
                  size="large"
                  type="primary"
              >
                {{ $t('page.address.company') }}
              </el-tag>
            </div>
            <div v-else>
              <el-tag
                  effect="dark"
                  size="large"
                  type="success"
              >
                {{ $t('page.address.home') }}
              </el-tag>
            </div>
            <template #footer>
              <el-button
                  class="!text-blue-500"
                  link
                  type="primary"
                  @click="handleEdit(address)"
              >
                <Icon class="mr-2" name="lucide:pencil"/>
                {{ $t('general.edit') }}
              </el-button>
              <el-button
                  class="!text-red-500"
                  link
                  type="primary"
                  @click="handleDelete(address)"
              >
                <Icon name="lucide:trash-2"/>
                {{ $t('general.delete') }}
              </el-button>
            </template>
          </el-card>
        </div>
      </div>
      <div v-else class="flex justify-center items-center h-96">
        <p class="text-gray-600">{{ $t('page.address.no_address') }}</p>
      </div>
    </main>
  </div>
  <el-dialog
      v-model="dialogVisible"
      :before-close="handleDialogCancel"
      :title="$t('page.address.title')"
      style="min-width: 240px"
  >
    <el-form ref="ruleFormRef" :model="address" :rules="rules">
      <div class="grid grid-cols-1 md:grid-cols-2 md:space-x-2">
        <el-form-item :label="$t('general.name')" class="flex-col" label-position="left" prop="name">
          <el-input v-model="address.name" autocomplete="off"/>
        </el-form-item>
        <el-form-item :label="$t('general.phone')" class="flex-col" label-position="left" prop="phone">
          <el-input v-model="address.phone"/>
        </el-form-item>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 md:space-x-2">
        <el-form-item :label="$t('general.province')" class="flex-col" label-position="left" prop="province">
          <el-select
              v-model="address.province"
              :label="$t('general.name')"
              :placeholder="$t('general.province')"
              class="w-full mt-2"
              filterable
          >
            <el-option
                v-for="province in provinces"
                :key="province.id"
                :label="province.name"
                :value="province.id"
            />
          </el-select>
        </el-form-item>

        <el-form-item :label="$t('general.district')" class="flex-col" label-position="left" prop="district">
          <el-select
              v-model="address.district"
              :label="$t('general.district')"
              :placeholder="$t('general.district')"
              class="w-full mt-2"
              filterable
          >
            <el-option
                v-for="district in districts.filter(d => d.provinceId === address.province)"
                :key="district.id"
                :label="district.name"
                :value="district.id"
            />
          </el-select>
        </el-form-item>
      </div>
      <el-form-item :label="$t('general.commune')" class="flex-col" label-position="left" prop="commune">
        <el-select
            v-model="address.commune"
            :label="$t('general.commune')"
            :placeholder="$t('general.commune')"
            class="w-full mt-2"
            filterable
        >
          <el-option
              v-for="commune in communes.filter(c => c.districtId === address.district)"
              :key="commune.id"
              :label="commune.name"
              :value="commune.id"
          />
        </el-select>
      </el-form-item>
      <el-form-item :label="$t('general.address')" class="flex-col" label-position="left" prop="address">
        <el-input v-model="address.address" type="textarea" autosize/>
      </el-form-item>
      <el-form-item :label="$t('page.address.type')" class="flex-col w-full" label-position="left" prop="type">
        <el-radio-group v-model="address.type" class="mt-2" size="large">
          <el-radio-button class="w-1/2" :label="$t('page.address.home')" :value="0"/>
          <el-radio-button class="w-1/2" :label="$t('page.address.company')" :value="1"/>
        </el-radio-group>
      </el-form-item>
      <el-form-item :label="$t('page.address.default')" class="flex-col" label-position="left" prop="isDefault">
        <el-checkbox v-model="address.isDefault" class="mt-2">{{ $t('page.address.default') }}</el-checkbox>
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="space-x-2">
        <el-button @click="handleDialogCancel">Cancel</el-button>
        <el-button v-if="isNew" type="success" @click="handleDialogConfirm(false)">
          Confirm
        </el-button>
        <el-button v-else type="primary" @click="handleDialogConfirm(true)">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped>
@media (max-width: 375px) {
  .el-card {
    .el-card__header {
      .header-custom {
        flex-direction: column;
      }
    }
  }
}
</style>
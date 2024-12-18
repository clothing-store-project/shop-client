<script lang="ts" setup>
import type {Address, Commune, District, Province} from "~/types/address";
import type {FormRules} from "element-plus";

const props = defineProps({
  isNew: Boolean,
  isOpen: Boolean,
  dialogAddress: {
    type: Object as PropType<Address>,
    required: true
  },
})

const emit = defineEmits<{
  (e: 'close-popup'): void,
  (e: 'confirm', address: Address, isNew: boolean): void,
}>()

const handleOutsideClick = (event: MouseEvent) => {
  if (event.target === event.currentTarget) {
    emit('close-popup')
  }
}

const {t} = useI18n()
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
</script>

<template>
  <Transition name="fade">
    <div
        v-if="isOpen"
        class="fixed inset-0 bg-black bg-opacity-50 z-1000 flex flex-col items-center justify-center p-4 overflow-y-auto"
        @click="handleOutsideClick"
    >
      <div class="bg-white w-1/3 rounded-lg overflow-hidden flex flex-col px-4">
        <div class="flex items-center justify-between mt-4">
          <h2 class="text-lg font-medium">{{ isNew ? 'Thêm địa chỉ' : 'Sửa địa chỉ' }}</h2>
          <button
              class="text-gray-400 hover:text-gray-500"
              @click="$emit('close-popup')"
          >
            <Icon class="w-6 h-6" name="lucide:x"/>
          </button>
        </div>

        <el-form ref="ruleFormRef" :model="dialogAddress" :rules="rules" class="mb-4">
          <div class="grid grid-cols-1 md:grid-cols-2 md:space-x-2">
            <el-form-item :label="$t('general.name')" class="flex-col" label-position="left" prop="name">
              <el-input v-model="dialogAddress.name" autocomplete="off"/>
            </el-form-item>
            <el-form-item :label="$t('general.phone')" class="flex-col" label-position="left" prop="phone">
              <el-input v-model="dialogAddress.phone"/>
            </el-form-item>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 md:space-x-2">
            <el-form-item :label="$t('general.province')" class="flex-col" label-position="left" prop="province">
              <el-select
                  v-model="dialogAddress.province"
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
                  v-model="dialogAddress.district"
                  :label="$t('general.district')"
                  :placeholder="$t('general.district')"
                  class="w-full mt-2"
                  filterable
              >
                <el-option
                    v-for="district in districts.filter(d => d.provinceId === dialogAddress.province)"
                    :key="district.id"
                    :label="district.name"
                    :value="district.id"
                />
              </el-select>
            </el-form-item>
            <el-form-item :label="$t('general.commune')" class="flex-col" label-position="left" prop="commune">
              <el-select
                  v-model="dialogAddress.commune"
                  :label="$t('general.commune')"
                  :placeholder="$t('general.commune')"
                  class="w-full mt-2"
                  filterable
              >
                <el-option
                    v-for="commune in communes.filter(c => c.districtId === dialogAddress.district)"
                    :key="commune.id"
                    :label="commune.name"
                    :value="commune.id"
                />
              </el-select>
            </el-form-item>
          </div>
          <div class="grid grid-cols-5 gap-2">
            <el-form-item :label="$t('general.address')" class="col-span-3" label-position="top" prop="address">
              <el-input v-model="dialogAddress.address" type="text"/>
            </el-form-item>
            <el-form-item :label="$t('page.address.type')" class="col-span-2 col-start-4 w-full" label-position="top"
                          prop="type">
              <el-radio-group v-model="dialogAddress.type">
                <el-radio-button :label="$t('page.address.home')" :value="0"/>
                <el-radio-button :label="$t('page.address.company')" :value="1"/>
              </el-radio-group>
            </el-form-item>
          </div>
          <el-form-item class="flex-col" label-position="left" prop="isDefault">
            <el-checkbox v-model="dialogAddress.isDefault" class="mt-2">{{ $t('page.address.default') }}</el-checkbox>
          </el-form-item>
          <div class="flex justify-end gap-1">
            <el-button @click="$emit('close-popup')">{{ $t('general.cancel') }}</el-button>
            <el-button v-if="isNew" type="primary" @click="$emit('confirm', dialogAddress, true)">
              {{ $t('general.add') }}
            </el-button>
            <el-button v-else type="primary" @click="$emit('confirm', dialogAddress, false)">
              {{ $t('general.update') }}
            </el-button>
          </div>

        </el-form>
      </div>

    </div>

  </Transition>
</template>

<style lang="scss" scoped>

</style>
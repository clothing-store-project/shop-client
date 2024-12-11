<script lang="ts" setup>
import type {Info} from '~/types/info'
import type {FormInstance, FormRules} from 'element-plus'

const {t} = useI18n()
const ruleFormRef = ref<FormInstance>()
const avatarUrl = ref<string | null>(null)

const formInfo = reactive<Info>({
  sex: '',
  name: '',
  email: '',
  phone: '',
  birthday: '',
})

const rules = reactive<FormRules<Info>>({
  sex: [
    {required: true, message: t('validate.sex.required'), trigger: 'blur'},
  ],
  name: [
    {required: true, message: t('validate.name.required'), trigger: 'blur'},
    {min: 3, message: t('validate.name.min', {value: 3}), trigger: 'blur'},
    {max: 255, message: t('validate.name.max', {value: 255}), trigger: 'blur'},
  ],
  phone: [
    {required: true, message: t('validate.phone.required'), trigger: 'blur'},
    {pattern: /^(\+\d{1,3}[- ]?)?\d{10}$/, message: t('validate.phone.pattern'), trigger: 'blur'},
  ],
  birthday: [
    {required: true, message: t('validate.birthday.required'), trigger: 'blur'},
  ],
})

const disabledDate = (time: Date) => {
  return time.getTime() > Date.now();
};

const handleAvatarUpload = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files && target.files[0]) {
    const file = target.files[0]
    const reader = new FileReader()
    reader.onload = (e) => {
      avatarUrl.value = e.target?.result as string
    }
    reader.readAsDataURL(file)
  }
  // call upload api image here
}

const updateProfile = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate(async (valid: boolean) => {
    if (!valid) return

    formEl.resetFields()
  })
}

onMounted(() => {
  // get user information here
})
</script>

<template>
  <div class="mx-auto px-4 py-12 lg:w-9/12 w-full flex flex-col md:flex-row">
    <LazyLayoutsClientProfileNavbar/>
    <!-- Main Content -->
    <main class="w-full md:w-3/4 top-2 mb-8 px-0.5 sm:px-6 lg:px-8">
      <div class="w-full bg-white rounded-lg shadow-md overflow-hidden">
        <div class="p-8 flex items-center">
          <div class="relative">
            <img
                :src="avatarUrl || 'https://via.placeholder.com/80'"
                alt="Profile Picture"
                class="w-20 h-20 rounded-full object-cover"
            />
            <label
                class="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-md cursor-pointer items-center flex"
                for="avatar-upload">
              <Icon class="w-5 h-5 text-gray-600" name="lucide:camera"/>
            </label>
            <input
                id="avatar-upload"
                accept="image/*"
                class="hidden"
                type="file"
                @change="handleAvatarUpload"
            />
          </div>
          <div class="ml-4">
            <h2 class="text-xl font-bold">John Doe</h2>
            <p class="text-sm text-gray-600">johndoe@example.com</p>
          </div>
        </div>
        <el-form ref="ruleFormRef" :model="formInfo" :rules="rules" class="p-8">
          <el-form-item :label="$t('general.profile.label.sex')" prop="sex">
            <el-radio-group v-model="formInfo.sex" class="mt-2" size="large">
              <el-radio-button :label="$t('general.profile.sex.male')" value="1"/>
              <el-radio-button :label="$t('general.profile.sex.female')" value="2"/>
              <el-radio-button :label="$t('general.profile.sex.other')" value="3"/>
            </el-radio-group>
          </el-form-item>

          <el-form-item :label="$t('general.profile.label.name')" prop="name">
            <el-input v-model="formInfo.name" :placeholder="$t('general.profile.placeholder.name')" class="mt-2"/>
          </el-form-item>

          <el-form-item :label="$t('general.profile.label.email')" prop="email">
            <el-input v-model="formInfo.email" :placeholder="$t('general.profile.placeholder.email')" class="mt-2"
                      readonly/>
          </el-form-item>

          <el-form-item :label="$t('general.profile.label.phone')" prop="phone">
            <el-input v-model="formInfo.phone" :placeholder="$t('general.profile.placeholder.phone')" class="mt-2"/>
          </el-form-item>

          <el-form-item :label="$t('general.profile.label.birthday')" prop="birthday">
            <el-date-picker v-model="formInfo.birthday" :disabledDate="disabledDate"
                            :placeholder="$t('general.profile.placeholder.birthday')" class="mt-2"/>
          </el-form-item>
          <el-form-item class="mt-12">
            <el-button class="w-full text-center" type="primary"
                       @click.prevent="updateProfile(ruleFormRef)">
              {{ $t('general.update') }}
            </el-button>
          </el-form-item>
        </el-form>
      </div>

    </main>
  </div>
</template>

<style lang="scss" scoped>
.el-form {
  .el-form-item {
    display: block;
  }

  .el-button:hover {
    background-color: white;
    border-color: black;
    color: #6b7280;
  }
}
</style>
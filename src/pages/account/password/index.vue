<script lang="ts" setup>
import type {Password} from "~/types/password";
import type {FormInstance, FormRules} from "element-plus";

const {t} = useI18n()
useSeoMeta({
  title: t('page.password.title'),
  description: t('page.password.description'),
  ogImage: 'https://example.com/image.png',
  ogTitle: t('page.password.title'),
  ogType: 'website',
})

useHead({
  htmlAttrs: {
    lang: 'vn'
  }
})

const payload = ref()

const ruleFormRef = ref<FormInstance>()
const formPassword = reactive<Password>({
  oldPassword: '',
  password: '',
  passwordConfirmation: '',
})

watch(formPassword, (newVal) => {
  payload.value = {
    old_password: newVal.oldPassword,
    password: newVal.password,
    password_confirmation: newVal.passwordConfirmation
  }
})

const rules = reactive<FormRules<Password>>({
  oldPassword: [
    {required: true, message: t('validate.password.required', {name: t('general.oldPassword')}), trigger: 'blur'},
    {min: 6, message: t('validate.password.min', {name: t('general.oldPassword'), value: 6}), trigger: 'blur'},
    {max: 255, message: t('validate.password.max', {name: t('general.oldPassword'), value: 255}), trigger: 'blur'},
  ],
  password: [
    {required: true, message: t('validate.password.required', {name: t('general.newPassword')}), trigger: 'blur'},
    {min: 6, message: t('validate.password.min', {name: t('general.newPassword'), value: 6}), trigger: 'blur'},
    {max: 255, message: t('validate.password.max', {name: t('general.newPassword'), value: 255}), trigger: 'blur'},
    {
      validator: (rule, value, callback) => {
        value === formPassword.oldPassword
            ? callback(new Error(t('validate.password.same', {name: t('general.newPassword'), value: t('general.oldPassword')})))
            : callback();
      },
      trigger: 'blur',
    },
  ],
  passwordConfirmation: [
    {required: true, message: t('validate.password.required', {name: t('general.confirmPassword')}), trigger: 'blur'},
    {min: 6, message: t('validate.password.min', {name: t('general.confirmPassword'), value: 6}), trigger: 'blur'},
    {max: 255, message: t('validate.password.max', {name: t('general.confirmPassword'), value: 255}), trigger: 'blur'},
    {
      validator: (rule, value, callback) => {
        value !== formPassword.password
          ? callback(new Error(t('validate.password.confirm', {name: t('general.confirmPassword')})))
          : callback();
      },
      trigger: 'blur',
    },
  ],
})

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

const updatePassword = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate(async (valid: boolean) => {
    if (!valid) return

    // Call API here
    // try {
    //   const {data} = await useAxios().post('/auth/password', payload.value)
    //   if (data) {
    //     await useToast().success(t('general.updateSuccess'))
    //     formEl.resetFields()
    //   }
    // } catch (e) {
    //   await useToast().error(t('general.updateFailed'))
    // }
  })
}
</script>

<template>
  <div class="mx-auto px-4 py-12 lg:w-9/12 w-full flex flex-col md:flex-row">
    <LazyLayoutsClientProfileNavbar/>
    <!-- Main Content -->
    <main class="w-full md:w-3/4 top-2 mb-8 px-0.5 sm:ml-8 sm:px-6 lg:px-8 shadow-lg">
      <div class="flex justify-between items-center px-4">
        <h2 class="text-xl font-medium my-6">{{ $t('page.password.title') }}</h2>
      </div>
      <el-form ref="ruleFormRef" :model="formPassword" :rules="rules" class="p-4">
        <el-form-item :label="$t('general.oldPassword')" prop="oldPassword" class="">
          <el-input class="mt-2" v-model="formPassword.oldPassword" type="password" clearable :placeholder="$t('general.oldPassword')"/>
        </el-form-item>
        <el-form-item :label="$t('general.newPassword')" prop="password">
          <el-input class="mt-2" v-model="formPassword.password" type="password" clearable :placeholder="$t('general.newPassword')"/>
        </el-form-item>
        <el-form-item :label="$t('general.confirmPassword')" prop="passwordConfirmation">
          <el-input class="mt-2" v-model="formPassword.passwordConfirmation" type="password" clearable :placeholder="$t('general.confirmPassword')"/>
        </el-form-item>
        <div class="flex justify-end gap-2 mt-10">
          <el-form-item>
            <el-button class="" @click="resetForm(ruleFormRef)">{{ $t('general.reset') }}</el-button>
          </el-form-item>
          <el-form-item>
            <el-button class="hover:!bg-red-500 hover:!border-none" type="primary" @click="updatePassword(ruleFormRef)">{{ $t('page.password.save') }}</el-button>
          </el-form-item>
        </div>
      </el-form>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.el-form {
  .el-form-item {
    display: block;
  }
}
</style>
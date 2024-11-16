<script setup lang="ts">
import type {Rating} from "~/types/rating";
import {FormInstance, FormRules} from "element-plus";

const ruleFormRef = ref<FormInstance>()
const rating = ref<number>(0)
const ratingError = ref<boolean>(false)
const ruleForm = reactive<Rating>({
  author: '',
  email: '',
  comment: ''
})

const {t} = useI18n()

const rules = reactive<FormRules <Rating>>({
  author: [
    {required: true, message: t('validate.name.required'), trigger: 'blur'},
    {min: 3, message: t('validate.name.min', {value: 3}), trigger: 'blur'},
    {max: 255, message: t('validate.name.max', {value: 255}), trigger: 'blur'}
  ],
  email: [
    {required: true, message: t('validate.email.required'), trigger: 'blur'},
    {type: 'email', message: t('validate.email.email'), trigger: 'blur'},
    {max: 255, message: t('validate.email.max', {value: 255}), trigger: 'blur'}
  ],
  comment: [
    {required: true, message: t('validate.comment.required'), trigger: 'blur'},
    {min: 10, message: t('validate.comment.min', {value: 10}), trigger: 'blur'},
    {max: 500, message: t('validate.comment.max', {value: 500}), trigger: 'blur'}
  ]
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return

  await formEl.validate(async (valid: boolean) => {
    if (rating.value === 0) {
      ratingError.value = true
      return
    }

    if (!valid) return
    // reviews.value.push({
    //   id: reviews.value.length + 1,
    //   name: ruleForm.author,
    //   avatar: 'https://pet-project-shop.github.io/template/images/profile2.jpg',
    //   date: new Date().toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'}),
    //   rating: rating.value,
    //   comment: ruleForm.comment
    // })

    formEl.resetFields()
    rating.value = 0
    ratingError.value = false
  })
}

watch(() => rating.value, () => {
  ratingError.value = false
})
</script>

<template>
  <div class=" mx-auto">
    <h2 class="text-2xl font-bold mb-4">{{ $t('general.comments') }}</h2>
    <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        class="space-y-6"
        label-position="top"
        require-asterisk-position="right"
    >
      <!-- Rating Section -->
      <div class="space-y-2">
        <el-form-item :label="$t('general.rating')" label-position="left" required class="flex space-x-1">
          <el-rate v-model="rating"/>
          <div
              v-if="ratingError"
              class="el-form-item__error"
          >
            {{ $t('validate.rating.required') }}
          </div>
        </el-form-item>
      </div>

      <!-- Author and Email Fields -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <el-form-item :label="$t('general.name')" prop="author">
          <el-input
              v-model="ruleForm.author"
              :placeholder="$t('general.name')"
              type="text"
          />
        </el-form-item>

        <el-form-item :label="$t('general.email')" prop="email">
          <el-input
              v-model="ruleForm.email"
              :placeholder="$t('general.email')"
              type="email"
          />
        </el-form-item>
      </div>

      <!-- Comment Textarea -->
      <el-form-item :label="$t('general.comment')" prop="comment">
        <el-input
            v-model="ruleForm.comment"
            :placeholder="$t('general.comments')"
            :rows="6"
            type="textarea"
        />
      </el-form-item>

      <!-- Submit Button -->
      <button
          class="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
          type="button"
          @click="submitForm(ruleFormRef)"
      >
        {{ $t('general.submit') }}
      </button>
    </el-form>
  </div>
</template>

<style scoped lang="scss">

</style>
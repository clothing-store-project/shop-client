<script lang="ts" setup>
const avatarUrl = ref<string | null>(null)

const form = reactive({
  sex: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  birthday: '',
})

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

const updateProfile = () => {
  // Implement your update logic here

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
        <form class="p-8 space-y-4" @submit.prevent="updateProfile">
          <el-form-item :label="$t('general.profile.label.sex')">
            <el-radio-group v-model="form.sex" size="large" class="mt-2">
              <el-radio-button :label="$t('general.profile.sex.male')" value="1" />
              <el-radio-button :label="$t('general.profile.sex.female')" value="2" />
              <el-radio-button :label="$t('general.profile.sex.other')" value="3" />
            </el-radio-group>
          </el-form-item>

          <el-form-item :label="$t('general.profile.label.name')">
            <el-input v-model="form.firstName" :placeholder="$t('general.profile.placeholder.name')" class="mt-2"/>
          </el-form-item>

          <el-form-item :label="$t('general.profile.label.email')">
            <el-input v-model="form.email" :placeholder="$t('general.profile.placeholder.email')" readonly class="mt-2"/>
          </el-form-item>

          <el-form-item :label="$t('general.profile.label.phone')">
            <el-input v-model="form.phone" :placeholder="$t('general.profile.placeholder.phone')" class="mt-2"/>
          </el-form-item>

          <el-form-item :label="$t('general.profile.label.birthday')">
            <el-date-picker v-model="form.birthday" :placeholder="$t('general.profile.placeholder.birthday')" class="mt-2"/>
          </el-form-item>
          <div class="flex justify-end mt-4">
            <el-button class="bg-red-600 hover:bg-red-700 text-white" native-type="submit" type="primary">
              {{ $t('general.update') }}
            </el-button>
          </div>
        </form>
      </div>

    </main>
  </div>
</template>

<style lang="scss" scoped>

</style>
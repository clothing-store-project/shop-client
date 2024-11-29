<script lang="ts" setup>
import {CameraIcon} from "lucide-vue-next";

const avatarUrl = ref<string | null>(null)

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  newPassword: '',
  confirmPassword: '',
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
</script>

<template>
  <div class="mx-auto px-4 py-12 lg:w-9/12 w-full flex flex-col md:flex-row">
    <LazyLayoutsClientProfileNavbar/>
    <!-- Main Content -->
    <main class="w-full md:w-3/4 top-2 mb-8 px-4 sm:px-6 lg:px-8">
      <div class="w-full bg-white rounded-lg shadow-md overflow-hidden">
        <div class="p-8 flex items-center">
          <div class="relative">
            <img
                :src="avatarUrl || 'https://via.placeholder.com/80'"
                alt="Profile Picture"
                class="w-20 h-20 rounded-full object-cover"
            />
            <label class="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-md cursor-pointer"
                   for="avatar-upload">
              <CameraIcon class="w-5 h-5 text-gray-600"/>
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
          <el-input v-model="form.firstName" placeholder="Name"/>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <el-input v-model="form.email" placeholder="Email address"/>
            <el-input v-model="form.phone" placeholder="Phone"/>
            <el-input v-model="form.newPassword" placeholder="New password (leave blank to leave unchanged)"
                      type="password"/>
            <el-input v-model="form.confirmPassword" placeholder="Confirm new password" type="password"/>
          </div>
          <div class="flex justify-end">
            <el-button class="bg-red-600 hover:bg-red-700 text-white" native-type="submit" type="primary">
              Update Profile
            </el-button>
          </div>
        </form>
      </div>

    </main>
  </div>
</template>

<style lang="scss" scoped>

</style>
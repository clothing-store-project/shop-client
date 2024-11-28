<script lang="ts" setup>

// Form state
const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const showPassword = ref(false)

// Form submission
const handleSubmit = () => {
  console.log({
    email: email.value,
    password: password.value,
    rememberMe: rememberMe.value
  })
}

const handleRegister = () => {
  console.log('Navigate to register page')
}
</script>

<template>
  <div class="wrapper bg-[#fffaf3]">
    <!-- Breadcrumb -->
    <div class="container mx-auto px-4 py-4">
      <div class="flex items-center space-x-2 text-sm">
        <a class="text-gray-500 hover:text-black" href="#">Home</a>
        <span class="text-gray-400">/</span>
        <span class="text-gray-900">Login</span>
      </div>
    </div>

    <!-- Main Content -->
    <div class="container mx-auto w-full px-4 py-4 ">
      <div class="grid md:grid-cols-2 gap-8 items-center">
        <!-- Left Side Image -->
        <div class="hidden md:block">
          <img
              alt="Login Banner"
              class="rounded-lg w-full"
              src=""
          />
        </div>

        <!-- Login Form -->
        <div class="w-full max-w-md mx-auto">
          <div class="bg-white rounded-lg p-8 shadow-sm">
            <h2 class="text-2xl font-semibold text-center mb-2">Login</h2>
            <p class="text-gray-500 text-center mb-6">welcome please login to your account</p>

            <el-form
                label-position="top"
                @submit.prevent="handleSubmit"
            >
              <el-form-item :label="$t('general.email')" class="space-y-2">
                <el-input
                    id="email"
                    v-model="email"
                    :placeholder="$t('general.email')"
                    required
                    type="email"
                />
              </el-form-item>

              <el-form-item :label="$t('general.password')">
                <el-input
                    id="password"
                    v-model="password"
                    :type="password"
                    placeholder="Password"
                    required
                    show-password
                />
              </el-form-item>

              <a class="text-sm text-red-500 hover:text-red-600 flex justify-end my-2" href="#">Forgot Password ?</a>


              <el-form-item class="flex">
                <el-button
                    class="flex-1 bg-black text-white px-4 py-2 rounded-lg border border-black mr-2 login"
                >
                  SIGN IN
                </el-button>
                <el-button
                    class="flex-1 border border-gray-300 px-4 py-2 rounded-lg "
                    @click="handleRegister"
                >
                  REGISTER
                </el-button>
              </el-form-item>

            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.el-input{
  height: 2.4rem;
}
.el-button{
  height: 2.4rem;
}
</style>
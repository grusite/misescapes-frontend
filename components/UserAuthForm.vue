<template>
  <form @submit.prevent="submitForm(userInfo)" class="flex flex-col space-y-5">
    <div v-if="hasName" class="flex flex-col space-y-1">
      <label for="name" class="text-sm font-semibold text-gray-500">Nombre</label>
      <input
        type="text"
        id="name"
        autofocus
        class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
        v-model="userInfo.name"
      />
    </div>
    <div class="flex flex-col space-y-1">
      <label for="email" class="text-sm font-semibold text-gray-500">Email</label>
      <input
        type="email"
        id="email"
        autofocus
        class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
        v-model="userInfo.email"
      />
    </div>
    <div class="flex flex-col space-y-1">
      <div class="flex items-center justify-between">
        <label for="password" class="text-sm font-semibold text-gray-500">Password</label>
        <nuxt-link to="#" class="text-sm text-blue-600 hover:underline focus:text-blue-800"
          >olvidó la contraseña?</nuxt-link
        >
      </div>
      <input
        type="password"
        id="password"
        class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
        v-model="userInfo.password"
      />
    </div>
    <div v-if="hasRememberMe" class="flex items-center space-x-2">
      <input
        type="checkbox"
        id="remember"
        class="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
      />
      <label for="remember" class="text-sm font-semibold text-gray-500">Recuérdame</label>
    </div>
    <div>
      <button
        type="submit"
        class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 rounded-md shadow bg-pink-700 hover:bg-pink-800 focus:outline-none focus:ring-gray-200 focus:ring-4"
      >
        {{ buttonText }}
      </button>
    </div>
    <div v-if="hasSocialButtons" class="flex flex-col space-y-5">
      <span class="flex items-center justify-center space-x-2">
        <span class="h-px bg-gray-400 w-14"></span>
        <span class="font-normal text-gray-500">o entra con</span>
        <span class="h-px bg-gray-400 w-14"></span>
      </span>
      <div class="flex flex-col space-y-4">
        <nuxt-link
          to="#"
          class="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-red-700 rounded-md group hover:bg-red-700 focus:outline-none"
        >
          <span>
            <svg
              class="w-5 h-5 text-red-700 fill-current group-hover:text-white"
              viewBox="0 0 16 16"
              version="1.1"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M8.937,10.603c-0.383-0.284-0.741-0.706-0.754-0.837c0-0.223,0-0.326,0.526-0.758c0.684-0.56,1.062-1.297,1.062-2.076c0-0.672-0.188-1.273-0.512-1.71h0.286l1.58-1.196h-4.28c-1.717,0-3.222,1.348-3.222,2.885c0,1.587,1.162,2.794,2.726,2.858c-0.024,0.113-0.037,0.225-0.037,0.334c0,0.229,0.052,0.448,0.157,0.659c-1.938,0.013-3.569,1.309-3.569,2.84c0,1.375,1.571,2.373,3.735,2.373c2.338,0,3.599-1.463,3.599-2.84C10.233,11.99,9.882,11.303,8.937,10.603 M5.443,6.864C5.371,6.291,5.491,5.761,5.766,5.444c0.167-0.192,0.383-0.293,0.623-0.293l0,0h0.028c0.717,0.022,1.405,0.871,1.532,1.89c0.073,0.583-0.052,1.127-0.333,1.451c-0.167,0.192-0.378,0.293-0.64,0.292h0C6.273,8.765,5.571,7.883,5.443,6.864 M6.628,14.786c-1.066,0-1.902-0.687-1.902-1.562c0-0.803,0.978-1.508,2.093-1.508l0,0l0,0h0.029c0.241,0.003,0.474,0.04,0.695,0.109l0.221,0.158c0.567,0.405,0.866,0.634,0.956,1.003c0.022,0.097,0.033,0.194,0.033,0.291C8.752,14.278,8.038,14.786,6.628,14.786 M14.85,4.765h-1.493v2.242h-2.249v1.495h2.249v2.233h1.493V8.502h2.252V7.007H14.85V4.765z"
              ></path>
            </svg>
          </span>
          <span class="text-sm font-medium text-red-700 group-hover:text-white">Google</span>
        </nuxt-link>
        <nuxt-link
          to="#"
          class="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-blue-500 rounded-md group hover:bg-blue-500 focus:outline-none"
        >
          <span>
            <svg
              class="text-blue-500 group-hover:text-white"
              width="20"
              height="20"
              fill="currentColor"
            >
              <path
                d="M11.344,5.71c0-0.73,0.074-1.122,1.199-1.122h1.502V1.871h-2.404c-2.886,0-3.903,1.36-3.903,3.646v1.765h-1.8V10h1.8v8.128h3.601V10h2.403l0.32-2.718h-2.724L11.344,5.71z"
              ></path>
            </svg>
          </span>
          <span class="text-sm font-medium text-blue-500 group-hover:text-white">Facebook</span>
        </nuxt-link>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {
        name: '',
        email: '',
        password: '',
      },
    }
  },
  props: ['submitForm', 'buttonText', 'hasName', 'hasRememberMe', 'hasSocialButtons'],
}
</script>

<style></style>

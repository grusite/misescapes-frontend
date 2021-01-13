<template>
  <div class="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
    <div
      class="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md"
    >
      <div
        class="p-4 py-6 text-pink-600 bg-gray-600 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly"
      >
        <div class="my-3 text-4xl font-bold tracking-wider text-center">
          <nuxt-link to="/">MisEscapes</nuxt-link>
        </div>
        <p class="mt-6 font-normal text-center text-pink-600 md:mt-0">
          La primera aplicación donde podrás tener un histórico de los escapes que has ido haciendo!
        </p>
        <p class="flex flex-col items-center justify-center mt-10 text-center">
          <span>Ya tienes una cuenta?</span>
          <nuxt-link to="/login" class="underline">Logate!</nuxt-link>
        </p>
        <p class="mt-6 text-sm text-center text-pink-600">
          Lee nuestros <nuxt-link to="#" class="underline">terminos</nuxt-link> y <nuxt-link to="#" class="underline">condiciones</nuxt-link>
        </p>
      </div>
      <div class="p-5 bg-white md:flex-1">
        <h3 class="my-4 text-2xl font-semibold text-gray-700">Registrate</h3>
        <form @submit.prevent="userRegister" class="flex flex-col space-y-5">
          <div class="flex flex-col space-y-1">
            <label for="email" class="text-sm font-semibold text-gray-500">Nombre</label>
            <input
              type="text"
              id="name"
              autofocus
              class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              v-model="register.name"
            />
          </div>
          <div class="flex flex-col space-y-1">
            <label for="email" class="text-sm font-semibold text-gray-500">Email</label>
            <input
              type="email"
              id="email"
              autofocus
              class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              v-model="register.email"
            />
          </div>
          <div class="flex flex-col space-y-1">
            <label for="password" class="text-sm font-semibold text-gray-500">Password</label>
            <input
              type="password"
              id="password"
              class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              v-model="register.password"
            />
          </div>
          <div>
            <button
              type="submit"
              class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-gray-500 rounded-md shadow hover:bg-gray-600 focus:outline-none focus:ring-gray-200 focus:ring-4"
            >
              Crear cuenta
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      register: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async userRegister() {
      try {
        // let response = await this.$auth.loginWith('local', { data: this.login })
        console.log("Registro!", this.register)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style>
</style>
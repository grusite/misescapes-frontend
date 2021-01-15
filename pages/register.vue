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
        <UserAuthForm :submitForm="userRegister" buttonText="Entrar" hasName="true" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      response: {
        success: '',
        message: '',
        error: '',
        statusCode: '',
      }
    }
  },
  methods: {
    async userRegister(registrationInfo) {
      try {
        const response = await this.$axios.$post('/auth/signup', registrationInfo)
        this.response = {
          ...response,
          error: false,
          statusCode: 200
        }
      } catch (err) {
        console.log("responseee", err.response.data)
        this.response = {
          success: false,
          ...err.response.data
        }
      }
    }
  }
}
</script>

<style>
</style>
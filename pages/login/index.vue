<template>
  <div class="flex items-center min-h-screen lg:justify-center">
    <div
      class="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md"
    >
      <div
        class="p-4 py-6 text-gray-200 bg-gray-800 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly"
      >
        <div class="my-3 text-4xl font-bold tracking-wider text-center">
          <NuxtLink to="/">MisEscapes</NuxtLink>
        </div>
        <p class="mt-6 font-normal text-center text-gray-200 md:mt-0">
          La primera aplicación donde podrás tener un histórico de los escapes que has ido haciendo!
        </p>
        <p class="flex flex-col items-center justify-center mt-10 text-center">
          <span>Todavía no tienes una cuenta?</span>
          <NuxtLink to="/register" class="underline">Registrate!</NuxtLink>
        </p>
        <p class="mt-6 text-sm text-center text-gray-200">
          Lee nuestros <NuxtLink to="#" class="underline">terminos</NuxtLink> y
          <NuxtLink to="#" class="underline">condiciones</NuxtLink>
        </p>
      </div>
      <div class="p-5 bg-gray-200 md:flex-1">
        <h3 class="my-4 text-2xl font-semibold text-gray-700">Login</h3>
        <UserAuthForm
          :submitForm="userLogin"
          :googleLogin="googleLogin"
          :fbLogin="fbLogin"
          buttonText="Entrar"
          hasRememberMe="true"
          hasSocialButtons="true"
        />
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
      },
    }
  },
  methods: {
    async userLogin(loginInfo) {
      try {
        this.$toastNotification.generate('Logando...', 'info', 'history')
        await this.$auth.loginWith('local', { data: loginInfo })
        this.response = {
          success: true,
          message: `Usuario ${this.$auth.user} correctamente logado`,
          error: false,
          statusCode: 200,
        }
        await setTimeout(() => {
          this.$toastNotification.generate(this.response.message, 'success', 'done_all')
        }, 2000)
      } catch (err) {
        this.response = {
          success: false,
          ...err?.response?.data,
        }
        await setTimeout(() => {
          this.$toastNotification.generate(this.response.message, 'error', 'clear')
        }, 2000)
      }
    },
    async googleLogin() {
      try {
        this.$toastNotification.generate('Logando...', 'info', 'history')
        this.$auth.loginWith('google')
        this.response = {
          success: true,
          message: `Usuario ${this.$auth.user} correctamente logado`,
          error: false,
          statusCode: 200,
        }
        await setTimeout(() => {
          this.$toastNotification.generate(this.response.message, 'success', 'done_all')
        }, 2000)
      } catch (err) {
        this.response = {
          success: false,
          ...err?.response?.data,
        }
        await setTimeout(() => {
          this.$toastNotification.generate(this.response.message, 'error', 'clear')
        }, 2000)
      }
    },
    async fbLogin() {
      try {
        this.$toastNotification.generate('Logando...', 'info', 'history')
        this.$auth.loginWith('facebook')
        this.response = {
          success: true,
          message: `Usuario ${this.$auth.user} correctamente logado`,
          error: false,
          statusCode: 200,
        }
        await setTimeout(() => {
          this.$toastNotification.generate(this.response.message, 'success', 'done_all')
        }, 2000)
      } catch (err) {
        this.response = {
          success: false,
          ...err?.response?.data,
        }
        await setTimeout(() => {
          this.$toastNotification.generate(this.response.message, 'error', 'clear')
        }, 2000)
      }
    },
  },
}
</script>

<style></style>

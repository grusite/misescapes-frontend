export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'misescapes-frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // New runtime config in Nuxt 2.13+
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || 'http://localhost:8080',
  },
  privateRuntimeConfig: {
    // apiSecret: process.env.API_SECRET,
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/maps.client', '~/plugins/dataApi', '~/plugins/apiDto'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: 'http://127.0.0.1:8080/api/v1',
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
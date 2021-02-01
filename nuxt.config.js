export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'misescapes-frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/icon.png' }],
  },

  // New runtime config in Nuxt 2.13+
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || 'http://localhost:8080',
  },
  privateRuntimeConfig: {
    googleId: process.env.GOOGLE_CLIENTID,
    fbId: process.env.FB_APPID,
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@fortawesome/fontawesome-svg-core/styles.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/maps.client', '~/plugins/dataApi', '~/plugins/apiDto', '~/plugins/toast'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://auth.nuxtjs.org/
    '@nuxtjs/auth-next',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'nuxt-material-design-icons',
    // www.npmjs.com/package/@nuxtjs/toast
    '@nuxtjs/toast',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: 'http://127.0.0.1:8080/api/v1',
  },

  // Auth-next module configuration (https://auth.nuxtjs.org/guide/scheme)
  auth: {
    strategies: {
      local: {
        token: {
          property: 'accessToken',
        },
        user: {
          property: ['id', 'name', 'email'],
        },
        endpoints: {
          login: { url: '/auth/signin', method: 'post' },
          // logout: { url: '/auth/signout', method: 'post' },
          user: { url: '/auth/me', method: 'get' },
        },
      },
      google: {
        clientId: process.env.GOOGLE_CLIENTID,
      },
      facebook: {
        endpoints: {
          userInfo: 'https://graph.facebook.com/v6.0/me?fields=id,name,picture{url}',
        },
        clientId: process.env.FB_APPID,
        scope: ['public_profile', 'email'],
      },
    },
  },

  router: {
    linkExactActiveClass:
      'bg-gray-900 text-gray-200 block px-3 py-2 rounded-md text-base font-medium',
  },

  fontawesome: {
    component: 'fa',
    suffix: true,
    icons: {
      solid: ['faClock', 'faAddressCard'],
      brands: ['faFacebook', 'faTwitter', 'faLinkedin', 'faYoutube', 'faInstagram'],
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}

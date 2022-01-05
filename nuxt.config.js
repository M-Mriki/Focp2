export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Focp',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/main.scss',
    '~/assets/styles/swiper.scss',
    '~/assets/styles/utilities/font.css',
    'swiper/scss',
    'swiper/css/bundle'
    // 'swiper/scss/navigation',
    // 'swiper/scss/pagination',
    // '~/assets/css/swiper.css'
  ],
  styleResources: {
    scss: [
      '~/assets/styles/utilities/_variables.scss'
      // "~/assets/sass/_helpers.scss",
    ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/swiper.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    // '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',

    '@nuxtjs/style-resources',
    // https://i18n.nuxtjs.org/setup

    [
      '@nuxtjs/i18n'
    ]

  ],

  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en-US.js'
      },
      {
        code: 'fr',
        file: 'fr-FR.js'
      }
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'fr',
    vueI18n: {
      fallbackLocale: 'fr'
      // messages: {
      //   en: {
      //     welcome: 'Welcome'
      //   },
      //   fr: {
      //     welcome: 'Bienvenue'
      //   }
      // }
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ['aframe']
  },
  router: {
    middleware: ['userAgent']
  }
}

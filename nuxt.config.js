import { firebaseConfig } from './firebase.config'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Gracefully Hooked',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: 'https://www.paypal.com/sdk/js?client-id=AeMnTTxCiQymVnHQkFSnsNJVSs7rXMmHh5hOUBvuJI6otKeibTnFZ-jnIcgXZo9_r9NUlv51h7hC9CGz',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    'tippy.js/dist/tippy.css',
    'tippy.js/themes/light.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/fontawesome.ts',
    '~/plugins/velocity.client.ts',
    '~/plugins/paypal.client.ts',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://composition-api.nuxtjs.org
    '@nuxtjs/composition-api/module',
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
  ],

  purgeCSS: {
    whitelistPatterns: [/svg.*/, /fa.*/],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      'nuxt-vuex-localstorage',
      {
        localStorage: ['cart'],
      },
    ],
    // https://firebase.nuxtjs.org
    '@nuxtjs/firebase',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  firebase: {
    config: firebaseConfig,
    services: {
      firestore: true,
    },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}

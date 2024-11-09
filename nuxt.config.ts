// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  app: {
    // head
    head: {
      title: 'Shop Ecommerce',
      meta: [
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {
          hid: 'description',
          name: 'description',
          content: 'Shop Ecommerce',
        },
      ],
      link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}],
    }
  },

  devtools: {
    enabled: false
  },

  typescript: {
    strict: false
  },

  // css
  css: ['~/assets/scss/index.scss', 'animate.css'],

  // build modules
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@element-plus/nuxt'
  ],

  // vueuse
  vueuse: {
    ssrHandlers: true,
  },

  routeRules: {
    '/': {prerender: true}
  },

  // colorMode
  colorMode: {
    classSuffix: '',
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {api: 'modern-compiler'},
      }
    },
  },

  elementPlus: {
    icon: 'ElIcon',
    themes: ['dark'],
  },

  compatibilityDate: '2024-10-30',
})
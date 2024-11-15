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
    
    runtimeConfig: {
        public: {
            apiBase: import.meta.env.API_BASE_URL,
        }
    },

    devtools: {
        enabled: false
    },

    typescript: {
        strict: false
    },

    // css
    css: ['~/assets/scss/index.scss', 'animate.css', '~/assets/index.css'],

    // build modules
    modules: [
        '@vueuse/nuxt',
        '@unocss/nuxt',
        '@pinia/nuxt',
        '@element-plus/nuxt',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
        '@nuxtjs/i18n',
    ],

    // vueuse
    vueuse: {
        ssrHandlers: true,
    },

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    routeRules: {
        '/': {prerender: true}
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

    i18n: {
        lazy: true,
        langDir: "locales",
        strategy: "prefix_except_default",
        defaultLocale: "vi",
        locales: [
            {
                code: 'en',
                file: 'en.json'
            },
            {
                code: 'vi',
                file: 'vi.json'
            }
        ],

    },

    compatibilityDate: '2024-10-30',
})
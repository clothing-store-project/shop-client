/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
        './nuxt.config.js',
        './nuxt.config.ts'
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
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
    screens: {
      'sm': '481px',
      'md': '768px',
      'lg': '1025px',
      'xl': '1225px',
      '2xl': '1824px',
    }
  },
  plugins: [],
}
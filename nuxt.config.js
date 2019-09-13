require('dotenv').config()

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  env: {
    routerBase: process.env.ROUTER_BASE || '/',
    baseUrl: process.env.BASE_URL || 'https://choosesy.me'
  },
  router: {
    base: process.env.ROUTER_BASE
  },
  head: {
    title: 'Choosey | Easy Breezy Decision Making',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@assets/css/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa', '@nuxtjs/eslint-module'],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}

// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  devtools: { enabled: true },

  hooks: {
    'pages:extend'(pages) {
      // add a route
      pages.push({
        name: 'cookies',
        path: '/politica-de-cookies-unfollowerstracker',
        file: '~/pages/Cookies.vue'
      })
    }
  }

})

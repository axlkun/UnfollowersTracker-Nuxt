// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  app: {
    head: {
      title: 'UnfollowersTracker'
    }
  },
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
      pages.push(
        {
          name: 'cookies',
          path: '/politica-de-cookies-unfollowerstracker',
          file: '~/pages/Cookies.vue'
        },
        {
          name: 'Terminos',
          path: '/terminos-y-condiciones-unfollowerstracker',
          file: '~/pages/Terms.vue'
        },
        {
          name: 'Privacidad',
          path: '/politica-de-privacidad-unfollowerstracker',
          file: '~/pages/Privacy.vue'
        },
        {
          name: 'articleDetail',
          path: '/blog/:slug',
          file: '~/pages/blog/[...slug].vue',
        }
      )
    }
  },
})

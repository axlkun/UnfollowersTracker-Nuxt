// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { 'http-equiv': 'content-language', content: 'en' },
        // ...otras etiquetas meta
      ],
      title: 'UnfollowersTracker | Discover your Instagram Unfollowers',

      script: [
        {
          async: true,
          src: "https://www.googletagmanager.com/gtag/js?id=G-54Q6562KRN"
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-54Q6562KRN');
          `
        },
        {
          async: true,
          src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1163363741001629",
          crossorigin: "anonymous"
        }]
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
          path: '/cookie-policy-unfollowerstracker',
          file: '~/pages/Cookies.vue'
        },
        {
          name: 'Terminos',
          path: '/terms-and-conditions-unfollowerstracker',
          file: '~/pages/Terms.vue'
        },
        {
          name: 'Privacidad',
          path: '/privacy-policy-unfollowerstracker',
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

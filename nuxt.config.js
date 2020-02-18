export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'LeeSmith.net',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Personal site for Lee Smith'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#209cee' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/tailwind.css',
    '~/node_modules/highlight.js/styles/atom-one-dark.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['~/plugins/vue-highlightjs'],
  /*
  ** Nuxt.js dev-moduleModules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-117090087-1'
      }
    ],
    [
      'nuxt-fontawesome',
      {
        component: 'fa-icon',
        imports: [
          {
            set: '@fortawesome/free-regular-svg-icons',
            icons: ['far']
          },
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          }
        ]
      }
    ],
    'nuxt-purgecss'
  ],
  purgeCSS: {
    whitelistPatterns: [/-enter/, /-leave/, /svg-inline/, /hljs/]
  },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      }
    },
    extractCSS: true,
    extend(config, ctx) {
    }
  }
}

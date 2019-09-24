module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: "en"
    },
    title: "LeeSmith.net",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Personal site for Lee Smith"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  css: [
    "~/assets/css/tailwind.css",
    "~/assets/css/inter.css",
    "~/node_modules/highlight.js/styles/atom-one-dark.css"
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#209cee" },
  /*
  ** Modules
  */
  modules: [
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-117090087-1"
      }
    ],
    [
      "nuxt-fontawesome",
      {
        component: "fa-icon",
        imports: [
          {
            set: "@fortawesome/free-regular-svg-icons",
            icons: ['far']
          },
          {
            set: "@fortawesome/free-solid-svg-icons",
            icons: ['fas']
          },
          {
            set: "@fortawesome/free-brands-svg-icons",
            icons: ['fab']
          }
        ]
      }
    ],
    "nuxt-purgecss"
  ],
  purgeCSS: {
    whitelistPatterns: [/-enter/, /-leave/, /svg-inline/, /hljs/]
  },
  /*
  ** Plugins
  */
  plugins: ["~/plugins/vue-highlightjs"],
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
    extend(config, { isDev, isClient }) {
      // Run ESLint on save
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};

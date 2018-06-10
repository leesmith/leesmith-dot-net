module.exports = {
  /*
  ** Headers of the page
  */
  head: {
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
  css: ["@/assets/css/inter-ui.css", "bulma", "@/assets/css/application.scss"],
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#209cee" },
  /*
  ** Modules
  */
  modules: [
    [
      "nuxt-fontawesome",
      {
        component: "fa-icon",
        imports: [
          {
            set: "@fortawesome/fontawesome-free-regular"
          },
          {
            set: "@fortawesome/fontawesome-free-solid"
          },
          {
            set: "@fortawesome/fontawesome-free-brands"
          }
        ]
      }
    ]
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
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

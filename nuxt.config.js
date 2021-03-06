// import colors from "vuetify/es5/util/colors";
require("dotenv").config();

export default {
  server: {
    port: 8080, // default: 3000
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    // titleTemplate: '%s - fe-punmaew',
    title: "fe-punmaew",
    htmlAttrs: {
      lang: "th",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Web Application สำหรับช่วยเหลือน้องแมวไร้บ้าน",
      },
      {
        "http-equiv": "Content-Security-Policy",
        content: "upgrade-insecure-requests",
      },
      // <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">

      // { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/scss/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/vee-validate"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
    "@nuxtjs/dotenv",
    "@nuxtjs/style-resources",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    ["@nuxtjs/dotenv", { filename: ".env" }],
  ],
  styleResources: {
    scss: ["~/assets/scss/abstracts/_variables.scss"],
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // baseURL: "/",
    // baseURL: process.env.BASE_URL,
    // authURL: process.env.AUTH_URL,
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  // vuetify: {
  //   customVariables: ["~/assets/variables.scss"],
  //   theme: {
  //     dark: true,
  //     themes: {
  //       dark: {
  //         primary: colors.blue.darken2,
  //         accent: colors.grey.darken3,
  //         secondary: colors.amber.darken3,
  //         info: colors.teal.lighten1,
  //         warning: colors.amber.base,
  //         error: colors.deepOrange.accent4,
  //         success: colors.green.accent3,
  //       },
  //     },
  //   },
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vee-validate/dist/rules"],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
  publicRuntimeConfig: {
    // baseURL: process.env.BASE_URL,
    authURL: process.env.AUTH_URL,
  },
  privateRuntimeConfig: {
    authURL: process.env.AUTH_URL,
  },
};

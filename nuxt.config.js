// import colors from "vuetify/es5/util/colors";
require("dotenv").config();

export default {
  server: {
    port: 8080, // default: 3000
  },
  ssr: true,
  target: "server",
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    // titleTemplate: '%s - fe-punmaew',
    title: "Punmaew",
    htmlAttrs: {
      lang: "th",
    },
    meta: [
      {
        charset: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        hid: "description",
        name: "description",
        content: "Web Application สำหรับช่วยเหลือน้องแมวไร้บ้าน",
      },
      {
        "http-equiv": "Content-Security-Policy",
        content: "upgrade-insecure-requests",
      },
      {
        hid: `og:image`,
        property: "og:image",
        content: "/fb-share.png",
      },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico",
      },
      {
        rel: "stylesheet",
        href: "https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css",
      },
    ],
    script: [
      {
        src: "https://connect.facebook.net/en_US/all.js",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/scss/main.scss",
    "vue-thailand-address/dist/vue-thailand-address.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/vee-validate",
    "~/plugins/thailand-address.js",
    "@/plugins/fb-sdk.client.js",
  ],

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
    // "@nuxtjs/auth-next",
    "@nuxtjs/auth",
    "cookie-universal-nuxt",
    "vue-sweetalert2/nuxt",
    [
      "@nuxtjs/dotenv",
      {
        filename: ".env",
      },
    ],
    "nuxt-facebook-pixel-module",
  ],
  facebook: {
    /* module options */
    track: "PageView",
    pixelId: "541416380212227",
    autoPageView: true,
    disabled: false,
  },
  styleResources: {
    scss: ["~/assets/scss/abstracts/_variables.scss"],
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.AUTH_URL,
    browserBaseURL: process.env.AUTH_URL,
    // credentials: true,
  },
  auth: {
    strategies: {
      user: {
        _scheme: "local",
        endpoints: {
          login: {
            url: "user/login",
            method: "post",
            propertyName: "accessToken",
          },
          logout: {
            url: "user/logout",
            method: "get",
          },
          user: {
            url: "user/getUser",
            method: "get",
            propertyName: "user",
            autoFetch: true,
          },
          tokenName: "token",
        },
        token: {
          property: "token",
          global: true,
          // required: true,
          type: "Bearer",
        },
      },
      // user/loginAdmin
      admin: {
        _scheme: "local",
        endpoints: {
          login: {
            url: "user/loginAdmin",
            method: "post",
            propertyName: "accessToken",
          },
          logout: { url: "user/logoutAdmin", method: "get" },
          // user: {
          //   url: "user/getAdmin",
          //   method: "get",
          //   propertyName: "user",
          // },
          tokenName: "token",
        },
        // user: { url: '/api/auth/admin/user', method: 'get', propertyName: 'user' },
        token: {
          property: "token",
          global: true,
          // required: true,
          type: "Bearer",
        },
      },
    },
    redirect: {
      login: "/login",
    },
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
    findHome: process.env.FIND_HOME,
    articleURL: process.env.ARTICLE_API,
  },
  privateRuntimeConfig: {
    authURL: process.env.AUTH_URL,
    findHome: process.env.FIND_HOME,
    articleURL: process.env.ARTICLE_API,
  },
};

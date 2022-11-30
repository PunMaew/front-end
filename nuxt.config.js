require("dotenv").config();

export default {
  server: {
    port: 8080, // default: 3000
  },
  ssr: true,
  target: "server",

  head: {
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
        content: "/fb-thumbnail.jpg",
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

  css: [
    "~/assets/scss/main.scss",
    "vue-thailand-address/dist/vue-thailand-address.css",
  ],

  plugins: [
    "~/plugins/vee-validate",
    "~/plugins/thailand-address.js",
    "@/plugins/fb-sdk.client.js",
  ],

  components: true,

  buildModules: [
    "@nuxtjs/vuetify",
    "@nuxtjs/dotenv",
    "@nuxtjs/style-resources",
  ],

  modules: [
    "@nuxtjs/axios",

    "@nuxtjs/auth",
    "cookie-universal-nuxt",
    "vue-sweetalert2/nuxt",
    [
      "@nuxtjs/dotenv",
      {
        filename: ".env",
      },
    ],
  ],
  facebook: {
    track: "PageView",

    autoPageView: true,
    disabled: false,
  },
  styleResources: {
    scss: ["~/assets/scss/abstracts/_variables.scss"],
  },

  axios: {
    baseURL: process.env.AUTH_URL,
    browserBaseURL: process.env.AUTH_URL,
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

          type: "Bearer",
        },
      },

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

        token: {
          property: "token",
          global: true,

          type: "Bearer",
        },
      },
    },
    redirect: {
      login: "/login",
    },
  },

  build: {
    transpile: ["vee-validate/dist/rules"],

    extend(config, ctx) {},
  },
  publicRuntimeConfig: {
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

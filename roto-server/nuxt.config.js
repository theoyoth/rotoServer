import { data } from 'autoprefixer'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'roto-server',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    script: [{ src: '/dist/driver.min.js' }],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: '/dist/driver.min.css',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/default.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/fontawesome',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/moment',
  ],
  fontawesome: {
    icons: {
      solid: true,
      brands: true,
      regular: true,
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // '@nuxtjs/auth',
    '@nuxtjs/auth-next',
  ],
  // router:{
  //   middleware: ['auth']
  // },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'http://localhost:3000',
    // credentials: true,
  },
  auth: {
    strategies: {
      local: {
        token: {
          property: 'data',
          global: true,
          // /required: true,
          // type: 'Bearer',
        },
        endpoints: {
          login: {
            url: '/server/login',
            method: 'post',
            propertyName: 'data',
          },
          user: {
            url: '/server/homepage',
            method: 'get',
            propertyName: 'data',
          },
          logout: false,
        },
      },
    },
    redirect: {
      login: '/homepage',
      logout: '/',
      user: '/homepage',
    },
    // rewriteRedirects: true,
  },

  build: {
    extend(config, {}) {
      config.node = {
        fs: 'empty',
      }
    },
  },
  serverMiddleware: [
    // {path: '/server',handler:'~/server'},
    '~/server/index.js',
    // {path: '/server/home', handler:'~/server'},
  ],
}

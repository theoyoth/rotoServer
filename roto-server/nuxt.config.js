import { data } from 'autoprefixer'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  env: {
    TokenTelegram: process.env.TOKEN_TELEGRAM,
    ChatId: process.env.CHAT_ID,
  },
  head: {
    title: 'rotogravure server',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    script: [],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/default.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/sweetalert' },
    { src: '~/plugins/vee-validate.js' },
    { src: '~/plugins/chart', ssr: false },
    { src: '~/plugins/hchs-vue-charts', ssr: false },
    { src: '~/plugins/vue-html-to-paper.js', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: '/server/resetpassword/:token',
        components: {
          default: resolve(__dirname, 'pages/resetpassword.vue'), // or routes[index].component
          modal: resolve(__dirname, 'components/ResetPassword.vue'),
        },
        chunkNames: {
          modal: 'components/ResetPassword',
        },
      })
    },
  },
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
    'cookie-universal-nuxt',
    '@nuxt/image',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'http://localhost:3000/server',
    credentials: true,
  },
  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
        },
        endpoints: {
          login: {
            url: '/login',
            method: 'post',
            propertyName: false,
          },
          logout: false,

          user: {
            url: '/homepage',
            method: 'get',
            propertyName: false,
          },
        },
      },
    },
    redirect: {
      login: '/',
      logout: '/',
      home: '/homepage',
    },
  },

  build: {
    extend(config, ctx) {
      ;(config.node = {
        fs: 'empty',
      }),
        config.module.rules.push({
          test: /\.(obj|glb|gltf|pdf)$/,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        })
    },
    transpile: ['vee-validate/dist/rules', 'three'],
  },
  serverMiddleware: ['~/server/index.js'],
}

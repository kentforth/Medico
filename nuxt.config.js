const isDev = process.env.NODE_ENV !== 'production'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Console - Decimal',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Medico is CRM system that helps to observe and change data about patients and employees in hospital' },
      { name: 'keywords', content: 'Medico, medicine, hospital, CRM, clients, medical staff, doctors, patients' },
      { property: 'og:title', content: 'Medico' },
      { property: 'og:description', content: 'Medico is CRM system that helps to observe and change data about patients and employees in hospital' },
      { property: 'og:type', content: 'website' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:300,400,500,600,700,800&display=swap' },
    ],
  },
  loading: { color: '#2226E3' },

  styleResources: {
    scss: [
      '~assets/scss/app.scss',
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/scss/app.scss',
    '~assets/scss/element-ui/app.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/global-components',
    { src: '~/plugins/vee-validate.ts', ssr: false },
  ],
  svgLoader: {
    svgoConfig: {
      plugins: [
        { removeDimensions: true }, // Enables prefixing for SVG IDs
      ],
    },
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    'nuxt-svg-loader',
  ],

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
      }
    } else if (to.path === from.path) {
      return null
    } else if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0,
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate', /^element-ui/],
    babel: {
      plugins: [
        [
          'component',
          {
            libraryName: 'element-ui',
            styleLibraryName: 'theme-chalk',
          },
        ],
      ],
      compact: false,
    },
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true,
      chunks: 'all',
    },

    optimization: {
      minimize: !isDev,
    },
  }
}

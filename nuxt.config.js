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
      // { hid: 'og:image', name: 'og:image', content: 'https://any-page.com/any.png' }
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
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }]
      ]
    },

  }
}

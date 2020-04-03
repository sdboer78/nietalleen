import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  env: {
    URL: process.env.URL,
    NIETALLEEN_API_HOST: process.env.NIETALLEEN_API_HOST,
    NIETALLEEN_API_ENDPOINT_MAILFORM: process.env.NIETALLEEN_API_ENDPOINT_MAILFORM,
    NIETALLEEN_API_ENDPOINT_LOCATIONS: process.env.NIETALLEEN_API_ENDPOINT_LOCATIONS
  },
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s #Nietalleen',
    title: '#Nietalleen',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Overal in Nederland zetten talloze lokale organisaties en kerken zich in voor mensen die hulp kunnen gebruiken. Praktische hulp nodig? Een luisterend oor? Je bent #Nietalleen.'
      },
      {
        hid: 'og-type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og-title',
        property: 'og:site_name',
        content: '#Nietalleen'
      },
      {
        hid: 'og-description',
        property: 'og:description',
        content: 'Overal in Nederland zetten talloze lokale organisaties en kerken zich in voor mensen die hulp kunnen gebruiken. Praktische hulp nodig? Een luisterend oor? Je bent #Nietalleen.'
      },
      {
        hid: 'og-image',
        property: 'og:image',
        content: process.env.URL + '/og-image-nietalleen.jpg'
      },
      {
        hid: 'twitter-card',
        property: 'twitter:card',
        content: 'summary_large_image'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Bellota&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: ['~assets/global.css'],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
    // Doc: https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
    '@nuxtjs/gtm'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/svg'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    theme: {
      themes: {
        light: {
          primary: '#C63866',
          accent: '#EFEFF4',
          secondary: '#fd8f52',
          npo: '#FF6D00',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.darken3
        }
      }
    }
  },
  gtm: {
    id: 'GTM-PNF2PX4',
    layer: 'datalayer',
    variables: { potag1: 'eoportal', potag2: 'nietalleen', potag3: 'eo', potag4: 'eo', potag5: 'omroepportal', potag6: '', potag7: '', potag8: 'site', potag9: 'site', http_status: '200', classification: '', pubdate: 0, pubweek: '01', atinternet_siteid: '59' }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}

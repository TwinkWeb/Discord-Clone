
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-material-design-icons',
     [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyAJztOY8RPW0oimSg1SKBb2IGWuwcJKoas",
          authDomain: "discord-clone-58ac9.firebaseapp.com",
          databaseURL: "https://discord-clone-58ac9.firebaseio.com",
          projectId: "discord-clone-58ac9",
          storageBucket: "discord-clone-58ac9.appspot.com",
          messagingSenderId: "555231349723",
          appId: "1:555231349723:web:2c8bcd34dc19d490fe75fe",
          measurementId: "G-X3LDND9LY5"
        },
        services: {
          auth: {
            persistence: 'local', 
            initialize: {
              onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
              onAuthStateChangedAction: 'onAuthStateChangedAction'
            },
          } // Just as example. Can be any other service.
        }
      }
    ]
  ],
  components: true,
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}

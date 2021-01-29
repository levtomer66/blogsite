export default {
  ssr: true,
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['medium-editor/dist/css/medium-editor.css',
  'vuejs-medium-editor/src/themes/default.css',
  'highlight.js/styles/ocean.css' //if using code highlight
],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [ { src: '~/plugins/medium-editor', ssr: false } ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    ['@nuxtjs/axios', { proxy: true }],
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa',
    '@nuxtjs/bootstrap-vue',
  ],

  axios: {
    credentials: true,
    withCredentials : true
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
};

const axios = require("axios");
const routes = require("./router/index.js");
export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  router: {
    linkActiveClass: "active-link",
    extendRoutes(nuxtRoutes, resolve) {
      routes.forEach(route => {
        nuxtRoutes.unshift({
          name: route.name,
          path: route.path,
          component: resolve(__dirname, route.component)
        });
      });
    }
  },
  env: {
    baseUrl: process.env.BASE_URL || "https://travelcoffeehot.com",
    baseApi: process.env.API_URL || "https://api.travelcoffeehot.com",
    baseNoImage: "https://via.placeholder.com/300x200.png?text=No+image"
  },
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "publisher", name: "publisher", content: "ta.huuchi@gmail.com" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: "~/components/Loading.vue",
  /*
   ** Global CSS
   */
  css: ["~assets/css/custom.less"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~/plugins/axios",
    "~/plugins/lazyload.js",
    { src: "~/plugins/helpers", ssr: true },
    { src: "~/plugins/LightGallery", ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss"
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    // Doc: https://github.com/nuxt-community/dotenv-module
    "@nuxtjs/dotenv",
    "@nuxtjs/device"
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // transpile: [/^vue-google-adsense/],
    extend(config, ctx) {}
  },
  server: {
    port: process.env.PORT || 4001
  },
  serverMiddleware: [
    {
      path: "/sitemap.xml",
      async handler(req, res, next) {
        try {
          // Init sitemap
          const xml = await axios({
            method: "get",
            url: `https://api.travelcoffeehot.com/sitemap/sitemap.xml`
          });
          // Send http response
          res.setHeader("Content-Type", "application/xml");
          res.end(xml.data.toString());
        } catch (err) {
          /* istanbul ignore next */
          next(err);
        }
      }
    }
  ]
};

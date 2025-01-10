// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: true,

  devServer: {
    port: 8081
  },

  app: {
    head: {
      title: "AJGF",
      meta: [
        { charset: "utf-8" },
        { name: "description", content: "Un hub, pour acheter et vendre tout ce que vous désirez électroniquement, sans jamais avoir à vous déplacer ou attendre la livraison d'un produit physique." },
        { name: "viewport", content: "width=device-width, initial-scale=1" }
      ],
      link: [
        { rel: "shortcut icon", type: "image/x-icon", href: "/imgs/theme/favicon.svg" },
        { rel: "stylesheet", href: "/css/main.css?v=3.4" },
        { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" },
        { rel: "stylesheet", href: "https://fonts.cdnfonts.com/css/lufga" }
      ],
      script: [
        { src: "/js/vendor/modernizr-3.6.0.min.js", body: true },
        { src: "/js/vendor/jquery-3.6.0.min.js", body: true },
        { src: "/js/vendor/jquery-migrate-3.3.0.min.js", body: true },
        { src: "/js/vendor/bootstrap.bundle.min.js", body: true },
        { src: "/js/plugins/slick.js", body: true },
        { src: "/js/plugins/jquery.syotimer.min.js", body: true },
        { src: "/js/plugins/wow.js", body: true },
        { src: "/js/plugins/jquery-ui.js", body: true },
        { src: "/js/plugins/perfect-scrollbar.js", body: true },
        { src: "/js/plugins/magnific-popup.js", body: true },
        { src: "/js/plugins/select2.min.js", body: true },
        { src: "/js/plugins/waypoints.js", body: true },
        { src: "/js/plugins/counterup.js", body: true },
        { src: "/js/plugins/jquery.countdown.min.js", body: true },
        { src: "/js/plugins/images-loaded.js", body: true },
        { src: "/js/plugins/isotope.js", body: true },
        { src: "/js/plugins/scrollup.js", body: true },
        { src: "/js/plugins/jquery.vticker-min.js", body: true },
        { src: "/js/plugins/jquery.theia.sticky.js", body: true },
        { src: "/js/plugins/jquery.elevatezoom.js", body: true },
        { src: "https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js", body: true },
        // Template js 
        { src: "/js/main.js?v=3.4", body: true },
        { src: "/js/shop.js?v=3.4", body: true },
      ]
    }
  },

  runtimeConfig: {
    public: {
      vueAppDevUrl: process.env.VUE_APP_DEV_URL,
      vueAppProdUrl: process.env.VUE_APP_PROD_URL,
      vueAppSecretKey: process.env.VUE_APP_SECRET_KEY
    }
  },

  modules: ["@nuxt/icon", '@pinia/nuxt'],
})
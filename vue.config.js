const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: 'Echmail design by Hosein Sedaqat',
    themeColor: "#fff",
    iconPaths: {
      favicon32: 'img/icons/favicon-32x32.png',
      favicon16: 'img/icons/favicon-16x16.png',
      appleTouchIcon: 'img/icons/apple-icon-72x72.png',
      msTileImage: 'img/icons/apple-icon-144x144.png'
    },
    manifestOptions: {
      background_color: "#fff",
      icons: [
        {
          src: "img/icons/android-icon-192x192.png",
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: "img/icons/ms-icon-310x310.png",
          sizes: "310x310",
          type: "image/png"
        },
        {
          src: "img/icons/android-icon-192x192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "maskable"
        },
        {
          src: "img/icons/ms-icon-310x310.png",
          sizes: "310x310",
          type: "image/png",
          purpose: "maskable"
        }
      ]
    }
  }
})

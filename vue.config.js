// Inside vue.config.js
module.exports = {
    // ...other vue-cli plugin options...
    pwa: {
      name: 'Meu Ciclo',
      themeColor: '#ffc0cb',
      msTileColor: '#ffc0cb',
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: 'pink',
    //   // configure the workbox plugin
    //   workboxPluginMode: 'InjectManifest',
    //   workboxOptions: {
    //     // swSrc is required in InjectManifest mode.
    //     swSrc: 'dev/sw.js',
    //     // ...other Workbox options...
    //   }
    }
  }
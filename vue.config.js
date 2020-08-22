module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "~bulma/sass/utilities/_all.sass";'
      }
    }
  },
  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: true
    }
  }
};

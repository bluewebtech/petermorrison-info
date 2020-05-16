module.exports = {
  /**
   * Webpack configuration additions and overrides.
   */
  chainWebpack: (config) => {
    config.plugins.delete('prefetch');
    config.resolve.symlinks(false);
  },

  /**
   * SASS loader configuration that provides the ability
   * to use SASS variables within Vue components.
   */
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import '@/assets/scss/main.scss';
        `
      }
    }
  },

  /**
   * Progressive Web Application (PWA) configuration.
   */
  pwa: {
    name: 'Peter Morrison',
    themeColor: '#0060b8',
    msTileColor: '#0060b8',
  },
};

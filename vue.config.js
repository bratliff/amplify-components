module.exports = {
  configureWebpack: {
    output: {
      libraryExport: "default"
    },
    optimization: {
      splitChunks: false
    }
  },
  css: {
    extract: false
  }
};

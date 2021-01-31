module.exports = {
  chainWebpack: config => {
    config.module
      .rule("xml")
      .test(/\.xml$/)
      .use("html-loader")
      .loader("html-loader")
      .end();
    config.module
      .rule("py")
      .test(/\.py$/)
      .use("html-loader")
      .loader("html-loader")
      .end();
  }
};

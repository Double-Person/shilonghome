module.exports = {
  devServer: {
    open: true,
    proxy: {
      "/": {
        target: "http://housekeeper.hkzhtech.com",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/": "",
        },
      },
    },
  },

  chainWebpack: (config) => {
    const oneOfsMap = config.module.rule("less").oneOfs.store;
  },
};

module.exports = {
  devServer: {
    open: true,
    proxy: {
      "/api": {
        target: "http://housekeeper.hkzhtech.com",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },

  chainWebpack: (config) => {
    const oneOfsMap = config.module.rule("less").oneOfs.store;
  },
};

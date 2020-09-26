module.exports = {
  chainWebpack: config => {
    const oneOfsMap = config.module.rule('less').oneOfs.store
  }
}
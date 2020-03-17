module.exports = {
  publicPath: '',
  chainWebpack: config => {
    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          resources: [
            'src/assets/scss/base/_variables.scss',
            'node_modules/@onesait/onesait-ds/packages/theme-onesait/src/common/var.scss',
            'src/assets/scss/base/_mixins.scss',
            'src/assets/scss/base/_typography-placeholder.scss'
          ]
        })
        .end()
    })
  }
}

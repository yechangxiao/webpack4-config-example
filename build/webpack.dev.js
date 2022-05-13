const { merge } = require('webpack-merge')
const common = require('./webpack.base.js')

module.exports = merge(common, {
  mode: 'none', // webpack为每种模式预设了一些配置
  devtool: 'eval-cheap-source-map',
  devServer: {
    static: true, // 开发环境下访问静态资源，代替copy-webpack-plugin，默认开启
    proxy: {
      '/api': {
        // http://localhost:8080/api/users -> https://api.github.com/api/users
        target: 'https://api.github.com',
        // http://localhost:8080/api/users -> https://api.github.com/users
        pathRewrite: {
          '^/api': ''
        },
        // 默认情况下，代理时会保留主机头的来源localhost:8080，可以将 changeOrigin 设置为 true 以覆盖此行为。
        // 因为服务器会有多个网站，需要请求的主机名来确定你访问的是哪个网站
        changeOrigin: true
      }
    },
    // hot: false, // webpack4已经默认开启了，插件也不需要加了
    // hot: 'only', // 在热更新失败时不刷新页面进行回退，防止错误信息被刷新掉
  },
})
const { merge } = require('webpack-merge')
const common = require('./webpack.base.js')
const CopyWebpackPlugin = require('copy-webpack-plugin') // webpack < 5的时候这个插件版本得小于7

module.exports = merge(common, {
  mode: 'production', // webpack为每种模式预设了一些配置
  plugins: [
    // 开发阶段最好不要使用这个插件，因为开发下打包频繁，拷贝文件费性能
    // 可以配置devServer中的static(默认为true)，访问静态资源
    new CopyWebpackPlugin({
      patterns: [{ from: 'public' }]
    }),
  ]

})
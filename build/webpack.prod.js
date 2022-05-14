const { merge } = require('webpack-merge')
const common = require('./webpack.base.js')
const CopyWebpackPlugin = require('copy-webpack-plugin') // webpack < 5的时候这个插件版本得小于7

module.exports = merge(common, {
  mode: 'production', // webpack为每种模式预设了一些配置
  optimization: {
    usedExports: true, // 标记未使用的代码，在生产模式默认开启
    minimize: true， // 压缩代码，并根据usedExports收集的信息，将未使用的代码去掉，在生产模式默认开启
    concatenateModules: true, // 将多个模块合并成一个模块，提高运行效率，减少代码体积，也成为作用域提升Scope Hoisting，生产环境默认开启
    splitChunks: { // 分包，将公共的代码模块分离到一个公共的chunk中
      chunks: 'all',
      minSize: 0
    }
  },
  plugins: [
    // 开发阶段最好不要使用这个插件，因为开发下打包频繁，拷贝文件费性能
    // 可以配置devServer中的static(默认为true)，访问静态资源
    new CopyWebpackPlugin({
      patterns: [{ from: 'public' }]
    }),
  ]

})
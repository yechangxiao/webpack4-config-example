const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyRightWebpackPlugin = require('./copyright-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin') // webpack < 5的时候这个插件版本得小于7

module.exports = {
  mode: 'none', // webpack为每种模式预设了一些配置
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'), // 必须是一个绝对路径
    // publicPath: 'dist/'
  },
  resolveLoader: {
    modules: ['node_modules', './'], // 添加loader的第二种路径处理
  },
  module: {
    rules: [
      {
        test: /.css$/,
        use: [
          'style-loader',
          'css-loader', // 只是打包css，需要其他loader来引入
        ]
      },
      {
        test: /.png$/,
        use: {
          loader: 'url-loader', // 超过limit大小的会自动调用file-loader进行处理
          options: {
            limit: 10 * 1024
          }
        }
      },
      {
        test: /.js$/,
        use: [
          'replaceLoader',
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      },
      // {
      //   test: /.html$/, // 
      //   use: {
      //     // 处理html中的文件加载，注意与html-webpack-plugin区分
      //     // 这个loader会影响到html-webpack-plugin，比如使用<%= htmlWebpackPlugin.options.title %>不能进行解析
      //     loader: 'html-loader',
      //     options: {
      //       attributes: { // 添加支持解析的标签
      //         list: [
      //           {
      //             tag: 'img',
      //             attribute: 'src',
      //             type: 'src',
      //           },
      //           {
      //             tag: 'a',
      //             attribute: 'href',
      //             type: 'src',
      //           },
      //         ]
      //       }
      //     }
      //   }
      // },
      {
        test: /.md$/,
        loader: './markdow-loader.js'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyRightWebpackPlugin(),
    // 用于生成index.html
    new HtmlWebpackPlugin({ // 在webpack4和bable7下，必须指定template，不然就会出错
      title: 'webpack plugin sample',
      meta: { 
        viewport: 'width=device-width'
      },
      filename: 'index.html',
      template: './index.html',
      inject: true
    }),
    // 生成about.html，用于多页面打包
    new HtmlWebpackPlugin({
      filename: 'about.html',
      template: './about.html'
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: 'public' }]
    }),
  ]
}
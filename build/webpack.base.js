const path = require('path')
const webpack = require('webpack')
const CopyRightWebpackPlugin = require('../copyright-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '../dist'), // 必须是一个绝对路径
    // publicPath: 'dist/'
  },

  resolveLoader: {
    modules: ['node_modules', '../'], // 添加loader的第二种路径处理
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
          // '../replaceLoader.js',
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', {
                  modules: false, // 默认是auto，为了保证ESM不被转换，用于tree-shaking，强制设为false
                }]
              ]
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
        loader: '../markdow-loader.js'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyRightWebpackPlugin(),
    // 用于生成index.html
    new HtmlWebpackPlugin({ // 在webpack4和bable7下，必须指定template，不然就会出错
      title: 'webpack plugin sample',
      // meta: { 
      //   viewport: 'width=device-width'
      // },
      filename: 'index.html',
      template: 'public/index.html', // 这里的相对路径是相对于项目的根路径的，所以可以使用'./index.html'或'index.html'
      minify: false, // 禁用html压缩，当html模板使用了options的时候，在压缩的时候会出错
      inject: true,
      chunks: ['index'], // 多入口打包中指定注入的chunks
    }),
    // 生成about.html，用于多页面打包
    new HtmlWebpackPlugin({
      filename: 'about.html',
      template: 'public/about.html',
      chunks: ['about'], // 多入口打包中指定注入的chunks

    }),
    new webpack.DefinePlugin({
      BASE_TEST: JSON.stringify('base_test'), // 值是字符串，则作为代码片段，所以需要进行序列化一次
    })
  ]
}
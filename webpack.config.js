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
    }
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
    // 开发阶段最好不要使用这个插件，因为开发下打包频繁，拷贝文件费性能
    // 可以配置devServer中的static(默认为true)，访问静态资源
    // new CopyWebpackPlugin({
    //   patterns: [{ from: 'public' }]
    // }),
  ]
}
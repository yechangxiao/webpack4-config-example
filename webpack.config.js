const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyRightWebpackPlugin = require('./copyright-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const CopyWebpackPlugin = require('copy-webpack-plugin') // webpack < 5的时候这个插件版本得小于7
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  mode: 'none', // webpack为每种模式预设了一些配置
  entry: './src/main.js',
  output: {
    filename: 'bundle.[contenthash:8].js', // 开发模式下只能使用hash类型的名称
    path: path.join(__dirname, 'dist') // 必须是一个绝对路径
    // publicPath: 'dist/'
  },
  optimization: {
    usedExports: true, // 标记未使用的代码，在生产模式默认开启
    minimize: true, // 压缩代码，并根据usedExports收集的信息，将未使用的代码去掉，在生产模式默认开启
    concatenateModules: true, // 将多个模块合并成一个模块，提高运行效率，减少代码体积，也成为作用域提升Scope Hoisting，生产环境默认开启
    splitChunks: { // 分包，将公共的代码模块分离到一个公共的chunk中
      chunks: 'all',
      minSize: 0
    },
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin()
    ]
  },
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
    }
    // hot: false, // webpack4已经默认开启了，插件也不需要加了
    // hot: 'only', // 在热更新失败时不刷新页面进行回退，防止错误信息被刷新掉
  },
  resolveLoader: {
    modules: ['node_modules', './'] // 添加loader的第二种路径处理
  },
  module: {
    rules: [
      {
        test: /.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          // 'style-loader',
          'css-loader' // 只是打包css，需要其他loader来引入
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          // 'style-loader',
          'css-loader', // 只是打包css，需要其他loader来引入
          'less-loader'
        ]
      },
      {
        test: /.(png|jp?g|gif)$/,
        use: {
          loader: 'url-loader', // 超过limit大小的会自动调用file-loader进行处理
          options: {
            esModule: false, // 禁止使用ESM加载图片，否则引入图片会出错
            limit: 10 * 1024,
            name: 'img/[name].[contenthash:6].[ext]'
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
              presets: [
                ['@babel/preset-env', {
                  modules: false // 默认是auto，为了保证ESM不被转换，用于tree-shaking，强制设为false
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
      template: 'public/index.html',
      minify: false, // 禁用html压缩，当html模板使用了options的时候，在压缩的时候会出错
      inject: true,
      chunks: ['index'] // 为多入口打包时指定注入的chunk
    }),
    // 生成about.html，用于多页面打包
    new HtmlWebpackPlugin({
      filename: 'about.html',
      template: 'public/about.html'
      // chunks: ['about'], // 为多入口打包时指定注入的chunk
    }),
    // 开发阶段最好不要使用这个插件，因为开发下打包频繁，拷贝文件费性能
    // 可以配置devServer中的static(默认为true)，访问静态资源
    // new CopyWebpackPlugin({
    //   patterns: [{ from: 'public' }]
    // }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].css'
    })
  ]
}

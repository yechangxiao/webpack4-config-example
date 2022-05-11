const path = require('path')

module.exports = {
  mode: 'none', // webpack为每种模式预设了一些配置
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'), // 必须是一个绝对路径
    publicPath: 'dist/'
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
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /.html$/,
        use: {
          loader: 'html-loader', // 处理html中的文件加载，注意与html-webpack-plugin区分
          options: {
            attributes: { // 添加支持解析的标签
              list: [
                {
                  tag: 'img',
                  attribute: 'src',
                  type: 'src',
                },
                {
                  tag: 'a',
                  attribute: 'href',
                  type: 'src',
                },
              ]
            }
          }
        }
      }
    ]
  }
}
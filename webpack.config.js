const path = require('path')

module.exports = {
  mode: 'none', // webpack为每种模式预设了一些配置
  entry: './src/main.css',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'), // 必须是一个绝对路径
  },
  module: {
    rules: [
      {
        test: /.css$/,
        use: [
          'style-loader',
          'css-loader', // 只是打包css，需要其他loader来引入
        ]
      }
    ]
  }
}
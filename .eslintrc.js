// 安装完eslint后执行'eslint ./filename.js'可以根据提示选择配置
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [ // 需要继承的配置
    'plugin:vue/essential',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
  }
}

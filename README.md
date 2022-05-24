# 一个使用webpack4的配置样例

node: 14.16.0

### about webpack
  webpack配置中externals这个字段是不把某些包进行打包，自己通过手动cdn引入

### about vue
- vue2不支持vue-loader >= 16.0.0
- vue-loader: 15之后版本必须添加VueLoaderPlugin插件，这个插件的职责是将你定义过的其它规则复制并应用到 .vue 文件里相应语言的块。
例如，如果你有一条匹配 /\.js$/ 的规则，那么它会应用到 .vue 文件里的 <script> 块。

### about vue-cli
  vue-cli通过把一些webpack，babel等的配置抽离出到公共包@vue/cli-webpack-xxx中，让项目只依赖一个包，这样方便解决不同的项目的配置文件的同步问题，利于后期模板的维护
如果是直接生成项目的时候拷贝配置文件，则后续多个项目同步就会困难
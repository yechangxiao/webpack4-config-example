class CopyRightWebpackPlugin {
  constructor() {
    console.log('插件被使用了')
  }

  apply(compiler) {
    // emit是异步hook
    compiler.hooks.emit.tapAsync('CopyrightWebpackPlugin', (compilation, cb) => {
      debugger
      compilation.assets['copyright.txt'] = {
        source() {
          return 'copyright by me'
        },
        size() {
          return 15
        }
      }
      cb()
    })
  }
}

module.exports = CopyRightWebpackPlugin
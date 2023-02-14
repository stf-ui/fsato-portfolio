const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/fsato-portfolio', //リポジトリ名
  outputDir: 'docs' //docs
})

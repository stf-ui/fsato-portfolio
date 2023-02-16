const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: 'docs',
  publicPath: '/fsato-portfolio'
})
module.exports = {
  pages: {
    index: {
      entry: "src/main.js",
      title: "タイトル",
    }
  }
}

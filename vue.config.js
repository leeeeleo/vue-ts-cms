const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  outputDir: './build',
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/component'
      }
    },
}});

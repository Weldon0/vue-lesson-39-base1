const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 覆盖的是端口号
  // 替换完毕项目重启
  //   ctrl+c 终止掉项目   yarn serve重新启动
  devServer: {
    port: 3001
  }
})

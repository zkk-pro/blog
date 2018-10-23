/**
 * 自动加载路由，并装载
 */
const router = require('koa-router')()
const path = require('path')
const fs = require('fs')

// 获取当前文件的文件名+拓展名(index.js)
const basename = path.basename(__filename)

// 读取当前文件，返回一个数组，数组的每一项为当前文件夹下的文件名
fs.readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0 && file !== basename && file.endsWith('.js'))
  })
  .forEach(file => {
    let route = require(path.resolve(__dirname, file))
    router.use(route.routes(), route.allowedMethods())
  })

module.exports = router

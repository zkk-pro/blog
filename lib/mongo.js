/**
 * mongodb连接配置
 */

const mongoose = require('mongoose')
const config = require('../config/config')

mongoose.Promise = global.Promise

module.exports = () => {

  mongoose.connect(config.mongodb, {useNewUrlParser: true})
  const db = mongoose.connection

  db.on('error', error => {
    console.log('数据库连接失败：' + error)
  })
  
  db.on('open', () => {
    console.log('数据库连接成功')
  })
}

/**
 * 开发模式下的配置
 */
const port = Number.parseInt(process.env.PORT) || 3000
module.exports = {
  port,
  hostName: 'http://127.0.0.1:' + port,
  mongodb: 'mongodb://localhost:27017/blog',
  session: {
    key: 'blog',
    maxAge: 86400000
  }
}
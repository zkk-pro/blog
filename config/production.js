/**
 * 生产模式下的配置
 */
const port = Number.parseInt(process.env.PORT) || 5000

 module.exports = {
   port,
   hostName: process.env.HOST_NAME,
   mongodb: process.env.MONGODB,
   session: {
     key: 'blog',
     maxAge: 86400000
   }
 }
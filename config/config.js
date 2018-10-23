const development = require('./development')
const production = require('./production')

// module.exports = {
//   port: process.env.NODE_ENV || 3000,
//   session: {
//     key: 'blog',
//     maxAge: 86400000
//   },
//   mongodb: 'mongodb://localhost:27017/blog'
// }
const env = process.env.NODE_ENV || 'development'

const configs = {
  development,
  production,
}

const config = configs[env]
module.exports = config
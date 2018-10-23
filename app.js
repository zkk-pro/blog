const Koa = require('koa')
const render = require('koa-art-template')
const static = require('koa-static')
const session = require('koa-session')
const bodyParser = require('koa-bodyparser')
const path = require('path')
const router = require('./routes')
const mongodb = require('./lib/mongo')()
const config = require('./config/config')

console.log(config)
const app = new Koa()

render(app, {
  root: path.resolve(__dirname, 'views'),
  extname: '.html',
  debug: process.env.NODE_ENV !== 'production'
})

console.log(bodyParser)
app.use(bodyParser())

app.use(static(path.resolve(__dirname, 'public')))

app.keys = ['somethings']
app.use(session({
  key: config.session.key,
  maxAge: config.session.maxAge
}, app))

app.use(router.routes()).use(router.allowedMethods())

app.listen(config.port, () => {
  console.log(`server runing at ${config.hostName}`)
})

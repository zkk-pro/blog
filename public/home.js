/**
 * 以/home开头的路由
 */

const Router = require('koa-router')

const router = Router({
  prefix: '/home'
})

router.get('/', async ctx => {
  await ctx.render('index', {
    title: '首页'
  })
})

module.exports = router
const Router = require('koa-router')
const main = require('../controllers/main')

const router = Router({
  prefix: '/'
})

router.get('/', main.index)
router.post('signup', main.signup)

module.exports = router
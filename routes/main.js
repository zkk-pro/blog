const Router = require('koa-router')
const main = require('../controllers/main')

const router = Router({
  prefix: '/'
})

router.get('/', main.index)
router.get('signup', main.signup)
router.post('signup', main.signup)
router.get('signin', main.signin)
router.post('signin', main.signin)
router.get('signout', main.signout)

module.exports = router
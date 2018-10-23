const UserModel = require('../models/user')

const index = async (ctx, next) => {
  const user = {
    name: 'xiaosans'+Date.now(),
    email: `xiaosan${Date.now()}@163.com`,
    password: '123456'
  }
  const local = await UserModel.User.create(user)
  await ctx.render('index', { local })
}

module.exports = {
  index
}
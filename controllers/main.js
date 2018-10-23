const UserModel = require('../models/user')
const bcrypt = require('bcryptjs') // 第三方加密包

module.exports = {
  // 首页
  async index(ctx, next) {
    await ctx.render('index')
  },

  // 注册
  async signup (ctx, next) {
    let { name, email, pass } = ctx.request.body
    // 生成盐
    const salt = await bcrypt.genSalt(10)
    // 密码加密
    pass = await bcrypt.hash(pass, salt)

    let user = {
      name: name,
      password: pass,
      email: email
    }
    await UserModel.User.create(user)
    ctx.redirect('/')
  }
}
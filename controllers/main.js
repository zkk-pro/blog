const UserModel = require('../models/user')
const bcrypt = require('bcryptjs') // 第三方加密包

module.exports = {
  // 首页
  async index(ctx, next) {
    await ctx.render('index')
  },

  // 注册
  async signup (ctx, next) {
    if (ctx.method === 'GET') {
      return await ctx.render('signup', {
        title: '用户注册'
      })
    }
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
    // 存入数据库
    await UserModel.User.create(user)
    // 返回到首页
    ctx.redirect('/')
  },

  // 登录
  async signin (ctx, next) {
    if (ctx.method === 'GET') {
      return await ctx.render('signin', {
        title: '用户登录'
      })
    }
    let { name, password } = ctx.request.body
    // 根据用户名查找用户，找到返回该条数据，没有找到返回null
    let user = await UserModel.User.findOne({ name })
    // 使用bcrypt.compare 作对比，返回true/false
    // let pass = await bcrypt.compare(password, user.password)
    if (user && await bcrypt.compare(password, user.password)) {
      ctx.session.user = {
        _id: user._id,
        name: user.name,
        isAdmin: user.isAdmin,
        email: user.email
      }
      ctx.redirect('/')
    } else {
      ctx.body = '用户名密码错误'
    }
  },

  // 退出
  async signout (ctx, next) {
    ctx.session.user = null
    ctx.flash = {warning: '退出登录'}
    ctx.redirect('/')
  }
}
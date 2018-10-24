/**
 * 消息闪现中间件
 */
module.exports = function flash (opts) {
  let key = 'flash'
  return async (ctx, next) => {
    // 基于session的，如果没有设置session 则报错
    if (ctx.session === undefined) throw new Error('ctx.flash requires sessions')
    let data = ctx.session[key]
    // 刷新就消失
    ctx.session[key] = null
    Object.defineProperty(ctx, key, {
      enumerable: true,
      get: () => data,
      set: (val) => {
        ctx.session[key] = val
      }
    })
    await next()
  }
}
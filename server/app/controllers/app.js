/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */

module.exports = {

  async index(ctx, next) {
    await ctx.render('index', {
      title: 'Hello Koa 2!'
    });
    await next();
  }

};

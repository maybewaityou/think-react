/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */

module.exports = {

  async users(ctx, next) {
    await ctx.render('index', {
      title: 'Hello ' + ctx.request.querystring
    });
    await next();
  }

};

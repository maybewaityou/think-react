/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */

module.exports = {

    async home(ctx, next) {
        ctx.body = {
            name: 'zhangsan'
        };
        await next();
    }

};

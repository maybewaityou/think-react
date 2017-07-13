/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
const koa = require('koa');
const bodyParser = require('koa-bodyparser');
const json = require('koa-json');
const session = require('koa-session');
const views = require('koa-views');
const errorHandler = require('koa-onerror');
const logger = require('koa-logger');
const cors = require('koa-cors');
const router = require('./config/routes');
// require('./src/app/utilities/dbutility');

// 初始化实例
const app = new koa();
app.keys = ['think-react'];

// error handler
errorHandler(app);

// middlewares
app.use(logger());
app.use(session(app));
app.use(cors());
app.use(bodyParser({
    enableTypes: ['json', 'form', 'text']
}));
app.use(json());
app.use(require('koa-static')(__dirname + '/public'));

// template
app.use(views(__dirname + '/views', {
    extension: 'pug'
}));

// logger
app.use(async (ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// routes
app.use(router.routes(), router.allowedMethods());

app.listen(3000);

/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
const Router = require('koa-router');
const App = require('../app/controllers/app');
const Home = require('../app/controllers/home');

const router = new Router({
    prefix: '/pages'
});

// 设置路由规则
router.get('/index', App.index);

router.post('/showIndexInfo', Home.home);

module.exports = router;

/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
const Router = require('koa-router');
const graphqlHTTP = require('koa-graphql');
const bodyParser = require('koa-bodyparser');
const { graphqlKoa, graphiqlKoa } = require('apollo-server-koa');
const App = require('../app/controllers/app');
const Home = require('../app/controllers/home');
const Users = require('../app/controllers/users');
const schema = require('../app/models/schema');

const router = new Router({
    prefix: '/pages'
});

router.all('/graphql', graphqlHTTP({
    schema: {},
    graphiql: true
}));

// 设置路由规则
router.get('/index', App.index);
router.get('/users', Users.users);
router.post('/showIndexInfo', Home.home);

// koaBody is needed just for POST.
router.post('/graphql', bodyParser(), graphqlKoa({ schema: schema }));
router.get('/graphql', graphqlKoa({ schema: schema }));

router.post('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }));
router.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }));

module.exports = router;

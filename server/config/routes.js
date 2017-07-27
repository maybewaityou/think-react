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

// GraphQL
router.all('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

// RESTful
router.get('/index', App.index);
router.get('/users', Users.users);
router.post('/showIndexInfo', Home.home);

module.exports = router;

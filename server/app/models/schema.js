/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */

const makeExecutableSchema = require('graphql-tools').makeExecutableSchema;
const resolvers = require('./resolvers');

const typeDefs = `
type User {
    id: Int!
    firstName: String
    lastName: String
}

type Post {
    id: Int!
    post: String!
}

# the schema allows the following query:
type Query {
    users: [User]
    user(id: ID!): User
    posts: [Post]
}
# the schema allows the following mutate:
type Mutation {
    createUser(firstName: String!, lastName: String!): User
    createPost(data: String!): Post
}
`;

module.exports = makeExecutableSchema({
    typeDefs,
    resolvers,
});

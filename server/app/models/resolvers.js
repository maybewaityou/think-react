/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */

const users = [
    { id: 0, firstName: 'Tom', lastName: 'Coleman' },
    { id: 1, firstName: 'Sashko', lastName: 'Stubailo' },
];

const posts = [
    {
        id: 0,
        post: 'first post'
    }
];

const resolveFunctions = {
    Query: {
        users: () => users,
        user: (...args) => {
            const user = users.find(usr => usr.id.toString() === args[1].id);
            if (!user) {
                throw new Error(`Couldn't find user with id ${args[1].id}`);
            }
            return user;
        },
        posts: () => posts,
    },
    Mutation: {
        createUser: (...args) => {
            users.push({ id: users.length, firstName: args[1].firstName, lastName: args[1].lastName });
            return users[users.length - 1];
        },
        createPost: (...args) => {
            const post = { id: posts.length, post: args[1].data };
            posts.push(post);
            return post;
        },
        reset: (...args) => {
            users.splice(2, users.length);
            posts.splice(1, posts.length);
            return { users, posts };
        }
    },
};

module.exports = resolveFunctions;

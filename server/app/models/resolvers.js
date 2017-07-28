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
    },
    Mutation: {
        createUser: (...args) => {
            users.push({ id: args[1].id, firstName: args[1].firstName, lastName: args[1].lastName });
            return users[users.length - 1];
        }
    }
};

module.exports = resolveFunctions;

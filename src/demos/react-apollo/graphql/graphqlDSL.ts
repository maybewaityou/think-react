export const queryUsersAndPosts = `
    query {
        users {
            id
            firstName
            lastName
        }
        posts {
            id
            post
        }
    }
`;

export const createUser = `
    mutation($firstName: String!, $lastName: String!) {
        createUser(firstName: $firstName, lastName: $lastName) {
            id
            firstName
            lastName
        }
    }
`;

export const createPost = `
    mutation($data: String!) {
        createPost(data: $data) {
            id
            post
        }
    }
`;

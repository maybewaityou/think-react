/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { gql } from '../../../main/third-party/transform/graphQL';

export const QUERY_USERS_AND_POSTS = gql`
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

export const CREATE_USER = gql`
    mutation($firstName: String!, $lastName: String!) {
        createUser(firstName: $firstName, lastName: $lastName) {
            id
            firstName
            lastName
        }
    }
`;

export const CREATE_POST = gql`
    mutation($data: String!) {
        createPost(data: $data) {
            id
            post
        }
    }
`;

export const RESET_USERS_AND_POSTS = gql`
    mutation {
        reset {
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
    }
`;

/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { Map } from 'immutable';
import PropTypes from 'prop-types';
import * as React from 'react';
import { gql, graphQL } from '../../main/third-party/transform/graphQL';
import { log } from '../../main/utilities/debug/DebugUtility';
import ApolloStatelessView from './ApolloStatelessView';

import { componentFromStream, componentFromStreamWithConfig, compose, createEventHandler, defaultProps, lifecycle, mapProps, mapPropsStream, pure, setDisplayName, setObservableConfig, setPropTypes, withHandlers, withReducer, withState } from 'recompose';

export default compose(
    withState('data', 'setData', {
        loading: false,
        users: [],
        posts: [],
    }),
    graphQL(gql`
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
    `),
    graphQL(gql`
        mutation($firstName: String!, $lastName: String!) {
            createUser(firstName: $firstName, lastName: $lastName) {
                id
                firstName
                lastName
            }
        }
    `,
    { name: 'createUser' }),
    graphQL(gql`
        mutation($data: String!) {
            createPost(data: $data) {
                id
                post
            }
        }
    `, { name: 'createPost' }),
    withHandlers({
        handleQueryUserClick: (props: Readonly<any>) => async (event: any) => {
            const response = await props.data.refetch();
            log(response);
        },
        handleQueryPostClick: (props: Readonly<any>) => async (event: any) => {
            const response = await props.data.refetch();
            log(response);
        },
        handleCreateUserClick: (props: Readonly<any>) => async (event: any) => {
            const response = await props.createUser({
                variables: {
                    firstName: 'MeePwn',
                    lastName: 'maybewaityou',
                },
            });

            log(response);
            props.data.refetch();
        },
        handleCreatePostClick: (props: Readonly<any>) => async (event: any) => {
            const response = await props.createPost({
                variables: {
                    data: 'mu haha ~',
                },
            });

            log(response);
            props.data.refetch();
        },
    }),
    pure,
)(ApolloStatelessView);

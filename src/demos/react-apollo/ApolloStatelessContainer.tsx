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
import { createPost, createUser, queryUsersAndPosts, resetUsersAndPosts } from './graphql/graphqlDSL';

import { componentFromStream, componentFromStreamWithConfig, compose, createEventHandler, defaultProps, lifecycle, mapProps, mapPropsStream, pure, setDisplayName, setObservableConfig, setPropTypes, withHandlers, withReducer, withState } from 'recompose';

export default compose(
    withState('data', 'setData', {
        loading: false,
        users: [],
        posts: [],
    }),
    graphQL(gql`${queryUsersAndPosts}`),
    graphQL(gql`${createUser}`, { name: 'createUser' }),
    graphQL(gql`${createPost}`, { name: 'createPost' }),
    graphQL(gql`${resetUsersAndPosts}`, { name: 'resetUsersAndPosts' }),
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
        handleResetClick: (props: Readonly<any>) => async (event: any) => {
            const response = await props.resetUsersAndPosts();

            log(response);
            props.data.refetch();
        },
    }),
    pure,
)(ApolloStatelessView);

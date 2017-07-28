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
import { graphQL } from '../../main/third-party/transform/graphQL';
import { log } from '../../main/utilities/debug/DebugUtility';
import ApolloStatelessView from './ApolloStatelessView';
import { CREATE_POST, CREATE_USER, QUERY_USERS_AND_POSTS, RESET_USERS_AND_POSTS } from './graphql/graphqlDSL';

import { componentFromStream, componentFromStreamWithConfig, compose, createEventHandler, defaultProps, lifecycle, mapProps, mapPropsStream, pure, setDisplayName, setObservableConfig, setPropTypes, withHandlers, withReducer, withState } from 'recompose';

export default compose(
    withState('data', 'setData', {
        loading: false,
        users: [],
        posts: [],
    }),
    graphQL(QUERY_USERS_AND_POSTS),
    graphQL(CREATE_USER, { name: 'createUser' }),
    graphQL(CREATE_POST, { name: 'createPost' }),
    graphQL(RESET_USERS_AND_POSTS, { name: 'reset' }),
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
            const response = await props.reset();

            log(response);
            props.data.refetch();
        },
    }),
    pure,
)(ApolloStatelessView);

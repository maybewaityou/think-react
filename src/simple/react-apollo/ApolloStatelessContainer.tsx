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
import { branch, componentFromStream, componentFromStreamWithConfig, compose, createEventHandler, defaultProps, lifecycle, mapProps, mapPropsStream, pure, renderComponent, setDisplayName, setObservableConfig, setPropTypes, withHandlers, withReducer, withState } from 'recompose';
import { graphql } from '../../main/third-party/transform/graphQL';
import { log } from '../../main/utilities/debug/DebugUtility';
import ApolloStatelessView, { ErrorView, LoadingView } from './ApolloStatelessView';
import { CREATE_POST, CREATE_USER, QUERY_USERS_AND_POSTS, RESET_USERS_AND_POSTS } from './graphql/graphqlDSL';

const branchComponent: any = branch;

export default compose(
  withState('data', 'setData', {
    loading: false,
    users: [],
    posts: [],
  }),
  graphql(QUERY_USERS_AND_POSTS),
  graphql(CREATE_USER, { name: 'createUser' }),
  graphql(CREATE_POST, { name: 'createPost' }),
  graphql(RESET_USERS_AND_POSTS, { name: 'reset' }),
  branchComponent((props: Readonly<any>) => props.data.loading, renderComponent(LoadingView)),
  branchComponent((props: Readonly<any>) => props.data.error, renderComponent(ErrorView)),
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

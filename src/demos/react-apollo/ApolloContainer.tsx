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
import { PureComponent } from '../../main/components/high-order-component/Decorator';
import { graphQL } from '../../main/third-party/transform/graphQL';
import { log } from '../../main/utilities/debug/DebugUtility';
import ApolloView from './ApolloView';
import { CREATE_POST, CREATE_USER, QUERY_USERS_AND_POSTS, RESET_USERS_AND_POSTS } from './graphql/graphqlDSL';

export interface IApolloContainerProps {
    data?: any;
    createUser?: any;
    createPost?: any;
    reset?: any;
}

export interface IApolloContainerState {

}

@graphQL(QUERY_USERS_AND_POSTS)
@graphQL(CREATE_USER, { name: 'createUser' })
@graphQL(CREATE_POST, { name: 'createPost' })
@graphQL(RESET_USERS_AND_POSTS, { name: 'reset' })
export default class ApolloContainer extends PureComponent<IApolloContainerProps, IApolloContainerState> {

    constructor(props: Readonly<any>) {
        super(props);

    }

    public handleQueryUserClick = async () => {
        const response = await this.props.data.refetch();
        log(response);
    }

    public handleQueryPostClick = async () => {
        const response = await this.props.data.refetch();
        log(response);
    }

    public handleCreateUserClick = async () => {
        const response = await this.props.createUser({
            variables: {
                firstName: 'MeePwn',
                lastName: 'maybewaityou',
            },
        });

        log(response);
        this.props.data.refetch();
    }

    public handleCreatePostClick = async () => {
        const response = await this.props.createPost({
            variables: {
                data: 'mu haha ~',
            },
        });

        log(response);
        this.props.data.refetch();
    }

    public handleResetClick = async () => {
        const response = await this.props.reset();

        log(response);
        this.props.data.refetch();
    }

    public render() {
        return (
            <ApolloView
                data={this.props.data}
                handleQueryUserClick={this.handleQueryUserClick}
                handleQueryPostClick={this.handleQueryPostClick}
                handleCreatePostClick={this.handleCreatePostClick}
                handleCreateUserClick={this.handleCreateUserClick}
                handleResetClick={this.handleResetClick}
            />
        );
    }
}

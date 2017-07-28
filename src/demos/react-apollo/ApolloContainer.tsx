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
import { gql, graphQL } from '../../main/third-party/transform/graphQL';
import { log } from '../../main/utilities/debug/DebugUtility';
import ApolloView from './ApolloView';

export interface IApolloContainerProps {
    data?: any;
    createUser?: any;
    createPost?: any;
}

export interface IApolloContainerState {

}

@graphQL(gql`
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
`)
@graphQL(gql`
    mutation($firstName: String!, $lastName: String!) {
        createUser(firstName: $firstName, lastName: $lastName) {
            id
            firstName
            lastName
        }
    }
`, { name: 'createUser' })
@graphQL(gql`
    mutation($data: String!) {
        createPost(data: $data) {
            id
            post
        }
    }
`, { name: 'createPost' })
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

    public render() {
        return (
            <ApolloView
                data={this.props.data}
                handleQueryUserClick={this.handleQueryUserClick}
                handleQueryPostClick={this.handleQueryPostClick}
                handleCreatePostClick={this.handleCreatePostClick}
                handleCreateUserClick={this.handleCreateUserClick}
            />
        );
    }
}

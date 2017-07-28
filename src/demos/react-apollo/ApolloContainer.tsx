/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { Map } from 'immutable';
import * as React from 'react';
import { PureComponent } from '../../main/components/high-order-component/Decorator';
import { gql, graphQL } from '../../main/third-party/transform/graphQL';
import { log } from '../../main/utilities/debug/DebugUtility';
import ApolloView from './ApolloView';

export interface IApolloContainerProps {
    data?: any;
    mutate?: any;
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
            post
        }
    }
`)
@graphQL(gql`
    mutation($id: ID!, $firstName: String!, $lastName: String!) {
        createUser(id: $id, firstName: $firstName, lastName: $lastName) {
            id
            firstName
            lastName
        }
    }
`)
@graphQL(gql`
    mutation($data: String!) {
        createPost(data: $data) {
            post
        }
    }
`)
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
        const { users } = this.props.data;
        const response = await this.props.mutate({
            variables: {
                id: users.length,
                firstName: 'MeePwn',
                lastName: 'maybewaityou',
            },
        });

        log(response);
    }

    public handleCreatePostClick = async () => {
        log(this.props);
        log(this.props.data);
        const { users } = this.props.data;
        const response = await this.props.mutate({
            variables: {
                data: 'mu haha ~',
            },
        });

        log(response);
    }

    public render() {
        if (this.props.data.loading) {
            return (<div>Loading...</div>);
        }
        if (this.props.data.error) {
            log(this.props.data.error);
            return (<div>Error</div>);
        }
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

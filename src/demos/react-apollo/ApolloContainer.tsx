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

import { compose } from 'react-apollo';

@graphQL(gql`
    query Query {
        users {
            id
            firstName
            lastName
        }
    }
`, {
    options: {
        pollInterval: 3 * 1000,
    },
})
@graphQL(gql`
    mutation Mutation($id: ID!, $firstName: String!, $lastName: String!) {
        createUser(id: $id, firstName: $firstName, lastName: $lastName) {
            id
            firstName
            lastName
        }
    }
`)
export default class ApolloContainer extends PureComponent<IApolloContainerProps, IApolloContainerState> {

    constructor(props: Readonly<any>) {
        super(props);

    }

    public handleTestClick = () => {
        log(this.props);
        log(this.props.data);
        const { users } = this.props.data;
        this.props.mutate({
            variables: {
                id: users.length,
                firstName: 'MeePwn',
                lastName: 'maybewaityou',
            },
        })
            .then((response: any) => {
                log(response);
            });
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
                handleTestClick={this.handleTestClick}
            />
        );
    }
}

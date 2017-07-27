/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import gql from 'graphql-tag';
import { Map } from 'immutable';
import * as React from 'react';
import { graphql } from 'react-apollo';
import { PureComponent } from '../../main/components/high-order-component/Decorator';
import { log } from '../../main/utilities/debug/DebugUtility';
import ApolloView from './ApolloView';

export interface IApolloContainerProps {
    data: any;

}

export interface IApolloContainerState {

}

class ApolloContainer extends PureComponent<IApolloContainerProps, IApolloContainerState> {

    constructor(props: Readonly<any>) {
        super(props);

    }

    public handleTestClick = () => {
        log('============================');
        log(this.props.data);
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

const TrainerQuery = gql`
    query Query {
        users {
            id
            firstName
            lastName
        }
    }
`;

export default graphql(TrainerQuery, {
    options: {
        variables: {
            name: 'MeePwn',
        },
    },
})(ApolloContainer);

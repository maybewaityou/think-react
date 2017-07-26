/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { Map } from 'immutable';
import * as React from 'react';
import { gql, graphql } from 'react-apollo';
import { PureComponent } from '../../main/components/high-order-component/Decorator';
import { log } from '../../main/utilities/debug/DebugUtility';
import ApolloView from './ApolloView';

export interface IApolloContainerProps {

}

export interface IApolloContainerState {

}

export default class ApolloContainer extends PureComponent<IApolloContainerProps, IApolloContainerState> {

    constructor(props: Readonly<any>) {
        super(props);

    }

    public handleTestClick = () => {
        log('============================');
    }

    public render() {
        return (
            <ApolloView
                handleTestClick={this.handleTestClick}
            />
        );
    }
}

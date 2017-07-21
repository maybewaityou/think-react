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
import { log } from '../../main/utilities/debug/DebugUtility';
import RelayView from './RelayView';

export interface IRelayContainerProps {

}

export interface IRelayContainerState {

}

export default class RelayContainer extends PureComponent<IRelayContainerProps, IRelayContainerState> {

    constructor(props: Readonly<any>) {
        super(props);

    }

    public handleTestClick = () => {
        log('====');
    }

    public render() {
        return (
            <RelayView
                handleTestClick={this.handleTestClick}
            />
        );
    }
}

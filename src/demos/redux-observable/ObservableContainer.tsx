/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { is, Map } from 'immutable';
import * as React from 'react';
import { bindActionCreators } from 'redux';
import { CANCEL, PROMISE } from '../../dataflow/actions/Action';
import actionCreator from '../../dataflow/actions/ActionCreator';
import { connection } from '../../dataflow/connect/connection';
import { pureRender } from '../../main/components/high-order-component/Decorator';
import { log } from '../../main/utilities/debug/DebugUtility';
import ObservableView, { ObservableStatelessView } from './ObservableView';
import { $getError, $getHomeData, $getHomeDataSelector, isSuccess } from './selector/Selectors';

export interface IObservableContainerProps {
    actions?: any;
    success?: any;
    $data?: Map<string, any>;
    $error?: Map<string, any>;
}

export interface IObservableContainerState {

}

@connection((state: any) => ({
    $data: $getHomeDataSelector(state),
    $error: $getError(state),
    success: isSuccess(state),
}), (dispatch: any) => ({
    actions: bindActionCreators(actionCreator, dispatch),
}))
export default class ObservableContainer extends React.PureComponent<IObservableContainerProps, IObservableContainerState> {

    constructor(props: Readonly<any>) {
        super(props);

    }

    public shouldComponentUpdate(nProps: Readonly<any>, nState: Readonly<any>) {
        const thisProps: any = this.props || {};
        const thisState: any = this.state || {};
        const nextProps: any = nProps || {};
        const nextState: any = nState || {};

        if (Object.keys(thisProps).length !== Object.keys(nextProps).length ||
            Object.keys(thisState).length !== Object.keys(nextState).length) {
            return true;
        }
        for (const key in nextProps) {
            if (nextProps.hasOwnProperty(key) && !is(thisProps[key], nextProps[key])) {
                return true;
            }
        }
        for (const key in nextState) {
            if (nextState.hasOwnProperty(key) && !is(thisState[key], nextState[key])) {
                return true;
            }
        }

        log('====== pureRender ======');
        return false;
    }

    public handleTestObservableClick = () => {
        this.props.actions(PROMISE, { params: 'mu haha ~ ~' });
        log(PROMISE);
    }

    public handleTestObservableCancelClick = () => {
        this.props.actions(CANCEL);
        log(CANCEL);
    }

    public render() {
        const { success, $data, $error } = this.props;
        return (
            <ObservableView
                $data={success ? $data : $error}
                handleTestObservableClick={this.handleTestObservableClick}
                handleTestObservableCancelClick={this.handleTestObservableCancelClick}
            />
        );
    }
}

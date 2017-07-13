/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import * as React from 'react';
import { ComponentClass, connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CANCEL, PROMISE } from '../../dataflow/actions/Action';
import actionCreator from '../../dataflow/actions/ActionCreator';
import { log } from '../../main/utilities/debug/DebugUtility';
import ObservableView from './ObservableView';
import { getError, getHomeData, getHomeDataSelector, isSuccess } from './selector/Selectors';

export interface IObservableContainerProps {
    actions?: any;
    success?: any;
    $data?: any;
    $error?: any;
}

export interface IObservableContainerState {

}

// @connect(mapStateToProps, mapDispatchToProps)
class ObservableContainer extends React.PureComponent<IObservableContainerProps, IObservableContainerState> {

    constructor(props: any) {
        super(props);

    }

    public handleTestObservableClick = () => {
        this.props.actions(PROMISE, { params: 'mu haha ~ ~' });
        // log(PROMISE);
    }

    public handleTestObservableCancelClick = () => {
        this.props.actions(CANCEL);
        // log(CANCEL);
    }

    public render() {
        const { success, $data, $error } = this.props;
        // data={success ? $data.toJS() : $error.toJS()}
        return (
            <ObservableView
                data={{
                    name: '张三',
                }}
                handleTestObservableClick={this.handleTestObservableClick}
                handleTestObservableCancelClick={this.handleTestObservableCancelClick}
            />
        );
    }
}

function mapStateToProps(state: any) {
    log('===== mapStateToProps =====');
    return {
        $data: getHomeDataSelector(state),
        $error: getError(state),
        success: isSuccess(state),
    };
}

function mapDispatchToProps(dispatch: any) {
    return {
        actions: bindActionCreators(actionCreator, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ObservableContainer as ComponentClass<any>);

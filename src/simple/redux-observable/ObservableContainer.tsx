/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { Map } from 'immutable';
import { bind } from 'mario-ducks';
import * as React from 'react';
import { CANCEL, PROMISE } from '../../dataflow/actions/Action';
import { PureComponent, pureRender } from '../../main/components/high-order-component/Decorator';
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

@bind((state: any) => ({
  $data: $getHomeDataSelector(state),
  $error: $getError(state),
  success: isSuccess(state),
}))
export default class ObservableContainer extends PureComponent<IObservableContainerProps, IObservableContainerState> {

  constructor(props: Readonly<any>) {
    super(props);

  }

  public handleTestObservableClick = () => {
    this.props.actions(PROMISE, { params: 'mu haha ~ ~' });
  }

  public handleTestObservableCancelClick = () => {
    this.props.actions(CANCEL);
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

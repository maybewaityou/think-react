/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { Map } from 'immutable';
import { log } from 'mario-utilities';
import * as React from 'react';
import { bindActionCreators } from 'redux';
import { Observable } from 'rxjs';
import actionCreator from '../../dataflow/actions/ActionCreator';
import { connection } from '../../dataflow/connect/connection';
import { PureComponent } from '../../main/components/high-order-component/Decorator';
import StreamComponent from '../../main/components/high-order-component/stream/StreamComponent';
import StreamView from './StreamView';

export interface IStreamContainerProps {

}

export interface IStreamContainerState {
  result: any;
}

@connection((state: any) => ({
}), (dispatch: any) => ({
  actions: bindActionCreators(actionCreator, dispatch),
}))
export default class StreamContainer extends StreamComponent<IStreamContainerProps, IStreamContainerState> {

  constructor(props: Readonly<any>) {
    super(props);

    super.setChild(this);
  }

  public getStateStream(props: Readonly<any>) {
    return Observable.merge(
      Observable.of({ name: 'MeePwn' }),
      Observable.of({ age: 25 }),
    );
  }

  public handleTestStreamClick = () => {
    log(this.state);
  }

  public render() {
    return (
      <StreamView
        handleTestStreamClick={this.handleTestStreamClick}
      />
    );
  }
}

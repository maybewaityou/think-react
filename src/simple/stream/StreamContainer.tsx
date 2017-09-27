/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { Map } from 'immutable';
import { bind } from 'mario-ducks';
import { PureComponent } from 'mario-pure';
import { log } from 'mario-utilities';
import * as React from 'react';
import { bindActionCreators } from 'redux';
import { Observable } from 'rxjs';
import actionCreator from '../../dataflow/actions/ActionCreator';
import StreamComponent from '../../main/components/high-order-component/stream/StreamComponent';
import StreamView from './StreamView';

export interface IStreamContainerProps {

}

export interface IStreamContainerState {
  result: any;
}

@bind((state: any) => ({
}))
export default class StreamContainer extends StreamComponent<IStreamContainerProps, IStreamContainerState> {

  constructor(props: Readonly<any>) {
    super(props);

    super.child = this;
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

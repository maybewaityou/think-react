/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import * as React from 'react';
import PureComponent from '../pure/PureComponent';

const stateSubscriptions: any[] = [];

function isObservable(obj: any) {
  return obj && typeof obj.subscribe === 'function';
}

export default class StreamComponent<P, S> extends PureComponent<P, S> {

  public __stateSubscription: any;

  private child: any;

  public setChild(child: any) {
    this.child = child;
  }

  public componentWillMount() {
    const stateStream$ = this.child.getStateStream(this.props);

    this.__stateSubscription = stateStream$.subscribe((val: any) => {
      this.setState(val);
    });

    stateSubscriptions.push(this.__stateSubscription);
  }

  public componentWillUnmount() {
    if (this.__stateSubscription) {
      this.__stateSubscription.dispose();
      const index = stateSubscriptions.indexOf(this.__stateSubscription);
      if (index !== -1) {
        stateSubscriptions.splice(index, 1);
      }
    }
  }

}

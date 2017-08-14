/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { is } from 'immutable';
import { log } from 'mario-utilities';
import * as React from 'react';

export default (WrappedComponent: React.ComponentClass) => (
  class extends React.PureComponent<any, any> {

    public shouldComponentUpdate(nProps: Readonly<any>, nState: any) {
      const thisProps = this.props || {};
      const thisState = this.state || {};
      const nextProps = nProps || {};
      const nextState = nState || {};

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

      log('====== pureRenderDecorator pureRender ======');
      return false;
    }

    public render() {
      return ( <WrappedComponent {...this.props} /> );
    }
  }
);

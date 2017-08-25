/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import * as React from 'react';
import ObservableContainer from '../../simple/redux-observable/ObservableContainer';
import { ViewModel, ViewModelComponent } from '../view-model/index';

export default (RenderedView: React.ComponentClass) => (WrappedComponent: typeof ObservableContainer) => (
  class extends WrappedComponent {

    public render() {
      return ( <RenderedView {...this.viewModel.model()} {...this.viewModel.handlers()} /> );
    }
  }
);

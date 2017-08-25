/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import * as React from 'react';
import { ViewModel, ViewModelComponent, ViewModelProviders } from '../view-model/index';

export default <P, VM extends ViewModel>(RenderedView: React.ComponentClass, ViewModelClass: new () => VM) => (WrappedComponent: any) => (
  class extends ViewModelComponent<any, any, any> {

    constructor(props: Readonly<any>) {
      super(props);

      this.viewModel = ViewModelProviders.of(this).get(ViewModelClass).init<P>(props);
    }

    public render() {
      return (
        <RenderedView
          {...this.viewModel.model()}
          {...this.viewModel.handlers()}
        />
      );
    }
  }
);

/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import * as React from 'react';
import { ViewModel, ViewModelComponent, ViewModelProviders } from '../view-model/index';

class Test extends ViewModel<any> {
  public model() {
    return {
    };
  }

  public handlers() {
    return ({
    });
  }

  public onCleared() {}

}

export default <P, VM extends ViewModel<P>>(RenderedView: React.ComponentClass, ViewModelClass: new () => VM) =>  (
  class extends ViewModelComponent<any, any, any> {

    constructor(props: Readonly<any>) {
      super(props);

      this.viewModel = ViewModelProviders.of(this).get(ViewModelClass).init(props);
    }

    public componentWillUnmount() {
      this.viewModel.onCleared();
      ViewModelProviders.of(this).remove(ViewModelClass);
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

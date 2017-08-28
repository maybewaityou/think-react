/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import * as React from 'react';
import { Observable } from 'rxjs';
import { DataSource } from '../data-source/index';
import { ViewModel, ViewModelComponent, ViewModelProviders } from '../view-model/index';

class TestDataSource extends DataSource<any> {

  private props: Readonly<any>;

  constructor(props: Readonly<any>) {
    super();
    this.props = props;
  }

  public getModelObservable() {
    return Observable.create((subscribe: any) => {
      const { success, $data, $error } = this.props;
      subscribe.next({ $data: success ? $data : $error });
      subscribe.complete();
    });
  }
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

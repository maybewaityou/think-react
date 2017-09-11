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

  public save() {

  }

  public get() {
    const { success, $data, $error } = this.props;
    return { $data: success ? $data : $error };
  }

  public refresh() {

  }

  public delete() {

  }

  public complete() {

  }

}

export default <VP, VMP, VM extends ViewModel<VMP>>(RenderedView: React.ComponentClass<VP> | React.StatelessComponent<VP>, ViewModelClass: new () => VM | any) =>  (
  class extends ViewModelComponent<VMP, any, VM> {

    constructor(props: Readonly<VMP>) {
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

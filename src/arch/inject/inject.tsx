/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { PureComponent } from 'mario-pure';
import * as React from 'react';
import { ViewModel, ViewModelProviders } from '../view-model/index';

export default <VP, VMP, VM extends ViewModel<VMP>>(RenderedView: React.ComponentClass<VP> | React.StatelessComponent<VP>, ViewModelClass: new () => VM | any) =>  (
  class extends PureComponent<VMP, any> {

    public viewModel: VM;

    constructor(props: Readonly<VMP>, context?: any) {
      super(props, context);

      this.viewModel = ViewModelProviders.of(this).get(ViewModelClass).init(props);
      this.viewModel.onCreate(props, context);
    }

    public componentWillMount() {
      this.viewModel.willMount();
      this.viewModel.liveData.willMount();
    }

    public componentDidMount() {
      this.viewModel.didMount();
      this.viewModel.liveData.didMount();
    }

    public componentWillReceiveProps(nextProps: Readonly<VMP>) {
      this.viewModel.receiveProps(nextProps);
      this.viewModel.liveData.receiveProps(nextProps);
    }

    public shouldComponentUpdate(nextProps: Readonly<any>, nextState: Readonly<any>) {
      this.viewModel.liveData.shouldUpdate(nextProps, nextState);
      return super.shouldComponentUpdate(nextProps, nextState);
    }

    public componentWillUpdate(nextProps: Readonly<any>, nextState: Readonly<any>) {
      this.viewModel.liveData.willUpdate(nextProps, nextState);
    }

    public componentDidUpdate() {
      this.viewModel.liveData.didUpdate();
    }

    public componentWillUnmount() {
      this.viewModel.liveData.willUnmount();
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

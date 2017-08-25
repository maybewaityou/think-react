/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import * as React from 'react';
import ViewModelProviders from 'ViewModelProviders';
import ViewModel from './ViewModel';

export default abstract class ViewModelComponent<P, S, VM extends ViewModel<P>> extends React.PureComponent<P, S> {

  public viewModel: VM;

  public componentWillReceiveProps(nextProps: Readonly<P>) {
    this.viewModel.update(nextProps);
  }

}

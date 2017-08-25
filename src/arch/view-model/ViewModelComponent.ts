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
import ViewModel from './ViewModel';

export default abstract class ViewModelComponent<P, S, VM extends ViewModel> extends React.PureComponent<P, S> {

  public viewModel: VM;

  public componentWillReceiveProps(nextProps: Readonly<any>) {
    this.viewModel.update(nextProps);
  }

}

/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { Map } from 'immutable';
import { bind } from 'mario-ducks';
import { log } from 'mario-utilities';
import * as React from 'react';
import { inject, ViewModel, ViewModelComponent, ViewModelProviders } from '../../arch/index';
import { PureComponent } from '../../main/components/high-order-component/Decorator';
import ObservableView, { ObservableStatelessView } from './ObservableView';
import { $getError, $getHomeData, $getHomeDataSelector, isSuccess } from './selector/Selectors';
import ObservableViewModel from './view-model/ObservableViewModel';

export interface IObservableContainerProps {
  actions?: any;
  success?: any;
  $data?: Map<string, any>;
  $error?: Map<string, any>;
}

export interface IObservableContainerState {

}

@bind((state: any) => ({
  $data: $getHomeDataSelector(state),
  $error: $getError(state),
  success: isSuccess(state),
}))
@inject(ObservableView)
export default class ObservableContainer extends ViewModelComponent<IObservableContainerProps, IObservableContainerState, ObservableViewModel> {

  constructor(props: Readonly<any>) {
    super(props);

    this.viewModel = ViewModelProviders.of(this).get(ObservableViewModel).init(props);
  }

}

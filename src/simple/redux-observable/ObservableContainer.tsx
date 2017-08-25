/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { Map } from 'immutable';
import { bind } from 'mario-ducks';
import * as React from 'react';
import { inject } from '../../arch/index';
import ObservableView, { ObservableStatelessView } from './ObservableView';
import { $getError, $getHomeData, $getHomeDataSelector, isSuccess } from './selector/Selectors';
import ObservableViewModel, { IProps } from './view-model/ObservableViewModel';

export default bind((state: any) => ({
  $data: $getHomeDataSelector(state),
  $error: $getError(state),
  success: isSuccess(state),
}))(inject<IProps, ObservableViewModel>(ObservableView, ObservableViewModel));

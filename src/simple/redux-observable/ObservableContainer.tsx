/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { Map } from 'immutable';
import { inject } from 'mario-architecture-components';
import { bind } from 'mario-ducks';
import * as React from 'react';
import ObservableView, { IViewProps } from './ObservableView';
import mapStateToProps from './selector/Selectors';
import ObservableViewModel, { IViewModelProps } from './view-model/ObservableViewModel';

export default bind(mapStateToProps)(inject<IViewProps, IViewModelProps, ObservableViewModel>(ObservableView, ObservableViewModel));

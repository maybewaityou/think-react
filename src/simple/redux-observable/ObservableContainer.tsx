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
import mapStateToProps from './selector/Selectors';
import ObservableViewModel, { IProps } from './view-model/ObservableViewModel';

export default bind(mapStateToProps)(inject<IProps, ObservableViewModel>(ObservableView, ObservableViewModel));

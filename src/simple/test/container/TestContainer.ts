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
import { mapStateToProps } from '../ducks/selector/index';
import { IViewModelProps, TestViewModel } from '../view-model/index';
import { IViewProps, TestView } from '../view/index';

export default bind(mapStateToProps)(inject<IViewProps, IViewModelProps, TestViewModel>(TestView, TestViewModel));

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
import { mapStateToProps } from '../selector/index';
import { IProps, ViewModel } from '../view-model/index';
import { View } from '../view/index';

export default bind(mapStateToProps)(inject<IProps, ViewModel>(View, ViewModel));

/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import React from 'react';
import { Route } from 'react-router-dom';
import { IRouteConfig } from './PropTypes';

export default (config: IRouteConfig[] | undefined, extraProps?: any) => ( config.map((route: IRouteConfig) => <Route key={route.path} exact={route.exact} path={route.path} component={route.component} /> ));

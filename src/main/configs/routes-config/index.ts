/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import React from 'react';

import Child from '../../../pages/Child';
import GrandChild from '../../../pages/GrandChild';
import Home from '../../../pages/Home';
import Root from '../../../pages/Root';
import { renderRoutes, routeLoader } from '../../vendor/index';

export default [
  {
    component: Root,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home,
      },
      {
        path: '/child/:id',
        component: routeLoader(() => import(/* webpackChunkName: "child" */'../../../pages/Child')),
        routes: [{
          path: '/child/:id/grand-child',
          component: routeLoader(() => import(/* webpackChunkName: "grand-child" */'../../../pages/GrandChild')),
        }],
      },
    ],
  },
];

/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import React from 'react';

import { renderRoutes } from '../main/vendor/index';

export default ({ route, history }: any) => (
  <div>
    <h1>Root</h1>
    {renderRoutes(route.routes)}
  </div>
);

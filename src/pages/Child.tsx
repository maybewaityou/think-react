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
    <h2>Child</h2>
    {/* child routes won't render without this */}
    {renderRoutes(route.routes, { someProp: 'these extra props are optional' })}
    <button onClick={() => {
      history.goBack();
    }}>go back</button>
  </div>
);

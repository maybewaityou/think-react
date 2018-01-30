/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import { routesConfig } from '../main/configs/index';
import { renderRoutes } from '../main/vendor/index';
import Home from './Home';

export default () => (
  <Router>
    {renderRoutes(routesConfig)}
  </Router>
);

/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import '../assets/stylesheet/style.scss';

import { configureStore, Provider } from 'mario-ducks';
import React from 'react';
import { render } from 'react-dom';
import { ConnectedRouter as Router } from 'react-router-redux';

import { networkClient } from '@utilities';
import { renderRoutes } from '@vendor';
import { rootEpic } from './dataflow/epic/index';
import history from './dataflow/history/index';
import { rootLogic } from './dataflow/logic/index';
import middlewares from './dataflow/middleware/index';
import { rootReducer } from './dataflow/reducer/index';
import { routesConfig } from './main/configs/index';

const store = configureStore({}, networkClient, rootReducer, rootLogic, rootEpic, middlewares);

renderApp();

function renderApp() {
  render((
    <Provider store={store}>
      <Router history={history}>
        {renderRoutes(routesConfig)}
      </Router>
    </Provider>
  ), window.document.getElementById('app'));
}

if (module.hot) {
  module.hot.accept(['./pages/index'], renderApp);
}

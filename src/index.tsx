/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import '../assets/stylesheet/style.scss';

import { configureStore, Provider } from 'mario-ducks';
import { NetworkClient } from 'mario-utilities';
import React from 'react';
import { render } from 'react-dom';
import { rootEpic } from './dataflow/epic/index';
import { rootLogic } from './dataflow/logic/index';
import middlewares from './dataflow/middleware/index';
import { rootReducer } from './dataflow/reducer/index';
import TestContainer from './pages/index';

const networkClient = NetworkClient.getInstance().setConfig({ silence: false });

const store = configureStore({}, networkClient, rootReducer, rootLogic, rootEpic, middlewares);

function renderApp() {
  render((
    <Provider store={store}>
      <TestContainer />
    </Provider>
  ), window.document.getElementById('app'));
}

renderApp();

if (module.hot) {
  module.hot.accept(['./pages/index'], renderApp);
}

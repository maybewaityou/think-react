/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './assets/stylesheet/style.css';
import store from './dataflow/store/Store';
import FunctionalContainer from './demos/functional/FunctionalContainer';
import ObservableContainer from './demos/redux-observable/ObservableContainer';
import RelayContainer from './demos/relay/RelayContainer';

ReactDOM.render((
    <Provider store={store}>
        <RelayContainer />
    </Provider>
), document.getElementById('app'));

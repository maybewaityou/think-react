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
import ApolloContainer from './demos/react-apollo/ApolloContainer';
import ObservableContainer from './demos/redux-observable/ObservableContainer';

ReactDOM.render((
    <Provider store={store}>
        <ApolloContainer />
    </Provider>
), document.getElementById('app'));

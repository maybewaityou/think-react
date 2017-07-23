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
import whyDidYouUpdate from 'why-did-you-update';
import './assets/stylesheet/style.css';
import store from './dataflow/store/Store';
import FunctionalContainer from './demos/functional/FunctionalContainer';
import ApolloContainer from './demos/react-apollo/ApolloContainer';
import ObservableContainer from './demos/redux-observable/ObservableContainer';

whyDidYouUpdate(React);

ReactDOM.render((
    <Provider store={store}>
        <ObservableContainer />
    </Provider>
), document.getElementById('app'));

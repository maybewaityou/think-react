/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import * as React from 'react';
import { Provider } from 'react-redux';
import store from './dataflow/store/Store';
import FunctionalContainer from './demos/functional/FunctionalContainer';
import ObservableContainer from './demos/redux-observable/ObservableContainer';

export default () => (
    <Provider store={store}>
        <FunctionalContainer />
    </Provider>
);

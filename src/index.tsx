/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import * as React from 'react';
// import { ApolloClient, ApolloProvider } from 'react-apollo';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './assets/stylesheet/style.css';
import store from './dataflow/store/Store';
import FunctionalContainer from './demos/functional/FunctionalContainer';
import ApolloContainer from './demos/react-apollo/ApolloContainer';
import RecomposeContainer from './demos/recompose/RecomposeContainer';
import ObservableContainer from './demos/redux-observable/ObservableContainer';
import StreamContainer from './demos/stream/StreamContainer';

const App = (
    <Provider store={store}>
        <RecomposeContainer />
    </Provider>
);

// const client = new ApolloClient();
// const ApolloApp = (
//     <ApolloProvider client={client}>
//         <ApolloContainer />
//     </ApolloProvider>
// );

ReactDOM.render(App, document.getElementById('app'));

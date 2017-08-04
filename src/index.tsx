/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import * as React from 'react';
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './assets/stylesheet/style.css';
import store from './dataflow/store/Store';
import FunctionalContainer from './demos/functional/FunctionalContainer';
import ApolloContainer from './demos/react-apollo/ApolloContainer';
import ApolloStatelessContainer from './demos/react-apollo/ApolloStatelessContainer';
import RecomposeContainer from './demos/recompose/RecomposeContainer';
import ObservableContainer from './demos/redux-observable/ObservableContainer';
import StreamContainer from './demos/stream/StreamContainer';

const apolloClient = new ApolloClient({
  networkInterface: createNetworkInterface({
      uri: 'http://localhost:3000/pages/graphql',
  }),
});

const App = (
  <Provider store={store}>
    <ObservableContainer />
  </Provider>
);

const ApolloApp = (
  <ApolloProvider client={apolloClient}>
    <ApolloStatelessContainer />
  </ApolloProvider>
);

ReactDOM.render(ApolloApp, document.getElementById('app'));

/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { ApolloClient, configureApolloStore, createNetworkInterface, MarioProvider } from 'mario-ducks';
import { NetworkClient } from 'mario-utilities';
import * as React from 'react';
import Perf from 'react-addons-perf';
import * as ReactDOM from 'react-dom';
import './assets/stylesheet/style.css';
import rootEpic from './dataflow/epic/Epic';
import rootLogic from './dataflow/logic/Logic';
import rootReducer from './dataflow/reducer/Reducer';
import FunctionalContainer from './simple/functional/FunctionalContainer';
import ApolloContainer from './simple/react-apollo/ApolloContainer';
import ApolloStatelessContainer from './simple/react-apollo/ApolloStatelessContainer';
import RecomposeContainer from './simple/recompose/RecomposeContainer';
import ObservableContainer from './simple/redux-observable/ObservableContainer';
import StreamContainer from './simple/stream/StreamContainer';
import { Container } from './simple/test/index';

/* 性能分析 */
const win: any = window;
win.Perf = Perf;

/* 清除 warning */
console.warn = () => ({});

const apolloClient = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:3000/pages/graphql',
  }),
});

const networkClient = new NetworkClient();

const store = configureApolloStore({}, apolloClient, networkClient, rootReducer, rootLogic, rootEpic);

const ApolloApp = (
  <MarioProvider client={apolloClient} store={store}>
    <Container />
  </MarioProvider>
);

ReactDOM.render(ApolloApp, document.getElementById('app'));

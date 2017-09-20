/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import 'babel-polyfill';
import 'mario-extension';
import './assets/stylesheet/style.css';

import { ApolloClient, configureApolloStore, configureStore, createNetworkInterface, MarioProvider } from 'mario-ducks';
import { NetworkClient } from 'mario-utilities';
import * as React from 'react';
import Perf from 'react-addons-perf';
import * as ReactDOM from 'react-dom';
import rootEpic from './dataflow/epic/Epic';
import rootLogic from './dataflow/logic/Logic';
import middlewares from './dataflow/middleware/index';
import rootReducer from './dataflow/reducer/Reducer';
import { compose } from './main/utilities/functional/Functions';
import FunctionalContainer from './simple/functional/FunctionalContainer';
import ApolloContainer from './simple/react-apollo/ApolloContainer';
import ApolloStatelessContainer from './simple/react-apollo/ApolloStatelessContainer';
import RecomposeContainer from './simple/recompose/RecomposeContainer';
import ObservableContainer from './simple/redux-observable/ObservableContainer';
import StreamContainer from './simple/stream/StreamContainer';
import { TestContainer } from './simple/test/index';

function sum(x: any, y: any) {
  return x + y;
}
function multiply(x: any) {
  return (y: any) => x * y;
}
function add(x: any) {
  return x + 1;
}
console.log(compose(add, multiply(2), sum)(1, 1));

/* 性能分析 */
const win: any = window;
win.Perf = Perf;

/* 清除 warning */
console.warn = () => ({});

const apolloClient = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:9999/pages/graphql',
  }),
});

const networkClient = new NetworkClient();

const store = configureApolloStore({}, apolloClient, networkClient, rootReducer, rootLogic, rootEpic, middlewares);

const ApolloApp = (
  <MarioProvider client={apolloClient} store={store}>
    <TestContainer />
  </MarioProvider>
);

ReactDOM.render(ApolloApp, document.getElementById('app'));

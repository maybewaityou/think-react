/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducer/Reducer';

import { createEpicMiddleware } from 'redux-observable';
import rootEpic from '../../demos/redux-observable/epic/Epics';

// redux-observable Middleware
// dependencies: 注入的参数
const epicMiddleware = createEpicMiddleware(rootEpic);

const store = createStore(
    rootReducer,

    // redux-observable middleware
    applyMiddleware(epicMiddleware),

);

export default store;

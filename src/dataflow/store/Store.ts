/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { applyMiddleware, createStore, MiddlewareAPI } from 'redux';
import rootReducer from '../reducer/Reducer';

import { createEpicMiddleware, Epic } from 'redux-observable';
import { asyncObserve, asyncRequest } from '../../main/utilities/data/NetworkUtility';
import rootEpic from '../epic/Epic';

// redux-observable Middleware
// dependencies: 注入的参数
const epicMiddleware = createEpicMiddleware(rootEpic as Epic<any, any>, {
    dependencies: { asyncObserve, asyncRequest },
});

const store = createStore(
    rootReducer,

    // redux-observable middleware
    applyMiddleware(epicMiddleware),

);

export default store;

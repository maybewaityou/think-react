/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import Immutable, { fromJS, Map } from 'immutable';
import { IAction } from 'mario-ducks';
import { combineReducers, ReducersMapObject } from 'redux';
import { FETCH_DATA, FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS } from '../actions/index';

const initializeNetworkState: Map<string, any> = fromJS({
    isSuccess: false,
    response: {},
    error: {},
});

function networkReducer(state: Map<string, any> = initializeNetworkState, action: IAction) {
    switch (action.type) {
    case FETCH_DATA_SUCCESS:
        return state
            .set('isSuccess', true)
            .set('response', action.payload);
    case FETCH_DATA_FAILURE:
        return state
            .set('isSuccess', false)
            .set('error', action.payload);
    default:
        return state;
    }
}

export default {
  networkReducer,
};

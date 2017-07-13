/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import Immutable, { fromJS } from 'immutable';
import { combineReducers, ReducersMapObject } from 'redux';
import IAction, { DECREMENT, ERROR, FETCH_HOME_DATA, INCREMENT } from '../actions/Action';

const $initializeNetworkState = fromJS({
    error: {},
    homeData: {},
    isSuccess: false,
});

function $networkReducer($state = $initializeNetworkState, action: IAction) {
    switch (action.type) {
    case FETCH_HOME_DATA:
        return $state
            .set('isSuccess', true)
            .set('homeData', fromJS(action.payload));
    case ERROR:
        return $state
            .set('isSuccess', false)
            .set('error', fromJS(action.payload));
    default:
        return $state;
    }
}

export default combineReducers({
    $networkReducer,
} as ReducersMapObject);

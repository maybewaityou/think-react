/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import Immutable, { fromJS, Map } from 'immutable';
import { acceptActions, IAction } from 'mario-ducks';
import { log } from 'mario-utilities';
import * as Actions from '../actions/index';

const $initialState: Map<string, any> = fromJS({
  test00: {},
  test01: {},
});

export default acceptActions((state: Map<string, any> = $initialState, action: IAction) => {
  switch (action.type) {
    case Actions.TEST_ACTION:
      log('accept');
      return state.set('test00', fromJS(action.payload));
    case Actions.TEST_ACTION_UNACCEPT:
      log('unaccept');
      return state.set('test01', fromJS(action.payload));
    default:
      return state;
  }
}, [
  Actions,
]);

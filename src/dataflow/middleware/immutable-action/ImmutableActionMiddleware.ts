/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { fromJS } from 'immutable';
import { IAction } from 'mario-ducks';

export default (ingoreActionTypes: string[] = []) => {
  return (store: any) => (next: any) => (action: IAction | any) => {
    if (typeof action === 'function') {
      return next(action);
    }

    if (action.payload && typeof action.payload === 'object' && !contains(ingoreActionTypes, action.type)) {
      console.log('========');
      return next({
        type: action.type,
        payload: fromJS(action.payload),
      });
    }

    return next(action);
  };
};

function contains(array: any[], item: any) {
  let i = array.length;
  while (i--) {
    if (array[i] === item) {
      return true;
    }
  }
  return false;

}

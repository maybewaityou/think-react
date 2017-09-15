/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { Map } from 'immutable';
import { createSelector } from 'mario-ducks';
import { log, toString } from 'mario-utilities';

const test00Selector = createSelector([
  (state: any) => state.testReducer.get('test00'),
], (result: any) => result.toJS());

export default (state: any) => {
  return ({
    model: test00Selector(state),
  });
};

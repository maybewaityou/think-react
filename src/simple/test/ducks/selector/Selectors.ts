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

export default (state: any) => ({
  model: state.$testReducer.get('test00'),
});

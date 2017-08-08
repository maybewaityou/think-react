/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { combineEpics } from 'redux-observable';
import { fetchHomeCurryingEpic, fetchHomeEpic } from '../../simple/redux-observable/epic/Epics';

export default combineEpics(
  fetchHomeEpic,
  fetchHomeCurryingEpic,
);

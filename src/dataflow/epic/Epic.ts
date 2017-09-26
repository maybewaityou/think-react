/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { fetchHomeCurryingEpic, fetchHomeEpic } from '../../simple/redux-observable/epic/Epics';
import { testEpics } from '../../simple/test/index';

export default [
  fetchHomeEpic,
  fetchHomeCurryingEpic,
  ...testEpics,
];

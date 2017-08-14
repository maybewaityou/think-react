/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { fetchHomeCurryingEpic, fetchHomeEpic } from '../../simple/redux-observable/epic/Epics';

export default [
  fetchHomeEpic,
  fetchHomeCurryingEpic,
];

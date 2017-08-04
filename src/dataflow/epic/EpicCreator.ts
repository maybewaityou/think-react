/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * @providesModule EpicCreator
 *
 * description:
 *
 */
import { ActionsObservable } from 'redux-observable';
import IAction from '../actions/Action';

export const epicCreator = (action$: any) => (actionType: string) => (nextAction: any) =>
  action$.ofType(actionType).mergeMap((action: IAction) => nextAction(action));

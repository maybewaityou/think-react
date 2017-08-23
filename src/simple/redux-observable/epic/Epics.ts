/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { ActionsObservable, combineEpics } from 'redux-observable';
import { Observable } from 'rxjs';
import IAction, {
  CANCEL,
  ERROR,
  FETCH_HOME_DATA,
  PROMISE,
} from '../../../dataflow/actions/Action';
import { epicCreator } from '../../../dataflow/epic/EpicCreator';

// function (action$: ActionsObservable<Action>, store: Store, dependencies: Object?): Observable<Action>;
// dependencies: 在 Store 中注入的参数
export const fetchHomeEpic = (action$: ActionsObservable<string>, store: any, { network }: any) => (
  action$.ofType(PROMISE)
    .mergeMap((action) =>
      Observable.fromPromise(network.asyncRequest('HomePageController/showIndexInfo'))
        .flatMap((response) => {
          store.dispatch({ type: FETCH_HOME_DATA, payload: response });
          return Observable.fromPromise(network.asyncRequest('ImageController/imageTrans'));
        })
        .delay(1000)
        .map((response) => ({ type: FETCH_HOME_DATA, payload: response }))
        .takeUntil(action$.ofType(CANCEL))
        .catch((error) => Observable.of({ type: ERROR, payload: error })),
    )
);

/**
 * Currying 形式
 */
export const fetchHomeCurryingEpic = (action$: ActionsObservable<string>, store: any, { network }: any) => (
  epicCreator(action$)(PROMISE)((action: IAction) =>
    network.asyncObserve('HomePageController/showIndexInfo')
        .flatMap((response: any) => {
          store.dispatch({ type: FETCH_HOME_DATA, payload: response });
          return network.asyncObserve('ImageController/imageTrans');
        })
        .delay(1000)
        .map((response: any) => ({ type: FETCH_HOME_DATA, payload: response }))
        .takeUntil(action$.ofType(CANCEL))
        .catch((error: any) => Observable.of({ type: ERROR, payload: error })))
);
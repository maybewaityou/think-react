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

// function (action$: ActionsObservable<string>, store: Store, dependencies: Object?): Observable<IAction>;
// dependencies: 在 Store 中注入的参数
export const fetchHomeEpic = (action$: ActionsObservable<string>, store: any, { network }: any): Observable<IAction> => (
  action$.ofType(PROMISE)
    .mergeMap((action) =>
      Observable.fromPromise(network.asyncRequest('http://localhost:3000/pages/showIndexInfo'))
        .flatMap((response) => {
          store.dispatch({ type: FETCH_HOME_DATA, payload: response });
          return Observable.fromPromise(network.asyncRequest('http://localhost:3000/pages/showIndexInfo'));
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
export const fetchHomeCurryingEpic = (action$: ActionsObservable<string>, store: any, { network }: any): Observable<IAction> => (
  epicCreator(action$)(PROMISE)((action: IAction) =>
    network.asyncObserve('http://localhost:3000/pages/showIndexInfo')
        .flatMap((response: any) => {
          store.dispatch({ type: FETCH_HOME_DATA, payload: response });
          return network.asyncObserve('http://localhost:3000/pages/showIndexInfo');
        })
        .delay(1000)
        .map((response: any) => ({ type: FETCH_HOME_DATA, payload: response }))
        .takeUntil(action$.ofType(CANCEL))
        .catch((error: any) => Observable.of({ type: ERROR, payload: error })))
);

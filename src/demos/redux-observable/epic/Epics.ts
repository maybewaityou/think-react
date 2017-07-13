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
    CALLBACK,
    CANCEL,
    CONCURRENT,
    CONSECUTIVE,
    ERROR,
    FETCH_HOME_DATA,
    PROMISE,
} from '../../../dataflow/actions/Action';
import { epicCreator } from '../../../dataflow/epic/EpicCreator';
import Store from '../../../dataflow/store/Store';
import { fetchData, networkObservable } from '../../../main/utilities/data/NetworkUtility';

// function (action$: ActionsObservable<Action>, store: Store, dependencies: Object?): Observable<Action>;
// dependencies: 在 Store 中注入的参数
export const fetchHomeEpic = (action$: ActionsObservable<string>, store: any, dependencies: any) => (
    action$.ofType(PROMISE)
        .mergeMap((action) =>
            Observable.fromPromise(fetchData('HomePageController/showIndexInfo'))
                .flatMap((response) => {
                    store.dispatch({ type: FETCH_HOME_DATA, payload: response });
                    return Observable.fromPromise(fetchData('ImageController/imageTrans'));
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
export const fetchHomeCurryingEpic = (action$: ActionsObservable<string>, store: any, dependencies: any) => (
    epicCreator(action$)(PROMISE)((action: IAction) =>
        networkObservable('HomePageController/showIndexInfo')
            .flatMap((response: any) => {
                store.dispatch({ type: FETCH_HOME_DATA, payload: response });
                return networkObservable('ImageController/imageTrans');
            })
            .delay(1000)
            .map((response: any) => ({ type: FETCH_HOME_DATA, payload: response }))
            .takeUntil(action$.ofType(CANCEL))
            .catch((error: any) => Observable.of({ type: ERROR, payload: error })))
);

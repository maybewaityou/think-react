/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { Observable } from 'rxjs';
import { toString } from './JSONUtility';

/**
 * Rx 形式
 */
export function networkObservable(subURL: string, params?: any) {
    return Observable.create((subscriber: any) => {
        fetchData(subURL, params)
            .then((response: any) => {
                subscriber.next(response);
                subscriber.complete();
            })
            .catch((error: any) => {
                subscriber.error(error);
            });
    });
}

/**
 * Promise 形式
 */
export function fetchData(subURL: string, params?: any): Promise<Response> {

    // const URL = `http://10.240.90.212:8088/padServer/${subURL}`;
    const URL = 'http://192.168.1.112:3000/pages/showIndexInfo';

    return fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: toString(params && {}),
    }).then((response) => response.json());
}

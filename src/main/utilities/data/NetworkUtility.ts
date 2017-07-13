/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { Observable } from 'rxjs';
import { log } from '../debug/DebugUtility';
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

    log(`== URL ===>>>> ${URL}`);
    log(`== params ===>>>> ${params}`);

    return new Promise((resolve, reject) => {
        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: toString(params && {}),
        })
            .then(checkStatus)
            .then(parseJSON)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject({ error });
            });
    });
}

function checkStatus(response: any) {
    if (response.status >= 200 && response.status < 300) {
      return response;
  } else {
    const error: any = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

function parseJSON(response: any) {
  return response.json();
}

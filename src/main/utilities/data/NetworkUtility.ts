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
export function asyncObserve(subURL: string, params?: any) {
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
export async function asyncRequest(subURL: string, params: any = {}) {
    // const URL = `http://10.240.90.212:8088/padServer/${subURL}`;
    const URL = 'http://localhost:3000/pages/showIndexInfo';

    log(`== URL ===>>>> ${URL}`);
    log(`== params ===>>>> ${toString(params)}`);

    return await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: toString(params),
    })
        .then(checkStatus)
        .then(parseJSON);
}

function fetchData(subURL: string, params: any = {}): Promise<Response> {
    return new Promise((resolve: any, reject: any) => {
        asyncRequest(subURL, params)
            .then(resolve)
            .catch((error: any) => {
                reject({ errorMessage: error.message, errorStack: error.stack });
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

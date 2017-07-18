/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import curry from 'lodash/curry';

export const add = (x: number) => (y: number) => x + y;

export const match = curry((what: any, str: string) => {
    return str.match(what);
});

export const replace = curry((what: any, replacement: string, str: string) => {
    return str.replace(what, replacement);
});

export const filter = curry((f: any, array: any[]) => {
    return array.filter(f);
});

export const map = curry((f: any, array: any[]) => {
    return array.map(f);
});

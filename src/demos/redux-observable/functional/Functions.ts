/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import R from 'ramda';

export const add = (x: number) => (y: number) => x + y;

export const match = (what: any) => (str: string) => str.match(what);

export const split = (s: string) => (str: string) => str.split(s);

export const replace = (what: any) => (replacement: string) => (str: string) =>
    str.replace(what, replacement);

export const head = (s: string) => s[0];

export const tail = (s: string) => s.length > 0 ? s.substring(1, s.length) : '';

export const filter = (f: any) => (array: any []) => array.filter(f);

export const map = (f: any) => (array: any[]) => array.map(f);

export const join = (s: string) => (array: any[]) => array.join(s);

export const compose = R.compose;

export const reduce = (f: any, x: any) => (array: any[]) => array.reduce(f, x);

export const toUpperCase = (s: string) => s.toUpperCase();

export const toLowerCase = (s: string) => s.toLowerCase();

export const capitalize = (s: string) => {
    return toUpperCase(head(s)) + toLowerCase(tail(s));
};

export const camelize = (s: string) => {
    const tmpStr = replace(/\s|_|-/ig)(' ')(s).toLowerCase();
    return tmpStr.split(' ').map((x: string) => capitalize(x)).join('');
};

export const trace = (tag: any) => (x: any) => {
    console.log(tag, x);
    return x;
};

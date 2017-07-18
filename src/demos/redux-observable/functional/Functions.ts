/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
// import curry from 'lodash/curry';

export const add = (x: number) => (y: number) => x + y;

export const match = (what: any) => (str: string) => str.match(what);

export const replace = (what: any) => (replacement: string) => (str: string) =>
    str.replace(what, replacement);

export const filter = (f: any) => (array: any []) => array.filter(f);

export const map = (f: any) => (array: any[]) => array.map(f);

export const compose = (f: any, g: any) => (x: any) => f(g(x));

export const reduce = (f: any, x: any) => (array: any[]) => array.reduce(f, x);

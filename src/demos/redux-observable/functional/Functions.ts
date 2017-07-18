/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */

export const add = (x: number) => (y: number) => x + y;

export const match = (what: any) => (str: string) => str.match(what);

export const replace = (what: any) => (replacement: string) => (str: string) =>
    str.replace(what, replacement);

export const filter = (f: any) => (array: any []) => array.filter(f);

export const map = (f: any) => (array: any[]) => array.map(f);

export const split = (x: string) => (str: string) => str.split(x);

export const join = (x: string) => (array: any[]) => array.join(x);

export const compose = (f: any, g: any) => (x: any) => f(g(x));

export const reduce = (f: any, x: any) => (array: any[]) => array.reduce(f, x);

export const trace = (tag: any) => (x: any) => {
    console.log(tag, x);
    return x;
};

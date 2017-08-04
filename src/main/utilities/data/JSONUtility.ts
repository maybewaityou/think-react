/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */

export function toString(value: any, replacer?: (key: string, value: any) => any, space?: string | number): string {
  return JSON.stringify(value, replacer, space);
}

export function toJSON(text: string, reviver?: (key: any, value: any) => any): any {
  return JSON.parse(text, reviver);
}

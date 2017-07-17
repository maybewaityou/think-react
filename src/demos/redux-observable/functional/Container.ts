/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */

export default class Container {

    public static of(x: any) {
        return new Container(x);
    }

    public __value: any;

    constructor(x: any) {
        this.__value = x;
    }

    public map(f: any) {
        return Container.of(f(this.__value));
    }

}

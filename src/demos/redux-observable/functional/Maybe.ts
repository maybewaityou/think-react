/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */

export default class Maybe {

    public static of(x: any) {
        return new Maybe(x);
    }

    public __value: any;

    constructor(x: any) {
        this.__value = x;
    }

    public isNothing() {
        return this.__value === null || this.__value === undefined;
    }

    public map(f: any) {
        return this.isNothing() ? Maybe.of(null) : Maybe.of(f(this.__value));
    }

    public join() {
        return this.isNothing() ? Maybe.of(null) : this.__value;
    }

    public chain(f: any) {
        return this.map(f).join();
    }

    public apply(otherMaybe: Maybe) {
        return otherMaybe.map(this.__value);
    }

}

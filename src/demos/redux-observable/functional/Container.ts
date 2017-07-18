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

    private val: any;

    constructor(x: any) {
        this.val = x;
    }

    public map(f: any) {
        return Container.of(f(this.val));
    }

}

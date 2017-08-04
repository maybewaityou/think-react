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

  private val: any;

  constructor(x: any) {
    this.val = x;
  }

  public isNothing() {
    return this.val === null || this.val === undefined;
  }

  public map(f: any) {
    return this.isNothing() ? Maybe.of(null) : Maybe.of(f(this.val));
  }

  public join() {
    return this.isNothing() ? Maybe.of(null) : this.val;
  }

  public chain(f: any) {
    return this.map(f).join();
  }

  public apply(otherMaybe: Maybe) {
    return otherMaybe.map(this.val);
  }

}

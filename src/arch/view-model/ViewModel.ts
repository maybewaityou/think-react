/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */

export default abstract class ViewModel<P> {

  protected props: Readonly<P>;

  public init = (props: Readonly<P>) => {
    this.props = props;
    return this;
  }

  public update = (props: Readonly<P>) => {
    this.props = props;
  }

  public abstract model(): any;
  public abstract handlers(): any;
  public abstract onCleared(): any;

}

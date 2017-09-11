/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */

export default abstract class ViewModel<P> {

  public abstract model: () => any;
  public abstract handlers: () => any;

  protected props: Readonly<P>;

  public init = (props: Readonly<P>) => {
    this.props = props;
    return this;
  }

  public onMount = () => {};
  public onReceiveProps = (props: Readonly<P>) => {};

  public update = (props: Readonly<P>) => {
    this.props = props;
  }

  public abstract onCleared(): any;

}

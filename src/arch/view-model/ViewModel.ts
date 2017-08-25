/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */

export default abstract class ViewModel {

  protected props: Readonly<any>;

  public init = (props: Readonly<any>) => {
    this.props = props;
    return this;
  }

  public update = (props: Readonly<any>) => {
    this.props = props;
  }

  public abstract model(): any;
  public abstract handlers(): any;
  public abstract onCleared(): any;

}

/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { LiveData } from '../live-data/index';

export default abstract class ViewModel<P> {

  public abstract model: () => any;
  public abstract handlers: () => any;

  public liveData: LiveData<Readonly<P>>;
  protected props: Readonly<P>;

  public init = (props: Readonly<P>) => {
    this.props = props;
    this.liveData = new LiveData<P>(props);
    return this;
  }

  public onCreate(props: Readonly<any>, context?: any) {}
  public willMount() {}
  public didMount() {}
  public receiveProps(props: Readonly<P>) {
    this.props = props;
  }

  public abstract onCleared(): any;

}

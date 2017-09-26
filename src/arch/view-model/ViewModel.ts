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

  protected props: Readonly<P>;
  protected liveData: LiveData<Readonly<P>>;

  public init = (props: Readonly<P>) => {
    this.props = props;
    this.liveData = new LiveData<P>(props);
    return this;
  }

  public onMount() {}
  public onReceiveProps(props: Readonly<P>) {}

  public update = (props: Readonly<P>) => {
    this.props = props;
    this.liveData.update(props);
  }

  public abstract onCleared(): any;

}

/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import ILifecycleObserver from './ILifecycleObserver';

export default abstract class Lifecycle {

  public abstract willMount(): any;
  public abstract didMount(): any;
  public abstract receiveProps(props: Readonly<any>): any;

  public abstract addObserver(o: ILifecycleObserver): any;
  public abstract removeObserver(o: ILifecycleObserver): any;
  public abstract getCurrentState(): State;

}

export enum Event {
  WILL_MOUNT,
  DID_MOUNT,
  RECEIVE_PROPS,
}

export enum State {
  DESTROYED = 1,
  INITIALIZED,
  MOUNTED,
  RECEIVED_PROPS,
}

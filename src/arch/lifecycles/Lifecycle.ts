/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import ILifecycleObserver from './ILifecycleObserver';

export default abstract class Lifecycle {

  public abstract onCreate(props: Readonly<any>, context?: any): any;
  public abstract willMount(): any;
  public abstract didMount(): any;
  public abstract receiveProps(props: Readonly<any>): any;
  public abstract shouldUpdate(nextProps: Readonly<any>, nextState: Readonly<any>): boolean;
  public abstract willUpdate(nextProps: Readonly<any>, nextState: Readonly<any>): any;
  public abstract didUpdate(): any;
  public abstract willUnmount(): any;

  public abstract getCurrentState(): State;

}

export enum Event {
  ON_CREATE,
  WILL_MOUNT,
  DID_MOUNT,
  RECEIVE_PROPS,
  SHOULD_UPDATE,
  WILL_UPDATE,
  DID_UPDATE,
  WILL_UNMOUNT,
}

export enum State {
  CREATEED,
  WILL_MOUNT,
  MOUNTED,
  WILL_UPDATE,
  UPDATED,
  WILL_UNMOUNT,
}

/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { Observable, Observer } from 'rxjs';
import { Event, Lifecycle, State } from '../lifecycles/index';

const emptyFunction = () => {

};

export default class LiveData<P> implements Lifecycle {

  public lifecycle$: Observable<Event>;
  public props$: Observable<Readonly<P>>;
  public lifecycleObserver: Observer<Event> | any;

  private mCurrentState: State;

  public constructor(props: Readonly<P>, context?: any) {
    this.props$ = Observable.of(props);
    this.lifecycle$ = Observable.create((observer: Observer<Event>) => {
      this.lifecycleObserver = observer;
      this.onCreate(props, context);
    });
  }

  public onCreate(props: Readonly<P>, context?: any) {
    this.lifecycleObserver ? this.lifecycleObserver.next(Event.ON_CREATE) : emptyFunction();
    this.mCurrentState = State.CREATEED;
  }

  public willMount() {
    this.lifecycleObserver ? this.lifecycleObserver.next(Event.WILL_MOUNT) : emptyFunction();
    this.mCurrentState = State.WILL_MOUNT;
  }

  public didMount() {
    this.lifecycleObserver ? this.lifecycleObserver.next(Event.DID_MOUNT) : emptyFunction();
    this.mCurrentState = State.MOUNTED;
  }

  public receiveProps(props: Readonly<P>) {
    this.props$ = Observable.of(props);
    this.lifecycleObserver ? this.lifecycleObserver.next(Event.RECEIVE_PROPS) : emptyFunction();
  }

  public shouldUpdate(nextProps: Readonly<P>, nextState: Readonly<P>) {
    this.lifecycleObserver ? this.lifecycleObserver.next(Event.SHOULD_UPDATE) : emptyFunction();
    return true;
  }

  public willUpdate(nextProps: Readonly<P>, nextState: Readonly<P>) {
    this.lifecycleObserver ? this.lifecycleObserver.next(Event.WILL_UPDATE) : emptyFunction();
    this.mCurrentState = State.WILL_UPDATE;
  }

  public didUpdate() {
    this.lifecycleObserver ? this.lifecycleObserver.next(Event.DID_UPDATE) : emptyFunction();
    this.mCurrentState = State.UPDATED;
  }

  public willUnmount() {
    this.lifecycleObserver ? this.lifecycleObserver.next(Event.WILL_UNMOUNT) : emptyFunction();
    this.mCurrentState = State.WILL_UNMOUNT;
  }

  public getCurrentState() {
    return this.mCurrentState;
  }

}

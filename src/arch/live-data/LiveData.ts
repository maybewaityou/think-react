/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { Observable, Observer } from 'rxjs';
import { Event, Lifecycle, State } from '../lifecycles/index';

export default class LiveData<P> {

  public lifecycle$: Observable<Lifecycle>;
  public props$: Observable<Readonly<P>>;

  private lifecycleObserver: Observer<Event>;

  public constructor(props: Readonly<P>) {
    this.props$ = Observable.of(props);
    this.lifecycle$ = Observable.create((observer: Observer<Event>) => {
      this.lifecycleObserver = observer;
      observer.next(Event.DID_MOUNT);
    });
  }

  public update(props: Readonly<P>) {
    this.props$ = Observable.of(props);
    this.lifecycleObserver.next(Event.RECEIVE_PROPS);
  }

}

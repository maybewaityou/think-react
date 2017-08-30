/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import ILifecycleObserver from './ILifecycleObserver';

export default abstract class Lifecycle {

  public abstract addObserver(o: ILifecycleObserver): any;
  public abstract removeObserver(o: ILifecycleObserver): any;
  public abstract getCurrentState(): State;

}

enum State {
  DESTROYED = 1,
  INITIALIZED,
  CREATED,
  STARTED,
  RESUMED,
}

enum Event {
  ON_CREATE,
  ON_START,
  ON_RESUME,
  ON_PAUSE,
  ON_STOP,
  ON_DESTROY,
  ON_ANY,
}

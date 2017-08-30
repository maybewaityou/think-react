/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import Lifecycle from './Lifecycle';

export default interface ILifecycleOwner {
  getLifecycle(): Lifecycle;
}

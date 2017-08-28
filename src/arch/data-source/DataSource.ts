/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { Observable } from 'rxjs';

export default abstract class DataSource<T> {

  public abstract getModelObservable(): Observable<T>;

}

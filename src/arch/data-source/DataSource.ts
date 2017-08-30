/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */

export default abstract class DataSource<T> {

  public abstract save(): T;
  public abstract get(): T;
  public abstract refresh(): any;
  public abstract delete(): void;
  public abstract complete(): void;

}

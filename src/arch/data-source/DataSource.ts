/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */

export default abstract class DataSource<T> {

  public abstract getData(): T;
  public abstract saveData(): T;
  public abstract complete(): void;
  public abstract refreshData(): any;
  public abstract delete(): void;

}

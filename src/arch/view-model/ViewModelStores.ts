/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import ViewModelStore from './ViewModelStore';

export default class ViewModelStores {

  public static of = (context: any) => {
    if (ViewModelStores.mViewModelStore) {
      return ViewModelStores.mViewModelStore;
    }
    ViewModelStores.mViewModelStore = new ViewModelStore();
    return ViewModelStores.mViewModelStore;
  }

  private static mViewModelStore: ViewModelStore;

}

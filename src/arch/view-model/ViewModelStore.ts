/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import ViewModel from './ViewModel';

const mMap: Map<string, ViewModel<any>> = new Map();

export default class ViewModelStore {

  public put = <P>(key: string, viewModel: ViewModel<P>) => {
    const oldViewModel = mMap.get(key);
    if (oldViewModel) {
        oldViewModel.onCleared();
    }
    mMap.set(key, viewModel);
  }

  public get = (key: string) => mMap.get(key);

  public remove = (key: string) => mMap.delete(key);

  public clear = () => {
    mMap.forEach((value, key) => {
      value.onCleared();
    });
    mMap.clear();
  }

}

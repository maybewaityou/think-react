/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import ViewModel from './ViewModel';

const mMap: Map<string, ViewModel> = new Map();

export default class ViewModelStore {

  public put = (key: string, viewModel: ViewModel) => {
    const oldViewModel = mMap.get(key);
    if (oldViewModel) {
        oldViewModel.onCleared();
    }
    mMap.set(key, viewModel);
  }

  public get = (key: string) => mMap.get(key);

  public clear = () => {
    mMap.forEach((value, key) => {
      value.onCleared();
    });
    mMap.clear();
  }

}

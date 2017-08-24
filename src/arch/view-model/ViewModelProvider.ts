/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { log } from 'mario-utilities';
import ViewModel from './ViewModel';
import ViewModelStore from './ViewModelStore';

const DEFAULT_KEY = 'android.arch.lifecycle.ViewModelProvider.DefaultKey';

export interface IFactory {

  create<T extends ViewModel>(modelClass: new () => T): any;

}

export default class ViewModelProvider {

  private mFactory: IFactory;
  private mViewModelStore: ViewModelStore;

  constructor(store: ViewModelStore, factory: IFactory) {
    this.mFactory = factory;
    this.mViewModelStore = store;
  }

  public get = <T extends ViewModel>(modelClass: new () => T, key: string = `${DEFAULT_KEY}:${`${modelClass}`.split('extends')[0].replace(/class/, '').replace(/\s/g, '')}`) => {
    let viewModel = this.mViewModelStore.get(key);
    if (viewModel && viewModel instanceof modelClass) {
      return viewModel;
    } else {
      if (!viewModel) {
        // TODO: log a warning.
      }

      viewModel = this.mFactory.create(modelClass);
      this.mViewModelStore.put(key, viewModel);
      return viewModel;
    }
  }

}

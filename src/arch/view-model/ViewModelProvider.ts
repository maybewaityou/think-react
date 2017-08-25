/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import ViewModel from './ViewModel';
import ViewModelStore from './ViewModelStore';

const DEFAULT_KEY = 'android.arch.lifecycle.ViewModelProvider.DefaultKey';

const defaultKey = (modelClass: any) => `${DEFAULT_KEY}:${`${modelClass}`.split('extends')[0].replace(/class/, '').replace(/\s/g, '')}`;

export interface IFactory {

  create<P, VM extends ViewModel<P>>(modelClass: new () => VM): any;

}

export default class ViewModelProvider {

  private mFactory: IFactory;
  private mViewModelStore: ViewModelStore;

  constructor(store: ViewModelStore, factory: IFactory) {
    this.mFactory = factory;
    this.mViewModelStore = store;
  }

  public get = <P, VM extends ViewModel<P>>(modelClass: new () => VM, key: string =  defaultKey(modelClass)) => {
    let viewModel = this.mViewModelStore.get(key);
    if (viewModel && viewModel instanceof modelClass) {
      return viewModel;
    } else {
      if (!viewModel) {
        // TODO: log a warning.
      }

      viewModel = this.mFactory.create(modelClass);
      this.mViewModelStore.put(key, viewModel);
      return viewModel as VM;
    }
  }

}

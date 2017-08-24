/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */

import ViewModel from './ViewModel';
import ViewModelProvider, { IFactory } from './ViewModelProvider';
import ViewModelStores from './ViewModelStores';

export default class ViewModelProviders {

  public static of = (context: any) => {
    ViewModelProviders.initializeFactoryIfNeeded();
    return new ViewModelProvider(ViewModelStores.of(context), ViewModelProviders.sDefaultFactory);
  }

  private static sDefaultFactory: DefaultFactory;

  private static initializeFactoryIfNeeded = () => {
    if (!ViewModelProviders.sDefaultFactory) {
      ViewModelProviders.sDefaultFactory = new DefaultFactory();
    }
  }

}

class DefaultFactory implements IFactory {

  public create<T extends ViewModel>(modelClass: new () => T) {
    return new modelClass();
  }

}

/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { ViewModel } from 'mario-architecture-components';
import { log } from 'mario-utilities';

export interface IViewModelProps {

}

export default class extends ViewModel<IViewModelProps> {

  public model = () => ({

  })

  public handlers = () => ({
    handleClick: () => {
      log('=================');
    },
  })

  public onCleared() {}

}

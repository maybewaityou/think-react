/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { ViewModel } from 'mario-architecture-components';

export interface IViewModelProps {

}

export default class extends ViewModel<IViewModelProps> {

  public onMount() {

  }

  public model() {
    return {

    };
  }

  public handlers() {
    return {
      handleClick: () => {
        console.log('=================');
      },
    };
  }

  public onCleared() {

  }

}

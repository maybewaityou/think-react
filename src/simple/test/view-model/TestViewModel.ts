/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
// import { ViewModel } from 'mario-architecture-components';
import { log } from 'mario-utilities';
import { ViewModel } from '../../../arch/index';
import { TEST_ACTION, TEST_ACTION_UNACCEPT } from '../ducks/actions/index';

export interface IViewModelProps {
  actions: (type: string, payload?: any) => any;
  model: any;
}

export default class extends ViewModel<IViewModelProps> {

  public onMount() {
    this.liveData.lifecycle$.subscribe((value) => {
      log(value);
    });
  }

  public model = () => ({
    model: this.props.model,
  })

  public handlers = () => ({
    handleTest00Click: () => {
      this.props.actions(TEST_ACTION, {
        name: 'zhangsan',
        dog: {
          name: 'wangcai',
        },
      });
    },
    handleTest01Click: () => {
      this.props.actions(TEST_ACTION_UNACCEPT);
      this.liveData.props$.subscribe((value: any) => {
        log(value);
      });
    },
  })

  public onCleared() {

  }

}

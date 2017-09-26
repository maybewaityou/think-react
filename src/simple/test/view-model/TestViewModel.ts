/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { Event, ViewModel } from 'mario-architecture-components';
import { log } from 'mario-utilities';
import { TEST_ACTION, TEST_ACTION_UNACCEPT } from '../ducks/actions/index';

export interface IViewModelProps {
  actions: (type: string, payload?: any) => any;
  model: any;
}

export default class extends ViewModel<IViewModelProps> {

  public onCreate(props: Readonly<any>, context?: any) {
    this.liveData.lifecycle$.subscribe((eventType: Event) => {
      log(eventType);
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

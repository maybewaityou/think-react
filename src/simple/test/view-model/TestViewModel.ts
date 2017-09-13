/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { ViewModel } from 'mario-architecture-components';
import { log } from 'mario-utilities';
import { TEST_ACTION, TEST_ACTION_UNACCEPT } from '../ducks/actions/index';

export interface IViewModelProps {
  actions?: any;
  model: any;
}

export default class extends ViewModel<IViewModelProps> {

  public onMount() {

  }

  public model = () => {
    return ({
      model: this.props.model,
    });
  }

  public handlers = () => ({
    handleTest00Click: () => {
      log('handlerClick test 00');
      this.props.actions(TEST_ACTION, { name: 'zhangsan' });
    },
    handleTest01Click: () => {
      log('handlerClick test 01');
      this.props.actions(TEST_ACTION_UNACCEPT);
    },
  })

  public onCleared() {

  }

}

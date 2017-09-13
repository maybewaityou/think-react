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
  test00: any;
}

export default class extends ViewModel<IViewModelProps> {

  public onMount() {

  }

  public model = () => ({
    model: this.props.test00,
  })

  public handlers = () => ({
    handleTest00Click: () => {
      log('handlerClick');
      this.props.actions(TEST_ACTION, { name: 'zhangsan' });
    },
    handleTest01Click: () => {
      log('handlerClick');
      this.props.actions(TEST_ACTION_UNACCEPT);
    },
  })

  public onCleared() {

  }

}

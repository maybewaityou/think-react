/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { ViewModel } from 'mario-architecture-components';
import { CANCEL, PROMISE } from '../../../dataflow/actions/Action';

export interface IViewModelProps {
  actions?: any;
  success?: any;
  $data?: Map<string, any>;
  $error?: Map<string, any>;
}

export default class extends ViewModel<IViewModelProps> {

  public model = () => {
    const { success, $data, $error } = this.props;
    return {
      $data: success ? $data : $error,
    };
  }

  public handlers = () => ({
    testObservableClick: () => {
      this.props.actions(PROMISE, { params: 'mu haha ~ ~' });
    },
    testObservableCancelClick: () => {
      this.props.actions(CANCEL);
    },
  })

  public onCleared() {}

}

/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { ViewModel } from '../../../arch/index';
import { CANCEL, PROMISE } from '../../../dataflow/actions/Action';

export default class ObservableViewModel extends ViewModel {

  private props: Readonly<any>;

  public init = (props: Readonly<any>): ObservableViewModel => {
    this.props = props;
    return this;
  }

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

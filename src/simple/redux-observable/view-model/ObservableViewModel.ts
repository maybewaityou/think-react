/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { ViewModel } from '../../../arch/index';

export default class ObservableViewModel extends ViewModel {

  private props: Readonly<any>;

  public init = (props: Readonly<any>): ObservableViewModel => {
    this.props = props;
    return this;
  }

  public handlers = () => ({
    handleTestObservableClick: () => {
      this.props.actions('PROMISE', { params: 'mu haha ~ ~' });
    },
    handleTestObservableCancelClick: () => {
      this.props.actions('CANCEL');
    },
  })

  public onCleared() {}

}

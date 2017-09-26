/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
// import { inject, ViewModel } from 'mario-architecture-components';
import { bind } from 'mario-ducks';
import { inject, ViewModel } from '../../../arch/index';
import { mapStateToProps } from '../ducks/selector/index';
import { IViewModelProps, TestViewModel } from '../view-model/index';
import { IViewProps, TestView } from '../view/index';

export default bind(mapStateToProps)(inject<IViewProps, IViewModelProps, ViewModel<IViewModelProps>>(TestView, TestViewModel));

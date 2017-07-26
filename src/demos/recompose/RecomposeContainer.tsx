/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { compose, mapProps, pure, withState /* ... */ } from 'recompose';
import RecomposeView from './RecomposeView';

export default compose(
    withState('name', 'newName', 'zhangsan'),
    mapProps((input) => input),
)(RecomposeView);

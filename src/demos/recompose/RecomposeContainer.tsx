/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { compose, mapProps, pure, withHandlers, withState } from 'recompose';
import RecomposeView, { RecomposeStatelessView } from './RecomposeView';

export default compose(
    withState('name', 'setName', ''),
    withState('age', 'setAge', 0),
    // mapProps((input) => input),
    // withHandlers(),
)(RecomposeStatelessView);

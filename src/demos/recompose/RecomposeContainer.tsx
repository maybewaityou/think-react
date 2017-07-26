/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { compose, mapProps, pure, withHandlers, withState } from 'recompose';
import RecomposeView, { RecomposeStatelessView } from './RecomposeView';

/**
 * They help prevent abuse of the setState() API, favoring props instead.
 * 防止滥用 setState(), 使用 props 代替
 * They encourage the "smart" vs. "dumb" component pattern.
 *
 * They encourage code that is more reusable and modular.
 * 它们鼓励更可重用和模块化的代码
 * They discourage giant, complicated components that do too many things.
 * 他们阻止庞大而复杂的组件做太多的事情。
 * In the future, they will allow React to make performance optimizations by avoiding unnecessary checks and memory allocations.
 * 将来，他们将允许通过避免不必要的检查和内存分配来做出性能优化。
 */

export default compose(
    withState('name', 'setName', ''),
    withState('age', 'setAge', 0),
    // mapProps((input) => input),
    // withHandlers(),
    pure,
)(RecomposeStatelessView);

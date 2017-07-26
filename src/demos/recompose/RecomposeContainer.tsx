/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import * as React from 'react';
import { componentFromStreamWithConfig, compose, createEventHandler, defaultProps, mapProps, pure, withHandlers, withReducer, withState } from 'recompose';
import { Observable } from 'rxjs';
import RecomposeView from './RecomposeView';

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

const counterReducer = (count: any, action: any) => {
    switch (action.type) {
    case 'INCREMENT':
        return count + 1;
    case 'DECREMENT':
        return count - 1;
    default:
        return count;
    }
};

export default compose(
    defaultProps({
        level: 'mu haha ~',
    }),
    withState('name', 'setName', ''),
    withState('age', 'setAge', 0),
    withReducer('count', 'dispatch', counterReducer, 0),
    withHandlers({
        handlePress: (props: Readonly<any>) => (event: any) => {
            props.dispatch({ type: 'INCREMENT' });
            props.setName('MeePwn');
            props.setAge(25);
        },
    }),
    pure,
)(RecomposeView);

/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { Map } from 'immutable';
import * as React from 'react';
import { pureRender } from '../../main/components/high-order-component/Decorator';
import { toString } from '../../main/utilities/data/JSONUtility';

/**
 * 无状态组件
 */
export default (props: Readonly<any>) => (
    <div style={styles.container}>
        <button style={styles.button} onClick={props.handlePress}>test Recompose</button>
        <div>name: {props.name}</div>
        <div>age: {props.age}</div>
        <div>level: {props.level}</div>
    </div>
);

const styles = {
    container: {
        flex: 1,

    },
    button: {
        marginTop: 20,
    },
    text: {
        fontSize: 18,
    },

};

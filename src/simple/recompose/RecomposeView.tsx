/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { Map } from 'immutable';
import { toString } from 'mario-utilities';
import * as React from 'react';

/**
 * 无状态组件
 */
export default (props: Readonly<any>) => (
  <div style={styles.container}>
    <button style={styles.button} onClick={props.handlePress}>test Recompose</button>
    <div>name: {props.name}</div>
    <div>age: {props.age}</div>
    <div>level: {props.level}</div>
    <div>count: {props.count}</div>
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

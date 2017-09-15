/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { Map } from 'immutable';
import { pureRender } from 'mario-pure';
import { toString } from 'mario-utilities';
import * as React from 'react';

export interface IViewProps {
  data: any;
  testObservableClick: any;
  testObservableCancelClick: any;
}

export default (props: Readonly<IViewProps>) => (
  <div style={styles.container}>
    <button style={styles.button} onClick={props.testObservableClick}>test observable</button>
    <button style={styles.button} onClick={props.testObservableCancelClick}>test observable cancel</button>
    <div style={styles.text}>{toString(props.data)}</div>
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

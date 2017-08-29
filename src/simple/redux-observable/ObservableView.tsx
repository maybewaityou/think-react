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

/**
 * 无状态组件
 */
export const ObservableStatelessView = (props: Readonly<any>) => (
  <div style={styles.container}>
    <button style={styles.button} onClick={props.testObservableClick}>test observable</button>
    <button style={styles.button} onClick={props.testObservableCancelClick}>test observable cancel</button>
    <div style={styles.text}>{toString(props.$data.toJS())}</div>
  </div>
);

export interface IObservableViewProps {
  $data: Map<string, any>;
  testObservableClick: any;
  testObservableCancelClick: any;
}

export interface IObservableViewState {

}

@pureRender
export default class ObservableView extends React.PureComponent<IObservableViewProps, IObservableViewState> {

  constructor(props: Readonly<IObservableViewProps>) {
    super(props);

  }

  public render() {
    return (
      <div style={styles.container}>
        <button style={styles.button} onClick={this.props.testObservableClick}>test observable</button>
        <button style={styles.button} onClick={this.props.testObservableCancelClick}>test observable cancel</button>
        <div style={styles.text}>{toString(this.props.$data.toJS())}</div>
      </div>
    );
  }
}

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

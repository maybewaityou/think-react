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

export interface IFunctionalViewProps {
  handleTestObservableClick: any;
  handleTestFunctionalClick: any;
}

export interface IFunctionalViewState {

}

@pureRender
export default class FunctionalView extends React.PureComponent<IFunctionalViewProps, IFunctionalViewState> {

  constructor(props: Readonly<any>) {
    super(props);

  }

  public render() {
    return (
      <div style={styles.container}>
        <button style={styles.button} onClick={this.props.handleTestObservableClick}>test observable</button>
        <button style={styles.button} onClick={this.props.handleTestFunctionalClick}>test functional</button>
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

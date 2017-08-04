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

export interface IStreamViewProps {
  handleTestStreamClick: any;
}

export interface IStreamViewState {

}

@pureRender
export default class StreamView extends React.PureComponent<IStreamViewProps, IStreamViewState> {

  constructor(props: Readonly<any>) {
    super(props);

  }

  public render() {
    return (
      <div style={styles.container}>
        <button style={styles.button} onClick={this.props.handleTestStreamClick}>test stream</button>
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

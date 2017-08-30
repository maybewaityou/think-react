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

export interface IProps {

}

export interface IState {

}

@pureRender
export default class extends React.PureComponent<IProps, IState> {

  constructor(props: Readonly<any>) {
    super(props);

  }

  public render() {
    return (
      <div style={styles.container}>
        Test View
      </div>
    );
  }
}

const styles = {
  container: {
    flex: 1,

  },

};

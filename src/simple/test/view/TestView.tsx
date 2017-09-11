/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import * as React from 'react';

export interface IViewProps {
  handleClick: any;
}

export default (props: Readonly<IViewProps>) => (
  <div style={styles.container} onClick={props.handleClick}>
    TestView
  </div>
);

const styles = {
  container: {
    flex: 1,

  },

};

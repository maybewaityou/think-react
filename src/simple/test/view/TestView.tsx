/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import * as React from 'react';

export interface IViewProps {

}

export default (props: Readonly<IViewProps>) => (
  <div style={styles.container}>
    TestView
  </div>
);

const styles = {
  container: {
    flex: 1,

  },

};

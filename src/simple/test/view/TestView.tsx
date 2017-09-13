/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import * as React from 'react';

export interface IViewProps {
  model: any;
  handleTest00Click: () => any;
  handleTest01Click: () => any;
}

export default (props: Readonly<IViewProps>) => {
  return (
    <div style={styles.container}>
      <div style={styles.button} onClick={props.handleTest00Click}>
        press button 1
      </div>
      <div style={styles.button} onClick={props.handleTest01Click}>
        press button 2
      </div>
      {props.model}
    </div>
  );
};

const styles = {
  container: {
    flex: 1,

  },
  button: {
    backgroundColor: 'blue',
  },

};

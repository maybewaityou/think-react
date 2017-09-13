/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { log, toString } from 'mario-utilities';
import * as React from 'react';

export interface IViewProps {
  $model: any;
  handleTest00Click: () => any;
  handleTest01Click: () => any;
}

export default (props: Readonly<IViewProps>) => {
  return (
    <div style={styles.container}>
      <button onClick={props.handleTest00Click}>
        press button 1
      </button>
      <button onClick={props.handleTest01Click}>
        press button 2
      </button>
      <div>
        {toString(props.$model.toJS())}
      </div>
    </div>
  );
};

const styles = {
  container: {
    flex: 1,

  },

};

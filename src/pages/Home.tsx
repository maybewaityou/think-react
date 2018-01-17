/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { context } from '@context';
import { log, NetworkClient } from 'mario-utilities';
import React from 'react';

export default class extends React.PureComponent<any, any> {

  public handleClick = () => {
    this.props.history.goForward();
  }

  public render() {
    return (
      <div>
        Home
        <button onClick={this.handleClick}>go fosrward</button>
        <button onClick={() => {
          NetworkClient.getInstance()
            .asyncObserve('http://localhost:9999/server/checkForUpdates', {})
            .subscribe((response: any) => {}, (error: Error) => {});
        }}>send request</button>
        <button onClick={() => {
          context.test();
        }}>test context</button>
      </div>
    );
  }

}

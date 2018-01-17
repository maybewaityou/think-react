/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import React from 'react';

export default class extends React.PureComponent<any, any> {

  public handleClick = () => {
    this.props.history.goBack();
  }

  public render() {
    return (
      <div>
        About
        <button onClick={this.handleClick}>go back</button>
      </div>
    );
  }

}

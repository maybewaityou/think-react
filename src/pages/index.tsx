/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { routesConfig } from '../main/configs/index';
import { renderRoutes } from '../main/vendor/index';

export default class extends React.PureComponent<any, any> {

  public render() {
    return (
      <Router>
        <div>
          <header>React Router 4 App ~ </header>
          <div>
            <Link to="/">to home</Link>
            <br/>
            <Link to="/about">to about</Link>
          </div>
          <br/>
          {renderRoutes(routesConfig)}
        </div>
      </Router>
    );
  }

}

/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
// import { Provider } from 'react-redux';
// import configureStore from './dataflow/store/Store';
// import Just from './main/context/Just';
// import App from './App';
//
// var store = configureStore();
//
class ReduxApp extends PureComponent {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="hello">
                think-react ~
            </div>
        );
    }
}

ReactDOM.render(( <ReduxApp /> ), document.getElementById('content'));

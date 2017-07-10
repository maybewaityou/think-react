/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
// import React, { PureComponent } from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import configureStore from './dataflow/store/Store';
// import Just from './main/context/Just';
// import App from './App';
//
// var store = configureStore();
//
// class ReduxApp extends PureComponent {
//
//     constructor(props) {
//         super(props);
//
//     }
//
//     render() {
//         return (
//             <div>
//                 asdasdasd
//             </div>
//         );
//     }
// }
//
// ReactDOM.render(( <ReduxApp /> ), document.getElementById('root'));

// import _ from 'lodash';
// import './style.css';
// import Icon from './ic_launcher.png';
// import Data from './data.xml';
//
// import printMe from './print';
//
// function component() {
//     var element = document.createElement('div');
//
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     element.classList.add('hello');
//
//     // Add the image to our existing div.
//     var myIcon = new Image();
//     myIcon.src = Icon;
//
//     element.appendChild(myIcon);
//
//     console.log(Data);
//
//     var btn = document.createElement('button');
//     btn.innerHTML = 'Click me and check the console!';
//     btn.onclick = printMe;
//     element.appendChild(btn);
//
//     var input = document.createElement('input');
//     element.appendChild(input);
//
//     return element;
// }
//
// document.body.appendChild(component());
/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import React, { PureComponent, PropTypes } from 'react';
import ReactDOM from 'react-dom';

const propTypes = {

};

const defaultProps = {

};

const defaultState = {

};

export default class zzzView extends PureComponent {

    constructor(props) {
        super(props);

        this.state = defaultState;
    }

    render() {
        return (
            <div>aaaa</div>
        );
    }
}

zzzView.propTypes = propTypes;
zzzView.defaultProps = defaultProps;

const styles = {
    container: {
        flex: 1,

    },
};

ReactDOM.render(( <zzzView /> ), document.getElementById('root'));

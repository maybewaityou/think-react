// /**
//  * Created by MeePwn
//  * https://github.com/maybewaityou
//  *
//  * description:
//  *
//  */
// import React, { PureComponent } from 'react';
// import ReactDOM from 'react-dom';
// import './assets/stylesheet/style.css';
// // import { Provider } from 'react-redux';
// // import configureStore from './dataflow/store/Store';
// // import Just from './main/context/Just';
// // import App from './App';
// //
// // var store = configureStore();
// //
// class ReduxApp extends PureComponent {
//
//     constructor(props) {
//         super(props);
//
//     }
//
//     render() {
//         return (
//             <div className="hello" style={styles.container}>
//                 <div>
//                     think-react ~
//                 </div>
//                 <div>
//                     hello :  <input />
//                 </div>
//                 <div>
//                     world :  <input />
//                 </div>
//             </div>
//         );
//     }
// }
//
// const styles = {
//     container: {
//         flex: 1,
//         fontSize: 20,
//     },
//
// };
//
// ReactDOM.render((
//     <ReduxApp />
// ), document.getElementById('app'));

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { Hello } from "./Hello";

ReactDOM.render((
    <Hello compiler="TypeScript" framework="React" />
), document.getElementById('app'));

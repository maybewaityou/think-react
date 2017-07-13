/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import * as React from 'react';
import { Provider } from 'react-redux';
import './assets/stylesheet/style.css';
import store from './dataflow/store/Store';
import ObservableContainer from './demos/redux-observable/ObservableContainer';

export interface IAppProps {

}

export interface IAppState {

}

export default class App extends React.PureComponent<IAppProps, IAppState> {

    constructor(props: any) {
        super(props);

    }

    public render() {
        return (
            <Provider store={store}>
                <ObservableContainer />
            </Provider>
        );
    }
}

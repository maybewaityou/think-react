/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import * as React from 'react';
import { toString } from '../../main/utilities/data/JSONUtility';

export interface IObservableViewProps {
    data: any;
    handleTestObservableClick: any;
    handleTestObservableCancelClick: any;
}

export interface IObservableViewState {

}

export default class ObservableView extends React.PureComponent<IObservableViewProps, IObservableViewState> {

    constructor(props: any) {
        super(props);

    }

    public render() {
        return (
            <div style={styles.container}>
                <button style={styles.button} onClick={this.props.handleTestObservableClick}>test observable</button>
                <button style={styles.button} onClick={this.props.handleTestObservableCancelClick}>test observable cancel</button>
                <div style={styles.text}>{toString(this.props.data)}</div>
            </div>
        );
    }
}

const styles = {
    container: {
        flex: 1,

    },
    button: {
        marginTop: 20,
    },
    text: {
        fontSize: 18,
    },

};
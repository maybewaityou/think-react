/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { Map } from 'immutable';
import * as React from 'react';
import { pureRender } from '../../main/components/high-order-component/Decorator';
import { toString } from '../../main/utilities/data/JSONUtility';

export interface IObservableViewProps {
    $data: Map<string, any>;
    handleTestObservableClick: any;
    handleTestObservableCancelClick: any;
    handleTestFunctionalClick: any;
}

export interface IObservableViewState {

}

/**
 * 无状态组件
 */
export const ObservableStatelessView = (props: Readonly<any>) => (
    <div style={styles.container}>
        <button style={styles.button} onClick={props.handleTestObservableClick}>test observable</button>
        <button style={styles.button} onClick={props.handleTestObservableCancelClick}>test observable cancel</button>
        <button style={styles.button} onClick={props.handleTestFunctionalClick}>test functional</button>
        <div style={styles.text}>{toString(props.$data.toJS())}</div>
    </div>
);

@pureRender
export default class ObservableView extends React.PureComponent<IObservableViewProps, IObservableViewState> {

    constructor(props: Readonly<any>) {
        super(props);

    }

    public render() {
        return (
            <div style={styles.container}>
                <button style={styles.button} onClick={this.props.handleTestObservableClick}>test observable</button>
                <button style={styles.button} onClick={this.props.handleTestObservableCancelClick}>test observable cancel</button>
                <button style={styles.button} onClick={this.props.handleTestFunctionalClick}>test functional</button>
                <div style={styles.text}>{toString(this.props.$data.toJS())}</div>
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

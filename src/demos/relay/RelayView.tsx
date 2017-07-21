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

export interface IRelayViewProps {
    handleTestClick: any;
}

export interface IRelayViewState {

}

@pureRender
export default class RelayView extends React.PureComponent<IRelayViewProps, IRelayViewState> {

    constructor(props: Readonly<any>) {
        super(props);

    }

    public render() {
        return (
            <div style={styles.container}>
                <button style={styles.button} onClick={this.props.handleTestClick}>test observable</button>
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

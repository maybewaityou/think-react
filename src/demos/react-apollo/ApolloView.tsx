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

export interface IApolloViewProps {
    handleTestClick: any;
}

export interface IApolloViewState {

}

@pureRender
export default class ApolloView extends React.PureComponent<IApolloViewProps, IApolloViewState> {

    constructor(props: Readonly<any>) {
        super(props);

    }

    public render() {
        return (
            <div style={styles.container}>
                <button style={styles.button} onClick={this.props.handleTestClick}>test apollo</button>
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

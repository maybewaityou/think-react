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

export interface IRecomposeViewProps {
    name: string;
    handleTestRecomposeClick: any;
}

export interface IRecomposeViewState {

}

/**
 * 无状态组件
 */
export const RecomposeStatelessView = (props: Readonly<any>) => (
    <div style={styles.container}>
        <button style={styles.button} onClick={props.handleTestRecomposeClick}>test Recompose</button>
    </div>
);

@pureRender
export default class RecomposeView extends React.PureComponent<IRecomposeViewProps, IRecomposeViewState> {

    constructor(props: Readonly<any>) {
        super(props);

    }

    public render() {
        return (
            <div style={styles.container}>
                <button style={styles.button} onClick={this.props.handleTestRecomposeClick}>test Recompose</button>
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

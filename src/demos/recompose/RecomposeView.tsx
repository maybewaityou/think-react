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

/**
 * 无状态组件
 */
export const RecomposeStatelessView = (props: Readonly<any>) => {
    return (
        <div style={styles.container}>
            <button style={styles.button} onClick={() => {
                props.setName('MeePwn');
                props.setAge(26);
            }}>test Recompose</button>
            <div>name: {props.name}</div>
            <div>age: {props.age}</div>
        </div>
    );
};

export interface IRecomposeViewProps {
    name: string;
    age: number;
    setName: (params: string) => any;
    setAge: (params: number) => any;
}

export interface IRecomposeViewState {

}

@pureRender
export default class RecomposeView extends React.PureComponent<IRecomposeViewProps, IRecomposeViewState> {

    constructor(props: Readonly<any>) {
        super(props);

    }

    public render() {
        return (
            <div style={styles.container}>
                <button style={styles.button} onClick={() => {
                    this.props.setName('MeePwn');
                    this.props.setAge(26);
                }}>test Recompose</button>
                <div>name: {this.props.name}</div>
                <div>age: {this.props.age}</div>
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

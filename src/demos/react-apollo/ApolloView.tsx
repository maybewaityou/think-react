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
    data: any;
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
        const { users } = this.props.data;
        return (
            <div style={styles.container}>
                <button style={styles.button} onClick={this.props.handleTestClick}>test apollo</button>
                {users.map((user: any) =>
                    <span key={user.id}>
                        <div>{user.id}</div>
                        <div>{user.firstName} :  {user.lastName}</div>
                    </span>,
                )}
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

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
    handleQueryUserClick: any;
    handleQueryPostClick: any;
    handleCreatePostClick: any;
    handleCreateUserClick: any;
}

export interface IApolloViewState {

}

@pureRender
export default class ApolloView extends React.PureComponent<IApolloViewProps, IApolloViewState> {

    constructor(props: Readonly<any>) {
        super(props);

    }

    public render() {
        const { users, posts } = this.props.data;
        return (
            <div style={styles.container}>
                <button style={styles.button} onClick={this.props.handleQueryUserClick}>query user</button>
                <button style={styles.button} onClick={this.props.handleQueryPostClick}>query post</button>
                <button style={styles.button} onClick={this.props.handleCreatePostClick}>create post</button>
                <button style={styles.button} onClick={this.props.handleCreateUserClick}>create user</button>
                {users.map((user: any) =>
                    <span key={user.id}>
                        <div>{user.id}</div>
                        <div>{user.firstName} :  {user.lastName}</div>
                    </span>,
                )}
                posts : {posts.map((item: any) =>
                    <div key={item.post}>{item.post}</div>,
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

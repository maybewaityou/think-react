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
import { log } from '../../main/utilities/debug/DebugUtility';

export const LoadingView = (props: Readonly<any>) => (<div>Loading...</div>);

export const ErrorView = (props: Readonly<any>) => (<div>Error</div>);

export default (props: Readonly<any>) => {
  log('===== ApolloStatelessView render =====');
  const { users, posts } = props.data;
  return (
      <div style={styles.container}>
        <div>ApolloStateless</div>
        <button style={styles.button} onClick={props.handleQueryUserClick}>query user</button>
        <button style={styles.button} onClick={props.handleQueryPostClick}>query post</button>
        <button style={styles.button} onClick={props.handleCreateUserClick}>create user</button>
        <button style={styles.button} onClick={props.handleCreatePostClick}>create post</button>
        <button style={styles.button} onClick={props.handleResetClick}>reset</button>
        {users.map((user: any) =>
          <span key={user.id}>
            <div>{user.id}</div>
            <div>{user.firstName} :  {user.lastName}</div>
          </span>,
        )}
        posts : {posts.map((item: any) => {
          return <div key={item.id}>{item.post}</div>;
        })}
    </div>
  );
};

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

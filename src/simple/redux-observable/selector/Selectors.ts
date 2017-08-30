/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { Map } from 'immutable';
import { createSelector } from 'mario-ducks';
import { log, toString } from 'mario-utilities';
import { normalize, schema } from 'normalizr';

const originData = {
  id: '123',
  author: {
    id: '1',
    name: 'Paul',
  },
  title: 'My awesome blog post',
  comments: [
    {
      id: '324',
      commenter: {
        id: '2',
        name: 'Nicole',
      },
    },
  ],
};

const user = new schema.Entity('users');
const comment = new schema.Entity('comments', {
  commenter: user,
});
const article = new schema.Entity('articles', {
  author: user,
  comments: [ comment ],
});

const normalizeData = normalize(originData, article);

const $getHomeData = (state: any) => state.$networkReducer.get('homeData');

const $getError = (state: any) => state.$networkReducer.get('error');

const isSuccess = (state: any) => state.$networkReducer.get('isSuccess');

/**
 * 计算或组装state
 */
const $getHomeDataSelector = createSelector(
  [ $getHomeData, isSuccess ],
  ($homeData: Map<string, any>, success: boolean) => {
    log(`== homeData ===>>>> ${toString($homeData)}`);
    log(`== isSuccess ===>>>> ${toString(success)}`);
    return $homeData;
  },
);

export default (state: any) => ({
  $data: $getHomeDataSelector(state),
  $error: $getError(state),
  success: isSuccess(state),
});

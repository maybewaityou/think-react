/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { Map } from 'immutable';
import { normalize, schema } from 'normalizr';
import { createSelector } from 'reselect';
import { toString } from '../../../main/utilities/data/JSONUtility';
import { log } from '../../../main/utilities/debug/DebugUtility';

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

export const $getHomeData = (state: any) => state.$networkReducer.get('homeData');

export const $getError = (state: any) => state.$networkReducer.get('error');

export const isSuccess = (state: any) => state.$networkReducer.get('isSuccess');

/**
 * 计算或组装state
 */
export const $getHomeDataSelector = createSelector(
    [ $getHomeData, isSuccess ],
    ($homeData: Map<string, any>, success: boolean) => {
        log(`== homeData ===>>>> ${toString($homeData)}`);
        log(`== isSuccess ===>>>> ${toString(success)}`);
        return $homeData;
    },
);

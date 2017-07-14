/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { Map } from 'immutable';
import { createSelector } from 'reselect';
import { toString } from '../../../main/utilities/data/JSONUtility';
import { log } from '../../../main/utilities/debug/DebugUtility';

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

/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { is } from 'immutable';
import * as React from 'react';
import { log } from '../../../utilities/debug/DebugUtility';

export default class PureComponent<P, S> extends React.PureComponent<P, S> {

    public shouldComponentUpdate(nProps: Readonly<any>, nState: any) {
        const thisProps: Readonly<any> = this.props || {};
        const thisState: any = this.state || {};
        const nextProps = nProps || {};
        const nextState = nState || {};

        if (Object.keys(thisProps).length !== Object.keys(nextProps).length ||
            Object.keys(thisState).length !== Object.keys(nextState).length) {
            return true;
        }
        for (const key in nextProps) {
            if (nextProps.hasOwnProperty(key) && !is(thisProps[key], nextProps[key])) {
                return true;
            }
        }
        for (const key in nextState) {
            if (nextState.hasOwnProperty(key) && !is(thisState[key], nextState[key])) {
                return true;
            }
        }

        log('====== PureComponent pureRender ======');
        return false;
    }

}

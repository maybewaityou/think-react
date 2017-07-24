/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { is } from 'immutable';
import * as React from 'react';
import { Observable } from 'rxjs';
import { log } from '../../../utilities/debug/DebugUtility';

const stateSubscriptions: any[] = [];

function isObservable(obj: any) {
    return obj && typeof obj.subscribe === 'function';
}

export default class StreamComponent<P, S> extends React.PureComponent<P, S> {

    public __stateSubscription: any;

    public child: any;

    constructor(props: Readonly<any>) {
        super(props);

    }

    public componentWillMount() {
        const stateStream$ = this.child.getStateStream(this.props);

        this.__stateSubscription = stateStream$.subscribe((val: any) => {
            this.setState(val);
        });

        stateSubscriptions.push(this.__stateSubscription);
    }

    public componentWillUnmount() {
        if (this.__stateSubscription) {
            this.__stateSubscription.dispose();
            const index = stateSubscriptions.indexOf(this.__stateSubscription);
            if (index !== -1) {
                stateSubscriptions.splice(index, 1);
            }
        }
    }

}

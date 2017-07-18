/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { Map } from 'immutable';
import * as React from 'react';
import { bindActionCreators } from 'redux';
import { Observable } from 'rxjs';
import actionCreator from '../../dataflow/actions/ActionCreator';
import { connection } from '../../dataflow/connect/connection';
import { log } from '../../main/utilities/debug/DebugUtility';
import { add, camelize, capitalize, compose, filter, join, map, match, reduce, replace, split, toLowerCase, toUpperCase, trace } from '../../main/utilities/functional/Functions';
import FunctionalView from './FunctionalView';

export interface IFunctionalContainerProps {
    actions?: any;
}

export interface IFunctionalContainerState {

}

@connection((state: any) => ({
}), (dispatch: any) => ({
    actions: bindActionCreators(actionCreator, dispatch),
}))
export default class FunctionalContainer extends React.PureComponent<IFunctionalContainerProps, IFunctionalContainerState> {

    constructor(props: Readonly<any>) {
        super(props);

    }

    public handleTestObservableClick = () => {
        const stream$ = Observable.of(1, 2, 3, 4).map((x: number) => x + '!!!');
        stream$.subscribe((val: string) => {
            log(val);
        });
    }

    public handleTestFunctionalClick = () => {
        // const result = Maybe.of(null).map((x: string) => x);
        // const result = Container.of(3);
        // log(result);
        // const result1 = Container.of('hello world').map((x: string) => {
        //     return x.toUpperCase();
        // });
        // log(result1);
        //
        // const result = Maybe.of(3).chain((x: any) => {
        //     return Maybe.of(2).map((a: any) => a + 3);
        // });
        // log(result);
        // const result = Maybe.of(2).map(add).apply(Maybe.of(3));
        // log(result);
        // const result = match(/\s+/g)('hello world');
        // log(result);
        //
        // const hasSpaces = match(/\s+/g);
        // const result = hasSpaces('Welcome to China ~');
        // log(result);
        // const result = filter(hasSpaces)(['tori_spelling', 'tori amos']);
        //
        // const findSpaces = filter(hasSpaces);
        // const result = findSpaces(['tori_spelling', 'tori amos']);
        //
        // const noVowels = replace(/[aeiou]/ig);
        // const censored = noVowels('*');
        // const result = censored('Welcome to China ~');
        // log(result);
        //
        // const exclaim = (x: string) => x + '!';
        // const shout = compose(exclaim, toUpperCase);
        // const result = shout('send in the clowms');
        // log(result);
        //
        // const reverse = reduce((acc: any, x: any) => [x].concat(acc), []);
        // const last = compose(head, reverse);
        // const result = last(['jumpkick', 'roundhouse', 'uppercut']);
        // log(result);
        //
        // const dasherize = compose(join(' '), map(toLowerCase), split(' '), replace(/\s{2,}/ig)(' '));
        // const result =  dasherize('The world is Vampire');
        // log(result);
        //
        // const result = capitalize('smurf');
        // log(result);
        //
        // const result = camelize('smurf name haha_ss');
        // log(result);
    }

    public render() {
        return (
            <FunctionalView
                handleTestObservableClick={this.handleTestObservableClick}
                handleTestFunctionalClick={this.handleTestFunctionalClick}
            />
        );
    }
}

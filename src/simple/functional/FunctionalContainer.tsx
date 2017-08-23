/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { Map } from 'immutable';
import { bind } from 'mario-ducks';
import { log } from 'mario-utilities';
import * as React from 'react';
import { Observable } from 'rxjs';
import { PureComponent } from '../../main/components/high-order-component/Decorator';
import { add, camelize, capitalize, compose, filter, join, map, match, reduce, replace, split, toLowerCase, toUpperCase, trace } from '../../main/utilities/functional/Functions';
import FunctionalView from './FunctionalView';

export interface IFunctionalContainerProps {
  actions?: any;
}

export interface IFunctionalContainerState {

}

@bind((state: any) => ({
}))
export default class FunctionalContainer extends PureComponent<IFunctionalContainerProps, IFunctionalContainerState> {

  constructor(props: Readonly<any>) {
    super(props);

  }

  public handleTestObservableClick = () => {
    // const stream$ = Observable.of(1, 2, 3, 4).map((x: number) => x + '!!!');
    // stream$.subscribe((val: string) => {
    //   log(val);
    // });

    // const stream$ = Observable.create((subscriber: any) => {
    //   subscriber.next(1);
    // });
    // stream$.subscribe((val: any) => {
    //   log(val);
    // });

    // const source1 = Observable.interval(100).map((val: any) => 'source 1 ==>> ' + val).take(5);
    // const source2 = Observable.interval(50).map((val: any) => 'source 2 ==>> ' + val).take(2);
    // const stream$ = Observable.combineLatest(source1, source2);
    // stream$.subscribe((data: any) => {
    //   log(data);
    // });

    // const source1 = Observable.of(1, 2, 3, 4).map((val: any) => 'source 1 ==>> ' + val);
    // const source2 = Observable.of(5, 6, 7).map((val: any) => 'source 2 ==>> ' + val);
    // const stream$ = Observable.concat(source1, source2);
    // stream$.subscribe((data: any) => {
    //   log(data);
    // });

    // const stream$ = Observable.merge(Observable.of(1), Observable.of(3, 2, 5));
    // stream$.subscribe((data: any) => {
    //   log(data);
    // });

    // 以列为基础连接的值, 将采用最小标准
    // const stream$ = Observable.zip(
    //   Observable.of(1, 5),
    //   Observable.of(2, 3, 4),
    //   Observable.of(7, 9),
    // );
    // stream$.subscribe((data: any) => {
    //   log(data);
    // });

    // // 把所有对象合并成一个
    // const o1: any = { name: 'zhangsan' };
    // const o2: any = { age: 11 };
    // const objectStream$ = Observable.of(o1, o2)
    //   .reduce((acc: any, curr: any) => {
    //     return Object.assign({}, acc, curr);
    //   });
    // objectStream$.subscribe((data: any) => {
    //   log(data);
    // });

  }

  public handleTestFunctionalClick = () => {
    // const result = Maybe.of(null).map((x: string) => x);
    // const result = Container.of(3);
    // log(result);
    // const result1 = Container.of('hello world').map((x: string) => {
    //   return x.toUpperCase();
    // });
    // log(result1);
    //
    // const result = Maybe.of(3).chain((x: any) => {
    //   return Maybe.of(2).map((a: any) => a + 3);
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

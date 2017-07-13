import * as React from 'react';
import './assets/stylesheet/style.css';

export interface IHelloProps {
    compiler: string;
    framework: string;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.

export class Hello extends React.Component<IHelloProps, undefined> {

    public onClick = () => {
        // const aa = squareNumber(4);
        // console.log(aa);
        // const aa = ['jumpkick', 'roundhouse', 'uppercut'].reduce((acc: any, x: any) => {
        //     console.log(`x ===>>> ${x}`);
        //     console.log(`acc ===>>> ${acc}`);
        //     return [x].concat(acc);
        // }, []);
        // console.log(aa);
    }

    public render() {
        return (
            <div className="hello">
                <h1>
                    Hello from {this.props.compiler} and {this.props.framework}!
                </h1>
                <div>
                    name :  <input />
                </div>
                <div style={styles.bgColor}>
                    password :  <input />
                </div>
                <button onClick={this.onClick}>button</button>
            </div>
        );
    }
}

const memoize = (f: any) => {
    const cache: any = {};
    return (x: any) => {
        const argStr = JSON.stringify(x);
        cache[argStr] = cache[argStr] || f(x);
        return cache[argStr];
    };
};

const squareNumber = memoize((x: number) => {
    return x * x;
});

const styles = {
    bgColor: {

    },
    container: {
        flex: 1,
    },
};

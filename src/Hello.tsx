import * as React from 'react';
import './assets/stylesheet/style.css';

export interface IHelloProps {
    compiler: string;
    framework: string;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Hello extends React.Component<IHelloProps, undefined> {
    public render() {
        return <h1 className="hello">Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}

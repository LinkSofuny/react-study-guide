import React, { Component } from 'react'
import ComponentA from "./containers/ComponentA";
import ComponentB from "./containers/ComponentB";
export default class App extends Component {
    render() {
        return (
            <div>
                <ComponentA />
                <ComponentB />
            </div>
        )
    }
}
